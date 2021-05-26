// 함수 리터럴 -> 함수 객체를 생성
function sum(x,y){
    return x+y;
}

// 객체 리터럴
var sum2 = new Function('x','y','return x+y;');
console.log(sum2(1,2));

var o ={};
var p ={};

function func(){
    switch(this){
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case global:
            console.log('window');
            break;
    }
}

//함수는 apply를 사용해서 어떤 객체에 종속 시킬 수 있다.
func();
func.apply(o);//o라는 객체의 메소드로 사용된다.
func.apply(p);//p라는 객체의 메소드로 사용 따라서 this의 값은 p가 된다.
