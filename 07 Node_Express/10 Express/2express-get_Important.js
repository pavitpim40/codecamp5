const express = require('express')
const app = express()
const fs =  require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json')) //อ่านไฟล์ได้ object 
let users = data.users //เอา key users ที่มี value เป็น array
let listcounter = 0


//1.แสดงผลเป็น html
app.get('/listname', (req,res) => {
    let outHTML = '<ol>'
    users.forEach( x => {
        outHTML += `<li>  ${x.firstName} ${x.lastName} <b> ${x.emailAddress}</b> </li>`
    })
    outHTML += '</ol>'
    res.send(outHTML)
})

//2.1 ทำให้หน้าเว็บของเราหาจาก id ได้ 
app.get('/users/:uid/' , (req,res)=> {
    res.send(users[parseInt(req.params.uid)-1])  //req.params.uid เป็น string
})
//challenge ถ้าต้องการพิมพ์เป็นช่วง เช่น id =2 ถึง id =5 ทำไง
// เพิ่ม /:eid แล้วเอาไปวนลูป 

//2.2 ปรับแก้ให้ค้นหาจากชื่อได้
app.get('/username/:uname', (req,res)=> {
    res.send(users.find(x => x.firstName === req.params.uname))
})

//2.3 ค้นหาจาก query  //แก้ .params เป็น .query
app.get('/search' , (req,res) => {
    res.send(users.find(x => x.firstName === req.query.uname))
    
})

// 3.ตั้งด่านรับ request (ตั้ง middleware)
app.use('/list', (req,res,next) => {
    listcounter ++ 
    console.log(`Request to /list number : ${listcounter}`)
    next() //บรรทัดนี้ส่งต่อให้ code ข้างล่างที่เป็น path เดียวกัน -- ถ้าไม่ใส่ browser จะหมุนตลอด -- แต่counter ขึ้น 
})
app.get('/list', (req,res)=> {
    res.send(users)
})
app.listen(3000, ()=>console.log('server start...'))