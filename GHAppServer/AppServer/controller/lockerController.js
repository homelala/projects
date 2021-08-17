const express = require('express');
const templateList = require('../lib/templates/List')
const templateRegister = require('../lib/templates/Register')
const gyms = require('../model/gym');
const members = require('../model/Members')
const lockers = require('../model/locker')
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
    templateRegisterLocker:async function(req,res,next){
        var memberInfo = await members.memberList(req.session.gym.GYM_id);
        var template = await templateRegister.RegisterLocker(req,memberInfo);
        res.send(template);
    },
    updateCount:async function(req,res,next){
        var template = await templateRegister.RegisterLockerCount(req);
        res.send(template);
    },
    updateCountProcess:async function(req,res,next){
        await gyms.updateCount(req.body,req.session.gym.GYM_id);
        for(var i =0;i<req.body.lockerCount;i++){
            await lockers.createLoker(req.body, req.session.gym.GYM_id);
        }
        res.redirect('/');
    },
    lockerList: async function(req,res,next){
        var lockerInfo = await lockers.lockerList(req.session.gym.GYM_id);
        var template = await templateList.lockerList(req,lockerInfo);
        res.send(template);
    },
    registerLocker: async function(req,res,next){
        await lockers.registerLocker(req.body, req.session.gym.GYM_id);
        res.redirect('/locker/list');
    }
}