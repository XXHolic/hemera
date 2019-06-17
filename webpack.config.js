const path = require("path");
// 自动生成对应的 html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清除之前旧的文件
const CleanWebpackPlugin = require("clean-webpack-plugin");
// 抽离 css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isProduction = env.NODE_ENV === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    output: {
      filename: isProduction ? "[name].[chunkhash].js" : "[name].[hash].js",
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
                ["@babel/plugin-proposal-decorators", { legacy: true }],
                ["@babel/plugin-proposal-class-properties", { loose: true }]
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader"
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader",
            "less-loader"
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
        }
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
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    devtool: isProduction ? "" : "inline-source-map",
    devServer: {
      contentBase: "./dist",
      port: 9000,
      historyApiFallback: true
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    }
  };
};
