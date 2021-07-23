const { on } = require('../lib/mysql');
const db = require('../lib/mysql');

module.exports = {
    maxCategoryId:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select max(category) maxCatgory from class where GYM_id = ?',[gymId],function(err,categoryId){
                id = categoryId[0].maxCatgory == null ? 1:categoryId[0].maxCatgory+1;
                if(err){
                    rejects(err);
                }else{
                    resolve(id);
                }
            })
        })
    },
    insertSchedule:function(post,gymId,id,startDay){
        return new Promise(function(resolve,rejects){
            db.query('insert into class(GYM_id, classType_id, coach_id, category, startDay, startTime, period, reservePerson, decrease) values(?,?,?,?,?,?,?,?,?)',
            [gymId, post.classType_id, post.coach_id, id, startDay, post.startTime, post.period, post.reservePerson, post.decrease],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            });
        })
    }
}