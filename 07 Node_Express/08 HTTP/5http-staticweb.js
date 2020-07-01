//------------------- เรียกเปิดไฟล์ในเครื่อง server -----------------//
const http = require('http')
const fs = require('fs')

//สร้างฟังก์ชันอ่านไฟล์
function renderHTML(filename, req, res) {
    fs.readFile(filename , (err,data)=> {   //สั่งอ่านไฟล์ เมื่ออ่านเสร็จเอามาเก็บใน data
        res.writeHead (200, { 'content-type' : 'text/html'})
        res.write(data)  //สั่งเขียน data
        res.end()
    })
    
}


http.createServer( (req,res) => {
    if (req.url === '/') 
    return renderHTML('./index.html' , req, res) //เรียกใช้ฟังก์ชันออ่านไฟล์  -- ใส่return เพื่อให้ออกจากการทำงาน
    if (req.url === '/form') 
    return renderHTML('./form.html' , req, res)
    
    res.writeHead (404, { 'content-type' : 'text/html; charset=utf8'})
    res.write('file not found')
    res.end

}).listen(8080, ()=> console.log('Server start...'))