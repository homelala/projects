var grades = {
    'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi':80},
    'show' : function(){
        // this 함수가 소속되어 있는 객체를 가리킨다.
        for(var name in this.list){
            console.log(name, this.list[name]);
        }
    }
}
console.log(grades['list']['egoing']);
grades.show();