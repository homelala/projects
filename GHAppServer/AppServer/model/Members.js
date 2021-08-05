const db = require('../lib/mysql');

module.exports = {
    insertMember:function(post,session){
        return new Promise(function(resolve,rejects){
            db.query('insert into member (GYM_id, name, image, email, passwd, birth, male, phone) values(?,?,?,?,?,?,?,?)',
            [session.GYM_id,post.name,"sample",post.email,post.passwd,post.birth,post.male,post.phone],function(err,result){
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
            db.query('select * from member a join member_membership b on a.member_id = b.member_id where b.endDay >= now() and b.maxCountClass != b.countClass and a.GYM_id = ? group by a.member_id', [gymId], function(err,userInfo){
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
            db.query(`select * from member c where c.member_id not in 
            (select a.member_id id from member a join member_membership b on a.member_id = b.member_id where b.endDay >= now() and b.maxCountClass != b.countClass ) 
            and GYM_id = ? and approve = 0
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
    
}