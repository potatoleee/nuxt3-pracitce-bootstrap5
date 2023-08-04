// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module'],
  css: ['@/assets/style/all.scss'],
  runtimeConfig: {
    public: {
      apiUrl: '',
      path: ''
    }
  }

  // vite: {
  //   define: {
  //     'process.env': process.env
  //   }
  // }
});
