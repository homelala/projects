const express = require('express');
const templateRegister = require('../lib/templates/Register');
const scheduleController = require('../controller/scheduleController');
var router = express.Router();

router.get('/register',templateRegister.registerSchedule);
router.get('/history',scheduleController.historySchedule);
router.post('/register',scheduleController.createSchedule);
router.post('/list/day',scheduleController.DayScheduleList);
router.post('/list/week',scheduleController.WeekScheduleList);
router.post('/list/month',scheduleController.MonthScheduleList);
router.post('/reserve', scheduleController.reserveSchedule);    
module.exports = router;
