
let Koa = require('./application')
let server = new Koa()

server.use((ctx,next)=>{
  ctx.body = 123
  next()
  ctx.body = 2000

  //request 和 response 一样
  // console.log('11',ctx.request.url)
  // console.log('11',ctx.path)//获取路径
  // console.log(ctx.url)//做了一层拦截 当我们在ctx上取值 会去ctx.request上去取值

})
server.use((ctx,next)=>{
  //request 和 response 一样
  // console.log('22',ctx.path)//获取路径
  ctx.body = 12333333

  next()
 
  // console.log(ctx.url)//做了一层拦截 当我们在ctx上取值 会去ctx.request上去取值

})
server.listen('3000','localhost',()=>{
  console.log('server start 3000')
})