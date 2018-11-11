let http = require('http')

let server = http.createServer();
//创建服务后,回调的方式，当请求到来时才会执行次方法
//会把请求过来的信息 socket => req+res，分配号后出发一个request方法
server.on('request',function(req,res){
  console.log(req.url)
  if(req.url === '/ajax.html'){
    
  }
  if(req.url === '/login'){
    let arr = []
    req.on('data',function (data) { 
      arr.push(data)
    })
    req.on('end',function () {
        let  str = Buffer.concat(arr).toString()
        let str = 'username#=123&@password#=456'
        let obj = require('querystring').parse(str,'&@','#=')

        console.log(obj)


        res.end(obj) //这个里面只能放string 和 Buffer  一般用JSON.stringify(obj)
      //将字符串 变成一个对象 (用正则)
      // let reg = /([^=&*])=([^=&])/g
      // let obj = {}

      // str.replace(reg,function () { 
      //   obj[arguments[1]] = arguments[2]
      //  })
      //  console.log(obj)
    })
  }
  res.end('123--------')

}).listen(3000,'localhost',function(data){
  console.log('服务开启')
})