function outter(){
    var title = 'coding everybody'
    return function(){
        console.log(title);
    }
}
inner = outter(); //외부함수가 종료된 이후에도 내부함수에서 접근이 가능하다
inner();

// private한 변수가 생성가능하다.
function factory_movie(title){
    return {
        get_title: function(){
            return title;
        },
        set_title: function(_title){
            title=_title;
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');
console.log(ghost.get_title());