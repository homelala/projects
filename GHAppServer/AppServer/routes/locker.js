const express = require('express');
const templateRegister = require('../lib/templates/Register');
const db = require('../lib/mysql');
const members = require('../model/Members');
const coachController = require('../controller/coachController');
const lockerController = require('../controller/lockerController');
var router = express.Router();

router.post('/register',lockerController.templateRegisterLocker);
router.post('/register_process', lockerController.registerLocker);
router.get('/count',lockerController.updateCount);
router.post('/count_register',lockerController.updateCountProcess);
router.get('/list',lockerController.lockerList);
module.exports = router;
