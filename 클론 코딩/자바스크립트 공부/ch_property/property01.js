var person = {};
person.name ='egoing';
person.introduce = function(){
    return 'My name is'+this.name;
}

console.log(person.introduce());

// 정의 + settting
var person1 = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is'+this.name;
    }       
}

var person2 = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is'+this.name;
    }       
}