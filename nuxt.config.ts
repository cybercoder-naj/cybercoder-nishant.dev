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

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/seo'],

  site: {
    url: 'cybercoder-nishant.dev',
    indexable: true,
    name: "Nishant Aanjaney Jalan's Portfolio"
  }
});
