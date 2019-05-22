---
title: Flex弹性布局
date: 2017-05-25 11:46:21
categories: 我的前端之路
---
Flex弹性布局
<!-- more -->
# 1.基本概念
注意：设为 Flex 布局以后，子元素的float，clear和vertical-align属性将失效

# 2.容器的属性
```
//决定主轴的方向；水平向右，水平向左，垂直向下，垂直向上
flex-direction：row | row-reverse | column | column-reverse

//决定如何换行；不换行，第一行在上方，第一行在下方
flex-wrap：nowrap | wrap | wrap-reverse;

//flex-direction属性和flex-wrap属性的简写形式
flex-flow：flex-direction flex-wrap

//决定对齐方式；左对齐，右对齐，居中，两端对齐，每个项目两侧的间隔相等
justify-content：flex-start | flex-end | center | space-between | space-around;

//决定在交叉轴上的对齐方式；起点对齐，终点对齐，中点对齐，第一行文字的基线对齐，项目未设置高度或设为auto将占满整个容器的高度
align-items：flex-start | flex-end | center | baseline | stretch;

//决定多根轴线的对齐方式；起点对齐，终点对齐，中点对齐，轴线之间的间隔平均分布，每根轴线两侧的间隔都相等，轴线占满整个交叉轴
align-content：flex-start | flex-end | center | space-between | space-around | stretch;
```

# 3.项目的属性
```
order
flex-grow
flex-shrink
flex-basis
flex
align-self
```

# 4.垂直居中实现
```
display:flex;
justify-content:center;
align-items:center;
```
