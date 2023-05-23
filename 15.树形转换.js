let obj = [
  {
    "CompanyName":"资产集团",
    "parentManageCompanyUnid": "02ab1624f8824a75938e51666934e7b8", // 父级id
    "manageCompanyUnid": "31dfb4b021cd48b6ba01daabbf1b658f", // 本身的id
  },
  {
    "CompanyName":"北京资产集团",
    "parentManageCompanyUnid": "31dfb4b021cd48b6ba01daabbf1b658f",
    "manageCompanyUnid": "93d0b1486fe04cc0a9e71e9f014c7729",
   
  },
  {
    "CompanyName":"天津资产集团",
    "parentManageCompanyUnid": "31dfb4b021cd48b6ba01daabbf1b658f",
    "manageCompanyUnid": "b799c6b0f5e045edab6d47531f92d98f"
  },
]


/**
 * json 传入的数据
 * idStr 自身的id
 * pidStr 父级id
 * nodes 合成后的字段名称,可自定义
 */
function transData(json, idStr, pidStr, childrenStr) {
  const r = []
  const hash = {}
  const len = json.length
  for (let i = 0; i < len; i++) {
    hash[json[i][idStr]] = json[i]
  }
  for (let j = 0; j < len; j++) {
    const aVal = json[j]
    const hashVP = hash[aVal[pidStr]]
    if (hashVP) {
      !hashVP[childrenStr] && (hashVP[childrenStr] = [])
      hashVP[childrenStr].push(aVal)
    } else {
      r.push(aVal)
    }
  }
  return r
}


let test = transData(obj, 'manageCompanyUnid', "parentManageCompanyUnid", "nodes")

console.log(test);