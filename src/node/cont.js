var fs = require('fs')
var http = require('http')
var params = {
  'id': '6',
  'name': '六子',
  'desc': '人类'
}
function writeJson (params) {
  fs.readFile('./da.json', function (err, data) {
    if (err) {
      return console.error(err)
    }
    var person = data.toString()// 将二进制的数据转换为字符串
    person = JSON.parse(person)// 将字符串转换为json对象
    person.data.push(params)// 将传来的对象push进数组对象中
    person.total = person.data.length// 定义一下总条数，为以后的分页打基础
    var str = JSON.stringify(person)// 因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    fs.writeFile('./da.json', str, function (err) {
      if (err) {
        console.error(err)
      }
      console.log('----------新增成功-------------')
    })
  })
}
writeJson(params)
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello Node.js ')
}).listen(8080)
console.log('Server running at http://127.0.0.1:3000/')
