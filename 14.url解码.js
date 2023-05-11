// 获取 window.location.search 携带的多个参数并解析
getUrl = function (url) {
  let returl = new Object();
  if (url.indexOf("?") != -1) {
    let queryString = url.substr(1);
    let queryParams = queryString.split("&");
    for (let i = 0; i < queryParams.length; i++) {
      let [key, value] = queryParams[i].split("=");
      returl[key] = decodeURI(value);
      //值需要使用 decodeURI() 函数对通过 escape() 或 url 编码过的字符串进行解码
    }
  };
  return returl;
}


let demo01 = "?workbenchId=82&workbenchName=02221&refreshStatus=0"

let demo02 = "?carnumber=%E5%B7%9DLD7081"

console.log(getUrl(demo01)); //{ workbenchId: '82', workbenchName: '02221', refreshStatus: '0' }
console.log(getUrl(demo02)); //{ carnumber: '川LD7081' }