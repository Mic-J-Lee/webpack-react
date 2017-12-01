// ********* Dependencies *********
// Imports Server from file server.js
const Server = require('./server.js')
// Sets up port to be either the environment variable process.env.PORT
// or localhost:8080 for development mode
const port = (process.env.PORT || 8080)
// Creates server
const app = Server.app()
// *********************************

// If the node environment is not set to production
if (process.env.NODE_ENV !== 'production') {
  console.log('Configuring webpack-dev-middleware and webpack-hot-middleware...')
  // Import Webpack-Dev-Middleware and Webpack-Hot-Middleware
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  // Import deveopment-mode configuration for webpack
  const config = require('./webpack.dev.config.js')
  // Configure webpack with above object
  const compiler = webpack(config)

  // These lines set up our app object so that the webpack-compiled assets
  // are emitted from a live server (via webpack-dev-middleware) and
  // recompiled when changes are made ("hot reloading", via webpack-hot-middleware)
  // This is very useful in development mode when testing webpack and server integration.
  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
  // Learn more here: https://github.com/glenjamin/webpack-hot-middleware
  // https://webpack.js.org/guides/development/#webpack-dev-middleware
}

// Sets up the server to listen to the environment-determined port
app.listen(port)
console.log(`Listening at http://localhost:${port}`)