/* Writes one fully rendered HTML file per page (dist/index.html, dist/about.html, …) so every page
   loads instantly and crawlers/link previews see real content and the right title for that page.
   Runs after `vite build` and the SSR build of src/entry-server.tsx (see "build" in package.json). */
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

// Change this to the live domain once it is connected (or set SITE_URL at build time).
const SITE_URL = (process.env.SITE_URL || 'https://nityanailart.in').replace(/\/$/, '')

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')
const { render, PAGES, NOT_FOUND, pageSchema } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function swap(html, pattern, replacement, label) {
  const found = typeof pattern === 'string' ? html.includes(pattern) : pattern.test(html)
  if (!found) throw new Error(`prerender: ${label} not found in index.html`)
  return html.replace(pattern, () => replacement)
}

function buildPage(meta, renderPath, { noindex = false } = {}) {
  const url = SITE_URL + (meta.path === '/' ? '/' : meta.path)
  const title = esc(meta.title)
  const desc = esc(meta.description)
  let html = template
  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, 'title')
  html = swap(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${desc}" />`, 'description')
  html = swap(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`, 'og:title')
  html = swap(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${desc}" />`, 'og:description')
  html = swap(html, 'content="/images/og-image.jpg"', `content="${SITE_URL}/images/og-image.jpg"`, 'og:image')
  if (noindex) html = swap(html, /<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />', 'robots')
  else html = html.replace('</head>', `  <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n  </head>`)
  html = swap(html, '<!--schema-->', JSON.stringify(pageSchema(SITE_URL, meta)).replace(/</g, '\\u003c'), 'schema')
  html = swap(html, '<!--app-->', render(renderPath), 'app')
  return html
}

const written = []
// Flat files (about.html, …): Vercel `cleanUrls` and `vite preview` both serve /about from about.html.
for (const meta of PAGES) {
  const file = meta.path === '/' ? 'index.html' : `${meta.path.slice(1)}.html`
  writeFileSync(resolve(dist, file), buildPage(meta, meta.path))
  written.push(file)
}
writeFileSync(resolve(dist, '404.html'), buildPage(NOT_FOUND, '/404-not-found', { noindex: true }))

const today = new Date().toISOString().slice(0, 10)
const urls = PAGES.map((p) => `  <url><loc>${SITE_URL}${p.path === '/' ? '/' : p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')
writeFileSync(resolve(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
rmSync(ssrDir, { recursive: true, force: true })
console.log(`prerendered ${written.join(', ')} + 404 + sitemap.xml + robots.txt for ${SITE_URL}`)
