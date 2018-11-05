let path = require('path')
let fs = require('fs')

// let {promisify} = require('uitl')
// let stat = promisify(fs.stat)
// let readdir = promisify(fs.readdir)
// let unlink = promisify(fs.unlink)
// let rmdir = promisify(fs.rmdir)




function rm(p,callback){
  fs.stat(p,(err,statObj)=>{
    if(statObj.isDirectory){
      //是目录
      fs.readdir(p,(err,dirs)=>{
        dirs = dirs.map(item=>path.join(p,item))
        function next(index){
          if(index === dirs.length) return fs.rmdir(p,callback)
          let currenPath = dirs[idnex]
          rm(currenPath,()=>{next(index+1)})
        }
        next(0)
      })
    }else{
      fs.unlink(p)
    }
  })
}
rm('m',()=>{
  console.log('成功')
})

// function rm(p,callback){
//   fs.stat(p,(err,statObj)=>{
//     if(statObj.isDirectory()){
//       //是目录 查看有多少文件
//       fs.readdir(p,(err,dirs)=>{
//         dirs = dirs.map(item=>path.join(p,item)) ////[m/s,m/m,m/1.js]
//         //循环 就用递归  当dirs.length = 0 退出
//         function next(index){
//           if(index === dirs.length) return fs.rmdir(p,callback)
//           //处理第一个
//           let currenPath = dirs[index] 
//           //获取到路径走回调 若没有则删除父级
//           rm(currenPath,()=>next(index+1)) 
//         }
//         next(0)
//       })
//     }else{
//       fs.unlink(p)
//     }
//   })
// }

// rm('m',()=>{
//   console.log('成功')
// })