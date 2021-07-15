const express = require('express');
const members = require('../model/Members.js')

module.exports = {
    createMember:function(req,res,next){
        console.log(req.body);
        members.insertMember(req.body).then(function(result){
            console.log("good")
            res.send('welcome')
        })
    }
}