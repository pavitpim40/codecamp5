const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.get( '/' , (req,res) => {
    let formHTML =`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <form  action = "/add/finish" method="POST">
        <h3> Add two number.<br> We'll show your summation </h3>
        <label for="firstname">First Number</label><br>
        <Input type="number" name="firstnumber" placeholder=""></Input><br>
        <label for="firstname">Second Number Number</label><br>
        <Input type="number" name="secondnumber" placeholder=""></Input><br>
        <input type="submit"></input>
    </form>
</body>
</html>`
    res.send(formHTML) //ส่งไปแสดงหน้าเว็บ

})

router.post('/finish' , (req,res)=>{
    
    console.log(req.body);
    let a = parseInt(req.body.firstnumber)
    let b = parseInt(req.body.secondnumber)
    let sum = a+b
    res.send(`Your Sum : ${sum}`)
})

module.exports = router