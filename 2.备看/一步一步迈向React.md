---
title: 一步一步迈向React
date: 2017-05-14 11:06:41
tags: React
categories: 我的前端之路
---
# 1.基本开发环境
- 选择 [reate-react-app](https://github.com/facebookincubator/create-react-app)或 [create-react-app-antd](https://github.com/ant-design/create-react-app-antd)

# 2.搭建路由
- [一个简单路由的搭建](https://yuanchengjs.github.io/2017/08/21/%E6%88%91%E7%9A%84%E5%89%8D%E7%AB%AF%E4%B9%8B%E8%B7%AF/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E8%B7%AF%E7%94%B1%E7%9A%84%E6%90%AD%E5%BB%BA/)

# 3.语法规范
- 定义标签时，只允许被一个标签包裹
- 标签一定要闭合
- 声明组件的首字母必须大写
- class属性改为className，for属性改为HTMLFor

# 4.diff算法
- 给定任意两棵树，找到最少的转换步骤
- 通过两个简单的假设，将复杂度从O(n^3)降低到O(n)
1.两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构
2.对于同一层次的一组子节点，它们通过唯一的id进行区分
- 逐级：只在同级的节点间移动
- 列表：提供一个key属性，以帮助react找出映射
- 组件：仅匹配具有相同类的组件
- 事件委托：为每个事件和每个侦听器创建一个新的事件对象
- 渲染：批处理，子树渲染，选择性子树渲染

# 5.组件的构建方法
- React.createClass：最传统，兼容性最好的方法
- ES6 classes：通过ES6标准的类语法来构建
- 无状态函数：只传入props和context两个参数，不存在state和生命周期方法

# 6.组件的生命周期
- [React组件的生命周期](https://yuanchengjs.github.io/2017/08/21/%E6%88%91%E7%9A%84%E5%89%8D%E7%AB%AF%E4%B9%8B%E8%B7%AF/React%E7%BB%84%E4%BB%B6%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/)

# 7.state与props属性
1.prop属性
- this.prop：接收外来模块的属性参数
- propTypes：规范检查

2.state属性
- super()：调用基类的所有初始化方法
- this.state：初始化参数
- this.setState：修改初始化参数
- this.setState.attribute：读取对应属性的值

3.prop和state的对比
- prop是组件的对外接口，state是组件的内部状态
- prop的值不应该被改变，state可以被改变

# 8.ReactDOM的API
- findDOMNode
- render
- unmountComponentAtNode


