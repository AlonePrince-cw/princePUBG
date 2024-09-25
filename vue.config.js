module.exports = {
  devServer: {
    //host: 'all',
    // allowedHosts: 'auto',
    hot: true,
    disableHostCheck: true,
    port: 80,
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
}

