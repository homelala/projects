const db = require('../lib/mysql');
module.exports = {
    selectReserveHistory:function(schedule_id,gymId){
        return new Promise(function(resolve,rejects){
            console.log(schedule_id,gymId);
            db.query('select * from member_class a join member b on a.member_id = b.member_id where a.class_id = ? and a.gym_id = ? ',[schedule_id, gymId],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectWaitingMember:function(schedule_id,gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from waitingMember a join member b on a.member_id = b.member_id where a.class_id = ? and a.gym_id = ?',[schedule_id, gymId],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    cancelReservation:function(post, gymId){
        return new Promise(function(resolve,rejects){
            db.query('select     * from member_class where class_id = ? and member_id =?',[post.schedule_id,post.member_id],function(err,deleteInfo){
                if(err){
                    rejects(err);
                }else{
                    db.query('delete from member_class where class_id = ? and member_id =?',[post.schedule_id,post.member_id],function(err,result){
                        if(err){
                            console.log(err);
                            rejects(err);
                        }else{
                            resolve(deleteInfo);
                        }
                    })
                }
            })  
        })
    },
    ReserveWaitingMember:function(post,gymId,waitingInfo){
        return new Promise(function(resolve, rejects){
            // 가장 작은 순번을 예약을 하고 나머지는 순번을 하나씩 올리기
            db.query(`insert into member_class(GYM_ID, class_id, member_id, member_membership_id) values(?,?,?,?)`,
                [gymId,waitingInfo.class_id,waitingInfo.member_id,waitingInfo.member_membership_id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })   
        })
    },
    minWaitingMember:function(post){
        return new Promise(function(resolve,rejects){
            db.query('select * from waitingMember where class_id = ? and  waitingNumber = (select temp from (select min(waitingNumber) as temp from waitingmember a where class_id = ?) as t) ',
            [post.schedule_id,post.schedule_id],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })  
    },
    updateStatus:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`update member_class set attend = ? where class_id = ? and member_id =?`,[post.status, post.schedule_id, post.member_id],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    memberHistory:function(memberId, gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select b.class_id id, c.name classType_name, a.date date, e.name membership_name, b.decrease decrease, a.attend attend
                    from member_class a join class b on a.class_id = b.class_id 
                    join classType c on b.classType_id = c.classType_id 
                    join member_membership d on a.member_membership_id = d.id
                    join membership e on d.membership_id = e.membership_id 
                    where a.GYM_id = ? and a.member_id =?
                    `,[gymId, memberId],function(err,result){
                    if(err){
                        console.log(err);
                        rejects(err);
                    }else{
                        resolve(result);
                    }    
                })
        })
    },
    memberWaitHistory:function(memberId, gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select b.class_id id, c.name classType_name, a.date date, e.name membership_name, b.decrease decrease
                    from waitingMember a join class b on a.class_id = b.class_id 
                    join classType c on b.classType_id = c.classType_id 
                    join member_membership d on a.member_membership_id = d.id
                    join membership e on d.membership_id = e.membership_id 
                    where a.GYM_id = ? and a.member_id =?
                    `,[gymId, memberId],function(err,result){
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