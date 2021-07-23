const express = require('express');
const templateList = require('../lib/templates/List')
const schedules = require('../model/schedule');
const reserveBlocks = require('../model/reserveBlock');
const expressSession = require('express-session');
const { log } = require('console');
const { end } = require('../lib/mysql');
var app = express();
app.use(expressSession({
    secret:'my key',
    resave: false,
    saveUninitialized:true,
    cookie: {
        maxAge: 1000 * 60 * 60, // 쿠키 유효기간 1시간
    }
}))
async function insert(endDay,dayList,req,period,post){
    var tempDay = new Date(post.startDay);
    await schedules.insertSchedule(req.body,req.session.gym.GYM_id,id,tempDay);
    while(tempDay<=endDay){
        console.log(tempDay,endDay);
        var start = tempDay.getDay();
        var nextSun = tempDay.getDate()-start + period;
        tempDay.setDate(nextSun);
        temp = new Date(tempDay);
        for(var i =0;i<dayList.length;i++){
            tempDay.setDate(temp.getDate()+parseInt(dayList[i]));
            if(tempDay>endDay){
                continue;
            }
            var able = await reserveBlocks.checkBlock(tempDay,req.session.gym.GYM_id);
            if(able){
                await schedules.insertSchedule(req.body,req.session.gym.GYM_id,id,tempDay);
            }         
        }  
    }
}
module.exports = {
    // 1. 검사하고 2. 카테고리 번호 받아와서 3. 삽입
    createSchedule:async function(req,res,next){
        var post = req.body;
        var startDay = new Date(post.startDay);
        var endDay = new Date(post.endDay);
        var dayList = post.day;
        var id = await schedules.maxCategoryId(req.session.gym.GYM_id);
        if(post.cycle == "undefined"){
            var able = await reserveBlocks.checkBlock(startDay,req.session.gym.GYM_id);
            if(able){
                try{
                    await schedules.insertSchedule(req.body,req.session.gym.GYM_id,id,startDay);
                }catch(err){
                    console.log(err);
                }
            }
            res.redirect('/');
        }else{
            switch(post.cycle){
                case "1":
                    try{
                        await insert(endDay,dayList,req,7,post);
                    }catch(err){
                        console.log(err);
                    }
                    break; 
                case "2":
                    try{
                        await insert(endDay,dayList,req,14,post);
                    }catch(err){
                        console.log(err);
                    }
                    break;
                case "3":
                    try{
                        await insert(endDay,dayList,req,21,post);
                    }catch(err){
                        console.log(err);
                    }
                    break;
                case "4":
                    try{
                        await insert(endDay,dayList,req,28,post);
                    }catch(err){
                        console.log(err);
                    }
                    break;
            }
            res.redirect('/');
        }      
    }
}