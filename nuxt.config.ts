
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss"],
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/auth/" : "/",
    buildAssetsDir: "/_nuxt/",
  },
  ssr: false,
});
