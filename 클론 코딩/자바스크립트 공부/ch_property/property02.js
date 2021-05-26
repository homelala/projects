// 생성자(함수) 객체를 초기화
function Person(name){
    this.name =name;
    this.introduce = function(){
        return 'My name is '+this.name;
    } 
}

// 자바스크립트에서는 생성자 = 함수 
var p = new Person('egoing');
var p1 =  new Person('leezche');

console.log(p.introduce());
