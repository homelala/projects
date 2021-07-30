const express = require('express');
const templateList = require('../lib/templates/List')
const schedules = require('../model/schedule');
const coachs = require('../model/coach');
const members = require('../model/Members');
const reserveBlocks = require('../model/reserveBlock');
const expressSession = require('express-session');
const membership = require('../model/membership');
var app = express();
app.use(expressSession({
    secret:'my key',
    resave: false,
    saveUninitialized:true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 쿠키 유효기간 1시간
    }
}))
async function insert(endDay,dayList,req,period,post){
    var tempDay = new Date(post.startDay);
    await schedules.insertSchedule(req.body,req.session.gym.GYM_id,id,tempDay);
    while(tempDay<=endDay){
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
                var insertScheduleInfo = await schedules.insertSchedule(req.body,req.session.gym.GYM_id,id,tempDay);
                if(insertScheduleInfo !== undefined){
                    for(var i =0;i<post.coach_id.length;i++){
                        await schedules.insertCoachSchedule(req.session.gym.GYM_id,insertScheduleInfo.insertId,post.coach_id[i],);
                    }
                }
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
                    var insertScheduleInfo = await schedules.insertSchedule(req.body,req.session.gym.GYM_id,id,startDay);
                    if(insertScheduleInfo !== undefined){
                        for(var i =0;i<post.coach_id.length;i++){
                            await schedules.insertCoachSchedule(req.session.gym.GYM_id,insertScheduleInfo.insertId,post.coach_id[i],);
                        }
                    }
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
    },
    DayScheduleList:async function(req,res,next){
        var scheduleInfo = await schedules.DayScheduleList(req.body, req.session.gym.GYM_id);
        var userInfo = await members.memberList(req.session.gym.GYM_id ,0);
        var template = await templateList.scheduleList(req,scheduleInfo,userInfo);
        res.send(template);
    },
    MonthScheduleList:async function(req,res,next){
        var scheduleInfo = await schedules.MonthScheduleList(req.body, req.session.gym.GYM_id);
        var userInfo = await members.memberList(req.session.gym.GYM_id ,0);
        var template = await templateList.scheduleList(req,scheduleInfo,userInfo);
        res.send(template);
    },
    WeekScheduleList:async function(req,res,next){
        var scheduleInfo = await schedules.WeekScheduleList(req.body, req.session.gym.GYM_id);
        var userInfo = await members.memberList(req.session.gym.GYM_id ,0);
        var template = await templateList.scheduleList(req,scheduleInfo,userInfo);
        res.send(template);
    },
    //1. 예약 -> 인원 증가 -> 회원권 감소 -> 현재 예약 인원 확인 후 대기 결정 -> 수강 내역 추가
    // 일일 최대 등록 수, 주간 최대 등록 수, 스케줄 총원 확인, 회원 멤버쉽 총원 확인, 스케줄 날짜 확인, 회원권 날짜 확인
    reserveSchedule: async function(req,res,next){
        //예약 가능 시간 인지 확인
        var today = new Date();
        var checkDaySchdedule = await schedules.selectSchedule(req.body, req.session.gym.GYM_id);
        var reserveTime = await new Date(checkDaySchdedule[0].startDay.getFullYear(), 
                                    checkDaySchdedule[0].startDay.getMonth(), 
                                    checkDaySchdedule[0].startDay.getDate()
                                    ,parseInt(checkDaySchdedule[0].startTime.slice(0,2))+9
                                    ,parseInt(checkDaySchdedule[0].startTime.slice(3,5))-checkDaySchdedule[0].reservableTime
                                    ,parseInt(checkDaySchdedule[0].startTime.slice(6,8)));
        var checkReserveAble = (reserveTime > today) // 예약 가능 시간인지 확인
        //스케줄 총원 확인
        var checkTotalReserve = (checkDaySchdedule[0].totalReservation > checkDaySchdedule[0].reserveNumber); // 현재 스케줄 예약 총원 확인
        // 회원이 가지고 있는 멤버쉽 id 찾기 (기간, 수업 방식, 회원 ID 확인)
        var membershipInfo= await members.selectMembershipId(req.body,req.session.gym.GYM_id,today);
        var membership_id = membershipInfo[0].membership_id // 사용하는 멤버쉽
        var checkMemberchipCount = (membershipInfo[0].maxCountClass >membershipInfo[0].countClass); //멤버쉽 사용 가능 여부

        // 일일 최대 등록수, 주간 최대 등록 수 확인
        var checkMaxAttend = await membership.selectMember_Mebership(req.body,req.session.gym.GYM_id,membership_id);
        var maxDayAttend = (checkMaxAttend[0].maxDayAttend > checkMaxAttend[0].DayAttend);
        var maxWeekAttend = (checkMaxAttend[0].maxWeekAttend > checkMaxAttend[0].weekAttend);
        console.log(checkReserveAble, checkTotalReserve, maxDayAttend, maxWeekAttend)
        // if(checkScheduleTotal[0].reserveNumber != checkScheduleTotal[0].totalReservation){
        //     await schedules.reserveSchedule(req.post,req.session.gym.GYM_id);
        // }else{
        //     await schedules.waitingSchedule(req.post,req.session.gym.GYM_id);
        // }
        // await members.decreaseMebership(req.post, req.session.gym.GYM_id)
    }
}