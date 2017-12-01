
// ============  michael - old code ============
// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true
// }).listen(3000, 'localhost', function (err, result) {
//   if (err) { console.log(err) }
//   console.log('Listening at localhost:3000');
// });
// =============================================

// Dependencies
const path = require('path')
const express = require('express')

// Principal export is object with express app (function to create server)
module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, '/public/index.html')
    const publicPath = express.static(path.join(__dirname, '/public'))

    // Serves everything in /public director statically
    app.use('/public', publicPath)
    // Sets up index route to serve index.html
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
