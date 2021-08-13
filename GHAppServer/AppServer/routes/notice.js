const express = require('express');
const templateRegister = require('../lib/templates/Register');
const db = require('../lib/mysql');
const noticeController = require('../controller/noticeController');
var router = express.Router();

router.get('/register',function(req,res){
    var temp = templateRegister.registerNotice();
    res.send(temp);
})
router.post('/register_process',noticeController.registerNotice);
router.get('/list',noticeController.noticeList);
router.get('/info',noticeController.noticeInfo);
router.get('/update',noticeController.noticeUpdate);
router.post('/update_process', noticeController.noticeUpdateProcess);
router.post('/delete', noticeController.noticeDelete)
module.exports = router;
