function removeHTMLTag(str = '') {
  let str1 = str.toString()
  str1 = str1.replace(/<\/?[^>]*>/g, '') // 去除HTML tag
  str1 = str1.replace(/[ | ]*\n/g, '\n') // 去除行尾空白
  str1 = str1.replace(/\n[\s| | ]*\r/g, '\n') //去除多余空行
  str1 = str1.replace(/ /gi, '') // 去掉
  const arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' } // 转义符换成普通字符
  str1 = str1.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
    return arrEntities[t]
  })
  return str1
}

let str = "<p>6666</p>"
console.log(removeHTMLTag(str));