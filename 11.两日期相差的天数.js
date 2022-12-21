// 日常开发中经常遇到需要显示剩余天数， 一般我们就需要计算两日期之间相差天数：


const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

let time1 = new Date("2022-12-21")

let time2 = new Date("2022-12-24")

console.log(dayDiff(time1, time2));