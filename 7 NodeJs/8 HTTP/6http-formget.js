const http = require('http')
const fs = require('fs')
const url = require('url')  //เรียกใช้ module เพราะจะใช้ url.parse


function renderHTML(filename,req,res){
    fs.readFile(filename , (err,data) => {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(data)
        res.end()
    })
}


http.createServer( (req, res) => {
    
    //บรรทัดนี้สำคัญ ใช้แปล,วิเคราะห์ประโยค url ไปใช้ใน line27 (ถ้าไม่ทำ หลังส่ง form จะหลุดไป 404)
    let p_url = url.parse(req.url,true)
    //console.log(p_url.pathname);
    //console.log(p_url.query);
    
    if (req.url === '/')
    return renderHTML('./formget.html', req ,res)
    
    //บรรทัดนี้ทำงานหลังกดส่ง form -- เราตั้งใชื่อ action ใน html ว่า /getdata
    //parse url มาก่อนหน้าในบรรทัด 18 แล้วเอาแค่ pathname มาใส่ if condition
    if (p_url.pathname === '/getdata') {
        res.writeHead(200, {'content-type' : 'text/html; charset=utf8'}) //ส่งข้อมูลไปอีกรอบ บอกก่อนว่าจะเป็นhtml
        res.write(`<h3>We got you data</h3>`)
        res.write(`<p> ชื่อ : ${p_url.query.fname} </p>`)
        res.write(`<p> นามสกุล : ${p_url.query.lname}</p>`)
        return res.end()

    }
    console.log(req.url);
    res.writeHead(404, {'content-type' : 'text/html'})
    res.write(req.url)
    res.end()

}).listen(8080, ()=> console.log('Server start...'))