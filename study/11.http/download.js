let http = require('http')
let start = 0
let fs = require('fs')
let ws = fs.createWriteStream('2.txt')
let pause = true;
process.stdin.on('data',function(data){
  if(data.toString().includes('p')){
    pause = true
  }else{
    pause = false
    download()
  }
})

function download() {
  http.get({
    host: 'localhost',
    port: 3000,
    headers: {
      'Range': `bytes=${start}-${start+4}`
    }
  }, function (res) {
    let total = res.headers['content-range'].split('/')[1];
    console.log(total)
    res.on('data', function (data) {
      ws.write(data)
      start += 5
      if (start < total && !pause) {
        download()
      }
    })
  })
}
download()