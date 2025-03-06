// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "台灣動物認養平台｜領養貓狗，給牠們一個家！",
      link: [
        { rel: "apple-touch-icon", href: "/adopt.png" },
        { rel: "shortcut icon", href: "/adopt.png" },
        { rel: "canonical", href: "https://www.adopt-furry.com" },
      ],
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
        {
          hid: "description",
          name: "description",
          content:
            "台灣最大動物認養平台，提供貓狗領養資訊，讓您輕鬆找到適合的毛孩。立即探索可愛動物，改變牠們的未來！",
        },
        {
          hid: "keywords",
          name: "keywords",
          conent:
            "動物認養, 貓狗領養, 台灣動物收容所, 領養流浪動物, 領養貓咪, 領養狗狗",
        },
        {
          property: "og:title",
          content: "台灣動物認養平台｜領養貓狗，給牠們一個家！",
        },
        {
          property: "og:description",
          content:
            "台灣最大動物認養平台，提供貓狗領養資訊，讓您輕鬆找到適合的毛孩。立即探索可愛動物，改變牠們的未來！",
        },
        {
          property: "og:image",
          content: "https://www.adopt-furry.com/adopt.png",
        },
        {
          property: "og:url",
          content: "https://www.adopt-furry.com",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "台灣動物認養平台",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "台灣動物認養平台｜領養貓狗，給牠們一個家！",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "台灣最大動物認養平台，提供貓狗領養資訊，讓您輕鬆找到適合的毛孩。立即探索可愛動物，改變牠們的未來！",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://www.adopt-furry.com/adopt.png",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@adopt_furry",
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "台灣動物認養平台",
            url: "https://www.adopt-furry.com",
            logo: "https://www.adopt-furry.com/adopt.png",
          }),
        },
      ],
      __dangerouslyDisableSanitizers: ["script", "noscript"],
    },
    baseURL: "/",
  },

  imports: { dirs: ["store"] },
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
    "nuxt-swiper",
    "nuxt-simple-sitemap",
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
  compatibilityDate: "2025-03-03",
  sitemap: {
    hostname: "https://www.adopt-furry.com",
  },
});
