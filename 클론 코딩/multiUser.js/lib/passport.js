const db = require('../lib/db');
const bcrypt = require('bcrypt');

module.exports = function(app){
  var passport = require('passport'),
  localStorage = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user,done){ // 로그인에 성공했다면 한번 콜백 호출
  console.log('serializeUser',user);
  done(null,user.id);//식별자를 전달한다.
})

passport.deserializeUser(function(id,done){ //페이지를 방문할 때 마다 호출
  console.log('deserializeUser',id);
  db.query('select * from ExpressInfo where id = ?',id,function(err,result){
    done(null,result[0]); //request에 user라는 객체로 전달해준다.
  });
  
})

passport.use(new localStorage( // 로그인을 성공하는 지 실패하는 지 검사
  {
    usernameField: 'email',
    passwordField: 'pwd'
  },
  function(email,password,done){
    db.query('select * from expressInfo where email=?',[email],function(err,result){
      if(result[0] !=null){
        bcrypt.compare(password,result[0].passwd,function(err,result2){
          console.log(result2);
          if(result2){
            return done(null,result[0],{
              message:'welcome'
            });
          }else{
            return done(null,false,{
              message:'Incorrect password'
            })
          }
        })
      }else{
        return done(null,false,{
          message:'Incorrect email'
        })
      }
    });
  }

));
  return passport;
}
