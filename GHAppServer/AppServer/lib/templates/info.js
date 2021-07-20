const auth = require('../auth/checkLogin');
module.exports = {
    MemberInfo:function(req,result){
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
                <a href="/user/list?expire=0">회원 보기</a>
                <a href="/coach/list">코치 보기</a>
                <a href="/membership/list">회원권 보기</a>
                <ul>
                    <li>이름: ${result[0].name}</li>    
                    <li>email: ${result[0].email}</li>
                    <li>성별: ${result[0].male}</li>
                    <li>생년월일: ${result[0].birth}</li>
                    <li>전화번호: ${result[0].phone}</li>
                    <li>운동복 대여: ${result[0].rentSportwear}</li>
                    <br>
                </ul>
                <form action="/user/infoUpdate">
                    <input type="hidden" name="member_id" value="${result[0].member_id}"/>
                    <textarea name="description" value="${result[0].description}"></textarea><br>
                    <input type="submit" value="저장"/>
                </form>  
            </body>
        </html>
        `
    }
}