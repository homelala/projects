function func(){
    console.log('Hello');
}
func();


var o ={'func' : function(){
    console.log('Hello?')
}}
o.func();
global.o.func()