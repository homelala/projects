const db = require('../lib/mysql');

module.exports = {
    insertClass:function(post,gymId){
        return new Promise(function(resolve,rejects){
            var type = post.type == 'on' ? true:false;
            var limitClass = post.limitClass == 'on'? true:false
            for(var i =0;i<post.coach.length;i++){
                db.query('insert into classType (GYM_id,name, coach_id, category, type, decrease, color, time, reservePerson,limitClass) values(?,?,?,?,?,?,?,?,?,?)',
                [gymId, post.name, post.coach[i],post.category,type,post.decrease,post.color,post.time,post.reservePerson, limitClass],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
            }
        })
    },
    AllClass:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select a.classType_id classType_id, a.name classType_name, b.name coach_name, a.time time from classType a join coach b on a.coach_id =  b.coach_id where a.GYM_id = ?',
                [gymId],function(err,result){
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