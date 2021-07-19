const express = require('express');
const expressSession = require('express-session');
var app = express();
app.use(expressSession({
    secret:'my key',
    resave: false,
    saveUninitialized:true,
    cookie: {
        maxAge: 1000 * 60 * 60, // 쿠키 유효기간 1시간
    }
}))

module.exports = {
    gymLogin:function(req){
        if(req.session.gym !== undefined){
            return req.session.gym;
        }else{
            return '';
        }
    },
    memberLogin:function(req){
        if(req.session.user !== undefined){
            return req.session.user;
        }else{
            return '';
        }
    }
}