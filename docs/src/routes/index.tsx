import { createFileRoute } from '@tanstack/react-router'
import { Image } from 'sunny-img'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="sunny-img home">
          <span className="sun-mark" aria-hidden="true">☀</span>
          sunny-img
        </a>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#quick-start">Quick start</a>
          <a href="https://www.npmjs.com/package/sunny-img">npm</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Images, with the sharp edges softened.</p>
            <h1>A brighter image component for React.</h1>
            <p className="lede">
              Responsive sizing, lazy loading, CDN loaders, and blur placeholders—without
              tying your app to a framework.
            </p>
            <div className="actions">
              <a className="button primary" href="#quick-start">Get started</a>
              <a className="button secondary" href="#features">Explore features</a>
            </div>
            <div className="install" aria-label="Install command">
              <span>$</span><code>pnpm add sunny-img</code>
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

        <section className="features" id="features">
          <p className="section-label">What you get</p>
          <div className="feature-grid">
            <article><span>01</span><h2>Framework-free</h2><p>Use the same component in TanStack Start, Vite, Remix, or any React application.</p></article>
            <article><span>02</span><h2>Responsive by default</h2><p>Generate useful <code>srcSet</code> candidates through your own image CDN loader.</p></article>
            <article><span>03</span><h2>Small, honest API</h2><p>Intrinsic and fill layouts, priority hints, blur placeholders, and forwarded refs.</p></article>
          </div>
        </section>

        <section className="quick-start" id="quick-start">
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

      <footer>
        <span><span aria-hidden="true">☀</span> sunny-img</span>
        <span>Open source · MIT</span>
      </footer>
    </>
  )
}
