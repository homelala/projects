var bcrypt = require('bcrypt');
const saltRound = 10;
const myPlantextPassword = '111111';
const someOtherPlaintextPassword = '111112';
bcrypt.hash(myPlantextPassword,saltRound,function(err,hash){  
    bcrypt.compare(myPlantextPassword,hash,function(err,result){
        
    })
});
