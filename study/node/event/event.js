let p=require('./EventEmitter')
let {inherits} = require('util')
function Gril(){
  p.call(this)
}
inherits(Gril,p)
let gril = new Gril
gril.on('女号',function a(){
  console.log('123')
})
gril.emit('女号')