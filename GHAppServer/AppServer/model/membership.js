const { UV_FS_O_FILEMAP } = require('constants');
const db = require('../lib/mysql');

module.exports = {
    insertMembership:function(post,session){
        return new Promise(function(resolve,rejects){
            db.query('insert into membership (GYM_id, name, price, period, maxApply, maxDayAttend, maxWeekAttend) values(?,?,?,?,?,?,?)',
            [session.GYM_id,post.name,post.price,post.period*post.periodType,post.maxApply,post.maxDayAttend,post.maxWeekAttend],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    AllMembership:function(session){
        return new Promise(function(resolve, rejects){
            db.query('select * from membership where GYM_id = ?',[session.GYM_id],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}