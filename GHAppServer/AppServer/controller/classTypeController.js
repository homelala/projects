const express = require('express');
const templateRegister = require('../lib/templates/Register');
const templateList = require('../lib/templates/List')
const classTypes = require('../model/classType');
const coachClassType = require('../model/coachClassType');
const coachs = require('../model/coach');
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
    createClassType:async function(req,res,next){
      var coach = req.body.coach;
      var insertInfo = await classTypes.insertClass(req.body,req.session.gym.GYM_id)
      for(var i =0;i<coach.length;i++){
        await coachClassType.insertCoachClass(req.body, req.session.gym.GYM_id, insertInfo.insertId,coach[i]);
      }
      res.redirect('/');
    },
    classTypeList:async function(req,res,next){
        var coach_ClassInfo = await coachClassType.selectAll(req.session.gym.GYM_id)
        var template = await templateList.classTypeList(req,coach_ClassInfo);
        res.send(template);
    },
    TemplateRegisterClass:async function(req,res,next){
       var coachInfo = await coachs.AllCoach(req.session.gym.GYM_id);
       var template = await templateRegister.RegisterClass(req, coachInfo);
       res.send(template);
    }
}