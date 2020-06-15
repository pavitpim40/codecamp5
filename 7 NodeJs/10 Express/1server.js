//----------------- Code แบบ Express ---------------------// 

const express = require('express')
const app = express() //ตัวแทนของ http.createServer

//แยกการตอบสนอง request ได้โดยไม่ต้องซ้อน if
app.get('/', (req,res) => {
    res.send("Hello from Express")
})
app.get('/user', (req,res) => {
    res.send("User page from Express")
})
//ไม่ต้องเขียนดักเวลาผู้ใช้ใส่ url มั่ว express จะทำ 404ให้เอง
app.listen(3000, () => console.log('Express server start..'))

//----------------- Code แบบ HTTP ---------------------// 

const http = require('http')
const server = http.createServer()

server.on ('request' , (req,res) => { //ต้องใส่ if 
    if (req.url === '/') 
        res.end('Hello from HTTP-NodeJS')
    if (req.url === '/user') 
        res.end('This is user page')
    
//ต้องเขียนดักเวลาผู้ใช้ใส่ url มั่ว
}).listen(8080, ()=> console.log('HTTP Server start...8080'))