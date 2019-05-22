---
title: JavaScript常见算法
date: 2017-04-30 15:15:27
categories: 我的前端之路
---
JavaScript常见算法
<!--more-->
# 1.简单排序
```
let arr=[4,3,5,2,1,8,7,9,6];
arr.sort(function(a,b){
    return a-b;
});
console.log(arr);
```

# 2.冒泡排序
**思想：**让当前项和后一项比较，如果当前项大于后一项，两者交换位置
```
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }return arr;    
}
console.log(bubbleSort([4,3,5,2,1,8,7,9,6]));
```

# 3.快速排序
**思想：**在数组中间项作为“基准点”，比基准点小的数值项放到左边，大的放到右边
```
function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let pointIndex=Math.floor(arr.length/2);//选定数组中间值为基准点
    let pointValue=arr.splice(pointIndex,1)[0];//获取基准点的值
    //数组拆分
    let left=[];
    let right=[];
    for(let i=0;i<arr.length;i++){
        arr[i]<pointValue?left.push(arr[i]):right.push(arr[i]);
    }
    //递归拆分
    return quickSort(left).concat([pointValue],quickSort(right));
}
console.log(quickSort([4,3,5,2,1,8,7,9,6]));
```

# 4.插入排序
**思想：**从左到右依次取数组中的项，从后向前依次比较，选择合适位置插入
```
function insertSort(arr){
    let newArr=[];
    newArr.push(arr[0]);//放入第一个值

    for (let i = 1;i<arr.length;i++) {
        for(let j=newArr.length-1;j>=0;){
            if(arr[i]<newArr[j]){
                j--;//从后向前依次比较
                
                if(j===-1){
                    newArr.unshift(arr[i]);
                }
            }else{
                newArr.splice(j+1,0,arr[i]);
                j=-1;
            }
        }
    }return newArr;
}
console.log(insertSort([4,3,5,2,1,8,7,9,6]));
```

# 5.数组去重
```
//方法一
var arr=[4,3,5,6,8,1,5,2,1,8,7,6,9];
var newArr=Array.from(new Set(arr));
console.log(newArr);

//方法二
 function unique(arr) {
  let result=[];
  for(let i=0;i<arr.length;i++){
    if(result.indexOf(arr[i])===-1){
      result.push(arr[i]);
    }
  }return result;  
}   
console.log(unique([1,3,5,4,3,1,4]));   

```

# 6.两数交换
```
var a=2;
var b=3;
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);
```

# 7.找出元素item在数组arr中的位置
```
function indexOf(arr,item){
    if(Array.prototype.indexOf){
        return arr.indexOf(item);
    }else{
        for(var i=0;i<arr.length;i++){
            if(arr[i]===item){
                return i;
            }else{return -1;}
        }
    }
}
var arr=[1,2,3,4,5,6];
var item=3;
var n=indexOf(arr,item);　
console.log(n);
```

# 8.计算给定数组arr中所有元素的总和
```
function sum(arr){
    var sum=0;
    arr.forEach(function(value){
        sum+=value;
    });return sum;
}
var arr=[1,2,3,4,5,6];
var n=sum(arr);　
console.log(n);
```

# 9.移除数组arr中所有与item相等的元素，返回新的数组
```
function remove(arr,item){
    var a=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==item)
            a.push(arr[i]);
    }return a;
}
var arr=[1,2,3,4,5,6];
var item=5;
var newArr=remove(arr,item);　
console.log(newArr);
```

# 10.移除数组arr中所有与item相等的元素，并将结果返回
```
function remove(arr,item){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===item){
            arr.splice(i,1);
            i--;
        }
    }return arr;
}
var arr=[1,2,3,4,5,6];
var item=5;
remove(arr,item);　
console.log(arr);
```

# 11.实现一个打点计时器，要求：
1.从start到end，每隔100毫秒consolo.log一个数字，每次增幅为1
2.返回的对象中需要包含一个cancal方法，用于停止定时操作
3.第一个数需要立即输出
```
function count(start, end) {
    console.log(start++);
    var timer = setInterval(function(){
         if(start <= end){
            console.log(start++);
         }else{
            clearInterval(timer);
         }s
    },100);
    return {
         cancel : function(){
            clearInterval(timer);
        }
    };
} 
count(1,10);
```

# 12.实现fizzBuzz函数，参数num与返回值的关系如下：
1.如果num能同时被3和5整除，返回字符串fizzbuzz
2.如果num能被3整除，返回字符串fizz
3.如果num能被5整除，返回字符串buzz
4.如果字符串为空或者不是Number类型，返回false
5.其余情况，返回参数num
```
function fizzBuzz(num) {
    if(num%3===0&&num%5===0){
        return "fizzbuzz";
    }else if(num%3===0){
        return "fizz";
    }else if(num%5===0){
        return "buzz";
    }else if(num===null||typeof num!=="number"){
        return false;
    }else return num;   
} 
var str=fizzBuzz("hello");
console.log(str);
```

# 13.找出整型数组中乘积最大的三个数
```
var arr=[-1,-2,-3,-4,0,1,2,3];
arr.sort(function(a,b){
    return a-b;
});
function findMax(arr){
    var length=arr.length-1;
    var max1=arr[0]*arr[1]*arr[length];
    var max2=arr[length]*arr[length-1]*arr[length-2];
    var Max;
    max1>max2?Max=max1:Max=max2;
    return Max;
}
console.log(findMax(arr));
```

# 14. 寻找连续数组中缺失的数字
```
var arr=[-1,-2,-3,-4,0,2,3];
arr.sort(function(a,b){
    return a-b;
});
var min=arr[0];
var max=arr[arr.length-1];
function findLost(arr){
    var sum1=0;
    var sum2=0;
    for(var i=0;i<arr.length;i++){
        sum1+=arr[i];
    }
    sum2=((min+max)*(max-min+1))/2;
    return sum2-sum1;
}
console.log(findLost(arr));
```

# 15.实现输出斐波拉契数列
```
function Fibonacci(num){
    if(num===0){
        return 0;
    }else if(num===1){
        return 1;
    }else{
        return Fibonacci(num-2)+Fibonacci(num-1);
    }
}
var n=10;//斐波拉契数列长度
for(var i=0;i<n;i++){
    console.log(Fibonacci(i));
}
```

# 16.实现移除字符串空格函数Trim
```
function Trim(str){
    var start=0;
    var end=0;
    //去除左边空格
    for(var i=0;i<str.length;i++){
        if(str[i]!=" "){
            start=i;
            break;
        }
    }
    //去除右边空格
    for(var j=str.length-1;j>0;j--){
        if(str[j]!=" "){
            end=j;
            break;
        }
    }
    //去除中间超过一个的空格
    str=str.slice(start,end+1);
    var result="";
    for(var k=0;k<str.length;k++){
        if(str[k]===str[k+1]&&str[k]===" "){
            continue;
        }else{
            result=result.concat(str[k]);
        }
    }
    return result;
}
var str= "  a    bc  d  ";  
console.log(Trim(str)); 
```

# 17.二维数组中的查找
在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
```
function Find(target,array){
    var hang=array.length;//行的长度
    var lie=array[0].length;//列的长度
    if(hang===0&&lie===0){
        return false;
    }
    //选择起点为二维数组左下角
    var i=0;
    var j=lie-1;
    while(i<hang&&j>-1){
        if(array[i][j]<target){
            i++;
        }else if(array[i][j]>target){
            j--;
        }else{
            return true;
        }
    }
    if(i>hang||j<0){
        return false;
    }
}
```

# 18.替换空格
实现一个函数，将一个字符串中的空格替换成“，”
```
function replaceSpace(str){
    return str.split(" ").join(",");
}
var string=replaceSpace("I love you");
console.log(string);
```

# 19.跳台阶
一只青蛙一次可以跳上1级台阶，也可以跳上2级；求该青蛙跳上一个n级的台阶总共有多少种跳法。
```
function jumpFloor(n){
    var a=1;
    var b=2;
    var c=0;
    if(n===1){c=1};
    if(n===2){c=2};
    for(var i=3;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
    }return c;
}
var sum=jumpFloor(10);
console.log(sum);
```

# 20.调整数组顺序使奇数位于偶数前
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
```
function reOrderArray(array){
    var left=[];
    var right=[];
    var result=[];
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            right.push(array[i]);
        }else{
            left.push(array[i]);
        }
    }
    result=left.concat(right);
    return result;
}
var newArr=reOrderArray([4,1,2,6,5,3,9,8,7]);
console.log(newArr);
```











