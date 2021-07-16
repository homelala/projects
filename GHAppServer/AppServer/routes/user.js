const express = require('express');
const db = require('../lib/mysql');
const templateRegister = require('../lib/templates/Register');
const templateLogin = require('../lib/templates/Login');
const userController = require('../controller/userController');
var router = express.Router();

// 임시 회원 가입페이지 
router.get('/register',function(req,res){
    var temp = templateRegister.RegusterUser();
    res.send(temp);
})
// 임시 로그인 페이지
router.get('/login',function(req,res){
    var temp = templateLogin.LoginMember();
    res.send(temp);
})

//유저 회원 등록
router.post('/register_process', userController.createMember);
//Log in
router.post('/LogIn_process',userController.loginMember);
module.exports = router;