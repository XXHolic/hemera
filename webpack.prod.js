const path = require("path");
// 自动生成对应的 html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清除之前旧的文件
const CleanWebpackPlugin = require("clean-webpack-plugin");
// 抽离 css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const StyleLintPlugin = require("stylelint-webpack-plugin");

const webpack = require("webpack");

module.exports = env => {
  const isProduction = env.NODE_ENV === "production";
  console.info("isProduction:", isProduction);

  return {
    mode: "isProduction",
    entry: "./src/index.js",
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/"
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              options: {
                formatter: require.resolve("eslint-friendly-formatter"),
                eslintPath: require.resolve("eslint")
              },
              loader: require.resolve("eslint-loader")
            }
          ],
          include: path.join(__dirname, "src")
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
                ["@babel/plugin-proposal-class-properties", { loose: true }],
                "@babel/plugin-syntax-dynamic-import"
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProduction
              }
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [require("autoprefixer")]
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProduction
              }
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [require("autoprefixer")]
              }
            },
            "less-loader"
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProduction
              }
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [require("autoprefixer")],
                sourceMap: isProduction ? false : true
              }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
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
        title: "",
        favicon: "./public/favicon.ico",
        template: "./public/index.html",
        minify: {
          //压缩HTML文件
          removeComments: true, //移除HTML中的注释
          collapseWhitespace: false //删除空白符与换行符
        }
      }),
      new StyleLintPlugin({

      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? "[name].[contenthash].css" : "[name].css",
        chunkFilename: isProduction ? "[id].[contenthash].css" : "[id].css"
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }]
        },
        canPrint: true
      })
    ],
    optimization: {
      splitChunks: {
        // 提取公共第三放插件
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
