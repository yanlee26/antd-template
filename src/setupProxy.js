const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    // proxy('http://localhost:2000')

    proxy('/api', {
      target: `http://localhost:${process.env.PORT}/api`,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
