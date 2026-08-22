import { defineConfig } from '@lonik/prestige/vite'

export default defineConfig({
  title: 'sunny-img',
  github: 'https://github.com/lukonik/sunny-img',
  license: {
    label: 'MIT',
    url: 'https://opensource.org/licenses/MIT',
  },
  collections: [
    {
      id: 'docs',
      defaultLink: '/docs/introduction',
      items: [
        { label: 'Introduction', slug: 'docs/introduction' },
        { label: 'Getting Started', slug: 'docs/getting-started' },
        {
          label: 'Guides',
          items: [
            { label: 'Responsive Images', slug: 'docs/guides/responsive-images' },
            { label: 'Placeholders', slug: 'docs/guides/placeholders' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Image Props', slug: 'docs/reference/image-props' },
          ],
        },
      ],
    },
  ],
})
