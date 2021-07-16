const db = require('../lib/mysql');

module.exports = {
    insertMember:function(post,session){
        console.log("gym",session);
        return new Promise(function(resolve,rejects){
            db.query('insert into member (GYM_id, name, image, email, passwd, birth, male, phone) values(?,?,?,?,?,?,?,?)',
            [session.GYM_id,post.name,"sample",post.email,post.passwd,post.birth,post.male,post.phone],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectMember:function(post){
        return new Promise(function(resolve,rejects){
            db.query('select * from member where email = ?',[post.email],function(err,userInfo){
                if(err){
                    rejects(err);
                }else{
                    resolve(userInfo);
                }
            })
        })
    }
}