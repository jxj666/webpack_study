/*
 * @Description:
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳肖健
 * @Date: 2019-04-18 17:32:54
 * @LastEditTime: 2019-04-19 15:36:59
 */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: __dirname + "/app/main.js",
  devtool: "null",
  output: {
    path: __dirname + "/public",
    filename: "bundle.[hash].js",
  },
  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.BannerPlugin("靳xiaojian，翻版不究"),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html", //new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("style.css"),
    new CleanWebpackPlugin(),
  ],
};
