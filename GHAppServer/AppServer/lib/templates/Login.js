module.exports = {
    LoginMember:function(){
        return `
        <!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>LogIn</h1>
            <body>
                <form action="/user/Login_process" method="post">
                    <input type="text" name="email" placeholder="email"/><br>
                    <input type="password" name="passwd" placeholder="비밀번호"/><br><br>   
                    <input type="submit" value="Log In"/><br>
                </form>
            </body>
        </html>
        `
    },
    LoginGYM:function(){
        return `
        <!doctype html>
        <html>
            <head>
                <title>Register</title>
            </head>
            <h1>GYM Log In</h1>
            <body>
                <form action="/Login_process" method="post">
                    <input type="text" name="email" placeholder="email"/><br>
                    <input type="password" name="passwd" placeholder="비밀번호"/><br><br>   
                    <input type="submit" value="Log In"/><br>
                </form>
            </body>
        </html>
        `
    }
}