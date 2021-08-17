const db = require('../lib/mysql');

module.exports = {
    insertCoachClass:function(post,gymId,classType_id,coach_id){
        return new Promise(function(resolve,rejects){
            db.query('insert into coach_classType(GYM_id, classType_id, coach_id) values(?,?,?)',
            [gymId, classType_id,coach_id],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectAll:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.classType_id classType_id, a.name classType_name, a.category category, a.type type, a.decrease decrease, a.color color, a.time time, a.limitClass limitClass, c.name coach_name
            from classType a join coach_classType b on a.classType_id = b.classType_id 
            join coach c on b.coach_id = c.coach_id where a.GYM_id = ?`,[gymId],function(err,result){
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