const db = require('../lib/mysql');

module.exports = {
    insertMember:function(post,session){
        console.log("gym",session);
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
    ActiveMember:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from member where GYM_id = ? and approve = 0', [gymId], function(err,userInfo){
                if(err){
                    rejects(err);
                }else{
                    resolve(userInfo);
                }
            })
        })
    },
    ExpireMember:function(gymId){
        return new Promise(function(resolve,rejects){
            db.query('select * from member where GYM_id = ? and expire=1', [gymId], function(err,userInfo){
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
    }
}