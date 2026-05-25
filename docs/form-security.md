# Secure Form Submission — Architecture & Setup

## Overview

Form submissions on nrityagram.org are routed through a Cloudflare Worker proxy
instead of posting directly to Google Apps Script. This prevents spam, bot
submissions, quota exhaustion, and direct abuse of the GAS endpoint.

```
Browser → Cloudflare Worker → Google Apps Script → Google Sheet + Email
```

---

## Components

### 1. Cloudflare Turnstile (bot protection)

- A Cloudflare challenge widget rendered on the form page
- Generates a one-time token when a real user loads the page
- Token is submitted with the form and verified server-side by the Worker
- Site: registered under `amrita@nrityagram.org` Cloudflare account
- Allowed hostnames: `nrityagram.org`

### 2. Cloudflare Worker (`worker/form-proxy.js`)

- Deployed at: `https://nrityagram-form-proxy.amrita-08a.workers.dev`
- Account: `amrita@nrityagram.org`
- Deployed via Wrangler CLI using a Cloudflare API token
- Wrangler config: `worker/wrangler.toml`

**What the Worker does:**

1. Validates CORS — only allows requests from `nrityagram.org`
2. Rejects non-POST requests
3. Extracts the Turnstile token from the payload
4. Verifies the token with Cloudflare's siteverify API
5. Strips the Turnstile token from the payload
6. Injects `_gasSecret` (shared secret) into the payload
7. Forwards the request to the GAS URL
8. Returns a JSON response to the browser

**Worker secrets (set via `wrangler secret put`):**

| Secret                 | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `TURNSTILE_SECRET_KEY` | Turnstile secret key from Cloudflare dashboard |
| `GAS_URL`              | Google Apps Script web app URL                 |
| `GAS_SECRET`           | Shared secret between Worker and GAS           |

The GAS URL is never exposed to the browser — it lives only as a Worker secret.

### 3. Google Apps Script (`residency-application-google-script.js`)

- Checks `_gasSecret` against the `GAS_SECRET` Script Property at the top of `doPost(e)`
- Rejects any request that doesn't carry the correct secret
- Sanitizes all text fields before writing to the spreadsheet (formula injection protection)
- Validates file MIME type (PDF only)
- Sanitizes uploaded filenames

**GAS Script Property:**

| Key          | Value                                        |
| ------------ | -------------------------------------------- |
| `GAS_SECRET` | Same value as the `GAS_SECRET` Worker secret |

---

## Closing applications (disabling submissions)

When the application period ends, submissions must be blocked at both the client and server level.

**Client-side** — set `applicationClosed: true` in the front matter of `src/dance-residency-application-form.njk`. This renders the submit button with `disabled` and `data-closed="true"`, and the JS guards against re-enabling it.

**Server-side** — set `const APPLICATIONS_CLOSED = true;` at the top of `worker/form-proxy.js` (and deploy). The Worker returns a `403 Applications are currently closed.` before any Turnstile verification or GAS call, so this cannot be bypassed from the browser.

To reopen, flip both flags back to `false` and redeploy the Worker.

---

## Security protections in place

| Threat                        | Mitigation                                                        |
| ----------------------------- | ----------------------------------------------------------------- |
| Bot form submissions          | Cloudflare Turnstile challenge                                    |
| Direct POST to GAS URL        | URL is a Worker secret; GAS rejects requests without `_gasSecret` |
| GAS quota exhaustion          | Bots blocked at Worker before reaching GAS                        |
| Spreadsheet formula injection | `safe()` helper prefixes formula-trigger characters on all fields |
| Malicious file uploads        | MIME type validated (PDF only); filename sanitized                |
| CORS abuse                    | Worker only accepts requests from allowed origins                 |

---

## Re-using this setup for other forms

The same Worker and secrets can be reused for any future form on nrityagram.org.

**For each new form:**

1. Add `payload.formType = "your-form-name"` in the form JS
2. Set `WORKER_URL` to `https://nrityagram-form-proxy.amrita-08a.workers.dev`
3. Use the same Turnstile site key (`0x4AAAAAADFHC9dr0CojQF0O`)
4. In the new GAS, add the `_gasSecret` check at the top of `doPost(e)`
5. Set the same `GAS_SECRET` value in that script's Script Properties

---

## Deployment

### Worker (first time or after code changes)

```bash
cd worker
export CLOUDFLARE_API_TOKEN=<your-api-token>
wrangler deploy
```

### Worker secrets (first time only)

```bash
wrangler secret put TURNSTILE_SECRET_KEY
wrangler secret put GAS_URL
wrangler secret put GAS_SECRET
```

### Google Apps Script

After any changes to the GAS:

- Deploy → Manage deployments → edit → New version → Deploy

---

## Files changed

| File                                                     | Change                                                      |
| -------------------------------------------------------- | ----------------------------------------------------------- |
| `worker/form-proxy.js`                                   | New — Cloudflare Worker source                              |
| `worker/wrangler.toml`                                   | New — Wrangler deployment config                            |
| `src/dance-residency-application-form.njk`               | Turnstile widget + script, posts to Worker instead of GAS   |
| `Dance Residency/residency-application-google-script.js` | Secret check, formula injection protection, MIME validation |
