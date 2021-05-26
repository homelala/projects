var numbers = [20,10,9,8,4,5,7,3,2,1];

var sortfunc = function(a,b){
    console.log(a,b);
    return a-b; //양수 출력
    // 역순 return b-a;
    /*if(a>b){
        return 1;
    }else if(a<b){
        return -1
    }else{
        return 0;
    }*/
}

console.log(numbers.sort(sortfunc))