// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pl', name: 'Polski', file: 'pl.json' }
    ],
    defaultLocale: 'pl',
    strategy: 'prefix',
    langDir: 'locales/',
    detectBrowserLanguage: false
  },
  app: {
    head: {
      title: 'Визитка разработчика',
      htmlAttrs: { class: 'dark' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Персональный сайт-визитка разработчика на Nuxt 3' },
        { name: 'color-scheme', content: 'dark' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.svg' }
      ],
      style: [],
      script: [],
      metaFlat: [
        // Prefer dark theme color for mobile browser UI
        { name: 'theme-color', content: '#13315c', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#13315c' }
      ]
    }
  },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});

