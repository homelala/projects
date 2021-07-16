const db = require('../lib/mysql');

module.exports = {
    insertGYM:function(post){
        return new Promise(function(resolve,rejects){
            db.query('insert into gym (name, location, logoImage, category, adminName, email, phone, passwd) values(?,?,?,?,?,?,?,?)',
            [post.name,post.location,"test",post.category,post.adminName,post.email,post.phone,post.passwd],function(err,result){
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
            db.query('select * from gym where email = ?',[post.email],function(err,gymInfo){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    //console.log(gymInfo)
                    resolve(gymInfo);
                }
            })
        })
    }
}