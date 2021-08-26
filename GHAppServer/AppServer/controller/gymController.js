const express = require('express');
const gyms = require('../model/gym.js')
const members = require('../model/Members.js')
const memberships = require('../model/membership.js')
const coachs = require('../model/coach.js')
const lockers = require('../model/locker.js')
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
    createGYM:async function(req,res,next){
        gyms.insertGYM(req,req.body).then(function(result){
            res.send('welcome')
        }).catch(function(err){
            console.log(err);
            res.send('sorry')
        })
    },
    LoginGYM:function(req,res,next){
        gyms.selectGym(req.body).then(function(result){
            req.session.gym = {
                GYM_id: result[0].GYM_id,
                email: result[0].email,
                name: result[0].name,
                location: result[0].location
            }
            req.session.save(function(){
                res.redirect('/')
            });
        }).catch(function(){
            res.send('sorry');
        })
    },
    updateGymSetting:function(req,res,next){
        gyms.updateGymSetting(req.body,req.session.gym.GYM_id).then(function(result){
            res.redirect('/');
        }).catch(function(err){
            res.send(err);
        })
    },
    showStatistics:async function(req,res,next){
        var SumPaymentInfo = members.sumPayment(req.session.gym.GYM_id);
        var AgainstPaymentInfo = members.AgainstPaymentInfo(req.body, req.session.gym.GYM_id);
        var newPaymentInfo = members.newPaymentInfo(req.body, req.session.gym.GYM_id);
        var membershipPaymentInfo = memberships.membershipPaymentInfo(req.body, req.session.gym.GYM_id);
        var coachInfo = coachs.coachInfo(req.body,req.session.gym.GYM_id);
        var monthMembershipPayment = memberships.monthMembershipPayment(req.body, req.session.gym.GYM_id);
        var monthLockerPayment = lockers.monthLockerPayment(req.body, req.session.gym.GYM_id);
        res.send({SumPaymentInfo,AgainstPaymentInfo,newPaymentInfo,membershipPaymentInfo,coachInfo,monthMembershipPayment,monthLockerPayment});
    }
}