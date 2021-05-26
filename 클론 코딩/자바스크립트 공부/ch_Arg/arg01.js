// arguments = 사용자가 전달한 인자가 들어있는 배열
function sum(){
    var i, _sum=0;
    for(i=0;i<arguments.length;i++){
        console.log(i+' : '+arguments[i]);
        _sum+=arguments[i];
    }
    return _sum;
}
console.log('result : '+sum(1,2,3,4));
