const path = require('path');
const webpack = require('webpack');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    plugins: [
      new WasmPackPlugin({ crateDirectory: path.resolve(__dirname, '.') }),
      new HTMLWebpackPlugin({
        template: 'index.html',
      }),
      new webpack.ProvidePlugin({
        TextEncoder: ['text-encoding', 'TextEncoder'],
        TextDecoder: ['text-encoding', 'TextDecoder'],
      }),
    ],
    experiments: {
      asyncWebAssembly: true,
        },
  };
};