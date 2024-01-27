// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  devServer: {
    host: '0.0.0.0',
    port: 15500,
  },
  app: {
    head: {
      title: process.env.NUXT_PUBLIC_APP_TITLE || '知识库',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'zh-cn',
      },
    },
  },
  runtimeConfig: {
    public: {},
  },
  modules: ['@nuxtjs/eslint-module', '@nuxt/ui', '@nuxt/image', '@nuxtjs/google-fonts', '@nuxtjs/supabase', '@pinia/nuxt'],
  css: ['~/assets/styles/main.scss'],
  image: {
    format: ['webp'],
  },
  // https://supabase.nuxtjs.org/
  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_SUPABASE_KEY,
    serviceKey: process.env.NUXT_SUPABASE_SERVICE_KEY,
    redirectOptions: {
      login: '/login',
      callback: '/',
      exclude: ['/register', '/about', '/'],
    },
  },
  eslint: {
    cache: true,
    emitWarning: false,
  },
  googleFonts: {
    download: true,
    families: {
      Poppins: true,
      Roboto: true,
      'Noto+Serif+Simplified+Chinese': true,
    },
    display: 'swap',
    preload: true,
  },
});
