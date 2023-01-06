module.exports = {
  outputDir: './build',

  //配置 通过GitHub pages 部署的话会多一个前缀
  publicPath: '/vue3-ts-xg',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },

  //publicPath: './'
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
