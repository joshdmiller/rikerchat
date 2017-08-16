const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
  entry: './src',

  devtool: 'source-map',

  output: {
    path: path.join( __dirname, 'build' ),
    filename: 'rikerchat.js',
    publicPath: '/static/',
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ],
      },
    ],
  },

  resolve: {
    modules: [
      path.resolve( __dirname, 'src' ),
      path.resolve( __dirname, 'node_modules' ),
    ],
  },
};

