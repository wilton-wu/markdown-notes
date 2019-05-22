---
title: JavaScript基础
date: 2017-04-28 09:31:15
categories: 我的前端之路
tags: JavaScript
---
# 1.基本组成
1. 核心(ECMAScript)，标准兼容
2. 文档对象模型(DOM)，部分不兼容
3. 浏览器对象模型(BOM)，没有相关标准

# 2.数据类型
- Undefined
- Boolean
- Number
- String
- Null
- Symbol
- Object

# 3.typeof操作符
- undefined：未定义
- boolean：布尔值
- number：数值
- string：字符串
- object：对象或null
- function：函数
*1.未定义的值和定义未赋值的为undefined 
2.null是一种特殊的object
3.NaN是一种特殊的number
4.undefined==null
5.NaN与任何值都不相等，与自己也不相等*

# 4.数值特殊函数
- isFinite()：确定数值是否超过了规定范围，超过返回true
- isNaN()：判断是否为非数值
- parseInt()：将字符转换成整数
- parseFloat()：将字符转换成浮点数

# 5.类型前缀
- 数组：a
- 对象：o
- 布尔值：b
- 函数：fn
- 整数：i
- 浮点数：f
- 正则表达式：re
- 字符串：s
- 变体变量：v

# 6.运算符
1. 一元运算符：++ --
2. 算术运算符：+ - * / % 
3. 赋值运算符：= += -= *= /= %=
4. 关系运算符：> < >= <= == === != !==
5. 逻辑运算符：&& || ！
6. 三目运算符：*条件?语句1：语句2*

# 7.流程控制语句
- 判断：if switch ?
- 循环：for for...in while do...while
- 跳出循环：break continue
- 异常捕获与处理：try...catch
- with语句：with

# 8.对象方法
- hasOwnProperty()：检测给定的属性在当前对象实例中是否存在
- isPrototypeOf()：检查传入的对象是否是另一个对象的原型
- instanceof：判断一个变量是否是某个对象的实例
- valueOf()：返回指定对象的原始值
- toString()：将当前对象以字符串的形式返回
- toLocaleString()：返回一个表示这个对象的本地化字符串
- prototype.toString：检测一个对象的类型
- delete：删除对象的属性或方法
- for in：遍历对象的属性和值
- Object.keys()：拿到当前对象里的所有keys，返回一个数组


# 9.数组
1.操作原数组
- push()：添加元素到数组的末尾，返回值是新数组的长度
- pop()：删除数组末尾的元素，返回值是移除的数组元素
- shift()：删除数组头部的元素，返回值是移除的数组元素
- unshift()：添加到数组的头部，返回值是新数组的长度
- splice()：删除（开始，长度，元素...），返回值是移除的数组元素
- sort()：将数组中元素按ASCII码排序
- reverse()：将数组中的元素颠倒顺序
- forEach()：从头至尾遍历数组
- Array.isArray()：判断变量是否为数组

2.返回新数组
- slice()：切开(起始位置，结束位置)，左闭右开，返回新数组
- concat()：连接数组，返回新数组
- join()：组合数组元素，生成字符串，默认逗号分隔
- map()：返回新数组
- filter()：返回新的调用数组的子集
- every()：数组的逻辑判定，每一项都返回true，则返回true
- some()：数组的逻辑判定，有一项都返回true，则返回true


3.位置方法
- indexOf()：从数组开头向后查找
- lastIndexOf()：从数组尾部向前查找

4.归并方法
- reduce()：从第一项开始，向后遍历
- reduceRight()：从最后一项开始，向前遍历


# 10.String方法
- charAt：返回字符串中index位置的字符(兼容IE7及以下)等价于.[index]
- charCodeAt：返回字符串中index位置的字符编码
- indexOf：顺序查找某个元素在字符串中的索引，找不到时返回-1
- lastIndexOf：逆序查找某个元素在字符串中的索引，找不到时返回-1
- slice：切开(起始位置，结束位置)
- substring：切开(起始位置，结束位置)
*1.当参数为负数时，自动将参数转换为0
2.substring()会将较小的数作为开始位置*
- substr：切开(起始位置，截取长度)
- split：把字符串分割成字符串数组
- replace：字符替换
- toUpperCase：字符串转换为大写
- toLowerCase：字符串转换为小写

# 11.Math对象方法
- min：求一组数中的最小值
- max：求一组数中的最大值
- ceil：向上取整
- floor：向下取整
- round：四舍五入为最接近的整数
- abs：绝对值
- random：返回大于等于0小于1的随机数

# 12.Date对象方法
- getFullYear：返回4位数的年份
- getMonth：返回日期中的月份 +1
- getDate：返回月份中的天数
- getDay：返回星期 +1
- getHours：返回小时
- getMinutes：返回分钟
- getSeconds：返回秒钟
- getTime：返回表示日期的毫秒数
- setFullYear：设置4位数的年份
- setMonth：设置日期中的月份 +1
- setDate：设置月份中的天数
- setDay：设置星期 +1
- setHours：设置小时
- setMinutes：设置分钟
- setSeconds：设置秒钟
- setTime：设置表示日期的毫秒数

# 13.BOM基础
- window.alert：弹出对话框
- window.confirm：弹出对话框
- window.prompt：弹出输入框
- window.open：打开一个新的浏览器窗口
- window.close：关闭浏览器窗口
- setTimeout：超时调用
- clearTimeout：清除超时调用
- setInterval：间歇调用
- clearInterval：清除间歇调用
- location.href：返回当前加载页面的完整URL
- location.hash：返回URL中的hash
- location.host：返回服务器的名称和端口号
- location.hostname：返回服务器的名称
- location.pathname：返回URL中的目录和文件名
- location.port：返回服务器的端口号
- location.protocol：返回页面使用的协议
- location.search：返回URL的查询字符串
- location.reaplace：重新定向URL
- location.reload：重新加载当前页面
- history.back：返回历史记录的上一步
- history.forward：返回历史记录的下一步
- history.go(-n)：返回历史记录的前n步
- history.go(n)：返回历史记录的后n步
- screen.availWidth：返回可用的屏幕宽度
- screen.availHeight：返回可用的屏幕高度
- UserAgent：用来识别浏览器的名称，版本，引擎以及操作系统等信息

# 14.常用元素位置与大小
- offsetLeft：元素外边框距离offsetParent的左内边框的距离
- offsetTop：元素外边框距离offsetParent的上内边框的距离
- offsetWidth：元素在左右方向占据的空间大小 = 内容宽度 + 左右padding + 左右boder
- offsetHeight：元素在垂直方向占据的空间大小 = 内容高度 + 上下padding + 上下boder
- clientWidth: 元素内容及内边距所占空间宽度, 不包含滚动部分
- clientHeight: 元素内容及内边距所占空间高度, 不包含滚动部分
- scrollLeft: 被隐藏在内容区域左侧的宽度(有横向滚动条时)
- scrollTop: 被隐藏在内容上边区域的高度(有竖向滚动条时)
- scrollHeight: 在没有滚动条时，元素内容的高度
- scrollWidth: 在没有滚动条时，元素内容的宽度

# 15.鼠标事件
- onload：页面加载时触发
- onclick：对象被点击时触发
- onmouseover：鼠标滑过时触发
- ommouseout：鼠标离开时触发
- onmouseup：鼠标按键被松开时触发
- onmousemove：鼠标在对象上移动时触发
- onmousedown：鼠标按键被按下时触发
- onfoucs：获得焦点时触发
- onblur：失去焦点时触发
- onchange：域的内容改变时触发
- onsubmit：表单中的确认按钮被点击时触发
- onresize：调整浏览器窗口的大小时触发
- onscroll：拖动滚动条滚动时触发

# 16.键盘事件
- onkeydown：在用户按下一个键盘按键时发生
- onkeypress：在键盘按键被按下并释放一个键时发生
- onkeyup：在键盘按键被松开时发生
- keyCode：获取按下的键盘按键的字符代码

# 17.获取节点
- childNodes：IE9以下使用
- nodeType：节点类型 *文本：3，元素：1*
- children：子节点
- parentNode：父节点
- offsetParent：获取定位父级
- firstChild：IE9以下使用
- firstElementChild：首节点
- lastChild：IE9以下使用
- lastElementChild：尾节点
- nextSibling：IE9以下使用
- nextElementSibling：后一个兄弟节点
- previousSibling：IE9以下使用
- previousElementSibling：前一个兄弟节点

#  18.操作元素属性
- Dom方式
1. 获取：getAttribute(名称)
2.设置：setAttribute(名称，值)
3.删除：removeAttribute(名称)

# 19.创建，插入和删除元素
- removeChild(节点)：删除一个节点
- createElement(标签名)：创建一个节点
*1.appendChild(节点)：追加一个节点
2.insertBefore(节点，原有节点)：在已有元素前插入*

# 20.JSON方法
- stringify()：将原生JavaScript 值转换为JSON字符串
- parse()：将JSON字符串转换为JavaScript原生值