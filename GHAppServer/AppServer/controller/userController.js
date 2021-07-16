const express = require('express');
const members = require('../model/Members.js')
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
    createMember:function(req,res,next){
        console.log(req.body);
        members.insertMember(req.body,req.session.gym).then(function(result){
            console.log("good")
            res.send('welcome')
        }).catch(function(){
            res.send('sorry')
        });
    },
    loginMember:function(req,res,next){
        members.selectMember(req.body).then(function(result){   
            console.log(result);
            req.session.user = {
                email: result[0].email,
                name: result[0].name
            }
            req.session.save(function(){
                res.send(`${req.session.gym.location} <br> welcome ${req.session.user.name}`);
            });
        }).catch(function(){
            res.send('sorry')
        });
    }
}