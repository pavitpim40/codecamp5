const http = require('http')
const fs = require('fs')


let postHTML = fs.readFileSync('./formpost.html')

http.createServer( (req,res) => {
    let body = ''
    //chunk เริ่มไหลเข้ามา 
    req.on('data' , (chunk) => {
        body += chunk 
    })
    //chunk มาครบแล้ว
    req.on('end', ()=> {
        body = decodeURI(body) //ถอดรหัส ทำให้บรรทัด 18 แสดงผลไม่เพี้ยน
        console.log(`Body : ${body}`)
        res.writeHead(200)
        res.write('<p>' + body + '</p><hr>')
        res.end(postHTML)  //แสดงหน้า form ตัวเดิมอีกครั้ง
    })
}).listen(8080, ()=> {
    console.log('Server Start....');
})