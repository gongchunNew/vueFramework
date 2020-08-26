// vue.config.js
module.exports = {
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
  }
}
