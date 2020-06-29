const express = require('express')
const router = express.Router();
const brachControllers = require('../controllers/Branch')

router.get('/', brachControllers.getAllBranches)
router.post('/', brachControllers.createNewBranchesAndManager)
module.exports = router