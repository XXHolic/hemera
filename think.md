# think
## 开始
### 第一步
在搭建一个项目的时候，个人一开始想到的就是资源打包输出。处理资源打包的有很多工具，例如 Grunt、gulp。由于现在工作中接触到大部分是 webpack。所以选择了 webpack。那么首先就从运行一个简单的 react 开始。

按照 webpack 指南中进行，可以发现一开始需要配置要的有：
- 输出以及文件名
- 自动生成 html 文件并添加对应的引用 js
- 编译脚本

这些搞定了，然后写个 js 编译一下，发现出错了，因为识别不了，这个是可以预见，毕竟不是符合 js 原生语法的程序，需要转义。这个时候就需要用到 webpack 的 module 配置。

转义很容易就想到 babel ，不仅要转义新的 js 语法，还要转义 react 的语法，都是在 babel 里面，想要在 webpack 里面使用 babel 的功能，就需要使用 babel-loader。

按照文档添加了配置后，本地手动 build 一下也正常，当在浏览器中访问，提示报错了，而且都是压缩的代码，不知道具体是哪里错了，报错也提示在开发环境下调试比较好，于是就需要弄个本地的开发环境，webpack 文档中也有，按照配置好了后，才算真正的运行了一个 demo。

### 第二步
在添加箭头函数后，发现虽然可以转义，发现有些语法转义默认是没有开启的，例如 class 和 箭头函数。这时需要找到对应的插件，如果有必要需要进行安装。

### 第三步
结合实际工作中碰到的情况，列出需要的功能，然后给对应的功能排列出优先级，针对优先级，查看相关的资料进行完善配置。

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
https://www.cnblogs.com/YZH-chengdu/p/6855237.html

https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually/36623117#36623117

### 提取的 css 样式没有兼容性前缀
在 package.json 中配置 browserslist 字段就会处理，推测是如果不配置，默认是不会带兼容性前缀

### 在 post-loader 中配置 cssnano 没有去重
使用 OptimizeCssAssetsPlugin

### Support for the experimental syntax 'dynamicImport' isn't currently enabled
使用插件 @babel/plugin-syntax-dynamic-import

https://github.com/styleguidist/react-styleguidist/issues/987

### 异步加载组件后，抽离的 css 文件内有重复的 css
这里有个原因是写样式的人，写了重复的样式，因此可以从认为的角度去解决这个问题。在实际工作中也同样是要减少重复的样式。

至于用什么插件是否能够抽离，但想到这个是按需加载的，抽离后该放到哪里呢？放在进入的时候就去加载公共的？感觉人为的控制会更好一些。

###


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
提取分离 css，但没有压缩

https://github.com/webpack-contrib/mini-css-extract-plugin

### CommonsChunkPlugin
在 webpack4 中已移除，使用 optimization 配置项

### webpack-bundle-analyzer
分析


## 相关概念

### path
path 模块用于处理文件路径和目前路径。path 模块的默认操作因 Node.js 应用程序运行所在的操作系统而异。会在 POSIX(可移植操作系统接口) 和 Windows 上产生不同的结果

#### path.resolve(__dirname, 'dist')
path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
参数是路径或路径片段的序列
返回 string

给定的路径序列从右到左进行处理，每个后续的 path 前置，直到构造出一个绝对路径。

如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录。

如果没有传入 path 片段，则 path.resolve() 将返回当前工作目录的绝对路径。

在 webpack 中经常看到的变量 __dirname 在 node 中表示当前目录名，与 __filename 的 path.dirname() 相同。

#### path.join(__dirname, 'dist')
path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。

### output 中 filename 、chunkname 参数含义
才选项决定了每个输出 bundle 的名称，对于单个入口，filename 可以是一个静态名称。
```
file: 'bundle.js'
```
对于多个入口或者代码拆分创建多个 bundle 时，静态名称显然不合适，可以使用下面的一些方式
```
// 模块名称
filename: "[name].bundle.js"

// 内部 chunk id
filename: "[id].bundle.js"

// 每次构建过程中，唯一的 hash 生成
filename: "[name].[hash].bundle.js"

// 基于每个 chunk 内容的 hash
filename: "[chunkhash].bundle.js"
```
上面书写的形式是模板字符串。

- [hash]：模块标识符(module identifier)的 hash
- [chunkhash]：chunk 内容的 hash
- [name]：模块名称
- [id]：模块标识符(module identifier)
- [query]：模块的 query，例如，文件名 ? 后面的字符串

以上知道了表面的意思，实际上还是有问题：什么时候该用带 hash 的文件名？

#### 关于 hash contenthash chunkhash
浏览器缓存影响文件的更新，在 webpack 中就出现了 hash 的应对策略，跟早时候添加时间戳和版本号差不多。

hash 是项目级别，缺点是每次修改都会更新所有文件的名称里面的 hash，这样本该缓存的都没有缓存。那么能不能只有改变了的文件，其 hash 值才改变呢？答案就是 chunkhash

chunkhash 针对 entry 每一个入口文件，生成独立的 hash，如果其中一个改变了，值会改变这个入口文件的文件名，不会影响其他，一般适合用来提取公共的第三方依赖。

chunkhash 有的问题是：import 到 js 文件中的样式，生成的 js 和 css 的 chunkhash 一样的，当值改变其中之一，关联文件的 hansh 也会变，所以还是没有达到缓存的意义。

使用 contenthash 解决上面的问题，contenthash是针对 文件内容级别，只有自己模块内容改变了，对应的 hash 才会变。



使用 webpack 构建的应用程序，有三种主要代码：
- 自己或团队编写的代码
- 依赖的第三方 library 或 vendor
- webpack 的 runtime 和 manifest，管理所有模块的交互。

构建后期优化基本上从上面三类中进行区分优化。这里先介绍很重要的概念：runtime 和 manifest。
概括来说 runtime 以及伴随的 manifest 数据，主要是指：在浏览器运行时，webpack 用来连接模块化的应用程序的所有代码。

#### runtime
runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑

#### manifest
- 当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "Manifest"
- 当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块
- 无论你选择哪种模块语法，那些 import 或 require 语句现在都已经转换为 __webpack_require__ 方法，此方法指向模块标识符(module identifier)
- 通过使用 manifest 中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块。

看描述好像是那么回事，还是眼见为实比较好说服自己。在 demo 里面用插件试了一下，的确是对应的。
```json
{
  "main.js": "main.bundle.js",
  "index.html": "index.html"
}
```


### chunkname 参数含义
chunkname 是未被列在entry中，却又需要被打包出来的文件命名配置。什么场景需要呢？我们项目就遇到过，在按需加载（异步）模块的时候，这样的文件是没有被列在entry中。例如使用 require.ensure 异步加载模块。
https://www.cnblogs.com/toward-the-sun/p/6147324.html