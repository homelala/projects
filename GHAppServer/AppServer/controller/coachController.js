const express = require('express');
const coachs = require('../model/coach.js')
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
    createCoach:function(req,res,next){
        coachs.insertCoach(req.body, req.session.gym).then(function(result){
            res.redirect('/')
        }).catch(function(err){
            res.send(err);
        })
    }
}