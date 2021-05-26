var str ="a";

// 정규 표현식 생성 --> 추출할 때 사용, 존재하는 지 검사, 치환할 때 사용
// '//' 사이의 a가 찾고자 하는 대상
var pattern = /a/;

// exec = 대상에서 패턴이 있는지 검사하고 있으면 배열로 리턴하는 함수 ==> 추출
var pattern = new RegExp('a');
console.log(pattern.exec('abcde'));

// . = 하나의 문자 ab 출력
var pattern = new RegExp('a.');
console.log(pattern.exec('abcde'));

// test = 대상에서 패턴이 존재하면 true 없으면 false ==> 검사
var pattern = new RegExp('a');
console.log(pattern.test('abcde'));

// str 사용 검사 후 배열로 리턴
var pattern = /a/;
var str = 'abcdef'
console.log(str.match(pattern));

// replace = 치환 , 값 자체가 바뀌지는 않음 
var pattern = /a/;
var str = 'abcdef'
console.log(str.replace(pattern,'A'));
console.log(str)