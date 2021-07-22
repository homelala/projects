const express = require('express');
const templateRegister = require('../lib/templates/Register');
const scheduleController = require('../controller/scheduleController');
var router = express.Router();

router.get('/register',templateRegister.registerSchedule);
router.post('/register',scheduleController.createSchedule);
module.exports = router;
