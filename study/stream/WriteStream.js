let evns = require('events') 
let fs = require('fs')
class WriteStream extends evns{
  constructor(path,options={}){
    super();
    this.path  = path;
    this.flags = options.flags || 'w';
    this.encoding = options.encoding || 'utf8';
    this.autoClose = options.autoClose || true;
    this.highWaterMark = options.highWaterMark || 16*1024;
    this.start = options.start
    this.fd = null
    //如果多次调用write方法 我需要将 其他的放到队列中
    this.cache = []
    //是否正在写入
    this.writing = false
    //当前写入的长度
    this.len = null
    this.pos = this.start  
    //当前是否需要触发这个drain事件
    this.needDrain = false

    this.open()
  }
  open(){
    fs.open(this.path,this.flags,(err,fd)=>{
      if(err){
        console.log('文件错误')
      }else{
        this.fd = fd
        this.emit('open',fd)
      }
    })
  }
  write(chunk,encoding = this.encoding,callback){
    // chunk 不能为 number
    if(typeof chunk === 'number') throw new TypeError('不能为数组')
    chunk = Buffer.from(chunk)
    if(typeof this.fd !== 'number'){
      return this.once('open',()=>this.write(chunk,encoding = this.encoding,callback))
    }
    //当写入的值大于highWaterMark的时候 触发drain
    this.len += chunk.length
    let highWaterMark = this.highWaterMark
    if(this.len>=highWaterMark){
      this.needDrain = true
      console.log('触发drian',chunk)
    }
    if(this.writing){
      // 是
      this.cache.push({
        chunk,
        encoding,
        callback
      })
    }else{
      // 没有
      this.writing = true
      this._write(chunk,encoding,callback) //写入
    }
  }
  _write(chunk,encoding,callback){
    let buf = Buffer.alloc(this.highWaterMark)
    fs.write(this.fd,chunk,0,chunk.length,this.pos,(err,writen)=>{
        //writen 就是当前写入的个数

    })
  }
}

module.exports = WriteStream