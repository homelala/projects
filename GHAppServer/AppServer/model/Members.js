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
    memberList:function(gymId,expireV){
        return new Promise(function(resolve,rejects){
            db.query('select * from member where GYM_id = ? and expire = ? and approve = 0', [gymId,expireV], function(err,userInfo){
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
    selectMembershipId:function(post,gymId,today){
        return new Promise(function(resolve,rejects){
            today = new Date();
            var DayFormat = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
            console.log(gymId,post.member_id, post.classType_id, DayFormat,DayFormat);
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
    decreaseMembership:function(post,gymId){
        return new Promise(function(resolve, rejects){
            db.query('update member_membership set countlass = countClass+1,  where GYM_id = ? and member_id = ?')
        })
    }
}