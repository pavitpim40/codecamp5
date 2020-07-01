const express = require('express')
const app = express()

// 1.ใช้้ middleware แยก router
// ส่งการทำงานให้ไฟล์อื่น -- ถ้าจะใช้ middleware ให้นึกถึง .use
const userRoute =  require('./4.2userRoute') //เรียก require มาจากไฟล์อื่น (ไฟล์อื่นต้อง exportมาให้ใช้ด้วย)
app.use('/user', userRoute) //ดักจับ /user และส่งให้ userRoute 

// 2.ใช้้ middleware เรียกไฟล์ static
//สร้าง folder public
// ใช้คำสั่ง express.static สามารถใช้ไฟล์ใต้โฟลเดอร์ public ได้เลย
app.use( '/pub',express.static('./public')) 

// 2.1 เรียกเมื่อเป็น root   
app.get('/' ,(req,res)=>{
    res.redirect('/pub/form1.html')
})
// 2.2 เรียกเมื่อเป็น /sample   
app.get('/sample' ,(req,res)=>{
    res.redirect('/pub/sample.json')
})

app.listen(3000, ()=> console.log('server start แล้วจ้าาาาาา'))