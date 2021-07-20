const express = require('express');
const templateList = require('../lib/templates/List')
const classTypes = require('../model/classType');
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
    createClassType:function(req,res,next){
       classTypes.insertClass(req.body,req.session.gym.GYM_id).then(function(result){
           res.redirect('/');
       }).catch(function(err){
           console.log(err);
           res.send(err);
       })
    },
    classTypeList:function(req,res,next){
        classTypes.AllClass(req.session.gym.GYM_id).then(function(result){
            var template = templateList.classTypeList(req,result);
            res.send(template);
        }).catch(function(err){
            console.log(err);
            res.send(err);
        })
    }
}