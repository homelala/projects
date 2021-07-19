const express = require('express');
const templateRegister = require('../lib/templates/Register');
const db = require('../lib/mysql');
const membershipController = require('../controller/membershipController');
var router = express.Router();

router.get('/register',function(req,res){
    var temp = templateRegister.RegisterMembership();
    res.send(temp);
})

//회원권 등록
router.post('/register_process', membershipController.createMembership);
//전체 회원권 보기
router.get('/list',membershipController.membershipList);
module.exports = router;
