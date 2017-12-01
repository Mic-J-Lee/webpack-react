const path = require('path')
const webpack = require('webpack')

module.exports = {
  // strong source mapping for dev-mode error debugging (telling us line
  // and src file rather than simply "error in bundle.js")
  // can also use "devtool: 'eval-source-map',"
  devtool: 'eval',
  devServer: {
    contentBase: './public'
  },
  // tells webpack where to start drawing dependency graphs
  entry: [
    'webpack-hot-middleware/client',
    './src/entry.js'
  ],
  // output of webpack-compiled assets
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    // rules telling webpack how to handle various file types
    loaders: [
      { // for .js and .jsx files
        test: /\.jsx?$/,
        // look in /src/ directory
        include: /src/,
        // don't look in node_modules
        exclude: path.join(__dirname, 'node_modules'),
        // most tutorials say to use babel-loader instead of just babel
        loader: 'babel-loader',
        // parameters for loader
        query: {
          // adding presets installed, as listed in package.json
          presets: ["react", "es2015", "react-hmre", "stage-0"]
        }
      }, { // for .scss files
        test: /\.scss?$/,
        // use this loader
        loader: 'style!css!sass',
        // look in src/style directory
        include: path.join(__dirname, 'src', 'style')
      }, { // for .png files
        test: /\.png$/,
        // use this loader
        loader: 'file'
      }, { // for these file types
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        // use this loader
        loader: 'file'
      }
    ]
  }
}
