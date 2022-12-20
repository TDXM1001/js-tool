// 从数组中删除所有重复值，实现方式非常多，我们这里就说最简单的方式，一行代码搞定：

const uniqueArr = (arr) => [...new Set(arr)]

// 定义一个数组
let arr = ["前端", "js", "html", "js", "css", "html"]

// 调用方法
let result = uniqueArr(arr)

console.log(result);