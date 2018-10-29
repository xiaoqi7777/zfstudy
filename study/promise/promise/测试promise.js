
class Promise{
   
  constructor(executor){
    this.s = '1'
    //状态
    this.status = 'pedding'
    //保存 初始化的结果
    this.value = null
    this.reason = null
    //保存 异步存放的函数
    this.onResolveFn = []
    this.onRejectFn = []

    this.resolve = (data)=>{
      if(this.status === 'pedding'){
        this.status = 'resolved'
        this.value = data
        //异步的时候 执行回调
        this.onResolveFn.forEach((fn)=>{
          fn()
        })
        // console.log('resolve',data,this.status)
      }
    }
    this.reject = (data)=>{
      if(this.status === 'pedding'){
        this.status = 'rejected'
        this.reason = data
        this.onRejectFn.forEach((fn)=>{
          fn()
        })
        // console.log('reject',data,this.status)
      }
    }
    try {
      executor(this.resolve,this.reject)
    } catch (error) {
      this.reject(error)   
    }
  }
  then(onResolve,onReject){
    onResolve = typeof onResolve === 'function'?onResolve:(data)=>{
        return data
    }
    onReject = typeof onReject === 'function'?onReject:(err)=>{
      throw err
  }
    let promise2;
    promise2 = new Promise((resolve,reject)=>{
      if(this.status === 'resolved'){
        // console.log('--------')
        try {
          let x = onResolve(this.value)
          this.resolvePromise(x,promise2,resolve,reject)
        } catch (error) {
          reject(error)
        }

      }
      if(this.status === 'rejected'){
        try {
          let x = onReject(this.reason)
          this.resolvePromise(x,promise2,resolve,reject)
        } catch (error) {
          reject(error)
        }

      }
      if(this.status === 'pedding'){
        this.onResolveFn.push(()=>{
         let x = onResolve(this.value)
         this.resolvePromise(x,promise2,resolve,reject)

        })
        this.onRejectFn.push(()=>{
         let x = onReject(this.reason)
         this.resolvePromise(x,promise2,resolve,reject)

        })
      }
    })
    return promise2
  }
  resolvePromise(x,promise2,resolve,reject){
    // console.log(x,promise2,resolve,reject)
    if(x === promise2) return reject(new TypeError('循环引用'))
    if(x !=null && (typeof x === 'function' || typeof x === 'object')){
        let then = x.then
        if(typeof then === 'function'){
          //说明是一个primose
          then.call(x,(y)=>{
              resolve(y)
          },(r)=>{
              reject(r)
          })
        }else{
          resolve(x)
        }
    }else{
      console.log('jinlai l ')
      resolve(this.value)
    }
  }


}
module.exports = Promise