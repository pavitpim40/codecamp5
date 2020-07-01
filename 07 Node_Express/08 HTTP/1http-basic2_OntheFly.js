// ------------------- ANOTHER VER ----------------------//
// ใส่ callback (req,res) ต่อหลัง .CreateServer เลย
// แบบนี้ไม่ต้องทำ server.on
// callback ข้างในก็คล้ายกับ key and value ของ http.creaServer (ถึงเอาไปทำ server.on ต่อได้)

const http = require('http')
const server = http.createServer( (req,res) => {
    console.log('request coming...');
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('Hello, world')
    res.end()
}).listen(8080)
