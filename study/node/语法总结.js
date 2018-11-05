/*

  1、事件环
      
      浏览器:
        异步都是队列(队列是先进先出,栈是先进后出,主栈(非异步任务)就是执行栈里面的)
        宏任务- setImmediate(ie下用) settimeout MessageChannel  
        微任务- Promise MutationObserver(监听dom变化 触发事件)

        流程-  默认先调用主栈 主栈执行完后 清空微任务，在取出宏任务队列中的第一个执行
               并且执行完后再次清空微任务，在取第二个宏任务 环
      
      node:
        宏任务- setImmediate setTimeout
        微任务- process.nextTick(()=>{}) (类似于js的promise)

        流程- 每次都把队列清空后 或者达到执行的最大限制切换到下一个队列中会再次执行微任务
              微任务不能递归/循环 不然无限循环(找网上配图)

  2、process
      process.pid       node进程
      process.exit()    停止当前进程(node中断)
      process.cwd()     查找当前绝对定位的目录(vscode当前打开的文件夹和git当前文件)
      process.chdir()   暂时不会
      process.nextTick  异步跟promise差不多(里面不能递归)
      process.env.NODE_ENV  暂时不会
      process.argv      暂时不会
  
  3、path
      __dirname表示的是当前的文件所在的文件夹
      path.join()
      path.resolve(__dirname,'test.js')   这两个都一样 用来拼接地址
      path.extname(1123.js)               输出.js(找后缀)
      path.basename('1.min.js','.js')     输出1.min(通过后缀 找文件路径)

  4、fs 
      fs.accessSync('文件名字') 判断文件是否存在

  5、vm
      vm.runInThisContext(fn)  沙箱 fn放在一个独立的虚拟环境中
      例子
        let b = 2;
        console.log('b1',b)
        let fn = `(function a(){let b = 1;console.log('b2',b)})()`;
        let vm = require('vm');
        vm.runInThisContext(fn);


*/

