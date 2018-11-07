
let fs = require('fs')

let ws = fs.WriteStream('test.js',{
  flag:'w',
  encoding:'utf8',
  antoClose:true,
  hightWaterMark:2,//预估每次写入的量
})

// ws可写流
// flag
ws.write('a','utf8',()=>{
  console.log('data')
})
ws.write('b','utf8',()=>{
  console.log('data')
})
ws.on('drain')