const auth = require('../auth/checkLogin');
module.exports = {
    home:function(req){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
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
            </body>
        </html>
        `
    }
}