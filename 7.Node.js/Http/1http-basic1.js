// ########## FULL CODE 
// const http = require('http')
// const server = http.createServer()

// server.on('request', (req,res) => {
//     console.log('request coming...');
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hello, world')
//     res.end()
// })
// server.listen(8080)



// ########## REFRACTOR
// const http = require('http')
// const server = http.createServer( (req,res) => {
//     console.log('request coming...');
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hello, world')
//     res.end()
// }).listen(8080)


// ########## ANOTHER VER
const http = require('http')

function app(req,res) {
    console.log('request coming...');
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('Hello, world')
    res.end()
}

http.createServer(app).listen(8080)  // ถ้า invoke app เลยจะกลายเป็นเอาเนื้อหาในฟังก์ชันมาเป็น argument -- ไม่ใช่ callback