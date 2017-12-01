// dependencies
var path = require('path')
var webpack = require('webpack')

module.exports = {
  // tells webpack where to start drawing dependency graphs
  entry: [
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

// old export object:
/*
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/entry'
  ],

  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx$/,
        loader: 'react-hot!babel',
        include: path.join(__dirname, 'src') },
      { test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'css') },
      { test: /\.css$/,
        loader: 'style!css' }
    ]
  }
}
*/