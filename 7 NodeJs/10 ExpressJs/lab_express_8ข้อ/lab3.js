// 
// โจทย์ Lab 3
// แสดงรูปอะไรก็ได้ที่ localhost:3000/picture.png
// นอกจากนั้น ให้แสดงคำว่า “404 Not Found”

// Optional: ไม่ว่าจะเข้าที่ไหนใน localhost:3000/user
// ให้แสดงคำว่า “404 User Not Found”

const express = require('express')
const app = express()


app.use('/pic', express.static('./pubLab3'))

app.get('/picture.png', (req,res)=>{
    res.redirect('/pic/mitty.png')
})

app.get('/\*', (req,res)=>{
    res.send("404 User Not Found")
})


app.get('/user\*', (req,res)=>{
    res.send("404 User Not Found")
})


app.listen(3000 ,() => console.log("Server Start...") )