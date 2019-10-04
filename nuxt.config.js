const productsData = require('./static/storedata');

const dynamicRoutes = () => {
  return new Promise((resolve) => {
    resolve(productsData.map((el) => `products/${el.id}`));
  });
};

module.exports = {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: ['@/assets/styles/global.scss', '@/theme/theme.scss'],

  plugins: ['@/plugins/globals'],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-vue-material'
  ],

  vueMaterial: {
    theme: 'default',
    components: ['MdCard', 'MdButton', 'MdMenu', 'MdList']
  },

  axios: {},

  build: {
    extend(config, ctx) {}
  },

  generate: {
    routes: dynamicRoutes
  }
};
