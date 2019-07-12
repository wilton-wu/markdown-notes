---
title: jQuery基础
date: 2017-05-22 11:50:59
categories: 我的前端之路
tags: jQuery
---
jQuery基础
<!-- more-->
# 1.基础核心
||window.onload|$(document).ready()|
|:---:|:---:|:---:|
|执行时机|必须等待网页全部加载完毕|只需等待DOM结构加载完毕|
|执行次数|只能执行一次|可以执行多次，不会被覆盖|
|简写方案|无|$(function () { });|

# 2.常规选择器
**1.简单选择器**
```
$('div').css('color', 'red'); //元素选择器，返回多个元素
$('#box').css('color', 'red'); //ID 选择器，返回单个元素
$('.box').css('color', 'red'); //类(class)选择器，返回多个元素
```

**2.进阶选择器**
```
$('span,em,.box').css('color', 'red'); //群组选择器
$('ul li a').css('color', 'red'); //后代选择器
$('*').css('color', 'red'); //通配选择器
```

**3.高级选择器**
```
$('div p'); //子选择器
div + p {} $('div + p'); //next选择器
div ~ p {} $('div ~ p'); //nextAll选择器
```

**4.属性选择器**
**5.过滤选择器**

# 3.基础DOM和CSS操作
**1.设置元素及内容**
```
html() //获取和设置元素中HTML 内容
text() //获取和设置元素中文本内容
val() //获取和设置表单中的文本内容
```

**2.元素属性操作**
```
attr(key) //获取某个元素key属性的属性值
attr(key, value) //设置某个元素key属性的属性值
attr({key1:value2, key2:value2...}) //设置某个元素多个key属性的属性值
attr(key, function (index, value) {}) //设置某个元素key通过fn来设置
```

**3.元素样式操作**
```
css(name) //获取某个元素行内的CSS 样式
css([name1, name2, name3]) //获取某个元素行内多个CSS样式
css(name, value) //设置某个元素行内的CSS 样式
css(name, function (index, value) ) //设置某个元素行内的CSS样式
css({name1 : value1, name2 : value2}) //设置某个元素行内多个CSS样式
addClass(class) //给某个元素添加一个CSS类
addClass(class1 class2 class3...) //给某个元素添加多个CSS类
removeClass(class) //删除某个元素的一个CSS类
removeClass(class1 class2 class3...) //删除某个元素的多个CSS类
toggleClass(class) //来回切换默认样式和指定样式
toggleClass(class1 class2 class3...) //同上
toggleClass(class, switch) //来回切换样式的时候设置切换频率
toggleClass(function () {}) //通过匿名函数设置切换的规则
toggleClass(function () {}, switch) //在匿名函数设置时也可以设置频率
toggleClass(function (i, c, s) {}, switch) //在匿名函数设置时传递三个参数
```

**4.CSS方法**
```
//width()方法
width() //获取某个元素的长度
width(value) //设置某个元素的长度
width(function (index, width) {}) //通过匿名函数设置某个元素的长度

//height()方法
height() //获取某个元素的长度
height(value) //设置某个元素的长度
height(function (index, width) {}) //通过匿名函数设置某个元素的长度

//内外边距和边框尺寸方法
innerWidth() //获取元素宽度，包含内边距padding
innerHeight() //获取元素高度，包含内边距padding
outerWidth() //获取元素宽度，包含边框border和内边距padding
outerHeight() //获取元素高度，包含边框border和内边距padding
outerWidth(ture) //同上，且包含外边距
outerHeight(true) //同上，且包含外边距

//元素偏移方法
offset() //获取某个元素相对于视口的偏移位置
position() //获取某个元素相对于父元素的偏移位置
scrollTop() //获取垂直滚动条的值
scrollTop(value) //设置垂直滚动条的值
scrollLeft() //获取水平滚动条的值
scrollLeft(value) //设置水平滚动条的值
```

# 4.DOM节点操作
**1.创建节点**
```
var box = $('<div id="box">节点</div>'); //创建一个节点
$('body').append(box); //将节点插入到<body>元素内部
```

**2.插入节点**
```
//内部插入节点
append(content) //向指定元素内部后面插入节点content
append(function (index, html) {}) //使用匿名函数向指定元素内部后面插入节点
appendTo(content) //将指定元素移入到指定元素content 内部后面
prepend(content) //向指定元素content 内部的前面插入节点
prepend(function (index, html) {}) //使用匿名函数向指定元素内部的前面插入节点
prependTo(content) //将指定元素移入到指定元素content 内部前面

//外部插入节点
after(content) //向指定元素的外部后面插入节点content
after(function (index, html) {}) //使用匿名函数向指定元素的外部后面插入节点
before(content) //向指定元素的外部前面插入节点content
before(function (index, html) {}) //使用匿名函数向指定元素的外部前面插入节点
insertAfter(content) //将指定节点移到指定元素content 外部的后面
insertBefore(content) //将指定节点移到指定元素content 外部的前面
```

**3.包裹节点**
```
wrap(html) //向指定元素包裹一层html 代码
wrap(element) //向指定元素包裹一层DOM 对象节点
wrap(function (index) {}) //使用匿名函数向指定元素包裹一层自定义内容
unwrap() //移除一层指定元素包裹的内容
wrapAll(html) 用html //将所有元素包裹到一起
wrapAll(element) //用DOM 对象将所有元素包裹在一起
wrapInner(html) //向指定元素的子内容包裹一层html
wrapInner(element) //向指定元素的子内容包裹一层DOM 对象节点
wrapInner(function (index) {}) //用匿名函数向指定元素的子内容包裹一层
```

**4.节点操作**
```
$('body').append($('div').clone(true)); //复制一个节点添加到HTML 中
$('div').remove(); //直接删除div 元素
$('div').detach(); //保留事件行为的删除
$('div').empty(); //删除掉节点里的内容
$('div').replaceWith('<span>节点</span>'); //将div 替换成span 元素
$('<span>节点</span>').replaceAll('div'); //同上
```

# 5.表单选择器
**1.常规选择器**
```
$('input').val(); //元素名定位，默认获取第一个
$('input').eq(1).val(); //同上，获取第二个
$('input[type=password]').val(); //选择type 为password 的字段
$('input[name=user]').val(); //选择name 为user 的字段
```

**2.表单选择器**
```
:input //选取所有input、textarea、select 和button 元素
:text //选择所有单行文本框
:password //选择所有密码框
:radio //选择所有单选框
:checkbox //选择所有复选框
:submit //选取所有提交按钮
:reset //选取所有重置按钮
:image //选取所有图像按钮
:button //选择所有普通按钮
:file //选择所有文件按钮
:hidden //选择所有不可见字段
```

**3.表单过滤器**
```
$(':enabled').size(); //获取可用元素
$(':disabled).size(); //获取不可用元素
$(':checked).size(); //获取单选、复选框中被选中的元素
$(':selected).size(); //获取下拉列表中被选中的元素
```

# 6.基础事件
**1.绑定事件**

**2.简写事件**

**3.复合事件**





# 7.事件对象
# 8.高级事件
# 9.动画效果
# 10.Ajax基础
# 11.Ajax进阶
# 12.工具函数
# 13.插件