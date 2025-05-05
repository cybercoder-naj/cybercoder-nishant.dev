import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-11-26',
  future: {
    compatibilityVersion: 4
  },

  app: {
    rootAttrs: {
      id: 'app',
      class: 'h-dvh'
    },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: 'Nishant Aanjaney Jalan | %s'
    }
  },

  css: ['~/assets/css/index.css'],
  vite: {
    plugins: [tailwindcss()]
  },

  modules: ['@nuxtjs/seo'],

  site: {
    url: 'cybercoder-nishant.dev',
    indexable: true,
    name: "Nishant Aanjaney Jalan's Portfolio"
  }
});
