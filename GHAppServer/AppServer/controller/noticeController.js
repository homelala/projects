const express = require('express');
const templateList = require('../lib/templates/List')
const notices = require('../model/notice.js')
const expressSession = require('express-session');
var app = express();
app.use(expressSession({
    secret:'my key',
    resave: false,
    saveUninitialized:true,
    cookie: {
        maxAge: 1000 * 60 * 60, // 쿠키 유효기간 1시간
    }
}))
module.exports = {
    noticeList:async function(req,res,next){
       var noticeInfo = await notices.noticeList(req.session.gym.GYM_id);
       var template = templateList.noticeList(req,noticeInfo);
       res.send(template);
    },
    registerNotice:async function(req,res,next){
        await notices.insertNotice(req.body,req.session.gym.GYM_id);
        res.redirect('/notice/list');
    }
}