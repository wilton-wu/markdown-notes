---
title: npm常用命令
date: 2017-07-28 09:54:21
categories: 我的前端之路
---
npm常用命令
<!--more-->
# 1.全局安装淘宝npm镜像
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
//将之后的npm命令换成cnpm
```

# 2.创建package.json文件
```
npm init
```

# 3.安装包
```
npm install <name> --save-dev //将信息写入package.json中
npm install <name> -g //全局安装
```

# 4.移除包
```
npm uninstall <name> --save-dev //将写入package.json中的信息一起移除
npm uninstall <name> -g //全局移除

```
# 5.更新包
```
npm update <name> --save-dev //将信息写入package.json中
npm update <name> -g //全局更新
```

# 6.列出安装的包
```
npm ls //只列出当前目录下的包
npm ls -g //列出全局安装的包
```

# 7.查看包的安装路径
```
npm root //只查看当前目录下包的安装路径
npm root -g //.查看全局包的安装路径
```


# 8.AppData默认隐藏的打开
```
进入最里面能看到的目录，点击查看 >把隐藏的项目打勾
```

# 9.查看帮助
```
npm help [install]
```

# 10.[完整的命令](https://docs.npmjs.com/)