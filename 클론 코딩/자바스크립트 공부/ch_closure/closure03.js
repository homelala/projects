var arr=[];
// 이부분은 함수를 집어넣는것이지 함수를 실행시키는 부문이 아님 따라서 
// 실행될때는 전역변수인 i의값인 5를 출력하는 것
for(var i = 0 ;i<5;i++){
    arr[i]= function(){
        return i; 
    } 
}

// 반복문 진행과 동시에 실행시키면 값이 제대로 들어가긴한다.
for(var i = 0 ;i<5;i++){
    arr[i]= (function(){
        return i;
    })();
}
console.log(arr[2]);

// 외부 함수를 통해 값을 받고 내부 함수로 접근한다.
for(var i = 0 ;i<5;i++){
    arr[i]= function(id){
        return function(){
            return id;
        }
    }(i)   
}
for(var index in arr){
    console.log(arr[index]());
}