// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'motion-v/nuxt'],
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-26',

  tailwindcss: {
    viewer: false
  }
});
