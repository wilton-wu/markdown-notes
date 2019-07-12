---
layout: ew
title: sublime Text3使用笔记
date: 2017-04-28 09:34:21
categories: 我的前端之路
---
sublime Text3使用笔记
<!--more-->
# 1.进入[sublime官网](http://www.sublimetext.com/3)下载

# 2.安装[package control组件](https://packagecontrol.io/installation#st3)
- 在左下角找到Console,点击输入
`import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)`

# 3.使用package control安装插件
- 按下Ctrl+Shift+P调出命令面板
- 输入install 调出 Install Package 选项并回车，然后在列表中选中要安装的插件

# 4.常用插件介绍
1. Emmet：编码快捷键
2. JSFormat：JavaScript的代码格式化插件（默认快捷键Ctrl+Alt+F）
3. AutoFileName：快捷输入文件名
4. SideBar Enhancements：侧边栏功能扩展
5. Autoprefixer CSS3：前缀补充
6. CSScomb：css属性排序（默认快捷键Ctrl+SHIFT+C）
7. CSSformat：消除空行（执行EDIT->CSS FORMAT->EXPANDED）
8. node.js：直接运行js代码（Ctrl+B编译运行）
9. HTML-CSS-JS Prettify：代码格式化（需要安装node，并将node路径替换）
10. JavaScript&NodeJS Snippets: JavaScript快捷输入

# 5.常用快捷键
1. 就近选择相同项: ctrl+d
2. 选择当前文件所有匹配项:alt+f3
3. 选择文本的包裹标签：ctrl+shift+`
4. 向上扩展一层：ctrl+shift+a
5. 整行的上下移动：ctrl+shift+↑/↓
6. 选中整行：ctrl+l
7. 注释选中项/行:ctrl+/
8. 注释选中块：ctrl+shift+/
9. 复制一行：ctrl+shift+d
10. 删除一行：ctrl+shift+k
11. 新建文件：ctrl+n
12. 下方插入空行：ctrl+enter
13. 上方插入空行：ctrl+shift+enter
13. 查找：ctrl+f
14. 开启命令模式：ctrl+shift+p
15. 查找文件：ctrl+p
16. 符号匹配：@
17. 减少缩进：ctrl+[
18. 增加缩进：ctrl+]
19. 开关侧边栏：ctrl+k+b
20. 代码拖动：shift+左键拖动

# 6.Emmet语法
1. 后代：ul>li
2. 兄弟：div+p
3. 分组：ul>(li>a)*5
4. 乘法：li*5
5. 自增：ul>li.item$*5
6. ID：#header
7. 类：.box1

# 7.设置快捷键选择浏览器运行
- 依次选择Preferences->Key Bindings，点击
- 在User一栏复制如下代码，将浏览器路径替换为自己电脑的路径
- 快捷键可以自己随意设置，注意将路径中的\改为\\\\
```
[
//chrome
    {
        "keys":["f12"],
        "command":"side_bar_files_open_with",
        "args":{
            "paths":[],
            "application":"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
            "extensions":".*"
        }
    },

//firefox
    {
        "keys":["f11"],
        "command":"side_bar_files_open_with",
        "args":{
            "paths":[],
            "application":"D:\\火狐浏览器\\firefox.exe",
            "extensions":".*"
        }
    },

//ie
    {
        "keys":["f10"],
        "command":"side_bar_files_open_with",
        "args":{
            "paths":[],
            "application":"C:\\Program Files\\Internet Explorer\\iexplore.exe",
            "extensions":".*"
        }
    },
]
```
