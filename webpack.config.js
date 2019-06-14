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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"], ["@babel/preset-react"]],
            plugins: [
              "@babel/transform-arrow-functions",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
          }
        }
      },
      {
        test: /\.(ico)$/,
        loader: "url-loader",
        options: {
          name: "./[name].[ext]"
        }
      }
      // {
      //   // html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
      //   test: "/.html$/",
      //   loader: "html-loader",
      //   options: {
      //     attrs: ["img:src", "link:href"]
      //   }
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hello React",
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
      minify: {
        //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 9000
  }
};
