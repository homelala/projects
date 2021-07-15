const express = require('express');
const gyms = require('../model/gym.js')

module.exports = {
    createGYM:function(req,res,next){
        console.log(req.body);
        gyms.insertGYM(req.body).then(function(result){
            console.log("good")
            res.send('welcome')
        })
    }
}