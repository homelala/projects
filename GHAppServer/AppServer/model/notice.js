const db = require('../lib/mysql');

module.exports = {
    insertNotice:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query('insert into notice(GYM_id, title, description) values(?,?,?)',[gymId,post.title, post.description],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result)
                }
            })
        })
    },
    noticeList:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from notice where GYM_id = ?',[gymId],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}