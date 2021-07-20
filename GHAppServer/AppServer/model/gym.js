const db = require('../lib/mysql');

module.exports = {
    insertGYM:function(post){
        return new Promise(function(resolve,rejects){
            db.query('insert into gym (name, location, logoImage, category, adminName, email, phone, passwd,subscribtionPath) values(?,?,?,?,?,?,?,?,?)',
            [post.name,post.location,"test",post.category,post.adminName,post.email,post.phone,post.passwd,post.subscribtionPath],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectGym:function(post){
        console.log(post.email)
        return new Promise(function(resolve,rejects){
            db.query('select * from gym where email = ? and passwd = ?',[post.email, post.passwd],function(err,gymInfo){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(gymInfo);
                }
            })
        })
    }
}