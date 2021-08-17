const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var userRoute = require('./routes/member');
var mainRoute = require('./routes/main');
var coachRoute = require('./routes/coach');
var membershipRoute = require('./routes/membership');
var classRoute = require('./routes/classType');
var scheduleRoute = require('./routes/schedule');
var noticeRoute = require('./routes/notice');
var lockerRoute = require('./routes/locker')
const expressSession = require('express-session');
const { swaggerUi, specs } = require('./lib/swagger');
app.use(expressSession({
    secret:'my key',
    resave: false,
    saveUninitialized:true,
    cookie: {
        maxAge: 1000 * 60 * 60, // 쿠키 유효기간 1시간
    }
}))
app.use(bodyParser.urlencoded({
    extended: false
})); 
app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use('/', mainRoute);
app.use('/user',userRoute); 
app.use('/coach', coachRoute);
app.use('/membership', membershipRoute);
app.use('/class', classRoute);
app.use('/schedule',scheduleRoute);
app.use('/notice',noticeRoute);
app.use('/locker',lockerRoute);

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.listen(80, function () {
    console.log('Example app listening on port 3000!')
});  