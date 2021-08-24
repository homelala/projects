const db = require('../lib/mysql');

module.exports={
    deleteWaitingMember:function(post){
        return new Promise(function(resolve,rejects){
            db.query(`delete from waitingMember where class_id = ? and waitingNumber = (select temp from (select min(waitingNumber) as temp from waitingMember a where class_id = ?) as t)`
            ,[post.schedule_id,post.schedule_id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    updateReserve:function(post){
        return new Promise(function(resolve, rejects){
            db.query('update waitingMember set waitingNumber = waitingNumber -1 where class_id = ?',[post.schedule_id],function(err,result){
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