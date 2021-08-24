const express = require('express');
const expressSession = require('express-session');
const templateList = require('../lib/templates/List')
const schedules = require('../model/schedule');
const members = require('../model/Members');
const coachs = require('../model/coach');
const classTypes = require('../model//classType');
const reserveBlocks = require('../model/reserveBlock');
const templateRegister = require('../lib/templates/Register')
const membership = require('../model/membership');
const memberClass = require('../model/memberClass')
const waitingMembers = require('../model/waitingMember');
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
    console.log(tempDay)
    var insertScheduleInfo = await schedules.insertSchedule(req.body,req.session.gym.GYM_id,id,tempDay);
    if(insertScheduleInfo !== undefined){
        for(var i =0;i<post.coach_id.length;i++){
            await schedules.insertCoachSchedule(req.session.gym.GYM_id,insertScheduleInfo.insertId,post.coach_id[i],);
        }
    }
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
    templateRegisterSchedule:async function(req,res,next){
        var coachInfo = await coachs.AllCoach(req.session.gym.GYM_id);
        var classTypesInfo = await classTypes.AllClass(req.session.gym.GYM_id);
        var template = await templateRegister.registerSchedule(coachInfo,classTypesInfo);
        res.send(template);
    },
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
        var membershipInfo= await membership.selectMembershipId(req.body,req.session.gym.GYM_id,today);
        console.log(membershipInfo)
        if(membershipInfo[0] == undefined){
            res.send('사용가능 한 회원권이 없습니다.')
        }
        var membership_id = membershipInfo[0].id // 사용하는 멤버쉽
        var checkMemberchipCount = (membershipInfo[0].maxCountClass >membershipInfo[0].countClass); //멤버쉽 사용 가능 여부

        // 일일 최대 등록수, 주간 최대 등록 수 확인
        var checkMaxAttend = await membership.selectMember_Mebership(req.body,req.session.gym.GYM_id,membership_id);
        var maxDayAttend = (checkMaxAttend[0].maxDayAttend > checkMaxAttend[0].DayAttend);
        var maxWeekAttend = (checkMaxAttend[0].maxWeekAttend > checkMaxAttend[0].weekAttend);

        if(checkMemberchipCount){ //회원권 사용 가능 여부 확인
            if(maxDayAttend){ // 당일 최대 등록 횟수 확인
                if(maxWeekAttend){ // 주간 최대 등록 횟수 확인
                    if(checkTotalReserve){// 수업 총원 확인
                        //등록 성공
                        try{
                            await schedules.reserveSchedule(req.body,req.session.gym.GYM_id,checkMaxAttend[0].id);
                        }catch(err){
                            res.send('이미 예약된 회원입니다.')
                        }
                    }else{
                        //대기 번호 생성
                        try{
                            await schedules.waitingSchedule(req.body,req.session.gym.GYM_id,checkMaxAttend[0].id);
                        }catch(err){
                            res.send('이미 신청되었습니다.')
                        }
                    }
                    //회원권 차감
                    var schduleInfo = await schedules.selectScheduleId(req.body,req.session.gym.GYM_id)
                    await membership.decreaseMembership(req.body, req.session.gym.GYM_id, schduleInfo[0].decrease,checkMaxAttend[0].id)
                    res.redirect('/');
                }else{
                    res.send('주간 등록 횟수가 초과되었습니다.')
                }
            }else{
                res.send('당일 등록 횟수가 초과되었습니다.')
            }
        }else{
            res.send('회원권을 모두 사용하셨습니다.')
        }
        
    },
    historySchedule:async function(req,res,next){
        schedule_id = req.query.id;
        var scheduleHistory = await memberClass.selectReserveHistory(schedule_id, req.session.gym.GYM_id);
        var scheduleWaiting = await memberClass.selectWaitingMember(schedule_id, req.session.gym.GYM_id);
        var template = await templateList.scheduleHistory(req,scheduleHistory,scheduleWaiting);
        res.send(template);
    },
    updateReserveStatus:async function(req,res,next){
        var status = req.body.status;
        var schduleInfo = await schedules.selectScheduleId(req.body,req.session.gym.GYM_id)
        if(status == 0){ 
            //시간 추가 여부 확인 
            //회원 수강 내역 삭제
            var deleteInfo = await memberClass.cancelReservation(req.body, req.session.gym.GYM_id);
            //주간, 일간 등록 횟수 삭제
            await membership.cancelReserveMembership(schduleInfo[0].decrease,deleteInfo[0].member_membership_id);
            //대기 회원 상태 변경
            var waitMember = await memberClass.minWaitingMember(req.body);
            if(waitMember[0] == undefined){
                //총원 감소
                await schedules.cancelReservation(req.body, req.session.gym.GYM_id);
            }else{
                await memberClass.ReserveWaitingMember(req.body,req.session.gym.GYM_id,waitMember[0]);
                await waitingMembers.deleteWaitingMember(req.body);
                await waitingMembers.updateReserve(req.body);
            }
        }else{
            //출석 체크 가능 시간 확인
            var today = new Date();
            var checkDaySchdedule = await schedules.selectSchedule(req.body, req.session.gym.GYM_id);
            var attendTime = await new Date(checkDaySchdedule[0].startDay.getFullYear(), 
                                    checkDaySchdedule[0].startDay.getMonth(), 
                                    checkDaySchdedule[0].startDay.getDate()
                                    ,parseInt(checkDaySchdedule[0].startTime.slice(0,2))+9
                                    ,parseInt(checkDaySchdedule[0].startTime.slice(3,5))-checkDaySchdedule[0].checkAttendTime
                                    ,parseInt(checkDaySchdedule[0].startTime.slice(6,8)));
            console.log(checkDaySchdedule[0].startDay);
            var checkUpdateStatus = (attendTime < today)
            if(checkUpdateStatus){
                await memberClass.updateStatus(req.body,req.session.gym.GYM_id);
            }else{
                res.send('아직 출석 체크 시간이 아닙니다.')
            }
        }
        res.redirect(`/schedule/history?id=${req.body.schedule_id}`)
    },
    
    updateWaitingStatus:async function(req,res,next){
        //스케줄 정보 받아오기
        var schduleInfo = await schedules.selectScheduleId(req.body,req.session.gym.GYM_id)
        //회원 대기 목록 삭제
        var waitingMember = await memberClass.selectWaitingMember(req.body.schedule_id, req.session.gym.GYM_id);
        await waitingMembers.deleteWaitingMember(req.body);
        await waitingMembers.updateReserve(req.body);
        //주간, 일간 등록 횟수 삭제
        await membership.cancelReserveMembership(schduleInfo[0].decrease,waitingMember[0].member_membership_id);
        res.redirect(`/schedule/history?id=${req.body.schedule_id}`)
    }
}