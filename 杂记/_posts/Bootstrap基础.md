---
title: Bootstrap基础
date: 2017-05-21 11:57:24
categories: 我的前端之路
tags: Bootstrap
---
Bootstrap基础
<!-- more-->
# 1.排版样式
**1.页面主体**
```
//Bootstrap默认：font-size:14px，line-height:20px，color:#333
//创建包含段落突出的文本
<p>Bootstrap 框架</p>
<p class="lead">Bootstrap 框架</p>
```

**2.标题**
```
//从h1~h6
<h1>Bootstrap 框架</h1> //36px
<h2>Bootstrap 框架</h2> //30px
<h3>Bootstrap 框架</h3> //24px
<h4>Bootstrap 框架</h4> //18px
<h5>Bootstrap 框架</h5> //14px
<h6>Bootstrap 框架</h6> //12px

//加small后,h1~h3元素的大小占父元素的65%,h4~h6元素的大小占父元素的75%
<h1>Bootstrap 框架<small>Bootstrap 小标题</small></h1>
```

**3.内联文本元素**
```
//添加标记，<mark>元素或.mark 类
<p>Bootstrap<mark>框架</mark></p>

//各种加线条的文本
<del>Bootstrap 框架</del> //删除的文本
<s>Bootstrap 框架</s> //无用的文本
<ins>Bootstrap 框架</ins> //插入的文本
<u>Bootstrap 框架</u> //效果同上，下划线文本

//各种强调的文本
<small>Bootstrap 框架</small> //标准字号的85%
<strong>Bootstrap 框架</strong> //加粗700
<em>Bootstrap 框架</em> //倾斜

//内联代码
For example <code>&lt;section&gt;</code>as inline
 
//用户输入
我希望现在能键入<kbd>cmd</kbd>命令

//代码块
<pre>for example...</pre>

//变量 
<var>x</var>=<var>y</var>+<var>z</var>

//程序输出
<samp>hellso world</samp>
```

**4.设置文本对齐**
```
//设置文本对齐
<p class="text-left">Bootstrap 框架</p> //居左
<p class="text-center">Bootstrap 框架</p> //居中
<p class="text-right">Bootstrap 框架</p> //居右
<p class="text-justify">Bootstrap 框架</p> //两端对齐，支持度不佳
<p class="text-nowrap">Bootstrap 框架</p> //不换行
```

**5.设置英文文本大小写**
```
//设置英文文本大小写
<p class="text-lowercase">Bootstrap 框架</p> //小写
<p class="text-uppercase">Bootstrap 框架</p> //大写
<p class="text-capitalize">Bootstrap 框架</p>//首字母大写
```

**6.缩略语**
```
//缩略语
Bootstrap<abbr title="Bootstrap" class="initialism">框架</abbr>
```

**7.地址文本**
```
//设置地址，去掉了倾斜，设置了行高，底部20px
<address>
  <strong>Twitter, Inc.</strong><br>
  795 Folsom Ave, Suite 600<br>
  San Francisco, CA 94107<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>
```

**8.引用文本**
```
//默认样式引用，增加了做边线，设定了字体大小和内外边距
<blockquote>Bootstrap 框架</blockquote>
//反向
<blockquote class="blockquote-reverse ">Bootstrap 框架</blockquote>
```

**9.列表排版**
```
//移出默认样式
<ul class="list-unstyled">
  <li>Bootstrap 框架</li>
</ul>

//设置成内联
<ul class="list-inline">
  <li>Bootstrap 框架</li>
  <li>Bootstrap 框架</li>
</ul>

//水平排列描述列表
<dl class="dl-horizontal">
  <dt>Bootstrap</dt>
  <dd>Bootstrap 框架</dd>
</dl>
```

**10.代码**
```
//内联代码
<code><section></code>

//用户输入
press <kbd>ctrl + ,</kbd>

//代码块
<pre><p>Please input...</p></pre>
```

# 2.栅栏系统
**1.栅格参数表**
||超小屏幕|小屏幕|中等屏幕|大屏幕|
|:---:|:---:|:---:|:---:|:---:|
|屏幕尺寸|<768px|>=768px|>=992px|>=1200px|
|类前缀|col-xs-|col-sm-|col-md-|col-lg-|
|container固定宽度|自动|750px|970px|1170px|

**2.移动设备优先**
```
//设置屏幕宽度和设备一致，初始缩放比例，最大缩放比例和禁止缩放比例
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
```

**3.布局容器**
```
//固定宽度
<div class="container"></div>

//100%宽度
<div class="container-fluid"></div>
```

**4.列偏移**
```
//设置列偏移，让中间保持空隙
<div class="container">
  <div class="row">
    <div class="col-md-8 a">8</div>
    <div class="col-md-3 col-md-offset-1 a">3</div>
  </div>
</div>

//把两个列交换位置，push 向左移动，pull 向右移动
<div class="container">
<div class="row">
<div class="col-md-9 col-md-push-3 a">9</div>
<div class="col-md-3 col-md-pull-9 a">3</div>
</div>
</div>
```

# 3.辅助类和响应式工具
**1.情景文本颜色**
```
//各种色调的字体
<p class="text-muted">Bootstrap 视频教程</p> //柔和灰
<p class="text-primary">Bootstrap 视频教程</p> //主要蓝
<p class="text-success">Bootstrap 视频教程</p> //成功绿
<p class="text-info">Bootstrap 视频教程</p> //信息蓝
<p class="text-warning">Bootstrap 视频教程</p> //警告红
<p class="text-danger">Bootstrap 视频教程</p> //危险红
```

**2.情景背景色**
```
//各种色调的背景
<p class="bg-primary">Bootstrap 视频教程</p> //主要蓝
<p class="bg-success">Bootstrap 视频教程</p> //成功绿
<p class="bg-info">Bootstrap 视频教程</p> //信息黄
<p class="bg-warning">Bootstrap 视频教程</p> //警告黄
<p class="bg-danger">Bootstrap 视频教程</p> //危险红
```

**3.关闭按钮**
```
<button type="button" class="close">×</button>
```

**4.三角符号**
```
<span class="caret"></span>
```

**5.快速浮动**
```
<div class="pull-left">左浮动</div>
<div class="pull-right">右浮动</div>
```

**6.块级居中**
```
<div class="center-block">居中</div>
```

**7.清理浮动**
```
<div class="clearfix"></div>
```

**8.显示和隐藏**
```
<div class="show">show</div>
<div class="hidden">hidden</div>
```

**9.响应式工具**
```
//超小屏幕激活显示
<div class="visible-xs-block a">Bootstrap</div>

//超小屏幕激活隐藏
<div class="hidden-xs a">Bootstrap</div>
```

# 4.表格
**1.基本格式**
```
//基本的表格样式
<table class="table">
```

**2.条纹状表格**
```
//让<tbody>里的行产生隔行变色背景效果
<table class="table table-striped">
```

**3.带边框的表格**
```
//增加边框
<table class="table table-bordered">
```

**4.悬停鼠标**
```
//让<tbody>下的表格悬停鼠标实现背景效果
<table class="table table-hover">
```

**5.状态类**
```
<tr class="active"> //标识激活
<tr class="success"> //标识成功
<tr class="info"> //标识信息
<tr class="warning"> //标识警告
<tr class="danger"> //标识危险
```

**6.隐藏某一行**
```
<tr class="sr-only">
```

**7.响应式表格**
```
//表格父元素设置响应式，小于768px 出现边框
<body class="table-responsive">
```

# 5.按钮
**1.预定义样式**
```
//预定义样式
<button class="btn btn-default">Button</button> //默认样式
<button class="btn btn-success">Button</button> //成功样式
<button class="btn btn-info">Button</button> //一般信息样式
<button class="btn btn-warning">Button</button> //警告样式
<button class="btn btn-danger">Button</button> //危险样式
<button class="btn btn-primary">Button</button> //首选项样式
<button class="btn btn-link">Button</button> //链接样式
```

**2. 尺寸大小**
```
//从大到小的尺寸
<button class="btn btn-lg">Button</button>
<button class="btn">Button</button>
<button class="btn btn-sm">Button</button>
<button class="btn btn-xs">Button</button>
```

**3.块级按钮**
```
//块级换行
<button class="btn btn-block">Button</button>
<button class="btn btn-block">Button</button>
```

**4.激活状态**
```
//激活按钮
<button class="btn active">Button</button>
```

**5.禁用状态**
```
//禁用按钮
<button class="btn active disabled">Button</button>
```

# 6.表单
**1.基本格式**
```
//实现基本的表单样式
<form>
  <div class="form-group">
    <label>电子邮件</label>
    <input type="email" class="form-control" placeholder="请输入您的电子邮件">
  </div>
 <div class="form-group">
    <label>密码</label>
    <input type="password" class="form-control" placeholder="请输入您的密码">
  </div>
</form>
```

**2.内联表单**
```
//让表单左对齐浮动，并表现内联块结构；当小于768px，会恢复独占样式
<form class="form-inline">
```

**3.表单合组**
```
//前后增加片段
<div class="input-group">
  <div class="input-group-addon">￥</div>
  <input type="text" class="form-control">
  <div class="input-group-addon">.00</div>
</div>
```

**4.水平排列**
```
//让表单内的元素保持水平排列
<form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label">电子邮件</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" placeholder="请输入您的电子邮件">
    </div>
  </div>
</form>
```

**5.复选框和单选框**
```
//设置复选框，在一行
<div class="checkbox">
  <label>
    <input type="checkbox">体育
  </label>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox">音乐
  </label>
</div>

//设置禁用的复选框
<div class="checkbox disabled">
  <label>
    <input type="checkbox" disabled>音乐
  </label>
</div>

//设置内联一行显示的复选框
<label class="checkbox-inline">
  <input type="checkbox">体育
</label>
<label class="checkbox-inline disabled">
  <input type="checkbox" disabled>音乐
</label>

//设置单选框
<div class="radio disabled">
  <label>
    <input type="radio" name="sex" disabled>男
  </label>
</div>
```

**6.下拉列表**
```
//设置下拉列表
<select class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
```

**7.校验状态**
```
<div class="form-group has-error"> //错误状态
<div class="form-group has-success"> //成功状态
<div class="form-group has-warning"> //警告状态

//label 标签同步相应状态
<label class="control-label">Input with success</label>
```

**8.添加额外的图标**
```
//文本框右侧内置文本图标
<div class="form-group has-feedback">
  <label>电子邮件</label>
    <input type="email" class="form-control">
    <span class="glyphicon glyphicon-ok form-control-feedback"></span>
</div>

//样式说明
glyphicon-ok 成功状态
glyphicon-warning-sign 警告状态
glyphicon-remove 错误状态
```

**9.控制尺寸**
```
//从大到小，也可设置父元素form-group-lg、form-group-sm来调整
<input type="password" class="form-control input-lg">
<input type="password" class="form-control">
<input type="password" class="form-control input-sm">
```

# 7.图片
```
img-rounded：给图片添加圆角
img-circle：当图片宽高相等时，为圆形图片
img-thumbnail：给图片添加边框
img-responsice：响应式图片
```

# 8.图标组件
```
//使用小图标
<i class="glyphicon glyphicon-star"></i>
<span class="glyphicon glyphicon-star"></span>

//也可以结合按钮
<button class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-star"></span>
</button>
<button class="btn btn-default btn">
  <span class="glyphicon glyphicon-star"></span>
</button>
<button class="btn btn-default btn-sm">
  <span class="glyphicon glyphicon-star"></span>
</button>
<button class="btn btn-default btn-xs">
  <span class="glyphicon glyphicon-star"></span>
</button>
```

# 9.下拉菜单组件
```
//基本格式
<div class="dropdown">
  <button class="btn btn-default" data-toggle="dropdown">
    下拉菜单
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">首页</a></li>
    <li><a href="#">资讯</a></li>
    <li><a href="#">产品</a></li>
    <li><a href="#">关于</a></li>
  </ul>
</div>

//设置向上触发
<div class="dropup">

//菜单项居右对齐，默认值是dropdown-menu-left
<ul class="dropdown-menu dropdown-menu-right">

//设置菜单的标题，不要加超链接
<li class="dropdown-header">网站导航</li>

//设置菜单的分割线
<li class="divider"></li>

//设置菜单的禁用项
<li class="disabled"><a href="#">产品</a></li>

//让菜单默认显示
<div class="dropdown open">
```

# 10.按钮组组件
```
//基本格式
<div class="btn-group">
  <button type="button" class="btn btn-default">左</button>
  <button type="button" class="btn btn-default">中</button>
  <button type="button" class="btn btn-default">右</button>
</div>

//将多个按钮组整合起来便于管理
<div class="btn-toolbar">
  <div class="btn-group">
    <button type="button" class="btn btn-default">左</button>
    <button type="button" class="btn btn-default">中</button>
    <button type="button" class="btn btn-default">右</button>
  </div>
  <div class="btn-group">
  <button type="button" class="btn btn-default">1</button>
  <button type="button" class="btn btn-default">2</button>
  <button type="button" class="btn btn-default">3</button>
  </div>
</div>

//设置按钮组大小
<div class="btn-group btn-group-lg">
<div class="btn-group>
<div class="btn-group btn-group-sm">
<div class="btn-group btn-group-xs">

//嵌套一个分组，比如下拉菜单
<div class="btn-group">
  <button type="button" class="btn btn-default">左</button>
  <button type="button" class="btn btn-default">中</button>
  <button type="button" class="btn btn-default">右</button>
  <div class="btn-group">
    <button class="btn btn-default dropdown-toggle"  data-toggle="dropdown">
      下拉菜单<span class="caret"></span>
    </button>
  <ul class="dropdown-menu">
    <li><a href="#">首页</a></li>
    <li><a href="#">资讯</a></li>
    <li><a href="#">产品</a></li>
    <li><a href="#">关于</a></li>
  </ul>
  </div>
</div>

//设置按钮组垂直排列
<div class="btn-group-vertical">

//设置两端对齐按钮组，使用<a>标签
<div class="btn-group-justified">
<a type="button" class="btn btn-default">左</a>
<a type="button" class="btn btn-default">中</a>
<a type="button" class="btn btn-default">右</a>
</div>

//如果需要使用<button>标签，则需要对每个按钮进行群组
<div class="btn-group-justified">
  <div class="btn-group">
    <button type="button" class="btn btn-default">左</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-default">中</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-default">右</button>
  </div>
</div>
```

# 11.按钮式下拉菜单组件
```
//群组按钮下拉菜单
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle"
   data-toggle="dropdown">
    下拉菜单<span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">首页</a></li>
    <li><a href="#">资讯</a></li>
    <li><a href="#">产品</a></li>
    <li><a href="#">关于</a></li>
  </ul>
</div>

//分裂式按钮下拉菜单
<div class="btn-group">
  <button type="button" class="btn btn-default">下拉菜单</button>
  <button type="button" class="btn btn-default dropdown-toggle"
    data-toggle="dropdown">
  <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">首页</a></li>
    <li><a href="#">资讯</a></li>
    <li><a href="#">产品</a></li>
    <li><a href="#">关于</a></li>
  </ul>
</div>

//向上弹出式
<div class="btn-group dropup">
```

# 12.输入框组件
```
//在左侧添加文字
<div class="input-group">
  <span class="input-group-addon">@</span>
  <input type="text" class="form-control">
</div>

//在右侧添加文字
<div class="input-group">
  <input type="text" class="form-control">
  <span class="input-group-addon">@163.com</span>
</div>

//在两侧添加文字
<div class="input-group">
  <span class="input-group-addon">$</span>
  <input type="text" class="form-control">
  <span class="input-group-addon">.00</span>
</div>

//设置尺寸，另外三种分别是默认、xs、sm
<div class="input-group input-group-lg">

//左侧使用复选框和单选框
<div class="input-group">
  <span class="input-group-addon"><input type="checkbox"></span>
  <input type="text" class="form-control">
</div>
<div class="input-group">
  <span class="input-group-addon"><input type="radio"></span>
  <input type="text" class="form-control">
</div>

//左侧使用按钮
<div class="input-group">
  <span class="input-group-btn">
    <button type="button" class="btn btn-default">按钮</button>
  </span>
  <input type="text" class="form-control">
</div>

//左侧使用下拉菜单或分列式
<div class="input-group">
  <span class="input-group-btn">
  <button class="btn btn-default dropdown-toggle"
    data-toggle="dropdown">
    下拉菜单
  <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-header">网站导航</li>
    <li><a href="#">首页</a></li>
    <li><a href="#">资讯</a></li>
    <li class="divider"><a href="#">产品</a></li>
    <li class="disabled"><a href="#">关于</a></li>
  </ul>
  </span>
    <input type="text" class="form-control">
</div>
```

# 13.导航组件
```
//基本导航标签页
<ul class="nav nav-tabs">
  <li class="active"><a href="#">首页</a></li>
  <li><a href="#">资讯</a></li>
  <li><a href="#">产品</a></a></li>
  <li><a href="#">关于</a></li>
</ul>

//胶囊式导航
<ul class="nav nav-pills">

//垂直胶囊式导航
<ul class="nav nav-pills nav-stacked">

//导航两端对齐
<ul class="nav nav-tabs nav-justified">

//禁用导航中的项目
<li class="disabled"><a href="#">关于</a></li>

//带下拉菜单的导航
<ul class="nav nav-tabs">
  <li class="active"><a href="#">首页</a></li>
  <li><a href="#">资讯</a></li>
  <li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
    下拉菜单
  <span class="caret"></span>
  </a>
  <ul class="dropdown-menu">
    <li><a href="#">菜单一</a></li>
    <li><a href="#">菜单二</a></li>
  </ul>
  </li>
</ul>
```

# 14.导航条组件
```
//基本格式
<nav class="navbar navbar-default">...</nav>

//反色调导航
<nav class="navbar navbar-inverse">...</nav>

//基本导航条，包含标题和列表
<nav class="navbar navbar-default">
  <div class="container">
  <div class="navbar-header">
  <a href="#" class="navbar-brand">标题</a>
  </div>
  <ul class="nav navbar-nav">
    <li class="active"><a href="#">首页</a></li>
    <li><a href="#">资讯</a></li>
    <li class="disabled"><a href="#">产品</a></li>
    <li><a href="#">关于</a></li>
   </ul>
  </div>
</nav>

//导航条中使用表单
<form action="" class="navbar-form navbar-left">
  <div class="input-group">
  <input type="text" class="form-control">
  <span class="input-group-btn">
    <button type="submit" class="btn btn-default">提交</button>
  </span>
  </div>
</form>

//导航中使用按钮
<button class="btn btn-default navbar-btn">按钮</button>

//导航中使用对齐方式，left 和right
<button class="btn btn-default navbar-btn navbar-right">按钮</button>

//导航中使用一段文本
<p class="navbar-text">我是一段文本</p>

//非导航链接，一般需要置入文本区域内
<a href="#" class="navbar-link">非导航链接</a>

//将导航固定在顶部，下面的内容会自动上移
<nav class="navbar navbar-default navbar-fixed-top">

//将导航补丁在底部
<nav class="navbar navbar-default navbar-fixed-bottom">

//静态导航，和页面等宽的导航条，去掉了圆角
<nav class="navbar navbar-default navbar-static-top">
```

# 15.面包屑导航组件
```
//面包屑导航
<ol class="breadcrumb">
  <li><a href="#">首页</a></li>
  <li><a href="#">产品列表</a></li>
  <li class="active">韩版2015 年羊绒毛衣</li>
</ol>
```

# 16.分页组件
```
//默认分页
<ul class="pagination">
  <li><a href="#">«</a></li>
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">»</a></li>
</ul>

//首选项和禁用
<li class="active"><a href="#">1</a></li>
<li class="disabled"><a href="#">2</a></li>

//设置尺寸，四种lg、默认、sm 和xs
<ul class="pagination pagination-lg">

//翻页效果
<ul class="pager">
  <li><a href="#">上一页</a></li>
  <li><a href="#">下一页</a></li>
</ul>

//对齐翻页链接
<ul class="pager">
  <li class="previous"><a href="#">上一页</a></li>
  <li class="next"><a href="#">下一页</a></li>
</ul>

//翻页项禁用
<li class="previous disabled"><a href="#">上一页</a></li>
```

# 17.标签组件
```
//在文本后面带上标签
<h3>标签<span class="label label-default">new</span></h3>

//不同色调的标签
<h3>标签<span class="label label-primary">new</span></h3>
<h3>标签<span class="label label-success">new</span></h3>
<h3>标签<span class="label label-info">new</span></h3>
<h3>标签<span class="label label-warning">new</span></h3>
<h3>标签<span class="label label-danger">new</span></h3>
```

# 18.徽章组件
```
//未读信息数量徽章
<a href="#">信息<span class="badge">10</span></a>

//按钮中使用徽章
<button class="btn btn-success">
  提交<span class="badge">3</span>
</button>

//激活状态自动适配色调
<ul class="nav nav-pills">
  <li class="active">
    <a href="#">首页<span class="badge">2</span></a>
  </li>
  <li><a href="#">资讯</a></li>
</ul>
```

# 巨幕组件
# 页头组件
# 缩略图组件
# 警告框组件
# 进度条组件
# 媒体对象组件
# Well组件
# 列表组组件
# 面板组件
# 嵌入组件
# 模态框插件
# 下拉菜单和滚动监听插件
# 标签页和工具提示插件
# 弹出框和警告框插件
# 按钮和折叠插件
# 轮播插件
# 附加导航插件