const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var userRoute = require('./routes/user');
var mainRoute = require('./routes/main');
app.use(bodyParser.urlencoded({
    extended: false
})); 

app.use('/', mainRoute);
app.use('/user',userRoute); 

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.listen(80, function () {
    console.log('Example app listening on port 3000!')
});