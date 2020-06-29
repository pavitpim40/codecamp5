const express = require('express')
const router = express.Router();
const managerControllers = require('../controllers/Manager')


//ตัวสับ Route ที่บอกว่าถ้า url มาแบบนี้ให้ทำฟังก์ชันไหน
router.get('/', managerControllers.getAllManagers)
router.get('/:id', managerControllers.getManagersById)
router.post('/', managerControllers.createManager)
router.put('/:id', managerControllers.updateManager)
router.delete('/:id', managerControllers.deleteManager)

//export ไปให้ index ใช้
module.exports = router