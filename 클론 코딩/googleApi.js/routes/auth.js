var express = require('express');
var router = express.Router();
var path = require('path');
var template = require('../lib/template.js');
var db = require('../lib/db');
var shortid = require('shortid');
const bcrypt = require('bcrypt');

module.exports = function(passport){
  router.get('/login', function (request, response) {
    var fmsg = request.flash();
    var feedback='';
    if(fmsg.error){
      feedback = fmsg.error[0];
    }
    var title = 'WEB - login';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      <div style="color:red;">${feedback}</div>
      <form action="/auth/login_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="pwd" placeholder="password"></p>
        <p>
          <input type="submit" value="login">
        </p>
      </form>
    `, '');
    response.send(html);
  });
  
  router.post('/login_process',passport.authenticate('local',{
    failureFlash:true,
    successFlash:true,
    failureRedirect:'/auth/login'}),function(req,res){
      req.session.save(function(){
        res.redirect('/');
      })
    });
  
  router.get('/register', function (request, response) {
    var fmsg = request.flash();
    var feedback='';
    if(fmsg.error){
      feedback = fmsg.error[0];
    }
    var title = 'WEB - login';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      <div style="color:red;">${feedback}</div>
      <form action="/auth/register_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="pwd" placeholder="password"></p>
        <p><input type="password" name="pwd2" placeholder="password"></p>
        <p><input type="text" name="displayName" placeholder="display name"></p>
        <p>
          <input type="submit" value="register">
        </p>
      </form>
    `, '');
    response.send(html);
  });

  router.post('/register_process', function (request, response) {
    var post = request.body;
    var id = shortid.generate();
    var email = post.email;
    var pwd = post.pwd;
    var pwd2 = post.pwd2;
    var displayName = post.displayName;
    if(pwd !== pwd2){
      request.flash('error','Password must same!');
      response.redirect('/auth/register');
    }else{
      bcrypt.hash(pwd,10,function(err,hash){
        db.query('select * from expressInfo where email =?',email,function(err,user){
          if(user[0]!==undefined){//구글로 회원가입한 아이디가 있을 때
            db.query('update expressInfo set passwd =?,name=? where email=?',[hash,displayName,email],function(err1,result){
              var info = {
                id: user[0].id,
                email:email,
                password:hash,
                displayName:displayName
              }
              console.log('info',info);
              request.logIn(info,function(err){
                return  response.redirect('/');
              });
            });
          }else{
            db.query("insert into expressInfo value(?,?,?,?,?)",[id,email,hash,displayName,null],function(err,result){
              var user2 = {
                id: id,
                email:email,
                password:hash,
                displayName:displayName
              }
              request.logIn(user2,function(err){
                return  response.redirect('/');
              });
            });
          }
        });      
      });
    }
   
  });

  router.get('/logout', function (request, response) {
    request.logOut();
    request.session.save(function(){
      response.redirect('/');
    })
  });
  return router
}