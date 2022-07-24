const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant',
      meta: {
        'og:site_name': {property: 'og:site_name', content: 'davidcorcoran.ie'},
        'og:title': {property: 'og:title', content: 'dall\'inferno'},
        'og:image': {property: 'og:image', content: 'https://i.imgur.com/m3SVnlh.png'},
        'og:description': {property: 'og:description', content: 'An example restaurant website for the Odin Project.'},
        'og:url': {property: 'og:url', content: 'https://www.davidcorcoran.ie/odin-restaurant-page/'},
      }
    }),
  ],
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};