// 网页路径经常是：www.baidu.com?search=js&xxx=kkk这种形式的，
// 我们是经常需要取参数的，可以使用第三方的qs包实现，
// 如果你只是要实现去参数，这一句代码就可以实现，不用再引入qs了。

// decodeURI() 对一个编码后的URL进行解码
const getParameters = URL => JSON.parse(`{"${decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)


let url = "https://www.baidu.com/?tn=15005514&w=123456"

let result = getParameters(url)

console.log(result);