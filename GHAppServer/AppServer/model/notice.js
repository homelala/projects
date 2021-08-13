const db = require('../lib/mysql');

module.exports = {
    insertNotice:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query('insert into notice(GYM_id, title, description,image) values(?,?,?,"sample")',[gymId,post.title, post.description],function(err,result){
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
    },
    noticeInfo:function(gymId, noticeId){
        return new Promise(function(resolve,rejects){
            db.query('select * from notice where id = ? and GYM_id = ?',[noticeId,gymId],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    noticeDelete:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query('delete from notice where id = ? and GYM_id = ?',[post.id, gymId],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    noticeUpdateProcess: function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query('update notice set title = ?, description = ?, date = now() where GYM_id = ? and id = ?',
                    [post.title, post.description, gymId, post.id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
}