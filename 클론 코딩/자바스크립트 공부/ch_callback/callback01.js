a = {
    b:function(){
        console.log("good")
    }
}
a.b();

function cal(func,num){
    return func(num);
}

function increase(num){
    return num+1;
}

function decrease(num){
    return num-1;
}
console.log(cal(increase,1));
console.log(cal(decrease,1));
