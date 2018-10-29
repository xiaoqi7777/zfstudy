
function EventEmitter(){
  this.obj = Object.create(null)
}

EventEmitter.prototype.on = function (event,callback) {
  this.obj[event] = callback
}
EventEmitter.prototype.emit = function (event,callback) {
  this.obj[event]() 
}

module.exports = EventEmitter