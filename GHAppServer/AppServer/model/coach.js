const db = require('../lib/mysql');

module.exports = {
    insertCoach:function(post,sessionGym){
        return new Promise(function(resolve,rejects){
            db.query('insert into coach(GYM_id,name,email,phone) values(?,?,?,?)',
            [sessionGym.GYM_id,post.name,post.email,post.phone],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}