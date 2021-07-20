const express = require('express');
const templateRegister = require('../lib/templates/Register');
const classTypeController = require('../controller/classTypeController');
var router = express.Router();

router.get('/register',templateRegister.RegisterClass)
router.post('/register_process',classTypeController.createClassType);
router.get('/list',classTypeController.classTypeList);
module.exports = router;
