---
title: this用法详解
date: 2017-07-19 09:03:42
categories: 我的前端之路
---
this用法详解
<!--more-->
# 1.全局this
- 在浏览器中，this指的是window对象
- 在node命令行中，this指的是global对象
- 在js脚本中，this是个空对象，不等于global对象

# 2.函数或方法中的this
- 函数被正常调用(不带new)时，this指向全局作用域
- 使用new关键字时，this指代一个新的上下文

# 3.原型中的this
- 当用new来调用一个函数创建实例时，this可直接访问此原型身上的值

# 4.对象中的this
- 可以在对象的任何方法中使用this来访问该对象的属性

# 5.DOM事件回调中的this
- this指定的是被绑定该事件的DOM元素
- 除非通过bind来人为的改变this的指向

# 6.HTML中的this
- this指代该HTML元素