// 클로져 = 내부 함수가 외부함수의 맥락에 접근 할 수 있도록 하는 것

function outter(){// 외부함수
    var title = "coding everybody"
    function inner(){// 내부함수
        // 내부 함ㅅ에서 외부 함수의 변수를 접근이 가능하다
        console.log(title);
    }
    inner();
}
outter();