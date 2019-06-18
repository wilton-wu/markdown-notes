---
title: sass学习笔记
date: 2017-05-10 11:37:38
categories: 我的前端之路
tags: Sass
---
Sass学习笔记
<!--more-->
# 1.优越体现
1. 可以定义变量，方便统一修改和维护。
2. 可以进行选择器的嵌套，表示层级关系。
3. 如导入其他sass文件，最后编译为一个css文件，优于纯css的@import。
4. 可用mixin定义一些代码片段，且可传参数，方便日后根据需求调用。
5. 可通过@extend来实现代码组合声明，使代码更加优越简洁。
6. 可进行简单的加减乘除运算等。
7. 集成了大量的颜色函数，让变换颜色更加简单。

# 2.语法
1. 文件名后缀
 - sass：不使用大括号和分号
 - scss：使用大括号和分号，建议使用
2. 导入(可以忽略后缀名)
```
@import "a";
```
3. 注释
 - //：单行注释
 - /\* */：多行标准注释
4. 变量
 - 普通变量
```
$fontSize: 12px;
body{
    font-size:$fontSize;
}
```
 - 默认变量：加上!default
 - 特殊变量：以#{$variables}形式使用
 - 多值变量：list，map
 - 全局变量：加上!global
5. 嵌套：选择器嵌套，属性嵌套
6. @at-root：跳出选择器嵌套
7. 混合(mixin)：用@mixin声明，通过@include来调用
```
@mixin center-block {
    margin-left:auto;
    margin-right:auto;
}
.demo{
    @include center-block;
}
```
8. 继承：使用关键词@extend
9. 函数：以@fuction开始
10. 运算：注意运算符前后留一个空格
11. 条件判断及循环
 - @if判断
 - 三目判断
 - @for循环
 - @each循环

# 3.sass安装
1. ruby安装
 - 官网下载[ruby](http://rubyinstaller.org/downloads)
 - 安装时勾选Add Ruby executables to your PATH
2. sass安装
 - 打开Start Command Prompt with Ruby
 - 命令行输入
```
gem inatall sass
```

# 4.使用
- 在屏幕上显示.scss文件转化的css代码
```
sass test.scss
```
- 将显示结果保存成文件，后面添加文件名
```
sass test.scss test.css
```
- 四种编译风格选项
 1. nested：嵌套缩进的css代码，它是默认值。
 2. expanded：没有缩进的、扩展的css代码。
 3. compact：简洁格式的css代码。
 4. compressed：压缩后的css代码。
```
　sass --style compressed test.sass test.css
```
- 监听文件或目录
```
// watch a file
sass --watch input.scss:output.css
// watch a directory
sass --watch app/sass:public/stylesheets
```
- [在线转换器](https://www.sassmeister.com/)
