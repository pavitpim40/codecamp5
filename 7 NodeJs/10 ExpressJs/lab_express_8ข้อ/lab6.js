//Lab
//body จาก POST methods
//เขียนฟังก์ชัน add ของ a และ b โดยใช้ body ในการส่ง a และ b มาให้ Express.js



const express = require('express')
const app = express();
const userRouter = require('./lab6UserRoute')

app.use("/add",userRouter)
app.listen(3000, () => console.log("Server Start..."))