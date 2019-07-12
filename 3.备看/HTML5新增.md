---
title: HTML5新增
date: 2017-04-29 11:35:37
categories: 我的前端之路
tags: HTML5
---
HTML5新增
<!--more-->
# 1.常见浏览器内核
|浏览器|内核|前缀|
|:---:|:---:|:---:|
|Chrome|Blink|--|
|Opera|Blink|-o-|
|Firefox|Gecko|-moz-|
|IE|Trident|-ms-|
|Safari|WebKit|-webkit-|


# 2.新增标签元素
## 结构标签
- header：标记头部区域的内容
- nav：定义导航链接
- section：定义一个区域
- aside：定义页面内容部分的侧边栏
- article：定义一篇文章
- hgroup：定义文件中一个区块的相关信息
- dialog：定义一个对话框
- footer：标记脚部区域的内容
- figure：定义一组媒体内容以及他们的标题
- figcaption：定义figure元素的标题

## 多媒体标签
- video：定义视频
- audio：定义音频
- source：为媒介元素定义媒介资源
- canvas：表示图形，如图表和其他图像
- embed：插入可交互的内容，多媒体或插件

## web应用标签
- progress：表示运行中的进程
- datalist：表示可选数据列表，可以制作出输入值的下拉列表
- datagrid：表示可选数据列表，它以树形列表的形式来显示
- details：表示用户要求得到并且可以得到的细节信息
- menu：表示菜单列表
- command：表示命令按钮

## 其他标签
- ruby：注释
- rp：定义不支持ruby元素的浏览器所显示的内容
- mark：呈现需要突出显示或高亮显示的文字
- rt：表示字符的解释或发音 
- output：表示不同类型的输出
- keygen：表示生成密钥

# 3.新增input类型
- email：定义用于输入E-mail地址
- url：定义用于输入URL地址
- number：定义用于输入数值
- range：定义用于输入一定范围内的数字值
- search：定义用于搜索的搜索域
- color：颜色选择
- tel：定义用于电话号码
- data：选取日，月，年
- month ：选取月和年
- week ：选取周和年
- time：选取时间(小时和分钟)
- datetime：定义日期字段(选取UTC时间)
- datetime-local：定义日期字段(选取本地时间)

# 4.新增属性
## 表单属性
- autocomplete：规定表单是否启用自动完成
- autofocus：规定页面加载时域自动的获得焦点
- multiple：规定输入域中可选择多个文件或输入多个值
- placeholder：描述输入域中所期待的默认值
- required：规定提交前输入域不能为空
- from：声明它属于哪个表单
- disable：把子元素设为不可选

## 链接属性
- a area：增加media属性，规定目标URL是为哪种类型的媒介
- area：增加hreflang与rel属性，以保持与a元素，link元素的一致
- link：增加size属性，指定关联图标的大小
- base：增加target属性，保持与a元素的一致性

## 其它属性
- ol：增加reversed属性，用于指定列表倒叙显示
- meta：增加charset属性，为文档的字符编码的指定提供良好的方式
- menu：增加type，label属性
- style：增加scoped属性，规定样式的作用范围
- script：增加async属性，用于定义脚本是否异步执行
- html：增加manifest属性
- iframe：增加sandbox，seamless与srcdoc属性，用来提高页面安全性

# 5.全局属性
- contentEditable：允许用户在线编辑元素中的内容
- designMode：指定整个页面是否可编辑
- hidden：通知浏览器不渲染该元素
- spellcheck：对用户输入的文本内容进行拼写和语法检查
- tabindex：Tab进行遍历顺序