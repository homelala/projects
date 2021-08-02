const db = require('../lib/mysql');

module.exports = {
    selectReserveHistory:function(schedule_id,gymId){
        return new Promise(function(resolve,rejects){
            console.log(schedule_id,gymId);
            db.query('select * from member_class a join member b on a.member_id = b.member_id where a.class_id = 108 and a.gym_id = 9 ',[schedule_id, gymId],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectWaitingMember:function(schedule_id,gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from waitingMember a join member b on a.member_id = b.member_id where a.class_id = ? and a.gym_id = ?',[schedule_id, gymId],function(err,result){
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