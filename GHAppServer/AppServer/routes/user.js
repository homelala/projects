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
//유효 회원 보기
router.get('/list',userController.memberListActive);
//승인 대기 회원 보기
router.get('/list/approve',userController.memberListApprove);
//승인 하기
router.post('/approve',userController.approveMember);
//회원 정보 보기 
router.get('/info',userController.memberInfo);


module.exports = router;