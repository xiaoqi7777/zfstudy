
let EventEmitter = require('events');

class ReadStream extends EventEmitter{
  constructor(path,options={}){
    super();
    this.path = path;
    this.flags = options.flags || 'r';
    this.highWaterMark = options.highWaterMark || 64*1024;
    this.start = options.start || 0;
    this.end = options.end || 0;
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
        this.read()
      }
    })
  }
  read(){
    
  }
}


module.exports = ReadStream