const express = require('express')
const app = express()
const fs =  require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users 

//ตั้งรับรีเควส แล้วแสดงผลเป็น form สำหรับค้นหา
app.get('/search' , (req,res)=> {
    let formHTML =`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <form  action = "/dosearch" method="GET">
        <label for="firstname">First Name</label>
        <Input type="text" name="firstname" placeholder="First Name"></Input>
        <input type="submit"></input>
    </form>
</body>
</html>
    `
    res.send(formHTML) //ส่งไปแสดงหน้าเว็บ
})

//รับ action  dosearch มาค้นหา
app.get('/dosearch' , (req,res)=> {
    res.send(users.filter(x => {
    return   x.firstName.includes(req.query.firstname) //req.query.firstname สกัดตัวqueryที่อยู่หลังคำว่า firstname 
    }))
})

app.listen(3000, ()=>console.log('server start...'))