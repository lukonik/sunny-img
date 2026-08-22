import type { PrestigeShellProps } from '@lonik/prestige/ui'
import { PrestigeShell } from '@lonik/prestige/ui'
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import config from 'virtual:prestige/config'

import appCss from '../styles.css?url'

const shellOptions: PrestigeShellProps = {
  customHeaderTitle: () => (
    <span className="inline-flex items-center gap-2 font-semibold tracking-tight">
      <span aria-hidden="true" className="text-orange-500">☀</span>
      sunny-img
    </span>
  ),
  copyright: () => <span>Built with Prestige 🎩</span>,
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: config.title },
      {
        name: 'description',
        content:
          'A lightweight, framework-agnostic React image component inspired by next/image.',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PrestigeShell options={shellOptions}>
          <Outlet />
        </PrestigeShell>
        <Scripts />
      </body>
    </html>
  ),
})
