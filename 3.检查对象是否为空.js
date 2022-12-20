// 检查对象是否为空，实际上并不那么简单，
// 即使对象为空，每次检查对象是否等于 {} 也会返回 false。

const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

let obj1 = {}

let obj2 = { a: "123" }

// 正常判断:即使对象为空，每次检查对象是否等于 {} 也会返回 false。
console.log(obj1 == {});

console.log(isEmpty(obj1));

console.log(isEmpty(obj2))


// 了解Reflect.ownKeys() 和 Object.keys() 之间的区别

// 这两种方法都可以遍历出对象中的keys,
// 但Object.keys()无法遍历不可枚举的属性


// 举例是用 Object.defineProperty() 方法添加的属性,且没有将配置项改为可以遍历,
// Object.keys() 是遍历不到的