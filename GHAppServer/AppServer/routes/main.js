const express = require('express');
const template = require('../lib/templates/Register');
const db = require('../lib/mysql');
const controller = require('../controller/gymController');
var router = express.Router();

router.get('/',function(req,res){
    res.send('welcome');
})

router.get('/register',function(req,res){
    var temp = template.RegisterGYM();
    res.send(temp);
})

router.post('/register_process',)
//지점 등록
router.post('/register_process',function(req,res){
    var post = req.body;
    console.log(post)
    db.query('insert into gym (name, location, logoImage, category, adminName, email, phone, passwd) values(?,?,?,?,?,?,?,?)',
    [post.name,post.location,"test",post.category,post.adminName,post.email,post.phone,post.passwd],function(err){
        if(err){
            res.send(err);
        }else{
            res.redirect('/');
        }
    })
})

module.exports = router;