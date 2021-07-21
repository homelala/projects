const { UV_FS_O_FILEMAP } = require('constants');
const db = require('../lib/mysql');

module.exports = {
    insertMembership:function(post,session){
        return new Promise(function(resolve,rejects){
            db.query('insert into membership (GYM_id, name, price, period, maxApply, maxDayAttend, maxWeekAttend) values(?,?,?,?,?,?,?)',
            [session.GYM_id,post.name,post.price,post.period*post.periodType,post.maxApply,post.maxDayAttend,post.maxWeekAttend],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    AllMembership:function(session){
        return new Promise(function(resolve, rejects){
            db.query('select * from membership where GYM_id = ?',[session.GYM_id],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    useMembershipInfo:function(gym_id,member_id){
        return new Promise(function(resolve, rejects){
            db.query(`select b.name membership_id, a.startDay startDay, c.name classType_name, b.maxApply maxApply, a.countClass countClass, b.price price, 
            a.payment payment, a.card card, a.cash cash, a.accountReceivable accountReceivable, a.paymentDay paymentDay, b.period from member_membership a
            join membership b on a.membership_id = b.membership_id 
            join classType c on a.classType_id = c.classType_id where a.gym_id = ? and a.member_id = ?`,
            [gym_id,member_id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    console.log(result);    
                    resolve(result);
                }
            })
        })
    },
    buyMembership:function(post,gym_id,member_id){
        return new Promise(function(resolve,rejects){
            db.query('insert into member_membership(GYM_id,member_id,membership_id,classType_id,startDay,countClass,payment,cash,card,accountReceivable,paymentDay) values(?,?,?,?,?,?,?,?,?,?,?)',
            [gym_id,member_id,post.membership_id,post.classType_id,post.startDay,post.countClass,
            post.payment,post.card,post.cash,post.accountReceivable,post.paymentDay],function(err,result){
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