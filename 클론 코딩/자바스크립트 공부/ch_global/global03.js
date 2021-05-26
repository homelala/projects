var i =5;
function a(){
    var i =10;
    b();
}

function b(){
    console.log(i);
}
a(); // 5를 출력 --> 사용될 때까 아니라 정의될 때 의 변수를 참조 
