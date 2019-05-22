---
title: React组件的生命周期
date: 2017-08-21 13:41:08
categories: 我的前端之路
---
# 1.装载过程
- 当组件第一次被渲染会执行装载过程
- constructor：用于初始化state或绑定成员函数的this环境
- componentWillMount：在调用render函数之前被调用
- render：只能访问this.props和this.state
- componentDidMount：在调用render函数之后被调用

# 2.更新过程
- componentWillReceiveProps：父组件的render函数被调用时被触发
- shouldComponentUpdate：决定一个组件是否被渲染，可以提升性能
- componentWillUpdate：提供需要更新的props和state
- render：同上
- componentDidUpdate：提供更新前的props和state

# 3.卸载过程
- componentWillUnmount：进行清理操作，比如计时器和事件监听器

# 4.整体流程
- 注意componentWillReceiveProps在父组件的render函数被调用时被触发，而不是当组件的props发生改变时触发
![](http://upload-images.jianshu.io/upload_images/5548372-e1026eaaa9f2b219.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)