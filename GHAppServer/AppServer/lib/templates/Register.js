const coachM = require('../../model/coach');
const memberships = require('../../model/membership');
const classTypes = require('../../model/classType');
const auth = require('../auth/checkLogin');
module.exports = {
    RegusterUser:function(){
        return `<!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>회원 등록</h1>
            <body>
                <form action="/user/register_process" method="post" type="multipart/form-data">
                    Profile Image <br><input type="file" name="image" accept=".jpg, .jpeg, .png"/><br>
                    <input type="text" name="name" placeholder="이름"/><br>
                    <input type="text" name="email" placeholder="email"/><br>
                    <input type="password" name="passwd" placeholder="비밀번호"/><br>
                    <input type="text" name="phone" placeholder="핸드폰 번호"/><br>
                    <input type="date" name="birth" placeholder="생년월일"/><br>
                    <select name ="male">
                        <option value ="남" selected>남</option>
                        <option value ="녀">녀</option>
                    </select><br><br>   
                    <input type="submit" value="회원 가입"/><br>
                </form>
            </body>
        </html>
        `
    },
    RegisterGYM:function(){
        return`<!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>지점 등록</h1>
            <body>
                <form action="/register_process" method="post", enctype="multipart/form-data">
                    Profile Logo <br><input type="file" name="image" accept=".jpg, .jpeg, .png"/><br>
                    <input type="text" name="name" placeholder="업장명"/><br>
                    <input type="text" name="location" placeholder="업장 주소"/><br>
                    <input type="text" name="adminName" placeholder="관리자명"/><br>
                    <input type="text" name="category" placeholder="category"/><br>
                    <input type="text" name="email" placeholder="email"/><br>
                    <input type="password" name="passwd" placeholder="비밀번호"/><br>
                    <input type="text" name="phone" placeholder="핸드폰 번호"/><br>
                    <input type="text" name="subscribtionPath" placeholder="가입 경로"/>
                    <br><br>   
                    <input type="submit" value="지점 등록"/><br>
                </form>
            </body>
        </html>
        `
    },
    SettingGYM:function(){
        return`<!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>운영 정책</h1>
            <body>
                <form action="/setting_process" method="post">
                    운영 시스템<br>
                    <select name ="countPoint">
                        <option value =1 selected>포인트 제</option>
                        <option value =0>횟수</option>
                    </select><br>
                    예약 오픈 시점 <br>
                    <select name ="reserveOpenType">
                        <option value =1 selected>일</option>
                        <option value =7>주</option>
                    </select>
                    <input type="text" name="openReserveDate" placeholder="예약 오픈 시점"/><br>
                    예약 오픈 시간<input type="time" name="openResrveTime"/><br>
                    잔여 인원 노출<input type="checkbox" name="remainMember"><br>
                    수업 리마인드 푸시 알림<input type="checkbox" name="pushAlarm"><br>
                    <select name ="pushAlarmType">
                        <option value =1>분</option>
                        <option value =60 selected>시</option>
                        <option value =1440>일</option>
                    </select>
                    <input type="text" name="pushAlarmTime" placeholder="푸시 알림 발송 시간"/><br>
                    예약 가능 시간
                    <select name ="reservableType">
                        <option value =1>분</option>
                        <option value =60 selected>시</option>
                        <option value =1440>일</option>
                    </select>
                    <input type="text" name="reservableTime" placeholder="예약 가능 시간"/><br>
                    예약 변경 시간
                    <select name ="changeReserveType">
                        <option value =1>분</option>
                        <option value =60 selected>시</option>
                        <option value =1440>일</option>
                    </select>
                    <input type="text" name="changeReserveTime" placeholder="예약 변경 시간"/><br>
                    예약 취소 시간
                    <select name ="cancelReserveType">
                        <option value =1>분</option>
                        <option value =60 selected>시</option>
                        <option value =1440>일</option>
                    </select>
                    <input type="text" name="cancelReserveTime" placeholder="예약 취소 시간"/><br>
                    출석 체크 가능 시간
                    <select name ="checkAttendTimeType">
                        <option value =1>분</option>
                        <option value =60 selected>시</option>
                        <option value =1440>일</option>
                    </select>
                    <input type="text" name="checkAttendTime" placeholder="출석 체크 가능 시간"/><br>
                    예약 대기 인원 노출<input type="checkbox" name="waitingReserve"><br>
                    예약 확정 시간
                    <select name ="reserveConfirmTime">
                        <option value =1>예약 취소 가능 시간 정책과 동일하게 적용</option>
                        <option value =0 selected>예약 변경 가능 시간 정책과 동일하게 적용</option>
                        <option value =-1>예약 가능 시간 정책과 동일하게 적용</option>
                    </select>
                    <br><br>   
                    <input type="submit" value="저장"/><br>
                </form>
            </body>
        </html>
        `
    },
    RegisterCoach:function(){
        return `
        <!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>강사 등록</h1>
            <body>
                <form action="/coach/register_process" method="post">
                    <input type="text" name="name" placeholder="이름"/><br>
                    <input type="text" name="email" placeholder="email"/><br>
                    <input type="text" name="phone" placeholder="핸드폰 번호"/><br><br>   
                    <input type="submit" value="저장"/><br>
                </form>
            </body>
        </html>
        `
    },
    RegisterMembership:function(){
        return `
        <!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>회원권 등록</h1>
            <body>
                <form action="/membership/register_process" method="post">
                    <input type="text" name="name" placeholder="회원권 명"/><br>
                    <input type="text" name="price" placeholder="가격"/><br>
                    <select name ="periodType">
                        <option value =1 selected>일</option>
                        <option value =30>월</option>
                        <option value =365>년</option>
                    </select><br>
                    <input type="text" name="period" placeholder="유효기간"/><br>
                    <input type="text" name="maxApply" placeholder="최대 수강 횟수"/><br>
                    <input type="text" name="maxDayAttend" placeholder="일일 최대 수강 횟수"/><br>
                    <input type="text" name="maxWeekAttend" placeholder="주간 최대 수강 횟수"/><br><br>   
                    <input type="submit" value="저장"/><br>
                </form>
            </body>
        </html>
        `
    },
    RegisterClass:function(req,coachInfo){
        var temp = `<select name="coach">`;
        for(var i =0;i<coachInfo.length;i++){
            temp+=`<option value="${coachInfo[i].coach_id}">${coachInfo[i].name}</option>`
        }
        temp+=`</select>`;
        return  `
        <!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>수업 등록</h1>
            <body>
                <form action="/class/register_process" method="post">
                    <input type="text" name="name" placeholder="수업 명"/><br>
                    <input type="text" name="category" placeholder="category"/><br>
                    수업 유형<input type="checkbox" name="type"/><br>
                    ${temp} <br>
                    ${temp} <br>
                    <input type="text" name="decrease" placeholder="차감 횟수"/><br>
                    <input type="text" name="color" placeholder="색상"/><br>
                    <input type="text" name="time" placeholder="수업 시간"/>분<br>
                    <input type="text" name="reservePerson" placeholder="예약 정원"/><br>
                    수강 제한 여부<input type="checkbox" name="limitClass"/><br>  
                    <input type="submit" value="저장"/><br>
                </form>
            </body>
        </html>
        `
    },buyMembership:function(member_id,membership,classType){
        var membershipList = `<select name="membership_id">`;
        for(var i =0;i<membership.length;i++){
            membershipList+=`<option value="${membership[i].membership_id}">${membership[i].name}</option>`
        }
        membershipList+=`</select>`;
        var classTypeList = `<select name="classType_id">`;
        for(var i =0;i<classType.length;i++){
            classTypeList+=`<option value="${classType[i].classType_id}">${classType[i].classType_name}</option>`
        }
        classTypeList+=`</select>`;
        return `
        <!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>수업 등록</h1>
            <body>
                <form action="/user/membership/buy?id=${member_id}" method="post">
                    회원권: ${membershipList}<br>
                    시작일<input type="date" name="startDay"/><br>
                    종료일<input type="date" name="endDay"/><br>
                    ${classTypeList} <br>
                    최대 수강 횟수: <input type="text" name="MaxApply"><br>
                    수강 횟수: <input type="text" name="countClass"><br>
                    정상 금액: <input type="text" name="price"><br>
                    결제 금액: <input type="text" name="payment"><br>
                    카드: <input type="text" name="card"/><br>
                    현금: <input type="text" name="cash"/><br> 
                    미수금: <input type="text" name="accountReceivable"/><br> 
                    결제일: <input type="date" name="paymentDay"/><br> 
                    <input type="submit" value="구매"/><br>
                </form>
            </body>
        </html>
        `

    },registerSchedule:function(coach,classType){
        var coachList = `<select name="coach_id">`;
        for(var i =0;i<coach.length;i++){
            coachList+=`<option value="${coach[i].coach_id}">${coach[i].name}</option>`
        }
        coachList+=`</select>`;
        var classTypeList = `<select name="classType_id">`;
        for(var i =0;i<classType.length;i++){
            classTypeList+=`<option value="${classType[i].classType_id}">${classType[i].classType_name}</option>`
        }
        classTypeList+=`</select>`;
        return  `
        <!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>스케줄 등록</h1>
            <body>
                <form action="/schedule/register" method="post">
                    시작 일: <input type="date" name="startDay"/><br>
                    시작 시간: <input type="time" name="startTime"><br>
                    강사 이름: ${coachList}<br>
                    강사 이름: ${coachList}<br>
                    수업: ${classTypeList} <br>
                    수업 시간: <input type="text" name="period"><br>
                    차감 횟수: <input type="text" name="decrease"><br>
                    예약 정원: <input type="text" name="reservePerson"><br>
                    <select name = "cycle">
                        <option value="undefined">한번 개설</option>
                        <option value="1">매주 개설</option>
                        <option value="2">2주마다 개설</option>
                        <option value="3">3주마다 개설</option>
                        <option value="4">4주마다 개설</option>
                    </select><br>
                    요일<br>
                    일<input type="checkbox" name="day" value="0">
                    월<input type="checkbox" name="day" value="1">
                    화<input type="checkbox" name="day" value="2">
                    수<input type="checkbox" name="day" value="3">
                    목<input type="checkbox" name="day" value="4">
                    금<input type="checkbox" name="day" value="5">
                    토<input type="checkbox" name="day" value="6">
                    <br>
                    종료: <input type="date" name="endDay"><br>
                    <input type="submit" value="구매"/><br>
                </form> 
            </body>
        </html>
        `
    },
    registerNotice:function(){
        return `
        <!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>공지사항 등록</h1>
            <body>
                <form action="/notice/register_process" method="post">
                    <input type="text" name="title" placeholder="제목"/><br>
                    <textarea name = "description"></textarea>
                    <input type="submit" value="등록"/><br>
                </form>
            </body>
        </html>
        `
    },
    noticeUpdate:function(req,noticeInfo){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        return `
        <!doctype html>
        <html>
            <head>
                <title>회원 정보 보기</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>회원 정보</h1>
            <body>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <a href="/membership/register">회원권 등록</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                <br><br>
                <br>
                <form action ="/notice/update_process" method="post">
                    <input type="hidden" name ="id" value="${noticeInfo[0].id}" />
                    <input type = "text" name ="title" value = "${noticeInfo[0].title}"></input><br>
                    <textarea name ="description">${noticeInfo[0].description}</textarea><br>
                    첨부파일<input type="file" name="image" accept=".jpg, .jpeg, .png"/><br>
                    <input type="submit" value="수정"/>
                </form>
                
            </body>
        </html>
        `
    },
    RegisterLocker:function(req, memberInfo){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var memberList = `<select name="member_id">`;
        for(var i =0;i<memberInfo.length;i++){
            memberList+=`<option value="${memberInfo[i].member_id}">${memberInfo[i].member_name}</option>`
        }
        memberList += `</select>`
        return `
        <!doctype html>
        <html>
            <head>
                <title>회원 정보 보기</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>회원 정보</h1>
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
                <form action ="/locker/register_process" method="post">
                    <input type="hidden" value="${req.body.locker_id}" name = "locker_id"/>
                    ${memberList}<br>
                    대여 일수: <input type="text" name ="countDay"/><br>
                    회원권 연동<input type = "checkbox" name ="membershipLink"></input><br>
                    대여 시작일<input type="date" name="startDay"/><br>
                    대여 종료일<input type="date" name="endDay"/><br>
                    정상 금액: <input type="text" name ="price"/>
                    결제 금액: <input type="text" name ="payment"/>
                    결제일<input type="date" name="paymentDay"/><br>
                    카드: <input type="text" name ="card"/>
                    현금: <input type="text" name ="cash"/>
                    미수금: <input type="text" name ="accountReceivable"/>
                    <input type="submit" value="등록"/>
                </form>
            </body>
        </html>
        `
    },
    RegisterLockerCount:function(req,gymId){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        return `
        <!doctype html>
        <html>
            <head>
                <title>회원 정보 보기</title>
                ${gymInfo.location} ${userInfo.name}<br>
                <a href="/login">지점 로그인</a>
                <a href="/user/login">회원 로그인</a>
            </head>
            <h1>회원 정보</h1>
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
                <form action ="/locker/count_register" method="post">
                    락커 개수: <input type="text" name ="lockerCount"/>
                    락커 비용: <input type="text" name ="lockerPrice"/>
                    <input type="submit" value="수정"/>
                </form>
            </body>
        </html>
        `
    }
}