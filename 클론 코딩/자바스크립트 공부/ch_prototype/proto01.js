function Ultra(){};
Ultra.prototype.ultraProp = true;

function Super(){}
//Super.prototype = new Ultra();
var t = new Ultra();
Super.prototype = t;

function Sub(){};
//Sub.prototype = new Super();
var s = new Super();
Sub.prototype =s;

// Sub < Super < Ultra
// new를 통해 생성시 prototype안에 들어있는 객체를 반환한다.
var o = new Sub();

console.log(o.ultraProp)