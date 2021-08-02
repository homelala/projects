const db = require('../lib/mysql');
const gym = require('./gym');

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
            select distinct a.class_id id, d.name classType_name, d.classType_id classType_id, a.startDay startDay, a.totalReservation total, a.startTime startTime, Date_add(a.startTime, Interval a.period minute) period, a.reserveNumber
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
            select distinct a.class_id id, d.name classType_name, d.classType_id classType_id, a.startDay startDay, a.totalReservation total, a.startTime startTime, Date_add(a.startTime, Interval a.period minute) period, a.reserveNumber
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
            select distinct a.class_id id, d.name classType_name,  d.classType_id classType_id, a.startDay startDay, a.totalReservation total, a.startTime startTime, Date_add(a.startTime, Interval a.period minute) period, a.reserveNumber
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
    },
    selectSchedule:function(post, gymId){
        return new Promise(function(resolve, rejects){
            console.log(post);
            db.query('select * from class a join gym b on a.GYM_id = b.GYM_id where a.GYM_id = ? and a.class_id = ? ',[gymId,post.schedule_id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectScheduleId:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select * from class where GYM_id = ? and class_id =?`,[gymId,post.schedule_id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result)
                }
            });
        })
    },
    reserveSchedule:function(post,gymId,member_membership_id){
        return new Promise(function(resolve, rejects){
            db.query(`insert into member_class(GYM_id, class_id, member_membership_id, member_id, attend) values(?,?,?,?,?)`,
            [gymId, post.schedule_id, member_membership_id, post.member_id,0],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    db.query(`update class set reserveNumber = reserveNumber+1 where class_id = ?`,[post.schedule_id],function(err,result){
                        if(err){
                            rejects(err);
                        }else{
                            resolve(result);
                        }
                    })
                }
            })
        })
    },
    waitingSchedule:function(post,gymId){
        return new Promise(function(resolve, rejects){
            db.query('select * from member_class where member_id = ? and class_id = ? ',[post.member_id, post.schedule_id],function(err,info){
                if(err){
                    rejects(err);
                }else{
                    if(info[0] != undefined){
                        console.log(info);
                        rejects(err);
                    }else{
                        db.query(`insert into waitingmember(GYM_id, class_id, member_id, waitingNumber) values(?,?,?,(SELECT IFNULL(MAX(waitingNumber) + 1,1) as maxNumber from waitingmember a) )`
                        ,[gymId,post.schedule_id,post.member_id],function(err,result){
                            if(err){
                                console.log(err);
                                rejects(err);
                            }else{
                                resolve(result);
                            }
                        })
                    }
                }
            })
        })
    }
}