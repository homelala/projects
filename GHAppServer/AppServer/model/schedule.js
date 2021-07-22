const db = require('../lib/mysql');

module.exports = {
    maxCategoryId:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select max(category) maxCatgory from class where GYM_id = ?',[gymId],function(err,categoryId){
                id = categoryId[0].maxCatgory == null ? 1:categoryId[0].maxCatgory+1;
                if(err){
                    rejects(err);
                }else{
                    console.log(id);
                    resolve(id);
                }
            })
        })
    },
    insertSchedule:function(post,gymId,id){
        return new Promise(function(resolve,rejects){
            db.query('insert into class(GYM_id, classType_id, coach_id, category, startDay, startTime, period, reservePerson, decrease) values(?,?,?,?,?,?,?,?,?)',
            [gymId, post.classType_id, post.coach_id, id, startDay, post.startTime, post.period, post.reservePerson, post.decrease],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve();
                }
            });
        })
    }
    // insertSchedule:function(post,gymId){
    //     return new Promise(function(resolve,rejects){
    //         db.query('select max(category) maxCatgory from class where GYM_id = ?',[gymId],function(err,categoryId){
    //             id = categoryId[0].maxCatgory == null ? 1:categoryId[0].maxCatgory+1;
    //             cycle = post.cycle;
    //             endDay =new Date(post.endDay);
    //             startDay =new Date(post.startDay);
    //             if(cycle !== "undefined"){
    //                 console.log(cycle)
    //                 switch(cycle){
    //                     case "1": //매주 반복
    //                         while(startDay<=endDay){
    //                             db.query('select * from reserveblock where GYM_id = ?',[gymId],function(err,block){
    //                                 blockStart = block[0].startDay;
    //                                 blockEnd = block[0].endDay;
    //                                 if(startDay<blockStart || startDay >blockEnd){
    //                                     console.log(startDay, endDay);
    //                                     db.query('insert into class(GYM_id, classType_id, coach_id, category, startDay, startTime, period, reservePerson, decrease) values(?,?,?,?,?,?,?,?,?)',
    //                                     [gymId, post.classType_id, post.coach_id, id, startDay, post.startTime, post.period, post.reservePerson, post.decrease]
    //                                     ,function(err,result){
    //                                         if(err){
    //                                             console.log(err);
    //                                             rejects(err);
    //                                         }
    //                                     })
    //                                 }
    //                             })
    //                             startDay.setDate(startDay.getDate()+7);
    //                         }
    //                 }
    //                 resolve();
    //             }else{
    //                 db.query('select * from reserveBlock where GYM_id = ?',[gymId],function(err,block){
    //                     blockStart = block[0].startDay;
    //                     blockEnd = block[0].endDay;
    //                     if(startDay<blockStart || startDay >blockEnd){
    //                         db.query('insert into class(GYM_id, classType_id, coach_id, category, startDay, startTime, period, reservePerson, decrease) values(?,?,?,?,?,?,?,?,?)',
    //                         [gymId, post.classType_id, post.coach_id, id, startDay, post.startTime, post.period, post.reservePerson, post.decrease]
    //                         ,function(err,result){
    //                             if(err){
    //                                 console.log(err);
    //                                 rejects(err);
    //                             }else{
    //                                 resolve(result);
    //                             }
    //                         })
    //                     }else{
    //                         console.log("block")
    //                         resolve();
    //                     }
    //                 })
    //             }
    //         })
    //     })
    // }
}