---
title: Hexo-NexT搭建博客
date: 2017-04-29 13:46:38
categories: 我的前端之路
---
Hexo-NexT搭建博客
<!--more-->
>官方文档参考：[Hexo官网](https://hexo.io/zh-cn/)，[NexT使用文档](http://theme-next.iissnan.com/)

# 1.环境配置 
1.下载并成功安装[Node.js](http://nodejs.cn/download/)
2.下载并成功安装[Git](https://git-for-windows.github.io/)

# 2.安装Hexo
打开Git Bash，安装Hexo
```
npm install hexo-cli -g
```

# 3.创建文件存放路径
1.选择存放文件目录，按下鼠标右键，找到Git Bash Here并点击
2.完成Hexo的初始化
```
hexo init
```
3.自动在当前目录创建文件
```
npm install
```
4.目录具体介绍
- _config.yml：网站的配置信息
- package.json：应用程序的信息
- scaffolds：模板文件夹
- source：资源文件夹，用来存放用户资源
- themes：主题文件夹

# 4.本地启动
启动本地服务器，之后访问：http://localhost:4000/
``` 
hexo s
```
能看到默认生成Hello World的博文，表明创建博客成功

# 5.部署到GitHub
1.注册GitHub账号，并创建仓库(yourname.github.io)
2.修改配置文件_config.yml
```
deploy:
 type: git
 repo: git @github.com:youname/yourname.github.io.git
 branch: master
```
yourname替换为你设定的GitHub的用户名
3.配置SSH-Key
```
ssh-keygen -T rsa -C "your_email@youremail.com"
```
your_email替换为你设定的GitHub的邮箱
4.验证ssh是否连接成功
```
ssh -T git@github.com
```
显示You've successfully authenticated则表明已连接成功
5.安装git包
```
npm install hexo-deployer-git --save
```
6.部署到GitHub
```
hexo d
```
现在你可以通过yourname.github.io/来访问自己的博客了！

# 6. 博文上传
1.新建博文
```
hexo new 'name'
```
2.使用熟悉的编辑器编写博文，博文支持MarkDown语法
3.将写好的博文生成静态文件并部署到GitHub上
```
hexo g -d
```

# 7.NexT主题
1.下载主题
```
git clone https://github.com/iissnan/hexo-theme-next themes/next
```
2.启用主题
```
theme: next
```
3.其他[主题推荐](https://www.zhihu.com/question/24422335)

# 8.菜单分类设置
1.修改next主题下的_config.yml的menu字段，去掉categories前的#
2.添加分类页面
```
hexo new page tags
```
3.找到新生成的source/tags/index.md，添加type: "tags"
4.在myBlog/source/_post目录下的具体文章的tags中添加分类
```
categories: 我的前端之路
```

# 9.博客迁移
重新连接ssh，只需替换：source，themes，_config即可

