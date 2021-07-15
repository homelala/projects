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
                        <option value = "녀">녀</option>
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
                    <input type="text" name="phone" placeholder="핸드폰 번호"/><br><br>   
                    <input type="submit" value="지점 등록"/><br>
                </form>
            </body>
        </html>
        `
    }
}