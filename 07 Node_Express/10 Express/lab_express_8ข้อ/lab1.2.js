// โจทย์ Lab 2
// เปลี่ยนมาทำให้รองรับ Post
// เปลี่ยนมาทำให้รองรับ Put
// เปลี่ยนมาทำให้รองรับ Delete

const express = require('express')
const app = express()
app.get('/bye' , (req,res) => {
    res.send("Good bye")
})

app.post('/bye' , (req,res) => { })
app.put('/bye' , (req,res) => { })
app.delete('/bye' , (req,res) => { })
app.listen(5555)