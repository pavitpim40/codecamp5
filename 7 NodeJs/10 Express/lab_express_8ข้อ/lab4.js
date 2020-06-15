// แก้ UserRoute.js ให้เป็นแบบนี้
// และลอง path ต่อไปนี้
// localhost:3000/user/?id=hello // log ได้  hello 
// localhost:3000/user/?id=1234  // log ได้ 1234
// localhost:3000/user/?id=1&2   // log ได้ 1 เพราะจบการทำงานหลัง and 

const express = require('express')
const app = express()
const userRoute = require('./lab4UserRoute')
app.use('/user',userRoute)

//app.get('/' , (req,res) => console.log("404 User not found"))

app.listen( 3000 , ()=> console.log("Server Start...."))