const auth = require('../auth/checkLogin');
module.exports = {
    MemberInfo:function(req,member,membership){
        var gymInfo =auth.gymLogin(req);
        var userInfo = auth.memberLogin(req);
        var list = `
        <table>
            <tr>
                <th>회원권</th>
                <th>시작일</th>
                <th>종료일</th>
                <th>수업</th>
                <th>최대 수강 횟수</th>
                <th>수강 횟수</th>
                <th>정상 금액</th>
                <th>결제 금액</th>
                <th>카드</th>
                <th>현금</th>
                <th>미수금</th>
                <th>결제일</th>
            </tr>
        `
        for(var i =0;i<membership.length;i++){
            list += `<tr>
                        <td>${membership[i].membership_name}</td>
                        <td>${membership[i].startDay}</td>
                        <td>${membership[i].endDay}</td>
                        <td>${membership[i].classType_name}</td>
                        <td>${membership[i].maxApply}</td>
                        <td>${membership[i].countClass}</td>
                        <td>${membership[i].price}</td>
                        <td>${membership[i].payment}</td>
                        <td>${membership[i].card}</td>
                        <td>${membership[i].cash}</td>
                        <td>${membership[i].accountReceivable}</td>
                        <td>${membership[i].paymentDay}</td>
                    </tr>`
        }
        list+=`</table>`
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
                    <li>이름: ${member[0].name}</li>    
                    <li>email: ${member[0].email}</li>
                    <li>성별: ${member[0].male}</li>
                    <li>생년월일: ${member[0].birth}</li>
                    <li>전화번호: ${member[0].phone}</li>
                    <li>운동복 대여: ${member[0].rentSportwear}</li>
                    <li>상세 내용: ${member[0].description}</li>
                </ul>
                <a href="/user/info/update?id=${member[0].member_id}">수정하기</a>
                <a href="/user/membership?id=${member[0].member_id}">회원권 구매</a><br><br>
                ${list}
            </body>
        </html>
        `
    },
    memberUpdate:function(req,result){
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
                <form action="/user/info/update_process" method="post">
                    <input type="hidden" name="id" value="${result[0].member_id}"/>
                    이름: ${result[0].name}<br>
                    email: ${result[0].email}<br>
                    성별: <input type="text" name = "male" value="${result[0].male}"></input><br>
                    핸드폰 번호: <input type="text" name = "phone" value="${result[0].phone}"></input><br>
                    생년월일: <input type="date" name = "birth" value="${result[0].birth}"></input><br>
                    운동복 대여: ${result[0].rentSportwear}<br>
                    상세 내용 <textarea name = "description">${result[0].description}</textarea><br><br>
                    <input type="submit" value="수정"/>
                </form>
            </body>
        </html>
        `
    }
}