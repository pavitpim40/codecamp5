const express = require('express')
const router = express.Router()


router.get('/:a/:b' , (req,res)=>{
    let sum = Number(req.params.a) + Number(req.params.b)
    res.send(`sum : ${sum}`)
})

module.exports = router