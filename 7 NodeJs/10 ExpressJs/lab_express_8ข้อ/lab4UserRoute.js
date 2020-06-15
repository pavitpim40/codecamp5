// แก้ UserRoute.js ให้เป็นแบบนี้
// และลอง path ต่อไปนี้
// localhost:3000/user/?id=hello // log ได้  hello 
// localhost:3000/user/?id=1234  // log ได้ 1234
// localhost:3000/user/?id=1&2   // log ได้ 1 เพราะจบการทำงานหลัง and 

const express = require('express')
const router = express.Router()


router.get('/', (req,res)=> {
    res.send("We've got your Id request")
    console.log(`${req.query.id}`);
})


module.exports = router