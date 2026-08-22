import { Link, createFileRoute } from '@tanstack/react-router'
import { Image } from 'sunny-img'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Images, with the sharp edges softened.</p>
          <h1>A brighter image component for React.</h1>
          <p className="lede">
            Responsive sizing, lazy loading, CDN loaders, and blur placeholders—without
            tying your app to a framework.
          </p>
          <div className="actions">
            <Link className="button primary" to="/docs/getting-started">Get started</Link>
            <Link className="button secondary" to="/docs/reference/image-props">Read the API</Link>
          </div>
          <div className="install" aria-label="Install command">
            <span>$</span>
            <code>pnpm add sunny-img</code>
          </div>
        </div>

        <div className="hero-image-wrap">
          <Image
            alt="A warm sunrise over layered hills"
            className="hero-image"
            height={900}
            priority
            src="/sunrise.svg"
            width={1200}
          />
          <span className="image-note">native lazy loading · zero layout shift</span>
        </div>
      </section>

      <section className="features">
        <p className="section-label">What you get</p>
        <div className="feature-grid">
          <article><span>01</span><h2>Framework-free</h2><p>Use the same component in TanStack Start, Vite, Remix, or any React application.</p></article>
          <article><span>02</span><h2>Responsive by default</h2><p>Generate useful <code>srcSet</code> candidates through your own image CDN loader.</p></article>
          <article><span>03</span><h2>Small, honest API</h2><p>Intrinsic and fill layouts, priority hints, blur placeholders, and forwarded refs.</p></article>
        </div>
      </section>

      <section className="quick-start">
        <div>
          <p className="section-label">Quick start</p>
          <h2>Two dimensions.<br />One good default.</h2>
          <p>Width and height reserve the correct space before your image arrives. Everything else is optional.</p>
        </div>
        <pre><code>{`import { Image } from 'sunny-img'

export function Hero() {
  return (
    <Image
      alt="A sunny coast"
      src="/coast.jpg"
      width={1280}
      height={720}
    />
  )
}`}</code></pre>
      </section>
    </main>
  )
}
