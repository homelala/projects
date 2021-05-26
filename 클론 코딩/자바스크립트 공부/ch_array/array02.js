function get_member(){
    return ['egoing','k8805','sorialgi'];
}
var members = get_member();

//대문자로 표현
console.log(members[0].toUpperCase());

var a = ['egoing','k8805','sorialgi'];

//배열의 길이
console.log(a.length);

var li  = ['a','b','c','d'];

// 배열에 객체 추가
li.push('e');

// 여러 개의 데이터 추가 -- 인자는 배열
li = li.concat(['f','g']);

// 첫 번째에 값을 추가 하고 싶을 때 
li.unshift('z');

// 중간에 삽입하는 경우
// 두 번째 인자는 지정한 인덱스 위치부터 삭제되는 개수
li.splice(1,0,'y');
console.log(li);

// 첫 번째 인덱스 배열의 제거
li.shift(); // 제거된 값 리턴

// 마지막 인덱스 배열 제거
li.pop();

// 정렬
li.sort();

// 역순 정렬
li.reverse();
console.log(li);