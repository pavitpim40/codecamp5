const express = require('express')
const app = express();
const userRouter = require('./lab5UserRoute')

app.use("/add",userRouter)
app.listen(3000, () => console.log("Server Start..."))