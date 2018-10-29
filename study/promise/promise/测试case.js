let  Promise = require('./测试promise')

let p = new Promise((resolve,reject)=>{
  // setTimeout(() => {
    resolve('成功11')
    reject('失败1')
  // },1000)

})
// p.then(()=>{
//   return '123'
// }).then()


let x = p.then(data=>{
  return new Promise((resolve,reject)=>{
      resolve('成功11')
  })
},data=>{
  console.log('2',data)
}).then((data)=>{
  console.log('111111111',data)
})


// let x = p.then(data=>{
//   console.log('1',data)
// },data=>{
//   console.log('2',data)
// })

// let x = p.then().then().then(data=>{
//   console.log('1',data)
// },data=>{
//   console.log('2',data)
// })
// console.log('---------',x)