// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 9090,
  },
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  modules: ['yandex-metrika-module-nuxt3'],
  runtimeConfig: {
    yandexMetrika: {
      id: process.env.YANDEX_METRIKA_ID,
    }
  }
});
