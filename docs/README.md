# sunny-img docs

The documentation site is built with [Prestige](https://lukonik.github.io/prestige/docs/introduction) on top of TanStack Start. Product documentation lives in `src/content/docs`, and `prestige.config.ts` defines its navigation and generated routes.

```bash
pnpm install
pnpm dev
```

Edit `src/routes/index.tsx` for the landing page. Add Markdown or MDX pages under `src/content/docs`, then register them in `prestige.config.ts`; Prestige updates the generated `(prestige)` routes and TanStack Router route tree.

Build the production app with:

```bash
pnpm build
```
