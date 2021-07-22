const db = require('../lib/mysql');

module.exports = {
    Allselect:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from reserveBlock where GYM_id = ?',[gymId],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    checkBlock:function(startDay,gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from reserveBlock where GYM_id = ?',[gymId],function(err,result){
                for(var i =0; i<result.length;i++){
                    if(startDay < result[i].startDay || startDay > result[i].endDay){
                        resolve(true);
                    }else{
                        rejects(err)
                    }
                }
            })
        })
    }
}