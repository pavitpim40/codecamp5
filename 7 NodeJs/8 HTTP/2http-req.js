//------------ ลองใช้คำสั่งต่างๆของ argument : request ---------//

const http = require('http')
const server = http.createServer() //สร้างแบบ Instant

server.on('request' , (req,res) => {    
    
    let {httpVersion, method,  url} = req // destructor
    console.log(req.headers.host)
    console.log(httpVersion)
    console.log(method)
    console.log(url)
})

server.listen(8080)

