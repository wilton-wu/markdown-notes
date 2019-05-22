---
title: ES5新增数组操作方法
date: 2017-07-13 15:46:38
categories: 我的前端之路
---
ES5新增数组操作方法
<!--more-->
# 1.新增检测数组方法
- Array.isArray(searchElement[,fromIndex])方法
```
var arr=[1,2,3];
console.log(Array.isArray(arr));//输出true
```

# 2.新增位置方法
- indexOf()方法：从数组开头向后查找
```
var arr=[1,2,3,4,5,3,6,7];
console.log(arr.indexOf(0));//未找到，输出-1
console.log(arr.indexOf(3));//输出2
console.log(arr.indexOf(3,4));//从4号位开始查找输出5
```

- lastIndexOf()方法：从数组尾部向前查找
```
var arr=[1,2,3,4,5,3,6,7];
console.log(arr.lastIndexOf(0));//未找到，输出-1
console.log(arr.lastIndexOf(3));//输出5
console.log(arr.lastIndexOf(3,4));//从4号位开始查找输出2
```

# 3.新增迭代方法
- forEach()方法：循环遍历，没有返回值
```
var a=[1,2,3,4,5];
var sum=0;
a.forEach(function(x){sum+=x;});
console.log(sum);//输出：15
```

- filter()方法：返回符合条件的数组项
```
var arr=[1,2,3,4,5];
var result=arr.filter(function(item,index,array) {
    return item>3;
});
console.log(result);//输出[4,5]
```

- map()方法：返回每次函数调用的结果组成的数组
```
var arr=[1,2,3,4,5];
var result=arr.map(function(item,index,array) {
    return item*2;
});
console.log(result);//输出[2,4,6,8,10]
```

- every()方法：每一项都返回true，则返回true
```
var arr=[1,2,3,4,5];
var result=arr.every(function(item,index,array) {
    return item>2;
});
console.log(result);//输出false
```

- some()方法：有一项返回true，则返回true
```
var arr=[1,2,3,4,5];
var result=arr.some(function(item,index,array) {
    return item>2;
});
console.log(result);//输出true
```

# 4.新增归并方法
- reduce()方法：从第一项开始，向后遍历
```
var arr=[1,2,3,4];
var sum=arr.reduce(function(previous,current,index,array){
    console.log(previous,current,index,array);
    return previous+current;
});
console.log(sum);
//输出如下：
1 2 1 [ 1, 2, 3, 4 ]
3 3 2 [ 1, 2, 3, 4 ]
6 4 3 [ 1, 2, 3, 4 ]
10
```

- reduceRight()方法：从最后一项开始，向前遍历
```
var arr=[1,2,3,4];
var sum=arr.reduceRight(function(previous,current,index,array){
    console.log(previous,current,index,array);
    return previous+current;
});
console.log(sum);
//输出如下：
4 3 2 [ 1, 2, 3, 4 ]
7 2 1 [ 1, 2, 3, 4 ]
9 1 0 [ 1, 2, 3, 4 ]
10
```