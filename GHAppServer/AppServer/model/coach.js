const db = require('../lib/mysql');
const gym = require('./gym');

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
    },
    AllCoach:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from coach where GYM_id = ?',[gymId],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    scheduleCoach:function(gymId,scheduleId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.name name from coach a join coach_class b on a.coach_id = b.coach_id where b.class_id = ? and b.GYM_id = ?`,
            [scheduleId,gymId],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    coachInfo:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.name coach_name, d.name classType_name, count(c.class_id) countClass from coach a 
                join coach_class b on a.coach_id = b.coach_id
                join class c on b.class_id = c.class_id
                join classType d on c.classType_id = d.classType_id
                where a.GYM_id = ? and month(startDay) = month(?)
                group by d.classType_id, b.coach_id`,[gymId,post.date],function(err,result){
                    if(err){
                        rejects(err);
                    }else{
                        resolve(result);
                    }
                })
        })
    }
}