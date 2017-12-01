// dependencies
const merge = require('webpack-merge')
const common = require('./webpack.common.config.js')

// merge module merges common with dev to separate environment configurations
module.exports = merge(common, {
  // strong source mapping for dev-mode error debugging (telling us line
  // and src file rather than simply "error in bundle.js")
  // can also use "devtool: 'eval-source-map',"
  devtool: 'eval',
  devServer: {
    contentBase: './public'
  },
  // tells webpack where to start drawing dependency graphs
  entry: [
    'webpack-hot-middleware/client'
  ]
})