const ALLOWED_ORIGINS = [
  "https://nrityagram.org",
  "https://www.nrityagram.org",
];

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin)
      ? origin
      : ALLOWED_ORIGINS[0];

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(allowedOrigin),
      });
    }

    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ success: false, error: "Method not allowed" }),
        {
          status: 405,
          headers: { "Content-Type": "application/json", ...corsHeaders(allowedOrigin) },
        }
      );
    }

    const body = await request.text();
    const params = new URLSearchParams(body);

    // Verify Turnstile token
    const token = params.get("cf-turnstile-response");
    if (!token) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing security token. Please reload the page and try again." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders(allowedOrigin) },
        }
      );
    }

    const ip = request.headers.get("CF-Connecting-IP") || "";
    const verifyForm = new FormData();
    verifyForm.append("secret", env.TURNSTILE_SECRET_KEY);
    verifyForm.append("response", token);
    verifyForm.append("remoteip", ip);

    const verifyResp = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: verifyForm }
    );
    const verifyData = await verifyResp.json();

    if (!verifyData.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Security check failed. Please reload the page and try again." }),
        {
          status: 403,
          headers: { "Content-Type": "application/json", ...corsHeaders(allowedOrigin) },
        }
      );
    }

    // Strip Turnstile token, inject shared secret before forwarding to GAS
    params.delete("cf-turnstile-response");
    params.set("_gasSecret", env.GAS_SECRET);

    // Forward to Google Apps Script
    await fetch(env.GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      redirect: "follow",
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json", ...corsHeaders(allowedOrigin) },
    });
  },
};
