const express = require('express');
const templateList = require('../lib/templates/List');
const membership = require('../model/membership.js')
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
    createMembership:function(req,res,next){
        console.log(req.body);
        membership.insertMembership(req.body,req.session.gym).then(function(result){
            res.redirect('/');
        }).catch(function(err){
            res.send(err);
        })
    },
    membershipList:function(req,res,next){
        membership.AllMembership(req.session.gym).then(function(result){
            var template = templateList.membershipList(req,result);
            res.send(template);
        }).catch(function(err){
            res.send(err);
        })
    }
}