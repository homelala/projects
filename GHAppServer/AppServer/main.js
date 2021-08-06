const express = require('express');
const bodyParser = require('body-parser');
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
const app = express();
var userRoute = require('./routes/member');
var mainRoute = require('./routes/main');
var coachRoute = require('./routes/coach');
var membershipRoute = require('./routes/membership');
var classRoute = require('./routes/classType');
var scheduleRoute = require('./routes/schedule');
const expressSession = require('express-session');
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
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost/",
        },
      ],
    },
    apis: ["/routes/main.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.use('/', mainRoute);
app.use('/user',userRoute); 
app.use('/coach', coachRoute);
app.use('/membership', membershipRoute);
app.use('/class', classRoute);
app.use('/schedule',scheduleRoute);

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.listen(80, function () {
    console.log('Example app listening on port 3000!')
});