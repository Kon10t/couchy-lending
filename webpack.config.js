const webpack = require("webpack");
const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    port: 3002,
    client: { overlay: false },
  },
  entry: "./src/index.js",
  expirements: {
    asset: true
  },
  module: {
    rules: [
      {
        test: /\.(jpg|svg|jpeg|png|gif)$/i,
        type: 'asset/resource',
        use: [
          {
            options: {
              name: '[hash].[ext]',
              outputPath: 'images/', // Папка, куда будут скопированы изображения
            },
          },
        ],
      },
      {
        test: /\.(tsx|ts|js)$/,
        exclude: /node-modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(tsx|js|ts|jsx)?$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, "css-loader"
        ]
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
}