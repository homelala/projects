var a =1;
function func(b){
    b=2;
}
func(a);
console.log(a);

var x ={'id':1};
function funx(b){
    //b={'id':2};
    b.id=2;
}
funx(x);
console.log(x.id);