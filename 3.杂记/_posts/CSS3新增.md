---
layout: w
title: CSS3新增
date: 2017-04-28 09:36:34
categories: 我的前端之路
tags: CSS3
---
 css3新增
<!--more-->
# 1.新增选择器
## 1.原css选择器
- 通配符选择器：*
- 元素选择器：div p 
- 类选择器：.class
- ID选择器：#id
- 后代选择器：空格
- 子元素选择器：>
- 相邻兄弟元素选择器：+
- 群组选择器：，
- 伪类选择器：active focus hover link visited first-child lang
- 伪元素选择器：first-line first-letter before after 
- 属性选择器：
1.[ ]：用于选取带有指定属性的元素
2.[=value]：用于选取带有指定属性和值的元素
3.[~=value]：用于选取属性值中包含指定词汇的元素
4.[|=value]：用于选取带有以指定值开头的属性值的元素

## 2.新增属性选择器
- [^=value]：匹配属性值以指定值开头的每个元素
- [$=value]：匹配属性值以指定值结尾的每个元素
- [* =value]：匹配属性值中包含指定值的每个元素

## 3.结构伪类选择器
- root：匹配所在文档的根元素
- last-child：匹配其父元素的最后位置的子元素
- nth-child(n)： 匹配其父元素中第n个位置的子元素
- nth-last-child(n)：匹配其父元素中倒数第n个位置的子元素
- nth-of-type(n)：匹配在其父元素中同类型第n个位置的子元素
- nth-last-of-type(n)：匹配在其父元素中同类型倒数第n个位置的子元素
- first-of-type：匹配其父元素中第一个同类型的子元素
- last-of-type：匹配其父元素中最后一个同类型的子元素
- only-child：匹配只包含一个子元素的父元素
- only-of-type：匹配只包含一个同类型子元素的父元素
- empty：匹配不包含子节点的元素

## 4.UI伪类选择器
- enabled：匹配所有可用UI元素
- disables ：匹配所有不可用UI元素
- checked：匹配所有可用UI元素

## 5.其它选择器
- 通用兄弟选择器：~
- 否定选择器：not
- 目标伪类选择器：target

***!important > 行内样式(1000) > ID选择器(100) > 类，属性选择器和伪类选择器(10) > 元素和伪元素(1)***

# 2.文本样式与颜色
- text-shadow：文本阴影
- text-overflow：超文本省略显示
- word-break：定义文本自动换行
- rgba：红色，绿色，绿色，不透明度
- hsl：色调，饱和度，亮度
- hsla：色调，饱和度，亮度，不透明度
- opacity：不透明度
- transparent：设置完全透明

# 3.平滑过渡
- transition-property：检索或设置对象中的参与过渡的属性
- transition-duration：检索或设置对象过渡的持续时间
- transition-timing-function：检索或设置对象过渡的动画类型
- transition-delay：检索或设置对象延时过渡的时间
- transition：复合属性，检索或设置对象变换时的过渡

# 4.渐变效果
- css3渐变：IE10+
- css3线性渐变：linear-gradient
- css3径向渐变：radial-gradient

# 5.转换变形
- Transform：旋转，移动，缩放,扭曲，矩阵
- 2D转换：rotate translate scale skew matrix
- 3D转换：rotate3d translate3d scale3d matrix3d
- Transform与坐标系统：transform-origin更改转换元素的位置
- 矩阵
- 扩展属性：transform-style perspective perspective-origin backface-visibility

# 6.动画效果
- animation-name：检索或设置对象所应用的动画名称
- animation-duration：检索或设置对象动画的持续时间
- animation-timing-function：检索或设置对象动画的过渡类型
1.linera：线性过渡
2.ease：平滑过渡
3.ease-in：由慢到快
4.ease-out：由快到满
5.ease-in-out：由慢到快再到慢
6.step-stsrt：等同于steps(1,start)
7.step-end：等同于steps(1,end)
8.steps：接受两个参数的步进函数
9.cubic-bezier：特定的贝塞尔曲线类型
- animation-delay：检索或设置对象动画的延迟时间
- animation-iteration-count：检索或设置对象动画的循环次数
- animation-direction：检索或设置对象动画在循环中是否反向运动
- animation-fill-mode：规定当动画不播放时，要应用到元素的样式
- animation-play-state：指定动画是否正在运行或已暂停
- animation：复合属性，检索或设置对象所应用的动画特效
- @Keyframes：关键帧，可以指定任何顺序排列来决定Animation动画变化的关键位置
- will-change：增强页面渲染性能

# 7.背景
- css3背景图像区域：background-clip
- css3背景图像定位：background-origin
- css3背景图像大小：background-size
- css3背景背景图像：background-img
- css3背景属性整合：background

# 8.边框
- 圆角：border-radius
- 盒阴影：box-shadow
- 边界图片
1.border-image-source：指定要使用的图像
2.border-image-slice：指定图像的边界向内偏移
3.border-image-width：指定图像边界的宽度
4.border-image-outset：指定在边框外部绘制border-image-area的量
5.border-image-repeat：用于图像边界是否应重复(repeated)，拉伸(stretched)或铺满(rounded)

# 9.多列布局
- columns-width：定义每列的宽度
- columns-count：定义列数
- columns-gap：定义列间距
- columns-rule：定义列边框样式
- columns-span：定义跨列显示
- columns-fill：定义列高度