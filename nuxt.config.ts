import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    rootAttrs: {
      id: 'app',
      style: 'height: 100dvh;'
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
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@unhead/schema-org/vue',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vueuse/core',
        'gsap',
        'gsap/MorphSVGPlugin',
        'gsap/ScrollTrigger',
        'gsap/SplitText',
      ]
    }
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/a11y'
  ],

  site: {
    url: 'cybercoder-nishant.dev',
    indexable: true,
    name: "Nishant Aanjaney Jalan's Portfolio"
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
      }
    ],
    defaults: {
      weights: [200, 400, 600, 800]
    }
  }
});