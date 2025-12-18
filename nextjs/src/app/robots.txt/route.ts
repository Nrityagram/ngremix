export async function GET() {
  const robotsTxt = `# www.robotstxt.org/

# Allow crawling of all content
User-agent: *
Disallow:

Sitemap: https://nrityagram.org/sitemap.xml
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
