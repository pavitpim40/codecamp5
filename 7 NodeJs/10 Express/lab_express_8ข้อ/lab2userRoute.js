var express = require('express')
var router = express.Router()


router.get('/dog/walk' , (req,res)=> {
    res.send ('dog walk')
})
router.get('/dog/play' , (req,res)=> {
    res.send ('dog play')
})
router.get('/cat/eat' , (req,res)=> {
    res.send ('cat eat')
})
router.get('/cat/sleep' , (req,res)=> {
    res.send ('cat sleep')
})

module.exports = router
