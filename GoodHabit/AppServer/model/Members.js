const db = require('../lib/mysql');

module.exports = {
    insertMember:function(post){
        return new Promise(function(resolve,rejects){
            db.query('insert into member (GYM_ID, name, image, email, passwd, birth, male, phone) values(?,?,?,?,?,?,?,?)',
            [1,post.name,"sample",post.email,post.passwd,post.birth,post.male,post.phone],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    console.log('goo')
                    resolve(result);
                }
            })
            db.end();
        })
    }   
}