//สอนใช้ module เพิ่มเติมของ body
const http = require('http')
const fs = require('fs')
const formBody = require('body/form') // module body

let postHTML = fs.readFileSync('./formpost.html')

http.createServer( (req,res) => {
    if (req.url === '/') 
        return res.end(postHTML)

    formBody(req,res, (err,body) => { //อ่านจาก npmjs.com/package/body
        if (err) {
            res.statusCode = 500 
            return res.end("Have error with body")
        }
    console.log(body.fname + ' ' + body.lname)
    res.writeHead(200)
    res.write(`<p> ชื่อ : ${body.fname} , นามสกุล : ${body.lname}</p><hr>`)
    res.end(postHTML)
    })

}).listen(8080, ()=> {console.log('Server start...')})
