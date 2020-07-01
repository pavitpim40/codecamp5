//แสดง ‘dog walk’	ที่ http://localhost:3000/dog/walk/
//แสดง ‘dog play’		ที่ http://localhost:3000/dog/play/
//แสดง ‘cat eat’		ที่ http://localhost:3000/cat/eat/
//แสดง ‘cat sleep’		ที่ http://localhost:3000/cat/sleep/

const express = require('express')
const app = express()
const userRoute = require('./lab2userRoute')

app.use('/',userRoute)

app.listen(3000, ()=> console.log('server start แล้วจ้าาาาาา'))