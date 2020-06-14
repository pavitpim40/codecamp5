// ------------------- REFRACTOR ----------------------//
const http = require('http')
//ทำ respond เป็นฟังก์ชัน ไว้ใช้ต่อ .CreateServer
function app(req,res) {
    console.log('request coming...');
    res.writeHead(200, {'Content-type' : 'text/html',})
    res.write('Hello, world')
    res.end()
}

http.createServer(app).listen(8080)  
//app ต้องไม่มีวงเล็บแบบนี้ app() 
//ถ้า invoke app เลยจะกลายเป็นเอาเนื้อหาในฟังก์ชันมาเป็น argument -- ไม่ใช่ callback