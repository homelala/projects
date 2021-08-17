const auth = require('../auth/checkLogin');
module.exports = {
    home:function(req){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var today = new Date();
        var DayFormat = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
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
                <a href="/setting">운영 정책</a><br>
                <a href="/register">지점 가입</a>
                <a href="/user/register">회원 가입</a>
                <a href="/coach/register">코치 등록</a>
                <a href="/membership/register">회원권 등록</a>
                <a href="/class/register">수업 등록</a>
                <a href="/schedule/register">스케줄 추가</a>
                <a href="/locker/count">락커 개수 등록</a>
                <a href="/locker/list">락커 보기</a>
                <br>
                <a href="/user/list/active">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                <a href="/class/list">수업 보기</a>
                <form action = "/schedule/list/day" method="post">
                    <input type="hidden" name="startDay" value="${DayFormat}" />
                    <input type="submit" value="스케줄 보기"/>
                </form>
                <a href="/notice/list">공지 사항</a>
            </body>
        </html>
        `
    }   
}