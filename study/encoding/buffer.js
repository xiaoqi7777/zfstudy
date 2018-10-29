
// Buffer 缓存 他的展现方式是16进制 
// node中的buffer可以和字符串来转化

// 后续可能会用它实现文件的上传


//如何声明一个buffer
//1、通过数字声明一个buffer
// alloc 申请 申请之后长度就不能更改

// let buf1 = Buffer.alloc(3) //3指代的是字节
// console.log(buf1.length) 

// let buf2 = Buffer.from([1,3,90]) //可以存放数组和字符串
// console.log(buf2) 

// let buf3 = Buffer.from('珠峰')
// console.log(buf3.length) //6  一个汉字3个字节

//2、buffer中有slice方法 buffer也可以循环
// buf3.forEach((item)=>{
//   console.log(item)
// })
//  slice 是浅拷贝 拷贝的是引用地址
//  let  arr = [1,{name:'zf'},2]
//  let  arr1 = arr.slice(1,2)
//  arr1[0].name = 'jw'
//  console.log(arr)


// 如何copy
// 把两个小buffer 拷贝到一个大的内存空间上
let buf1 = Buffer.alloc(12)
let buf2 = Buffer.from('正负')
let buf3 = Buffer.from('培训')
// target targetStart sourceStart  sourceEnd //0代表第一个
// Buffer.prototype.copy = function(target,targetStart,sourceStart,sourceEnd){
//   for(let i=0;i<sourceEnd-sourceStart;i++){
//     target[targetStart+i] = this[sourceStart+1]  
//   }
// }
// buf2.copy(buf1,1,0,3)
// // buf3.copy(buf1,6,0,6)
// console.log(buf1.toString())
// // 如何连接 concat
// let a = Buffer.concat([buf1,buf2],12)
//  console.log(a)

// indexOf 和字符串的index一样
let index = Buffer.from('123*13').indexOf('*')
console.log(index)
// buffer 没有分割的方法