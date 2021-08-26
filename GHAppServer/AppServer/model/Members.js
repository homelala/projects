const db = require('../lib/mysql');

const gym = require('./gym');

module.exports = {
    insertMember:function(req,post,session){
        var imageInfo = req.file.location = undefined ? "sample" :req.file.location;
        return new Promise(function(resolve,rejects){
            db.query('insert into member (GYM_id, name, image, email, passwd, birth, male, phone) values(?,?,?,?,?,?,?,?)',
            [session.GYM_id,post.name,imageInfo,post.email,post.passwd,post.birth,post.male,post.phone],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectMember:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from member where email = ? and GYM_id = ?',[post.email,gymId],function(err,userInfo){
                if(err){
                    rejects(err);
                }else{
                    resolve(userInfo);
                }
            })
        })
    },
    memberList:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.member_id member_id, a.male male, a.birth birth, a.description description, a.name member_name, 
                    max(b.startDay) recentAttendDay, a.phone phone, e.startDay, e.endDay, f.name membership_name, g.name classType_name, e.countClass countClass
                    from member a left join (select member_id, startDay from member_class c join class d 
                    on c.class_id = d.class_id where c.attend != 0 and c.attend != 3) b 
                    on a.member_id = b.member_id
                    join member_membership e on a.member_id = e.member_id
                    join membership f on e.membership_id = f.membership_id
                    join classType g on e.classType_id = g.classType_id
                    where a.GYM_id = ? and a.approve = 0 and e.endDay >= now() and e.maxCountClass != e.countClass 
                    group by member_id `, [gymId], function(err,userInfo){
                    if(err){
                        rejects(err);
                    }else{
                        resolve(userInfo);
                    }
            })
        })
    },
    memberListExpire:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.member_id member_id, a.male male, a.birth birth, a.description description, a.name member_name, 
                max(b.startDay) recentAttendDay, a.phone phone, e.startDay, e.endDay, f.name membership_name, g.name classType_name 
                from member a left join (select member_id, startDay from member_class c join class d 
                on c.class_id = d.class_id where c.attend != 0 and c.attend != 3) b 
                on a.member_id = b.member_id
                left join member_membership e on a.member_id = e.member_id
                left join membership f on e.membership_id = f.membership_id
                left join classType g on e.classType_id = g.classType_id
                where a.member_id not in 
                (select a.member_id id from member a join member_membership b on a.member_id = b.member_id where b.endDay >= now() and b.maxCountClass != b.countClass) 
                and a.GYM_id = ? and a.approve = 0 group by member_id
            `, [gymId], function(err,userInfo){
                if(err){
                    rejects(err);
                }else{
                    resolve(userInfo);
                }
            })
        })  
    },
    ApproveMember:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from member where GYM_id = ? and approve = 1', [gymId], function(err,userInfo){
                if(err){
                    rejects(err);
                }else{
                    resolve(userInfo);
                }
            })
        })
    },
    updateApprove:function(post){
        return new Promise(function(resolve, rejects){
            db.query('update member set approve = 0 where member_id =?',[post.member_id],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    memberInfo:function(gym_id,member_id){
        return new Promise(function(resolve,rejects){
            db.query('select * from member where GYM_id = ? and member_id = ?',[gym_id,member_id],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    memberUpdate:function(post,gym_id){
        return new Promise(function(resolve,rejects){
            db.query('update member set phone = ?, birth = ?, description=? where member_id =?',
            [post.phone, post.birth,post.description,post.id],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(post.id)
                }
            })
        })
    },
    accountReceivableList:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select distinct a.member_id member_id, a.name member_name, ifnull(b.accountReceivable,0)+ifnull(c.accountReceivable,0) accountReceivable,
                a.phone phone, d.recentAttendDay recentAttendDay from member a 
                join member_membership b on a.member_id = b.member_id 
                left join member_locker c on a.member_id = c.member_id
                left join (select member_id, max(startDay) recentAttendDay from member_class c join class d 
                on c.class_id = d.class_id where c.attend != 0 and c.attend != 3 group by member_id) d
                on a.member_id = d.member_id
                where (b.accountReceivable != 0 or c.accountReceivable !=0) and a.GYM_id = ?`,[gymId],function(err,result){
                    if(err){
                        rejects(err);
                    }else{
                        resolve(result);
                    }
                })
        })
    },
    sumAccountReceivable:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select sum(ifnull(c.accountReceivable,0)+ifnull(b.accountReceivable,0)) sumAccountReceivable from member a
                join member_membership b on a.member_id = b.member_id 
                left join member_locker c on a.member_id = c.member_id where a.GYM_id = ?`, [gymId],function(err,result){
                    if(err){
                        rejects(err);
                    }else{
                        resolve(result);
                    }
                })
        })
    },
    expireExpectList:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.member_id member_id, a.male male, a.birth birth, a.description description, a.name member_name, 
            max(b.startDay) recentAttendDay, a.phone phone, e.startDay, e.endDay, f.name membership_name, g.name classType_name 
            from member a left join (select member_id, startDay from member_class c join class d 
            on c.class_id = d.class_id where c.attend != 0 and c.attend != 3) b 
            on a.member_id = b.member_id
            left join member_membership e on a.member_id = e.member_id
            left join membership f on e.membership_id = f.membership_id
            left join classType g on e.classType_id = g.classType_id
            where a.member_id not in 
            (select a.member_id id from member a join member_membership b on a.member_id = b.member_id where b.endDay >= date_add(now(), interval 7 day) and b.maxCountClass != b.countClass) 
            and a.GYM_id = ? and a.approve = 0 group by member_id
            `,[gymId],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    todayReserveList:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.member_id member_id, a.name member_name, a.male male, a.birth birth, a.description description,
                b.attend attend, c.startTime startTime, date_add(c.startTime, interval c.period minute) endTime, d.name classType_name, 
                e.endDay endDay, max(f.startDay) recentAttendDay from member a
                right join member_class b on a.member_id = b.member_id
                left join class c on b.class_id = c.class_id
                join classType d on c.classType_id = d.classType_id
                left join member_membership e on b.member_membership_id = e.id
                left join (select member_id, startDay, attend from member_class c 
                left join class d on c.class_id = d.class_id 
                where c.attend != 0 and c.attend != 3) f
                on a.member_id = f.member_id
                where a.GYM_id = ? and c.startDay = date_format(?,'%y-%m-%d')
                group by a.member_id `,[gymId,post.date],function(err,result){
                    if(err){
                        rejects(err);
                    }else{
                        resolve(result);
                    }
                })
        })
    },
    sumPayment:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.GYM_id, sum(a.payment) membershipPayment, b.payment lockerPayment, 
                sum(a.payment)+b.payment sumPayment from member_membership a
                join (select GYM_id, sum(payment) payment from member_locker 
                where GYM_id = ? and month(paymentDay) = month(now())) b on b.GYM_id = a.GYM_id
                where a.GYM_id = ? and month(a.paymentDay) = month(?)`,[gymId,gymId,post.date],function(err,result){
                    if(err){
                        rejects(err);
                    }else{
                        resolve(result);
                    }
            })
        })
    },
    activeMember:function(post, gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.member_id member_id, a.male male, a.birth birth, a.description description, a.name member_name, 
            a.phone phone, e.startDay, e.endDay, f.name membership_name, g.name classType_name, e.countClass countClass
            from member a left join (select member_id, startDay from member_class c join class d 
            on c.class_id = d.class_id where c.attend != 0 and c.attend != 3) b 
            on a.member_id = b.member_id
            left join member_membership e on a.member_id = e.member_id
            left join membership f on e.membership_id = f.membership_id
            left join classType g on e.classType_id = g.classType_id
            where a.GYM_id = ? and a.approve = 0 and e.endDay >= date_format(?,'%y-%m-%d') and e.maxCountClass != e.countClass`,[gymId,post.date],function(err,result){
                if(err){
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    AgainstPaymentInfo:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.GYM_id, ifnull(sum(a.payment),0) membershipPayment from member_membership a
                join member b on a.member_id = b.member_id
                where a.GYM_id = ? and month(a.paymentDay) = month(?) and month(b.registerDate) = month(?)`,[gymId,post.date,post.date],
                function(err,result){
                    if(err){
                        rejects(err);
                    }else{
                        resolve(result);
                    }
                })
        })
    },
    newPaymentInfo:function(post,gymId){
        return new Promise(function(resolve,rejects){
            db.query(`select a.GYM_id, ifnull(sum(a.payment),0) membershipPayment from member_membership a
                join member b on a.member_id = b.member_id
                where a.GYM_id = ? and month(a.paymentDay) = month(?) and month(b.registerDate) != month(?)`,[gymId,post.date,post.date],
                function(err,result){
                    if(err){
                        rejects(err);
                    }else{
                        resolve(result);
                    }
                })
        })
    },
}