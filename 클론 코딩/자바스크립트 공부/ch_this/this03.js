var funcThis = null;

function Func(){
    funcThis = this;
}

// 함수로 this를 호출하면 global을 가르킨다
var o1 = Func();
if(funcThis === global){
    console.log('global');
}

// this를 생성자로 생성하면 생성될 객체를 가르킨다
var o2 = new Func();
if(funcThis === o2){
    console.log('o2');
}