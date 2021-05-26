function Person1(name){
    this.name = name;
}
Person1.prototype.name = null;
Person1.prototype.introduce1=function(){
    return 'My id is '+this.name;
}

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person1();
Programmer.prototype.coding = function(){
    return 'hello world';
}
var p2 = new Programmer('egoing');
console.log(p2.introduce1());
console.log(p2.coding());

function Designer(name){
    this.name = name;
}
Designer.prototype = new Person1();
Designer.prototype.design = function(){
    return 'beautiful';
}
var p2 = new Designer('leezche');
console.log(p2.introduce1());
console.log(p2.design());