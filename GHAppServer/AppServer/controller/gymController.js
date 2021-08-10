const express = require('express');
const gyms = require('../model/gym.js')
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
    createGYM:function(req,res,next){
        console.log(req)
        gyms.insertGYM(req.body).then(function(result){
            res.send('welcome')
        }).catch(function(){
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
    }
}