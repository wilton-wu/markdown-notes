---
title: 解决slideDown()和slideUp()反复执行的问题
date: 2017-07-22 14:38:42
categories: 我的前端之路
---
解决slideDown()和slideUp()反复执行的问题
<!--more-->
# 1.一个简单的水平菜单
```
<!DOCTYPE html>
<html lang="zn">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/my.css">
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <title>水平菜单</title>
    <style>
        nav .main a{
            display: block;
            width: 100px;
            height: 30px;
            line-height: 30px;
            background-color: #aaa;
            text-align: center;
            border-bottom: 1px solid #000;
        }
        nav .main a:hover{
            background-color: red;
        }
        .main ul{
            display: none;
        }
        .main>li{
            float: left;
        }
    </style>
    <script>
        jQuery(document).ready(function($) {
            $(".main>li").hover(function() {
                $(this).children("ul").slideToggle(400);
            });                                                     
        });
    </script>
</head>
<body>
    <nav>
        <ul class="main">
            <li><a href="#">菜单一</a>
                <ul>
                    <li><a href="">子菜单1</a></li>
                    <li><a href="">子菜单2</a></li>
                    <li><a href="">子菜单3</a></li>
                </ul>
            </li>
            <li><a href="#">菜单二</a>
                <ul>
                    <li><a href="">子菜单1</a></li>
                    <li><a href="">子菜单2</a></li>
                    <li><a href="">子菜单3</a></li>
                </ul>
            </li>
            <li><a href="#">菜单三</a>
                <ul>
                    <li><a href="">子菜单1</a></li>
                    <li><a href="">子菜单2</a></li>
                    <li><a href="">子菜单3</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</body>
</html>

//当鼠标在菜单上快速滑动时，会同时有多个子菜单在不停的显示、隐藏
```

# 2.使用:animated来检测动画的执行
```
jQuery(document).ready(function($) {
            $(".main>li").hover(function() {
                if(!$(".main ul").is(":animated")){
                    $(this).children("ul").slideToggle(400);
                 }
            });                                                     
        });

//使用:animated保证了只有在前一次的动画结束后，下一次的动画才会开始执行
//但是会导致子菜单未收起的情况

```

# 3.使用stop()方法来停止重复动画
```
jQuery(document).ready(function($) {
            $(".main>li").hover(function() {
                $(this).children("ul").slideDown();
            }, function() {
                $(this).children("ul").stop(true,false).slideUp();
            });                                             
        });

//完美解决
```

# 4.stop()方法介绍
```
stop([clearQueue],[jumpToEnd]);
clearQueue:如果设置成true，则清空队列，可以立即结束动画。
jumpToEnd:如果设置成true，则完成队列，可以立即完成动画。可选，默认是false
```

# 5.使用toggle()方法替代
```
jQuery(document).ready(function($) {
            $(".main>li").hover(function() {
                $(this).children("ul").toggle();
            });
        });
```