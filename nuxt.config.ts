// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "動物認養資訊平台",
      link: [
        { rel: "apple-touch-icon", href: "/adopt.png" },
        { rel: "shortcut icon", href: "/adopt.png" },
      ],
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
      ],
    },
  },
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
    "nuxt-aos",
  ],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "動物認養資訊平台",
      short_name: "動物認養資訊平台",
      description: "動物認養資訊平台",
      theme_color: "#4d91ff",
      icons: [
        {
          src: "/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true, // 方便開發時測試 PWA
      type: "module",
    },
  },
  css: ["~/assets/styles/main.scss"],
});
