---
title: ES6新增
date: 2017-05-26 13:33:47
categories: 我的前端之路
tags: ES6
---
ES6新增
<!-- more-->
# 1.变量声明let和const
- 代码块内有效
```
//函数内部的变量i与循环变量i不在同一个作用域内
for (let i = 0; i < 3; i++) {
  const i = 'abc';
  console.log(i);//输出：abc abc abc
}

//i值唯一，输出最后一轮的i值
for (var i = 0; i < 3; i++) { //未执行此循环
  var i = 'abc';
  console.log(i);//输出：abc
}
```

- 不存在变量提升
```
//let定义变量
console.log(bar); // 报错
let bar = 2;

//var定义变量
console.log(foo); // 输出：undefined
var foo = 2;
```

- 暂时性死区，简称TDZ
```
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); //报错

  let tmp; // TDZ结束
  console.log(tmp); //输出：undefined

  tmp = 123;
  console.log(tmp); //输出123
}
```

- 不允许重复声明
```
function func(arg) {
  let arg; //在Babel内报错，在Console内运行输出：undefined
}

function func(arg) {
  {let arg;}//不报错
}
```
- const一旦声明，就必须立即初始化
```
const foo;//报错
```

# 2.块级作用域作用场景
- 内存变量可能会覆盖外层变量
- 用来计数的循环变量泄漏为全局变量
- 使得立即执行函数表达式(IIFE)不再必要
- 允许在块级作用域中声明函数，应尽量避免

# 3.声明变量的方式
- var
- function
- let
- const
- import
- class

# 4.变量的解构赋值
```
//允许指定默认值

//数组的解构赋值
let [a,...b]=[1,2,3,4];
console.log(b);//输出：[2,3,4]

//对象的解构赋值
let obj={
  name:"json",
  gender:"male"
}
let {name,gender}=obj
console.log(name); //输出："json"
console.log(gender); //输出："male"

//字符串的解构赋值
let [a,b,c,d] ="json";
console.log(a+b+c+d);//输出："json"

//函数的解构赋值
function  show({b}){
  console.log(b);//输出：2
}
show({
  a:1,
  b:2,
  c:3
});

function  show(obj){
  console.log(obj.b);//输出：2
}
show({
  a:1,
  b:2,
  c:3
});

```

# 5.模板字符串
```
const name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)
//输出："Hello Bob, how are you today?"
```

# 6.数值的扩展
```
//二进制前缀 0b
console.log(0b11);//输出：3

//八进制前缀 00
console.log(0o11);//输出：9

//将数值转为十进制
console.log(Number(0o11));//输出：9

//检测一个数值是否有限，非数值均返回false
Number.isFinite(NaN);// false
Number.isFinite('15');// false

//检测一个值是否为NaN
Number.isNaN(NaN);// true
Number.isNaN(15);// false
Number.isNaN('15');// false
Number.isNaN(true);// false

//数值类型转换
Number.parseInt('12.34')// 12
Number.parseFloat('123.45#')// 123.45

//判断一个值是否为整数
Number.isInteger(25.1);// false
Number.isInteger("15");// false
Number.isInteger(true);// false
```

# 7.函数的扩展
```
//给函数参数设默认值
function show(a,b=1) {
  return a + b;
}
console.log(show(3));//输出：4
console.log(show(3,2));//输出：5

//箭头函数简写
var show=(a,b=1)=>a + b;

//箭头函数中的this(箭头函数中的this始终指向函数定义时的对象)
function foo() {
  setTimeout(() => {
    console.log('id:',this.id);
  }, 100);
}
var id = 21;
foo.call({ id:42 });//输出："id:" 42
```
# 8.数组的扩展
```
//扩展运算符
console.log(...[1, 2, 3]);//输出：1 2 3

//Array.from()用于将类似数组对象和可遍历对象转化为真正的数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c'
};
console.log(Array.from(arrayLike));

let namesSet = new Set(['a','b','a','c']);
console.log(Array.from(namesSet));
```

# 9.对象的扩展
```
//属性简写
let bza={foo};
//等同于
let bza={foo:foo};

//方法简写
var o = {
  method() {
    return "Hello!";
  }
};
// 等同于
var o = {
  method: function() {
    return "Hello!";
  }
};

//Object.keys方法，返回参数对象自身的所有可遍历属性的键名
var a = 7;
     var object = {
        a,
        b:7
     }
console.log(Object.keys(object));//输出：["a","b"]

//Object.assign方法，合并对象
var target={ a: 1, b: 1 };
var source1={ b: 2, c: 2 };
var source2={ c: 3 };
Object.assign(target, source1, source2);
console.log(target);//输出：{a:1, b:2, c:3}
```

# 10.class类
- constructor构造函数
```
class  Person{
    constructor(name,gender,age){
    this.name = name;
    this.gender = gender;
    this.age = age;
    }
    showName() {
    console.log(this.gender);
    }
    showAge(){
        console.log(this.age);
    }
}
var obj = new Person("json","male",18);//创建对象的实例
console.log(obj.name);//输出：json
obj.showName();//输出：male
obj.showAge();//输出：18
```
- class表达式
```
const Person=new class  {
    constructor(name,gender,age){
    this.name = name;
    }
    showName() {
    console.log(this.gender);
    }
}("json","male",18);
Person.showName();//输出：male

//class静态方法，可以被子类继承，不能被实例继承
class Foo {
  static classMethod() {
    console.log("hello");
  }
}
Foo.classMethod();//输出："hello"
```
- class的继承
 ```
class  Person{
    constructor(name,gender,age){
      this.name = name;
      this.gender = gender;
      this.age = age;
    }
    showName(){
      console.log(this.name);
    }
  }
 class Student extends Person{
    constructor(name,gender,age,stuNumber,stuClass){
      super(name,gender,age);
      this.stuNumber=stuNumber
      this.stuClass=stuClass
    }
}
var obj =new Student("json","male",16,"12345678","2-210");
obj.showName();//输出：json
console.log(obj.stuNumber);//输出：12345678
```
