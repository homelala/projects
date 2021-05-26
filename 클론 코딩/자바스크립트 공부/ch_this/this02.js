function func(){
    if(global == this){
        console.log("global === this");
    }
}
func();

var o ={
    func : function(){
        if( o === this){
            console.log("o === this");
        }
    }
}
o.func();