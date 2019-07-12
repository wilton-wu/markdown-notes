---
title: Ajax
date: 2017-08-04 10:56:00
categories: 我的前端之路
---
Ajax
<!--more-->
# 1.简单介绍
- 在无须重新加载整个页面的情况下，能够更新部分网页的技术

# 2.一般步骤
- 创建ajax对象
```
var xhr = new XMLHttpRequest();
```

- 指定回调函数
```
xhr.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if (xhr.readyState === 4){
    if (xhr.status === 200){
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
```

- 发出HTTP请求
```
xhr.open('GET', '/endpoint', true);
xhr.send(null);
```

- 接收服务器传回的数据
- 更新网页数据

# 3.同源网址
- 协议，域名，端口都相同的网址

# 4.post请求
- 通常用于向服务器发送应该被保存的数据
- 可以包含非常多尚未数据，而且格式不限
- post请求消耗的资源更多，get请求的速度更快


# 5.readyState状态
只读，表示请求当前所处的状态
```
0：未初始化，尚未调用open()方法
1：启动，已经调用open()方法，但尚未调用send()方法
2：发送，已经调用send()方法，但尚未接收到响应
3：接收，已经接收到部分响应数据
4：完成，已经接收到全部响应数据
```

# 6.status状态码
 只读，表示本次请求所得到的HTTP状态码
```
200, OK，访问正常
301, Moved Permanently，永久移动
302, Move temporarily，暂时移动
304, Not Modified，未修改
307, Temporary Redirect，暂时重定向
401, Unauthorized，未授权
403, Forbidden，禁止访问
404, Not Found，未发现指定网址
500, Internal Server Error，服务器发生错误
```

# 7.jsonp跨域
- 由回调函数和数据两部分组成
- 通过动态 script 元素来使用

# 8.Web Sockets
- 全双工，双向通信

# 9.安全问题
- sql注入：通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。
- XSS攻击：指的是攻击者往Web页面里插入恶意html标签或者javascript代码。
- CSRF：跨站请求伪造

# 10.fetch



