const express = require('express');
const templateRegister = require('../lib/templates/Register');
const db = require('../lib/mysql');
const noticeController = require('../controller/noticeController');
var router = express.Router();

router.get('/register',function(req,res){
    var temp = templateRegister.registerNotice();
    res.send(temp);
})
router.posst('/register_process',noticeController.registerNotice);
router.get('/list',noticeController.noticeList);
module.exports = router;
