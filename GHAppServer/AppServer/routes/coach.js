const express = require('express');
const templateRegister = require('../lib/templates/Register');
const db = require('../lib/mysql');
const coachController = require('../controller/coachController');
var router = express.Router();

router.get('/register',function(req,res){
    var temp = templateRegister.RegisterCoach();
    res.send(temp);
})

router.post('/register_process', coachController.createCoach);
module.exports = router;
