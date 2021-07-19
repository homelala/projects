const auth = require('../auth/checkLogin');
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
            console.log(i);
            list += `<tr>
                        <td>${result[i].name}</td>
                        <td>${result[i].male}</td>
                        <td>${result[i].birth}</td>
                        <td>${result[i].phone}</td>
                        <td><a href="/user/info">자세히 보기</a></td>
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
    }
}