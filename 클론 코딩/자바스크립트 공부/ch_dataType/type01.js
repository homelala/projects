var str = 'coding'; //  = new String('coding')
console.log(str.length);
console.log(str.charAt(0));
str.prop = 'everybody'; // 이순간에는 객체가 만들어졌지만 끝나면 사라진다. -> Wrappe 객체
console.log(str.prop);