# sunny-img

A lightweight, framework-agnostic React image component inspired by `next/image`.

```bash
pnpm add sunny-img
```

```tsx
import { Image } from 'sunny-img'

export function Hero() {
  return <Image alt="Sunlight crossing a mountain ridge" height={800} src="/hero.jpg" width={1200} />
}
```

`sunny-img` provides intrinsic or fill layouts, native lazy loading, priority
loading, custom-loader `srcSet` generation, blur placeholders, and ref
forwarding. It does not run an image optimization server; connect `loader` to
your image CDN when you want transformed image URLs.

## License

MIT
