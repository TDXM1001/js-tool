// 处理温度有时会晕头转向。
// 这两个函数则能帮助大家将华氏温度转换为摄氏温度，
// 以及将摄氏温度转换为华氏温度。

// 华氏度转摄氏
const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;

let num1 = 100

console.log(celsiusToFahrenheit(num1));


const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

let num2 = 50

console.log(fahrenheitToCelsius(50));