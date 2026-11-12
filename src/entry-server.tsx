import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'
import { NOT_FOUND_META, PAGE_META } from './data/site'
import { pageSchema } from './schema'

/* Build-time renderer used by scripts/prerender.mjs — one call per page. */
export function render(path: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
}

export const PAGES = Object.values(PAGE_META)
export const NOT_FOUND = NOT_FOUND_META
export { pageSchema }
