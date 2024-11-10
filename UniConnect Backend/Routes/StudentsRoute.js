const express = require('express');
const router = express.Router();
const StudentsController = require('../Controllers/StudentsController.js');

router.get('/students', StudentsController.getAllStudents);
router.post('/index', StudentsController.index);

module.exports = router;