var arr = ["a","b","c"];
console.log('Object.key(arr)',Object.keys(arr));

var o ={"name":'egoing',"age":20,"city":"seoul"};
console.log(o);
// 키값을 수집하여 배열로 리턴
// 생성자 함수 
console.log(Object.keys(o));

// prototype 소속
var a = new Array(1,2,3);
console.log(a.toString());