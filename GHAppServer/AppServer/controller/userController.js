const express = require('express');
const templateList = require('../lib/templates/List');
const templateInfo = require('../lib/templates/info');
const members = require('../model/Members.js')
const memberships = require('../model/membership');
const expressSession = require('express-session');
const memberClass = require('../model/memberClass');
const coachs = require('../model/coach');
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
        members.memberList(req.session.gym.GYM_id).then(function(result){
            var temp = templateList.memberList(req,result);
            res.send(temp);
        }).catch(function(err){
            console.log(err);
            res.send('sorry')
        })
    },
    memberListExpire:function(req,res){
        members.memberListExpire(req.session.gym.GYM_id).then(function(result){
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
            res.redirect('/user/list/active');
        }).catch(function(err){
            res.send(err);
        })
    },
    memberInfo:function(req,res){
        var member_id = req.query.id;
        members.memberInfo(req.session.gym.GYM_id,member_id).then(function(memberInfo){
            memberships.useMembershipInfo(req.session.gym.GYM_id,member_id).then(function(membershipInfo){
                var template = templateInfo.MemberInfo(req,memberInfo,membershipInfo);
                res.send(template);
            }).catch(function(err){
                console.log(err);
                res.send(err);
            })
        })
    },
    memberUpdate:function(req,res){
        var member_id = req.query.id;
        members.memberInfo(req.session.gym.GYM_id,member_id).then(function(result){
            var template = templateInfo.memberUpdate(req,result);
            res.send(template);
        }).catch(function(err){
            res.send(err);
        })
    },
    memberUpdateProcess:function(req,res){
        members.memberUpdate(req.body,req.session.gym.GYM_id).then(function(id){
            res.redirect(`/user/info?id=${id}`);
        }).catch(function(err){
            res.send(err);
        })
    },
    buyMembership:function(req,res){
        var member_id = req.query.id
        memberships.buyMembership(req.body,req.session.gym.GYM_id,member_id).then(function(result){
            res.redirect(`/user/info?id=${member_id}`);
        }).catch(function(err){
            console.log(err);
            res.send(err);
        })
    },
    memberHistory:async function(req,res,next){
        var member_id = req.query.id;
        var memberInfo = await members.memberInfo(req.session.gym.GYM_id,member_id);
        var memberClassInfo = await memberClass.memberHistory(member_id,req.session.gym.GYM_id);
        var memberWaitInfo = await memberClass.memberWaitHistory(member_id,req.session.gym.GYM_id);
        var template = await templateInfo.memberHistory(req, memberInfo, memberClassInfo, memberWaitInfo)
        res.send(template)
    }
}