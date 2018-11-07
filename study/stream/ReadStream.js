
let EventEmitter = require('events');
let fs = require('fs')
class ReadStream extends EventEmitter{
  constructor(path,options={}){
    super();
    this.path = path;
    this.flags = options.flags || 'r';
    this.highWaterMark = options.highWaterMark || 3;
    this.start = options.start || 0;
    this.end = options.end || 6; //读取到哪儿
    this.encoding = options.encoding || null;
    
    //默认情况叫 非流动模式 如果你监听了on('data') 变成流动模式
    this.flowing = null;
    //读取文件的位置
    this.pos = this.start;
    //判断用户监听了什么事件
    this.on('newListener',(type)=>{
      if(type === 'data'){
        //流动模式
        this.flowing = true
        //开始读取数据
        this.open()// 在开始读取
        this.read()// 先打开

      }
    })
  }
  open(){
    console.log('open')
    fs.open(this.path,this.flags,(err,fd)=>{
      if(err){
        this.emit('error',err)
      }else{
        this.fd = fd
        this.emit('open',this.fd)
      }
    })
  }
  read(){
    if(typeof this.fd !== 'number'){
      return this.once('open',()=>this.read())
    }
    let buffer = Buffer.alloc(this.highWaterMark)
    //this.pos 偏移量 
    let offset = this.end? Math.min((this.end - this.pos +1),this.highWaterMark):this.highWaterMark
    if(offset === 0){
      console.log('进来了')
      this.flowing = null
      this.emit('end')
      return this.close()
    }
    console.log(offset)
    fs.read(this.fd,buffer,0,offset,this.pos,(err,bytesRead)=>{
      this.pos += bytesRead
      if(bytesRead>0){
        if(this.flowing){
          this.emit('data',buffer.slice(0,bytesRead))
          this.read()
        }
      }else{

      }
    })
  }
  close(){
    fs.close(this.fd,()=>{
      this.emit('close')
    })
  }
}


module.exports = ReadStream