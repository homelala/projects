function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name;
    }
}
var p1 = new Person('egoing');
console.log(p1.introduce());

function Person1(name){
    this.name = name;
}
Person1.prototype.name = null;
Person1.prototype.introduce1=function(){
    return 'My name is '+this.name;
}
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person1();
var p2 = new Programmer('egoing');
console.log(p2.introduce1());

