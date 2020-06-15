// โจทย์ Lab 1
// ที่เว็บ http://localhost:5555/bye
// ให้แสดงคำว่า “Good bye”

const express = require('express')
const app = express()


app.get('/bye' , (req,res) => {
    res.send("Good bye")
})

app.listen(5555)
