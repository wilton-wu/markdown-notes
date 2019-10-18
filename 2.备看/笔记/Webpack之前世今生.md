---
title: Webpack之前世今生
date: 2017-07-27 16:39:17
categories: 我的前端之路
---
Webpack之前世今生
<!--more-->
# 1.原始模块加载的弊端
- 全局作用域下容易造成变量冲突
- js文件只能按照固定的顺序进行加载
- 开发人员必须主观解决模块和代码库的依赖关系
- 在大型项目中各种资源难以管理，长期积累的问题导致代码库混乱不堪

# 2. CommonJS 规范
- 允许模块通过 require 方法来同步加载要依赖的模块
- 然后通过 exports 或 module.exports 来导出需要暴露的模块
- 缺点：同步的模块加载方式，不能非阻塞的并行加载多个模块

# 3. AMD 规范
- 只有一个主要接口 define(id?, dependencies?, factory)
- 要在声明模块的时候指定所有的依赖 dependencies
- 还要当做形参传到 factory 中，对于依赖的模块提前执行，依赖前置
- 缺点：提高了开发成本，代码的阅读和书写比较困难，定义方式的语义不顺畅
- 实现：RequireJS

# 4. CMD 规范
- 与 AMD 相似，尽量保持简单，
- 与 CommonJS 和 Node.js 的 Modules 规范保持了很大的兼容性
- 缺点：依赖 SPM 打包，模块的加载逻辑偏重
- 实现：Sea.js

# 5. ES6 模块
- 尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量
- 缺点：原生浏览器还未实现该标准
- 实现：Babel

# 5. webpack 特点
- 代码拆分：有两种组织模块依赖的方式，同步和异步
- Loader：将各种类型的资源转换成 JavaScript 模块
- 智能解析：有一个智能解析器，几乎可以处理任何第三方库
- 插件系统：有一个功能丰富的插件系统
- 快速运行：使用异步 I/O 和多级缓存提高运行效率

# 6.webpack安装
1. 全局安装webpack
```
npm install -g webpack
```

2. 进入项目目录，生成package.json文件
```
npm init
```

3. 安装webpack依赖
```
npm install webpack --save-dev
```

# 7.编译打包
1. 新建index.html
```
// 在页面中引入bundle.js
<script src="bundle.js"></script>
```

2. 新建入口文件entry.js
```
alert('It works!')
```

3. 编译entry.js并打包到bundle.js
```
webpack entry.js bundle.js

// 此时会自动生成bundle.js文件
// 运行index.html将弹出：It works!
```

4. 新建模块module.js，并修改entry.js
```
// module.js
module.exports = 'It works from module.js!'

// entry.js
alert('It works.');
alert(require('./module.js')) 

// 再次编译打包，后刷新页面
// 其它模块可同样类似引入
```

# 8.引入css文件
1. 安装loader
```
npm install css-loader style-loader
```

2. 去掉loader前缀
```
// 通过新建文件webpack.config.js
var webpack = require('webpack')
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}
```

3. 在entry.js中引入style.css
```
require("./style.css")
```

# 9.引入jQuery文件
```
// 安装jQuery
npm install jquery --save-dev

// 在entry.js中引入
require("jquery")
```

# 10.开启监听模式
```
webpack entry.js bundle.js --watch
```

# 11启动本地服务器
启动之后可点击[http://localhost:8080/](http://localhost:8080/)预览页面
```
// 安装
npm install webpack-dev-server --save-dev

// 启动
$ webpack-dev-server --progress --colors
```

# 12.打印错误信息
```
webpack --display-error-details
```











