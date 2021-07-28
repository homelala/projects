const db = require('../lib/mysql');

module.exports = {
    maxCategoryId:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select max(category) maxCatgory from class where GYM_id = ?',[gymId],function(err,categoryId){
                id = categoryId[0].maxCatgory == null ? 1:categoryId[0].maxCatgory+1;
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(id);
                }
            })
        })
    },
    insertSchedule:function(post,gymId,id,startDay){
        return new Promise(function(resolve,rejects){
            db.query('insert into class(GYM_id, classType_id, category, startDay, startTime, period, totalReservation, decrease) values(?,?,?,?,?,?,?,?)',
            [gymId, post.classType_id, id, startDay, post.startTime, post.period, post.reservePerson, post.decrease],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            });
        })
    },
    insertCoachSchedule:function(gymId,class_id,coach_id){
        return new Promise(function(resolve,rejects){
            db.query('insert into coach_class(GYM_id, class_id, coach_id) values(?,?,?)',[gymId,class_id,coach_id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    DayScheduleList:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`
            select distinct a.class_id id, d.name classType_name, a.startDay startDay, a.startTime startTime, Date_add(a.startTime, Interval a.period minute) period, a.reserveNumber
            from class a 
            join coach_class b on a.class_id = b.class_id 
            join classtype d on a.classType_id = d.classType_id where a.GYM_id = ? and a.startDay = ?
            `,[gymId, post.startDay],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            });
        });
    },
    MonthScheduleList:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`
            select distinct a.class_id id, d.name classType_name, a.startDay startDay, a.startTime startTime, Date_add(a.startTime, Interval a.period minute) period, a.reserveNumber
            from class a 
            join coach_class b on a.class_id = b.class_id 
            join classtype d on a.classType_id = d.classType_id where a.GYM_id = ? and (a.startDay > Last_DAY(now()- interval 1 month) and a.startDay <= Last_Day(now()))
            `,[gymId, post.startDay],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            });
        });
    },
    WeekScheduleList:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`
            select distinct a.class_id id, d.name classType_name, a.startDay startDay, a.startTime startTime, Date_add(a.startTime, Interval a.period minute) period, a.reserveNumber
            from class a 
            join coach_class b on a.class_id = b.class_id 
            join classtype d on a.classType_id = d.classType_id where a.GYM_id = ? and week(a.startDay) = week(?)
            `,[gymId, post.startDay],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            });
        });
    }
}