// 反转字符串可以使用split结合reverse和join方法轻松实现。

const reverse = str => str.split("").reverse().join("")

let str = "this is demo"

console.log(reverse(str));