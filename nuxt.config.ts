// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: { dirs: ["store"] },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: { port: 3010 },
  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
  ],
});
