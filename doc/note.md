## [Esbuild](https://esbuild.github.io/)

[TOC]

背景

尽管Webpack是一个强大的构建工具，但它也有一些缺点

- 配置复杂: 

- 构建速度慢: 项目中包含大量的模块时，Webpack需要逐个加载和解析这些模块，导致构建时间增加

- 对前端开发者要求较高：使用Webpack需要对前端开发有一定的了解和经验，包括模块化开发、构建工具和打包等概

- **JavaScript语言的解析和执行速度相对较慢** 

  > **动态类型**：JavaScript是一种动态类型语言，变量的类型在运行时才能确定，这使得解析和执行过程相对较慢。
  >
  > **解释执行**：JavaScript是一种解释型语言，需要在运行时进行解释和执行，而不是像编译型语言那样将代码编译成机器码后执行，这使得解析和执行过程相对较慢。
  >
  > **垃圾回收机制**：JavaScript具有自动垃圾回收机制，需要定期扫描内存中的对象并进行垃圾回收，这也会影响解析和执行速度。
  >
  > **单线程执行**：JavaScript是一种单线程语言，只能在一个线程中执行代码，这也会影响解析和执行速度。



#### 一、打包工具对比了解

1. ### [Rspack](https://www.rspack.dev/zh/misc/FAQ.html)

   - `Rust` 语言优势 `Rust` 编译生成的 Native Code 通常比 JavaScript 性能更好

   - 兼容`webpack`生态 `loader`和`plugin` (但是也会造成一定的性能损失)

     

2. ### [snowpack](http://snowpack.cn/tutorials/quick-start/)

   - 免打包式开发 利用了浏览器支持 ESM 的特性
   - `npm` 依赖处理

3. ### vite

   - 依赖预加载

#### 二、Esbuild性能很高

- **使用Go开发**

  > 构建逻辑代码直接被编译为原生机器码，而不用像JS一样先代码解析为字节码，然后转换为机器码，大大节省了程序运行时间

- **多核并行**

  > 内部打包算法充分利用多核CPU优势，所有的步骤尽可能并行，这也是得益于Go当中多线程共享内存的优势

- **从零造轮子**

  > 几乎没有使用任何第三方库，所有逻辑自己编写，大到AST解析，小到字符串的操作，保证极致的代码性能

- **高效的内存利用**

  > Esbuild中从头到尾尽可能地复用一份AST节点数据，而不用像JS打包工具中频繁地解析和传递AST数据（如string->TS->JS->string)，造成内存的大量浪费

#### 三、快速开始 [链接](https://cloud.tencent.com/developer/article/2290437?areaSource=102001.15&traceId=paRBIOZK17TWTIvEp4ve6)

1. ###### 

#### 四、API && CONTENT_TYPES

1. ### 常用API

   - `transform` API 是操作单个字符串，而不是访问文件系统的。这个可以是在没有文件系统的环境（比如浏览器）下，使用，也可以作为另一个工具链的一部分, 例如：
   
      ```js
      require('esbuild').transform('console.log(5555)', {
          loader: 'js',
      }).then((res) => {
          console.log(res.code);
      });
      ```
   
   - `build`API 调用 build API **操作文件系统**中的一个或多个文件。 它允许文件互相引用并且打包在一起。例如：建一个test2.js，在test2.js里面引入test.js,然后打包输出 test2.js
   
      ```js
      require('esbuild').build({
        entryPoints: ['test2.js'],
        bundle: true,
        outfile: 'out.js'
      })
      ```
   
   注： `buildSync` 和 `transformSync` 它们会导致两方面不良后果
   
   > 一方面容易使 Esbuild 在当前线程阻塞，丧失并发任务处理的优势
   >
   > 另一方面，Esbuild 所有插件中不能使用任何异步操作
   
   - `serve`API 

2. ### [CONTENT_TYPES](https://esbuild.github.io/content-types/)

   - esbuild加载器的作用与webpack中loader作用类似，都是对于某种类型的文件进行编译

#### 五、PLUGINS

​	一个esbuild插件是一个包含name和setup函数的对象

1. ### HOOKS 

2. ### 插件示例

   - plugin-imageHandler 图片处理插件
   - plugin-http-url-handler 加载外部资源
   - plugin-html 动态生成html模板

3. 插件的使命

   	- 目前不可能直接修改AST。这个限制的存在是为了保持esbuild出色的性能特征, 同时也是为了避免暴露出太多的API表面，这将是一个维护的负担，并且会阻止涉及改变AST的改进
- 一种考虑esbuild的方式是作为网络的 "链接器"。就像本地代码的链接器一样，esbuild的工作是接收一组文件，解析并绑定它们之间的引用，并生成一个包含所有代码链接的单一文件。一个插件的工作是生成最终被链接的单个文件
   - esbuild中的插件最好是在相对范围内工作，并且只定制构建的一个小方面. 例如: plugin-imageHandler

六、迁移`webpac`k到`esbuild`会有哪些局限性

1. 使用了大量的 babel-loader( 插件内部未提供操作ast的api , 现有的插件生态没有其中的某个插件功能)
2. 对低版本浏览器语法兼容
3. 只支持一般的css语法
4. 社区生态不完善 技术文档不多
5. ?



新趋势

- 其他后端语言
- 了解程度-