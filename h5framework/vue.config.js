// vue.config.js
module.exports = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: 'dist',
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Or array of paths
          resources: [
            './src/assets/css/global/functions.scss',
            './src/assets/css/global/mixins.scss',
            './src/assets/css/global/var.scss']
        })
        .end()
    })
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8989,
    https: false,
    hotOnly: false,
    // 代理配置
    // proxy: {
    //     '/api': {
    //         target: '<url>',
    //         ws: true,
    //         changOrigin: true
    //     }
    // },
    // eslint-disable-next-line
        before: app => { }
  }
}
