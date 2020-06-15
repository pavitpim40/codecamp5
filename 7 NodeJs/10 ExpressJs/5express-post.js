//-------------------------พิธีกรรมไหว้ครู---------------------------//
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs =  require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users 

//------------------------ตัว MiddleWare -----------------------------//

app.use(bodyParser.urlencoded({ extended: true })) // แปลงข้อความในฟอร์ม
app.use('/pub', express.static('./public'))

//-----------------------ตัว Request Respond-------------------------//

// ตั้งค่าให้ root เรียก Static ไฟล์แล้วไปเปิดฟอร์ม
app.get('/' , (req,res) => {
    res.redirect('/pub/form1.html')
} )

//หลังจากค้นหาฟอร์มจะมาทำบรรทัดนี้
app.post('/dosearch' , (req,res)=> {
    console.log(req.body) //parser มาเป็น body
    res.send(users.filter(x => {
    return   x.firstName.includes(req.body.firstname) 
    //req.body.firstname สกัดตัวที่อยู่หลังคำว่า firstname จาก body
    //เปรียบเทียบกับไฟล์3 ทีใช้ req.query.firstname
    }))
})

app.listen(3000, () => console.log('Server start ฮะ'))