const db = require('../lib/db');
const bcrypt = require('bcrypt');
const shortid = require('shortid');
module.exports = function(app){
  var passport = require('passport'),
  localStorage = require('passport-local').Strategy,
  GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

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
var googleCredentials = require('../config/google.json');
    passport.use(new GoogleStrategy({
            clientID: googleCredentials.web.client_id,
            clientSecret: googleCredentials.web.client_secret,
            callbackURL: googleCredentials.web.redirect_uris[0]
        },
        function (accessToken, refreshToken, profile, done) {
            console.log('GoogleStrategy', accessToken, refreshToken, profile);
            var email = profile.emails[0].value;
            db.query('update expressInfo set googleId =? where email=?',[email,email],function(err1,result){
              if(err1){
                console.log(err1);
              }
              db.query('select * from expressInfo where email = ?',email,function(err2,user){
                if(err2){
                  console.log(err2);
                }
                if(user[0] == undefined){
                  var id = shortid.generate();
                  var displayName = profile.displayName;
                  var googleId=profile.id;
                  db.query('insert into expressInfo value(?,?,?,?,?)',[id,email,1,displayName,googleId],function(err3,result){
                    if(err3){
                      console.log("err3",err3);
                    }
                  });
                  var user = {
                    id: id,
                    email:email,
                    password:1,
                    displayName:displayName
                  }
                  done(null,user);
                }else{
                  done(null,user[0]);
                }
              })
            });
            // User.findOrCreate({
            //     googleId: profile.id
            // }, function (err, user) {
            //     return done(err, user);
            // });
        }
    ));

    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/plus.login','email']
        }));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/auth/login'
        }),
        function (req, res) {
            res.redirect('/');
        });

  return passport;
}
