# review
以下是在 2019.06.17 发现自己实施的有问题，重新调整后的规划。
## 1 理解概念
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

## 2 生成和开发环境区分


## 3 加入 redux

## 4 css 的兼容性和压缩处理

## 5 代码分离