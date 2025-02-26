// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-11-26',
  future: {
    compatibilityVersion: 4
  },

  app: {
    rootAttrs: {
      id: 'app'
    },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: 'Nishant Aanjaney Jalan | %s'
    }
  },
  css: ['~/assets/css/base.css'],

  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'motion-v/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/seo'
  ],

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    viewer: false
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classPrefix: '',
    classSuffix: ''
  },

  fonts: {
    families: [
      {
        name: 'Sora',
        provider: 'google'
      },
      {
        name: 'Fira Code',
        provider: 'google'
      }
    ]
  },

  site: {
    url: 'cybercoder-nishant.dev',
    indexable: true,
    name: "Nishant Aanjaney Jalan's Portfolio"
  }
});
