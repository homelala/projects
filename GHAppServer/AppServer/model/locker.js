const db = require('../lib/mysql');
const gym = require('./gym');

module.exports = {
    createLoker:function(post,gymId){
        return new Promise(function(resolve, rejects){
            db.query('insert into locker(GYM_id) values(?)',[gymId],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    lockerList:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.locker_id locker_id, c.name member_name, c.phone phone, b.endDate endDate, c.member_id member_id from locker a left join member_locker b on a.locker_id = b.locker_id 
            left join member c on b.member_id = c.member_id
            where a.GYM_id = ?`,[gymId],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    registerLocker:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query('insert into member_locker(GYM_id, member_id, locker_id, startDate, endDate, payment, paymentDay,cash, card, accountReceivable) values(?,?,?,?,?,?,?,?,?,?)',
            [gymId, post.member_id, post.locker_id, post.startDay, post.endDay, post.payment,post.paymentDay,post.cash,post.card,post.accountReceivable],
            function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}