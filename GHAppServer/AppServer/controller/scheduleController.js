const express = require('express');
const templateList = require('../lib/templates/List')
const schedules = require('../model/schedule');
const reserveBlocks = require('../model/reserveBlock');
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
    // 1. 검사하고 2. 카테고리 번호 받아와서 3. 삽입
    createSchedule:function(req,res,next){
        post = req.body;
        startDay = new Date(post.startDay);
        if(post.cycle == "undefined"){
            reserveBlocks.checkBlock(startDay,req.session.gym.GYM_id).then(function(result){
                console.log(result);
                schedules.maxCategoryId(req.session.gym.GYM_id).then(function(id){
                    console.log(id);
                    schedules.insertSchedule(req.body,req.session.gym.GYM_id,id).then(function(result){
                        res.redirect('/');
                    })
                })
            }).catch(function(err){
                res.redirect('/');
            })
        }      
    }
}