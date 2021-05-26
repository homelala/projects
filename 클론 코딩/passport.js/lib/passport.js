module.exports = function(app){
    var authData = {
        email: 'homelala@naver.com',
        password: '1',
        nickname: 'egoing'
      }
    var passport = require('passport'),
  localStorage = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

// app.post('/auth/login_process', (req, res, next) => {
//   passport.authenticate('local',(err, user, info) => {
//     if(req.session.flash) {
//       req.session.flash = {}
//     }
//     req.flash('message', info.message)
//     req.session.save(() => {
//       if (err) {
//         return next(err)
//       }
//       if (!user) {
//         return res.redirect('/auth/login')
//       }
//       req.logIn(user, (err) => {
//         if (err) {
//           return next(err)
//         }
//         return req.session.save(() => {
//           res.redirect('/')
//         })
//       })
//     })
//   })(req, res, next)
// })
  
passport.serializeUser(function(user,done){ // 로그인에 성공했다면 한번 콜백 호출
  console.log('serializeUser',user);
  done(null,user.email);//식별자를 전달한다.
})

passport.deserializeUser(function(id,done){ //페이지를 방문할 때 마다 호출
  console.log('deserializeUser',id);
  done(null,authData); //request에 user라는 객체로 전달해준다.
})

passport.use(new localStorage( // 로그인을 성공하는 지 실패하는 지 검사
  {
    usernameField: 'email',
    passwordField: 'pwd'
  },
  function(username,password,done){
    if(username === authData.email){
      if(password === authData.password){
       return done(null,authData,{
         message:'welcome'
       })
      }else{
        return done(null,false,{
          message:'Incorrect password'
        })
      }
    }else{
      return done(null,false,{
        message: 'Incorrect username'
      });
    }
  }
));
  return passport;
}
