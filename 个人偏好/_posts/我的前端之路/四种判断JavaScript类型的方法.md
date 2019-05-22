---
title: 四种判断JavaScript类型的方法
date: 2017-07-12 20:14:21
categories: 我的前端之路
---
四种判断JavaScript类型的方法
<!--more-->
# 1.typeof返回的数据类型
- 简单数据类型：number，string，boolean，undefined，function
- 对象类型：object(包括：array，date，json，null，regexp，error)
```
//对象类型检测不到
console.log(typeof null);//输出object
```

# 2.instanceof方法
- 简单数据类型：Number，String，Boolean，Function
- 复杂数据类型：Object，Array，Date，RegExp，Error
```
//string，number，null类型检测不到
console.log("str" instanceof String);//输出false
console.log(5 instanceof Number);//输出false
console.log(null instanceof Object);//输出false
```

# 3.constructor方法
- null和undefined是无效的对象，因此不能用constructor检测
- constructor不稳定，当开发者重写prototype后，原有的constructor会丢失

# 4.Object.prototype.toString.call方法
```
//可用来检测变量是否为数组
var arr=[1,2,3];
console.log(arr instanceof Array);//输出true
console.log(Array.isArray(arr));//输出true
console.log(Object.prototype.toString.call(arr)==="[object Array]");//输出true
```