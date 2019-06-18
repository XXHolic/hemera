# think

## 第一步
在搭建一个项目的时候，个人一开始想到的就是资源打包输出。处理资源打包的有很多工具，例如 Grunt、gulp。由于现在工作中接触到大部分是 webpack。所以选择了 webpack。那么首先就从运行一个简单的 react 开始。

按照 webpack 指南中进行，可以发现一开始需要配置要的有：
- 输出以及文件名
- 自动生成 html 文件并添加对应的引用 js
- 编译脚本

这些搞定了，然后写个 js 编译一下，发现出错了，因为识别不了，这个是可以预见，毕竟不是符合 js 原生语法的程序，需要转义。这个时候就需要用到 webpack 的 module 配置。

转义很容易就想到 babel ，不仅要转义新的 js 语法，还要转义 react 的语法，都是在 babel 里面，想要在 webpack 里面使用 babel 的功能，就需要使用 babel-loader。

按照文档添加了配置后，本地手动 build 一下也正常，当在浏览器中访问，提示报错了，而且都是压缩的代码，不知道具体是哪里错了，报错也提示在开发环境下调试比较好，于是就需要弄个本地的开发环境，webpack 文档中也有，按照配置好了后，才算真正的运行了一个 demo。

## 第二步
在添加箭头函数后，发现虽然可以转义，发现有些语法转义默认是没有开启的，例如 class 和 箭头函数。这时需要找到对应的插件，如果有必要需要进行安装。

## 问题
### Error: getaddrinfo ENOTFOUND localhost
localhost 没有绑定 127.0.0.1

### SyntaxError:Support for the experimental syntax 'classProperties' isn't currently enabled
```
npm i -D @babel/plugin-proposal-class-properties

{
  plugins: ['@babel/plugin-proposal-class-properties']
}
```

### react router 4 与之前不同
https://www.jianshu.com/p/bf6b45ce5bcc

### 刷新后 资源或页面 404
https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually/36623117#36623117

### 提取的 css 样式没有兼容性前缀
在 package.json 中配置 browserslist 字段就会处理，推测是如果不配置，默认是不会带兼容性前缀

### 在 post-loader 中配置 cssnano 没有去重
使用 OptimizeCssAssetsPlugin

### Support for the experimental syntax 'dynamicImport' isn't currently enabled
使用插件 @babel/plugin-syntax-dynamic-import

https://github.com/styleguidist/react-styleguidist/issues/987

### 异步加载组件后，抽离的 css 文件内有重复的 css


## 插件
```shell
npm install packageName --save-dev
```
### html-webpack-plugin
通过配置，自动生成所需要的 html 文件，https://github.com/jantimon/html-webpack-plugin#configuration

### style-loader
将模块的导出作为样式添加到 DOM 中

### css-loader
解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码

### file-loader
图片、字体

### url-loader
url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
这次试用来处理

https://cloud.tencent.com/developer/column/5154/tag-10629

### less-loader
加载和转译 LESS 文件，需要 less 支持，所以也要安装

npm install --save-dev less-loader less

### sass-loader
npm install sass-loader node-sass --save-dev

### px2rem-loader
单位转换
旧闻：https://github.com/amfe/article/issues/17
新方案：https://juejin.im/post/5cb078f05188251ace1fedb4

### extract-text-webpack-plugin（abandon）
提取分离 css  已过时
npm install --save-dev extract-text-webpack-plugin

### mini-css-extract-plugin
提取分离 css，当没有压缩

https://github.com/webpack-contrib/mini-css-extract-plugin

### CommonsChunkPlugin
在 webpack4 中已移除，使用 optimization 配置项

### webpack-bundle-analyzer
分析
