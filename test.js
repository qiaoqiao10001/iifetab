function tplReplace (tpl, replaceObj) {
  return tpl.replace(/\{\{(.*?)\}\}/g, function (node, key) {
    return replaceObj[key.trim()]
  })
}


let template = `<div>{{name}}<p>{{age}}</p></div>`
let obj = {
  name: 'zhangao',
  age: 12
}
// let reg = /\{\{(.*?)\}\}/g
// let res = template.replace(reg, (node, key) => {
//   // console.log(node, 'node')
//   // console.log(key, 'key')
//   return { name: 'zq': age: 32 }[key.trim()]
// })
// console.log('res', res)

let res = tplReplace(template, obj)

console.log(res)