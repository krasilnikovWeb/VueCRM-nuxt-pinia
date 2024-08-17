// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    "@nuxt/icon",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
});
