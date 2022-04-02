export default {  ssr: false,
  target: 'static',
  head: {
    title: 'search-via-regex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'To find something using of regex' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
  ],
  components: true,
  buildModules: ['@nuxtjs/vuetify'],
  modules: [
    '@nuxtjs/pwa',
    ['nuxt-clipboard', { autoSetContainer: true }]
  ],
  css: ['@/assets/style.scss'],
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  vue: {
    config: {
      productionTip: false,
    }
  },
  vuetify: {
    optionsPath: './vuetify.options.js',
  },
}
