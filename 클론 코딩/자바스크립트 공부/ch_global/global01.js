var vscope = 'global';
function fscope(){
    var  vscope = 'local';
    console.log(vscope);
}
fscope();
console.log(vscope);

// for문의 변수는 지역변수가 아닌 전역변수 처리가 된다.
var name = "very"
for(var i = 0;i<1;i++){
    var name = "good"
}
console.log(name);