## [Esbuild](https://esbuild.github.io/)

[TOC]

#### 一、打包工具对比了解

- ###### [Rspack](https://www.rspack.dev/zh/misc/FAQ.html)

  > 

- ###### [snowpack](http://snowpack.cn/tutorials/quick-start/)

  > 

#### 二、Esbuild性能很高

- **使用Golang开发**

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

1. ###### API

   - 

2. ###### CONTENT_TYPES

   - 

#### 五、PLUGINS

1. ###### HOOKS 

   - 

2. ###### 手写一个插件

   - 







