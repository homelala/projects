const express = require('express');
const template = require('../lib/templates/home');
const templateRegister = require('../lib/templates/Register');
const templateLogin = require('../lib/templates/Login');
const GymController = require('../controller/gymController');
const gymController = require('../controller/gymController');
var router = express.Router();

router.get('/',function(req,res){
    var temp = template.home(req);
    res.send(temp);
})

//임시 페이지
router.get('/register',function(req,res){
    var temp = templateRegister.RegisterGYM();
    res.send(temp);
})
router.get('/login',function(req,res){
    var temp = templateLogin.LoginGYM();
    res.send(temp);
})
router.get('/setting',function(req,res){
    var temp = templateRegister.SettingGYM();
    res.send(temp);
})
router.post('/statistics',GymController.showStatistics)
router.post('/register_process', GymController.createGYM);
router.post('/login_process', GymController.LoginGYM);
router.post('/setting_process',gymController.updateGymSetting);

module.exports = router;