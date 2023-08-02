// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Chest Box',
      meta: [
        { name: 'description', content: 'Life is like a box of chocolates' },
      ],
      link: [ 
        // Material icons
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },

  // env keys
  runtimeConfig: {
    currencyKey: '',
  }
})
