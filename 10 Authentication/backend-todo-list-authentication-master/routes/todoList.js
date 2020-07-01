const express = require('express');
const router = express.Router();
const todoListContollers = require('../controllers/todoList');

//นำ passport มาใช้
const passport = require('passport');
//เอา passport ที่ชื่อ jwt มาทำการ Authenticate แล้วเก็บไว้ในตัวแปร authentication
const authentication =  passport.authenticate("jwt", {session: false})

router.get('/',authentication ,todoListContollers.getTodoList);
router.post('/', authentication,todoListContollers.addTodoList);
router.put('/:id', authentication,todoListContollers.updateTodoList);
router.delete('/:id', authentication,todoListContollers.deleteTodoList);

module.exports = router;