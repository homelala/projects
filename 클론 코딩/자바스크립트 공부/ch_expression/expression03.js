// ()는 정규표현식에서 그룹을 의미
// \w는 문자를 의미
// +는 앞에 있는 문자가 하나 이상일 때 
// \s는 공백을 의미 
// ex) (\w+)\s(\w+) --> AA_b같은 문자열을 찾는다

var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
// $2라는 것은 두 번째 (\w+)을 뜻함
var result = str.replace(pattern, "$2,$1");
console.log(result);

//치환
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);