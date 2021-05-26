// i를 붙이면 대소문자 구분을 하지 않는다
var xi =/a/;
console.log("Abcde".match(xi));

var oi = /a/i;
console.log("Abcde".match(oi));


// g를 사용하면 모두 찾아 준다.
var xg =/a/;
console.log("abcdea".match(xg));

var og = /a/g;
console.log("abcdea".match(og));

// 모든 대소문자를 찾는다
var ig = /a/ig;
console.log("Aabcdea".match(ig));