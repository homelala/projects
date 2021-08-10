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
router.get('/list/active',userController.memberListActive);
router.get('/list/expire',userController.memberListExpire);
//승인 대기 회원 보기
router.get('/list/approve',userController.memberListApprove);
//승인 하기
router.post('/approve',userController.approveMember);
//회원 정보 보기 
router.get('/info',userController.memberInfo);
//회원 수강 내역 보기
router.get('/info/history',userController.memberHistory)
//회원 정보 수정하기
router.get('/info/update',userController.memberUpdate);
router.post('/info/update_process',userController.memberUpdateProcess)
//회원권 구매
router.get('/membership',templateRegister.buyMembership);
router.post('/membership/buy',userController.buyMembership)
module.exports = router;