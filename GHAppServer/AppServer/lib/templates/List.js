const auth = require('../auth/checkLogin');
const coachs = require('../../model/coach');
module.exports = {
    memberList:function(req,result){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `<table>
                        <tr>
                            <th>이름</th>
                            <th>성별</th>
                            <th>생년월일</th>
                            <th>핸드폰 번호</th>
                        <tr>`;
        for(var i = 0;i<result.length;i++){
            list += `<tr>
                        <td>${result[i].name}</td>
                        <td>${result[i].male}</td>
                        <td>${result[i].birth}</td>
                        <td>${result[i].phone}</td>
                        <td><a href="/user/info?id=${result[i].member_id}">자세히 보기</a></td>
                    </tr>`
        }
        list+=`</table>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>HOME</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>WELCOME!</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <a href="/membership/register">회원권 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                <br>
                <a href="/user/list/active">유효 회원 보기</a>
                <a href="/user/list/expire">만료 회원 보기</a>
                <a href="/user/list/Approve">승인 대기 회원 보기</a>
                ${list}
            </body>
        </html>
        `
    },ApproveMemberList:function(req,result){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `<table>
                        <tr>
                            <th>이름</th>
                            <th>성별</th>
                            <th>생년월일</th>
                            <th>핸드폰 번호</th>
                        <tr>`;
        for(var i = 0;i<result.length;i++){
            console.log(i);
            list += `<tr>
                        <td>${result[i].name}</td>
                        <td>${result[i].male}</td>
                        <td>${result[i].birth}</td>
                        <td>${result[i].phone}</td>
                        <td>
                            <form action="/user/approve" method="post">
                                <input type="hidden" name="member_id" value ="${result[i].member_id}">
                                <input type="submit" value="승인"/> 
                            </form>
                        </td>
                        <td>
                            <form action="/user/delete" method="post">
                                <input type="hidden" name="member_id" value ="${result[i].member_id}">
                                <input type="submit" value="거절"/> 
                            </form>
                        </td>
                    </tr>`
        }
        list+=`</table>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>HOME</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>WELCOME!</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <a href="/membership/register">회원권 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                <br>
                <a href="/user/list/active">유효 회원 보기</a>
                <a href="/user/list/expire">만료 회원 보기</a>
                <a href="/user/list/Approve">승인 대기 회원 보기</a>
                ${list}
            </body>
        </html>
        `
    },
    coachList:function(req,result){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `<table>
                        <tr>
                            <th>이름</th>
                            <th>이메일</th>
                            <th>핸드폰 번호</th>
                        <tr>`;
        for(var i = 0;i<result.length;i++){
            console.log(i);
            list += `<tr>
                        <td>${result[i].name}</td>
                        <td>${result[i].email}</td>
                        <td>${result[i].phone}</td>
                    </tr>`
        }
        list+=`</table>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>HOME</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>WELCOME!</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                ${list}
            </body>
        </html>
        `
    },membershipList:function(req,result){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `<table>
                        <tr>
                            <th>회원권</th>
                            <th>가격</th>
                            <th>기간</th>
                            <th>최대 수강 횟수</th>
                            <th>일일 최대 수강 횟수</th>
                            <th>주간 최대 수강 횟수</th>
                        <tr>`;
        for(var i = 0;i<result.length;i++){
            list += `<tr>
                        <td>${result[i].name}</td>
                        <td>${result[i].price}</td>
                        <td>${result[i].period}일</td>
                        <td>${result[i].maxApply}</td>
                        <td>${result[i].maxDayAttend}</td>
                        <td>${result[i].maxWeekAttend}</td>
                    </tr>`
        }
        list+=`</table>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>HOME</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>WELCOME!</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                ${list}
            </body>
        </html>
        `
    },
    classTypeList:function(req,result){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `<table>
                        <tr>
                            <th>수업 명</th>
                            <th>코치 명</th>
                            <th>시간</th>
                        <tr>`;
        for(var i = 0;i<result.length;i++){
            list += `<tr>
                        <td>${result[i].classType_name}</td>
                        <td>${result[i].coach_name}</td>
                        <td>${result[i].time}</td>
                    </tr>`
        }
        list+=`</table>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>HOME</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>WELCOME!</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                ${list}
            </body>
        </html>
        `
    },
    scheduleList:async function(req,result,userList){
        var today = new Date();
        var DayFormat = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `<table>
                        <tr>
                            <th>날짜</th>
                            <th>수업 명</th>
                            <th>시간</th>
                            <th>코치 명</th>
                            <th>총원</th>
                            <th>예약 인원</th>
                        <tr>`;
        for(var i = 0;i<result.length;i++){
            var coachList = await coachs.scheduleCoach(req.session.gym.GYM_id,result[i].id);
            var coachTemp = `<td>`;
            for(var j =0;j<coachList.length;j++){
                coachTemp += `${coachList[j].name} `
            }
            coachTemp+=`</td>`;
            var userTemp = `<select name = "member_id">`
            for(var r = 0;r<userList.length;r++){
                userTemp += `<option value = "${userList[r].member_id}">${userList[r].name}</option>`
            }
            userTemp+='</select>'
            list += `<tr>
                        <td>${result[i].startDay}</td>
                        <td>${result[i].classType_name}</td>
                        <td>${result[i].startTime}~${result[i].period}</td>
                        ${coachTemp}
                        <td>${result[i].total}</td>
                        <td>${result[i].reserveNumber}</td>
                        <td><form action ="/schedule/reserve" method="post">
                            <input type="hidden" name = "schedule_id" value="${result[i].id}"/>
                            <input type="hidden" name = "classType_id" value="${result[i].classType_id}"/>
                            ${userTemp}
                            <input type = "submit" value = "예약하기"/>
                        </form></td>
                        <td><a href="/schedule/history?id=${result[i].id}">히스토리</a></td>
                    </tr>`  
        }
        list+=`</table>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>HOME</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>WELCOME!</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                <br>
                <form action = "/schedule/list/day" method="post">
                    <input type="hidden" name="startDay" value="${DayFormat}" />
                    <input type="submit" value="일별"/>
                </form>
                <form action = "/schedule/list/week" method="post">
                    <input type="hidden" name="startDay" value="${DayFormat}" />
                    <input type="submit" value="주별"/>
                </form>
                <form action = "/schedule/list/month" method="post">
                    <input type="hidden" name="startDay" value="${DayFormat}" />
                    <input type="submit" value="월별"/>
                </form>
                ${list}
            </body>
        </html>
        `
    },
    scheduleHistory:async function(req,reserveInfo,waitingInfo){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `<table>
                        <tr>
                            <th>날짜</th>
                            <th>회원</th>
                            <th>상태</th>
                        <tr>`;
        for(var i = 0;i<reserveInfo.length;i++){
            var attend = reserveInfo[i].attend == 0?'예약':reserveInfo[i].attend == 1?'출석':reserveInfo[i].attend == 2?'지각':'결석'
            list += `<tr>
                        <td>${reserveInfo[i].date}</td>
                        <td>${reserveInfo[i].name}</td>
                        <td>${attend}</td>
                        <td><form action ="/schedule/ReserveStatus" method="post">
                            <input type="hidden" name = "member_id" value="${reserveInfo[i].member_id}"/>
                            <input type="hidden" name = "schedule_id" value="${req.query.id}"/>
                            <select name="status">
                                <option value ='0'>예약 취소하기</option>
                                <option value='1'>출석 처리하기</option>
                                <option value='2'>지각 처리하기</option>
                                <option value='3'>결석 처리하기</option>
                            </select>
                            <input type="submit" value="수정하기">
                        </form></td>
                        <td><a href="/user/info?id=${reserveInfo[i].member_id}">회원 정보 보기</a></td>
                    </tr>`  
        }
        for(var i = 0;i<waitingInfo.length;i++){
            list += `<tr>
                        <td>${waitingInfo[i].date}</td>
                        <td>${waitingInfo[i].name}</td>
                        <td>대기 ${waitingInfo[i].waitingNumber}</td>
                        <td><form action ="/schedule/WaitingStatus" method="post">
                            <input type="hidden" name = "member_id" value="${waitingInfo[i].member_id}"/>
                            <input type="hidden" name = "schedule_id" value="${req.query.id}"/>
                            <select name="status">
                                <option value ='0'>대기 취소하기</option>
                            </select>
                            <input type="submit" value="수정하기">
                        </form></td>
                        <td><a href="/user/info?id=${waitingInfo[i].member_id}">회원 정보 보기</a></td>
                    </tr>`  
        }
        list+=`</table>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>HOME</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>WELCOME!</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                <br>
                ${list}
            </body>
        </html>
        `
    },
    noticeList:function(req,noticeInfo){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `<table>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>일시</th>
                        <tr>`;
        for(var i = 0;i<noticeInfo.length;i++){
            list += `<tr>
                        <td>${noticeInfo[i].id}</td>
                        <td><a href = "/notice/info?id=${noticeInfo[i].id}">${noticeInfo[i].title}</a></td>
                        <td>${noticeInfo[i].date}</td>
                    </tr>`
        }
        list+=`</table>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>HOME</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>공지 사항</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                <a href="/notice/register">공지사항 등록</a>
                ${list}
            </body>
        </html>
        `
    },
    lockerList:function(req, lockerInfo){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `<table>
                        <tr>
                            <th>번호</th>
                            <th>대여 회원</th>
                            <th>만료일</th>
                            <th>전화번호</th>
                        <tr>`;
        for(var i = 0;i<lockerInfo.length;i++){
            list += `<tr>
                        <td>${lockerInfo[i].locker_id}</td>
                        <td>${lockerInfo[i].member_name}</td>
                        <td>${lockerInfo[i].endDate}</td>
                        <td>${lockerInfo[i].phone}</td>`
            if(lockerInfo[i].member_name == null){
                list += `<td>
                    <form action = "/locker/register" method="post">
                        <input type = "hidden" name = "member_id" value ="${lockerInfo[i].member_id}"/>
                        <input type = "hidden" name = "locker_id" value ="${lockerInfo[i].locker_id}"/>
                        <input type="submit" value = "등록"/>
                    </form>
                </td>`
            }
            list+=`</tr>`
        }
        list+=`</table>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>HOME</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>공지 사항</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                <a href="/notice/register">공지사항 등록</a>
                ${list}
            </body>
        </html>
        `
    }
}