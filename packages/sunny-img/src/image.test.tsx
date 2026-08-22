import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'

import { Image } from './image'

describe('Image', () => {
  it('renders intrinsic dimensions and lazy loading by default', () => {
    const html = renderToStaticMarkup(
      <Image alt="Sunrise" height={400} src="/sunrise.jpg" width={600} />,
    )

    expect(html).toContain('alt="Sunrise"')
    expect(html).toContain('width="600"')
    expect(html).toContain('height="400"')
    expect(html).toContain('loading="lazy"')
  })

  it('builds a srcset with a custom loader', () => {
    const html = renderToStaticMarkup(
      <Image
        alt="Sunrise"
        height={400}
        loader={({ src, width }) => `${src}?w=${width}`}
        src="/sunrise.jpg"
        width={600}
      />,
    )

    expect(html).toContain('/sunrise.jpg?w=600 600w')
    expect(html).toContain('/sunrise.jpg?w=1200 1200w')
  })

  it('requires dimensions unless fill is enabled', () => {
    expect(() => renderToStaticMarkup(<Image alt="Sunrise" src="/sunrise.jpg" />)).toThrow(
      'width and height are required',
    )
  })
})
