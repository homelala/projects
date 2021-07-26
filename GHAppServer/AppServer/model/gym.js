const { fsync } = require('fs');
const db = require('../lib/mysql');

module.exports = {
    insertGYM:function(post){
        return new Promise(function(resolve,rejects){
            db.query('insert into gym (name, location, logoImage, category, adminName, email, phone, passwd,subscribtionPath) values(?,?,?,?,?,?,?,?,?)',
            [post.name,post.location,"test",post.category,post.adminName,post.email,post.phone,post.passwd,post.subscribtionPath],function(err,result){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(result);
                }
            })
        })
    },
    selectGym:function(post){
        console.log(post.email)
        return new Promise(function(resolve,rejects){
            db.query('select * from gym where email = ? and passwd = ?',[post.email, post.passwd],function(err,gymInfo){
                if(err){
                    console.log(err);
                    rejects(err);
                }else{
                    resolve(gymInfo);
                }
            })
        })
    },
    updateGymSetting:function(post,gymId){
        var pushAlarm = post.pushAlarm == 'on' ? true:false;
        var remainMember = post.remainMember == 'on' ? true:false;
        var lateTime = post.lateTime == 'on' ? true:false;
        var waitingReserve = post.waitingReserve == 'on' ? true:false;

        return new Promise(function(resolve,rejects){
            db.query(`update gym set countPoint=?, openReserveDate=?, openReserveTime=?, remainMember=?, pushAlarm=?,
            pushAlarmTime=?, reservableTime=?, changeReserveTime=?, cancelReserveTime=?, checkAttendTime=?, lateTime=?, 
            waitingReserve=?,reserveConfirmTime=? where GYM_ID=?`,[post.countPoint, post.reserveOpenType*post.openReserveDate, post.openResrveTime,
            remainMember, pushAlarm, post.pushAlarmType*post.pushAlarmTime, post.reservableType*post.reservableTime,
            post.changeReserveType*post.changeReserveTime, post.cancelReserveType*post.cancelReserveTime, post.checkAttendTimeType*post.checkAttendTime,
            lateTime, waitingReserve, post.reserveConfirmTime,gymId],function(err,result){
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