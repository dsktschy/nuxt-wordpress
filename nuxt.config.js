const axios = require('axios')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'axios'
    ]
  },
  env: {
    API_URL: process.env.API_URL
  },
  generate: {
    async routes () {
      const
        {data: posts} = await axios.get(`${process.env.API_URL}/wp/v2/posts`),
        {data: pages} = await axios.get(`${process.env.API_URL}/wp/v2/pages`)
      return [
        ...posts.map(post => `/post/${post.id}`),
        ...pages.map(page => `/page/${page.slug}`)
      ]
    }
  }
}
