interface Context {
  site: string
}

export function GET(context: Context) {
  const robots = `
User-agent: *
Allow: /
  
Sitemap: ${new URL('sitemap-index.xml', context.site).href}`.trim()

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
