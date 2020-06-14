// ------------------- FULL CODE ----------------------//
// -----สร้าง instant ของ createServer แล้วเอาไปใช้ต่อ ----//
const http = require('http')
const server = http.createServer()

// .on คือตัวรอฟังรีเควสจากฝัั่ง client
// request ต่อท้ายด้วย url แบบไหนก็ได้ ขอแค่ request
server.on('request', (req,res) => {
    let {httpVersion,method,url} = req //Destructure Request
    console.log('request coming...');
    console.log(req.headers.host); //แสดงชื่อ address
    console.log(httpVersion); 
    console.log(method); // มี 4 แบบ ตอนนี้ใช้ GET
    console.log(url);
    
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('Hello, world')
    res.end()
})

//ระบุว่า server ที่สร้างขึ้นมา สามารถติดต่อได้ทาง port ไหน
server.listen(8080)





