// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  imports: {
    dirs: ['store']
  },
  vite: {
    ssr: {
      noExternal: ['moment']
    }
  }
})
