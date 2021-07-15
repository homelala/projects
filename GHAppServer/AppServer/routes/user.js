const express = require('express');
const db = require('../lib/mysql');
const template = require('../lib/templates/Register');
const userController = require('../controller/userController');
var router = express.Router();

// 임시 회원 가입페이지 
router.get('/register',function(req,res){
    var temp = template.RegusterUser();
    res.send(temp);
})

//유저 회원 등록
router.post('/register_process', userController.createMember);

module.exports = router;