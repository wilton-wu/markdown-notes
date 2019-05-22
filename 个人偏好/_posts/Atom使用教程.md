---
title: Atom使用教程
date: 2017-08-14 20:17:06
categories: 我的前端之路
tags: Atom
---
Atom使用教程
<!--more-->
# 1.进入[Atom官网](https://atom.io/)下载
- 默认安装到C盘（ C:\User\用户名\\.atom）
- [安装包zip下载](https://github.com/atom/atom/releases/tag/v1.19.0)
- [Package下载排行](https://atom.io/packages/list)
- [Themes下载排行](https://atom.io/themes/list)

# 2.解决插件安装过慢的问题
```
//设置代理
echo registry = https://registry.npm.taobao.org > %UserProfile%\.atom\.apmrc

//或使用git安装
git clone 插件地址
cd 插件名称
cnpm install
```

# 3.插件推荐
- atom-beautify：快速格式化插件
- atom-ternjs：JavaScript语法智能提示
- emmet：快速书写代码工具
- file-icons：文件图标
- highlight-line：行高亮
- pigments：代码的颜色插件
- language-babel：支持ES6代码
- markdown preview：编写Markdown
- activate-power-mode：代码烟花效果
- git-plue：git操作
- minimap：预览代码
- color-picker：颜色板

# 4.快捷键
- 弹出搜索框：ctrl+shift+p


# 5.去掉中间的线
- Settings > Packages > wrap-guide > disable
