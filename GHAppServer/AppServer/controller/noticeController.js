const express = require('express');
const templateList = require('../lib/templates/List')
const templateInfo = require('../lib/templates/info')
const templateRegister = require('../lib/templates/Register')
const notices = require('../model/notice.js')
const expressSession = require('express-session');
const notice = require('../model/notice.js');
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
    },
    noticeInfo:async function(req,res,next){
        var noticeInfo = await notices.noticeInfo(req.session.gym.GYM_id, req.query.id);
        var template = await templateInfo.noticeInfo(req, noticeInfo);
        res.send(template);
    },
    noticeDelete: async function(req,res,next){
        await notices.noticeDelete(req.body, req.session.gym.GYM_id);
        res.redirect('/notice/list');
    },
    noticeUpdate:async function(req,res,next){
        var noticeInfo = await notices.noticeInfo(req.session.gym.GYM_id, req.query.id);
        var template = templateRegister.noticeUpdate(req,noticeInfo);
        res.send(template)
    },
    noticeUpdateProcess:async function(req,res,next){
        await notice.noticeUpdateProcess(req.body,req.session.gym.GYM_id, req.query.id);
        res.redirect(`/notice/info?id=${req.body.id}`);
    }
}