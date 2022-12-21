// 我们自己写日历组件时经常会用到，判断某个日期是否为工作日；周一至周五为工作日

const isWeekday = (date) => date.getDay() % 6 !== 0;

let time = new Date()

console.log(isWeekday(time));
// true