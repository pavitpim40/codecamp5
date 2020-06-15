var express = require('express')
var router = express.Router() //เรียก module Router มาและสถาปนาตัวเองเป็น Router 


//ไฟล์นี้ใช้แสดงผลต่อจาก /user ในไฟล์ app เพื่อแบ่งหน้าที่กันทำงาน
router.get('/', function (req, res) {
  res.send('No user')
})

router.get('/first', function (req, res) {
  res.send('first on user')
})

router.get('/second', function (req, res) {
  res.send('second on user')
})

module.exports = router

