const { rejects } = require('assert');
const db = require('../lib/mysql');

module.exports = {
    insertMembership:function(post,session){
        return new Promise(function(resolve,rejects){
            db.query('insert into membership (GYM_id, name, price, period, maxApply, maxDayAttend, maxWeekAttend) values(?,?,?,?,?,?,?)',
            [session.GYM_id,post.name,post.price,post.period*post.periodType,post.maxApply,post.maxDayAttend,post.maxWeekAttend],
            function(err,result){
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
            db.query(`select b.name membership_name, a.startDay startDay, a.endDay endDay, c.name classType_name, a.maxCountClass maxApply, a.countClass countClass, b.price price, 
            a.payment payment, a.card card, a.cash cash, a.accountReceivable accountReceivable, a.paymentDay paymentDay, b.period from member_membership a
            join membership b on a.membership_id = b.membership_id 
            join classType c on a.classType_id = c.classType_id where a.gym_id = ? and a.member_id = ?`,
            [gym_id,member_id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    buyMembership:function(post,gym_id,member_id){
        return new Promise(function(resolve,rejects){
            db.query('insert into member_membership(GYM_id,member_id,membership_id,classType_id,startDay,endDay, maxCountClass, countClass,payment,cash,card,accountReceivable,paymentDay) values(?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [gym_id,member_id,post.membership_id,post.classType_id,post.startDay,post.endDay, post.MaxApply, post.countClass,
            post.payment,post.card,post.cash,post.accountReceivable,post.paymentDay],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectMember_Mebership:function(post,gym_id,membershipId){
        return new Promise(function(resolve,rejects){
            db.query(`select * from member_membership a join membership b on a.membership_id = b.membership_id 
                where a.GYM_id = ? and  a.member_id = ? and a.id =? and a.classType_id =?`,
            [gym_id,post.member_id, membershipId, post.classType_id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectMembershipId:function(post,gymId,today){
        return new Promise(function(resolve,rejects){
            today = new Date();
            var DayFormat = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
            db.query('select * from member_membership where GYM_id = ? and member_id = ? and classType_id = ? and ? <= endDay and ? >=startDay'
            ,[gymId,post.member_id, post.classType_id, DayFormat,DayFormat], function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    decreaseMembership:function(post,gymId, decrease, id){
        return new Promise(function(resolve, rejects){
            db.query(`update member_membership set countClass = countClass+?, DayAttend = DayAttend+?, weekAttend = weekAttend +? where id= ?`
            ,[decrease,decrease,decrease,id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    cancelReserveMembership:function(decrease,id){
        return new Promise(function(resolve, rejects){
            db.query(`update member_membership set countClass = countClass-?, DayAttend = DayAttend-?, weekAttend = weekAttend -? where id= ?`
            ,[decrease,decrease,decrease,id],function(err,result){
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