const path = require('path');
const MiniCssExctractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ development }) => {
  return {
    target: 'web',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.bundle.js',
      assetModuleFilename: 'images/[hash][ext][query]',
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)/i,
          type: 'asset',
        },

        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        },

        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { envName: development ? 'development' : 'production' },
          },
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExctractPlugin.loader,
              options: { publicPath: '' },
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExctractPlugin(),
      new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
