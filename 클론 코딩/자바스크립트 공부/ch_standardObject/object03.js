Object.prototype.contain=function(needle){
    for(var name in this){
        if(this[name]===needle){
            return true;
        }
    }
    return false;
}

var o = {'name':'egoing', 'city':'seoul'}
console.log(o.contain('egoing'));
var a = ['egoing','leezche','grapittie'];
console.log(a.contain('leezche'));

var ob = new Object();
ob.name='good';
console.log(ob.contain('good'));

for(var name in o){
    // 객체의 인자로 전달한 자신의 프로퍼티로 가지고 있는지 체크 contain은 부모로 상속받았기 때문에 아니다.
    if(o.hasOwnProperty(name)){
        console.log(name);
    }
}