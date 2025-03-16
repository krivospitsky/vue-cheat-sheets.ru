// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 9090,
  },
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
});
