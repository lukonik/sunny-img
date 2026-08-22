# sunny-img

A small, framework-agnostic React image component with an API inspired by
`next/image`.

This repository is a pnpm workspace containing:

- [`sunny-img`](./packages/sunny-img) — the published React library, built with
  [tsdown](https://tsdown.dev/)
- [`docs`](./docs) — the documentation site, built with
  [TanStack Start](https://tanstack.com/start)

## Development

```bash
pnpm install
pnpm dev
```

The docs app is available at <http://localhost:3000>.

## Commands

```bash
pnpm build
pnpm test
pnpm typecheck
```

## Releases

Merges to `main` run the release workflow. It validates the workspace, derives
the next version from Conventional Commit messages, publishes `sunny-img` to
npm, and creates a matching GitHub release.

Publishing uses npm trusted publishing. Configure the `sunny-img` package on
npm with this GitHub repository and `.github/workflows/release.yml` as its
trusted publisher, and allow the `npm publish` action. No long-lived npm token
is required.

Before the first automated release, tag the commit that produced the existing
`sunny-img@0.0.1` publication as `v0.0.1` and push that tag. Semantic-release
uses Git tags as its version history.

## License

MIT
