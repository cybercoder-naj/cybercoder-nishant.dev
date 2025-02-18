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
    }
  },
  css: ['~/assets/css/base.css'],

  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'motion-v/nuxt'],

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    viewer: false
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classPrefix: '',
    classSuffix: ''
  }
});
