const path = require("path");
// 自动生成对应的 html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清除之前旧的文件
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"], ["@babel/preset-react"]],
            plugins: [
              "@babel/transform-arrow-functions",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hello React"
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 9000
  }
};
