// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss", "nuxt-mongoose"],
  css: ["./assets/style.css"],
  mongoose: {
    uri: process.env.MONGODB_URI ,
  }
});
