// 객체 정의
// 인덱스가 숫자가 아니라 문자열(키:벨류)
var grades= {'egoing':10,'k8805':6,'sorialgi':80};
console.log(grades);

// 다른 생성 방법
var grade = {};
grade['egoing']=60;
grade['k8805']=9;
console.log(grade);

// 키의 접근 
console.log(grades.egoing);
console.log(grades['k88'+'05'])