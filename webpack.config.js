var webpack = require('webpack');
var path = require('path')

// basic plugin used in every env
var plugins = [
  // dedupe js modules in the final build file
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  // so you can use __DEV__ and process.env.NODE_ENV variable in your javascript code
  new webpack.DefinePlugin({
    '__DEV__': process.env.NODE_ENV === 'production' ? false : true,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'dev')
    }
  })
];
if (process.env.NODE_ENV === 'production') {
  // in prod mode, uglify everything
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  }));
} else {
  // add some plugins in dev mode
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NoErrorsPlugin());
}

module.exports = {
  output: {
    path: path.join(__dirname,'dist'),
    // path: './dist/',  // final build will be output in the dist folder
    publicPath: '/dist/', // when in dev mode, the build will be in /dist/app.js
    filename: 'app.js', // the file name
    library: 'App', // the global name in a non commonjs env (ie. the browser)
    libraryTarget: 'umd' // build as UMD
  },
  devServer: {
    contentBase: './public/',
    historyApiFallback: true,
  },
  entry: [
    './src/main.js' // the main entry point for the build
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', 'es6'] // all these files will be considered as modules
  },
  module: {
    loaders: [
      {
        // add a loader to transform ES2015 code into ES5 code with babel
        test: /\.js|\.jsx|\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: plugins
};
