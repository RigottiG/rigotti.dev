export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://rigotti.dev/sitemap-index.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  )
}
