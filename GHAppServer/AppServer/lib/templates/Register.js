const coachM = require('../../model/coach');
const memberships = require('../../model/membership');
const classTypes = require('../../model/classType');
module.exports = {
    RegusterUser:function(){
        return `<!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>회원 등록</h1>
            <body>
                <form action="/user/register_process" method="post">
                    Profile Image <br><input type="file" name="image" accept=".jpg, .jpeg, .png"/><br>
                    <input type="text" name="id" placeholder="ID"/><br>
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
                <form action="/register_process" method="post">
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
    RegisterClass:function(req,res){
        coachM.AllCoach(req.session.gym.GYM_id).then(function(result){
            var temp = `<select name="coach">`;
        for(var i =0;i<result.length;i++){
            temp+=`<option value="${result[i].coach_id}">${result[i].name}</option>`
        }
        temp+=`</select>`;
        var template =  `
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
                    <input type="text" name="decrease" placeholder="차감 횟수"/><br>
                    <input type="text" name="color" placeholder="색상"/><br>
                    <input type="time" name="time" placeholder="수업 시간"/><br>
                    <input type="text" name="reservePerson" placeholder="예약 정원"/><br>
                    수강 제한 여부<input type="checkbox" name="limitClass"/><br>  
                    <input type="submit" value="저장"/><br>
                </form>
            </body>
        </html>
        `
        res.send(template);
        }).catch(function(err){
            console.log(err);
        })
    },buyMembership:function(req,res){
        var member_id = req.query.id;
        memberships.AllMembership(req.session.gym).then(function(membership){
            classTypes.AllClass(req.session.gym.GYM_id).then(function(classType){
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
                var template =  `
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
                res.send(template);
            })
        }).catch(function(err){
            console.log(err);
        })
    }
}