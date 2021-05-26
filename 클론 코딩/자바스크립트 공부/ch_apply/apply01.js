function sum1(arg1,arg2){
    return arg1+arg2;
}

//console.log(sum.apply(null,[1,2]));


function sum2(){
    var _sum = 0;
    for(name in this){
        if(typeof this[name] !== 'function'){
            _sum+=this[name];
        }
    }
    return _sum;
}
o1 = {val1:1,val2:2,val3:3 ,sum:sum2};
o2 = {val1:10,val2:50,val3:100,val4:25, sum:sum2};

console.log(o1.sum()); // -> o1.sum 같이 실행
console.log(o2.sum());

// ****************apply 사용****************** 
o1 = {val1:1,val2:2,val3:3 };
o2 = {val1:10,val2:50,val3:100,val4:25};

function sum(){
    var _sum = 0;
    for(name in this){
        _sum+=this[name];
    }
    return _sum;
}

console.log(sum.apply(o1)); // -> o1.sum 같이 실행 == o1이라는 것의 메소드인 것 처럼 사용
console.log(sum.apply(o2));