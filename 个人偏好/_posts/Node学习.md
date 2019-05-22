---
title: Node学习
date: 2017-07-27 16:39:47
tags: Node
categories: 我的前端之路
---
Node学习
<!--more-->
# 1.node简单介绍
- 基于Chrome V8引擎的JavaScript运行环境
- 使用了一个事件驱动，非阻塞式I/O的模型，使其轻量又高效
- 包管理器npm，是全球最大的开源生态系统

# 2.Windows常见命令
- 切换到D盘：D:
- 返回上一层：cd..
- 切换目录：cd path
- 创建目录：mkdir 目录名
- 查看目录：dir，别名ls（list）
- 清空控制台：cls，别名clear
- 删除文件：del，别名rm

# 3.node基本命令
- 进入node环境：node
- 执行脚本文件：node path/index.js
- 查看帮助：node --help

# 4.全局对象
- global：类似于客户端JavaScript运行环境中的windows
- process：用于获取当前的node进程的信息
- console：提供操作控制台的输入输出功能

# 5. module & require
一个简单的小例子
```
//命名为stuff.js
var counter = function (arr) {
    return arr.length;
}
var adder=function(a,b){
    return a+b;
}
module.exports={
    //es6对象简写方法
    counter,
    adder
}

//命名为app.js
var stuff = require('./stuff');
console.log(stuff.counter(['ss','dd','ff']));//输出：3
console.log(stuff.adder(2,4));//输出：6
```

# 6.事件模块
一个简单的小例子
```
//引入事件模块
var events = require('events');

//创建EventEmitter对象
var myEmitter=new events.EventEmitter();

//注册事件
myEmitter.on('someEvent',function (msg) {

    //使之异步输出
    setImmediate(function () {
        console.log(msg);
    });
});

//触发事件
myEmitter.emit('someEvent','实现事件并传递此参数到注册事件的回调函数中');
console.log(1);//先输出：1
```

# 7.文件系统模块
读取和创建文件并写入
```
// 引入文件系统模块
var fs = require('fs');

// 通过对象调用方法
// var readMe = fs.readFileSync('readMe.txt','utf8');//同步读取
// console.log(readMe);

// fs.writeFileSync('writeMe.txt',readMe);//创建writeMe.txt文件并同步写入

// 异步读取文件
fs.readFile('readMe.txt','utf8',function (err,data) {
    if (err) throw err;
    console.log(data);
});
console.log(1);//先输出：1

// 异步写入文件
fs.readFile('readMe.txt','utf8',function (err,data) {
    if (err) throw err;
    fs.writeFile('writeMe2.txt',data);
});
console.log(2);

// 命名为readMe.txt，内容随意
当你凝视深渊时，
    深渊也同样在凝视着你！
```

删除文件以及创建和删除文件夹
```
// 引入文件系统模块
var fs = require('fs');

// 通过对象调用方法
// fs.unlink('writeMe.txt',function (){
//     if(err) throw err;
//     console.log('文件删除成功！')
// });

// 创建文件夹 同步
// fs.mkdirSync('stuff');

// 删除文件夹 同步
// fs.rmdirSync('stuff');

// 创建文件夹 异步
// fs.mkdir('stuff',function(){
//     fs.readFile('readMe.txt','utf8',function(err,data){
//         if(err) throw err;
//         fs.writeFile('./stuff/writeMe.txt',data);
//     });
// });

// 删除文件夹 异步
// 先删除文件夹中的内容，再删除外部的文件夹
fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff',function(err){
        if(err) throw err;
        console.log('文件夹删除成功！');
    });
});


// 命名为readMe.txt，内容随意
当你凝视深渊时，
    深渊也同样在凝视着你！


// 命名为writeMe.txt，内容随意
当你凝视深渊时，
    深渊也同样在凝视着你！
```

# 8. HTTP 模块
搭建一个本地服务器
```
// 通过http模块，创建本地服务器
var http=require('http');

// 创建服务器方法
var server=http.createServer(function (rep,res) {
    console.log("客户端向服务器发送请求"+rep.url);
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("Server is working!");
});

// 服务对象监听服务器地址以及端口号
server.listen(8888,"127.0.0.1");
console.log("server is running...");

// 浏览器访问127.0.0.1:8888，页面内容为：Server is working!
```

