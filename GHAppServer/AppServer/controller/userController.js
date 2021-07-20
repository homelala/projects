const express = require('express');
const templateList = require('../lib/templates/List');
const templateInfo = require('../lib/templates/info');
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
            res.send('welcome')
        }).catch(function(){
            res.send('sorry')
        });
    },
    loginMember:function(req,res,next){
        members.selectMember(req.body,req.session.gym.GYM_id).then(function(result){   
            console.log(result);
            req.session.user = {
                email: result[0].email,
                name: result[0].name
            }
            req.session.save(function(){
                res.redirect('/');
            });
        }).catch(function(){
            res.send('sorry')
        });
    },
    memberListActive:function(req,res){
        var expire = req.query.expire;
        members.memberList(req.session.gym.GYM_id,expire).then(function(result){
            var temp = templateList.memberList(req,result);
            res.send(temp);
        }).catch(function(err){
            console.log(err);
            res.send('sorry')
        })
    },
    memberListApprove:function(req,res){
        members.ApproveMember(req.session.gym.GYM_id).then(function(result){
            var temp = templateList.ApproveMemberList(req,result);
            res.send(temp);
        }).catch(function(err){
            console.log(err);
            res.send('sorry')
        })
    },
    approveMember:function(req,res){
        members.updateApprove(req.body).then(function(result){
            res.redirect('/user/list?expire=0');
        }).catch(function(err){
            res.send(err);
        })
    },
    memberInfo:function(req,res){
        var member_id = req.query.id
        members.memberInfo(req.session.gym.GYM_id,member_id).then(function(result){
            var template = templateInfo.MemberInfo(req,result);
            res.send(template);
        }).catch(function(err){
            res.send(err);
        })
    }
}