let calculator = {
    key1 : 0 ,
    key2 : 0 ,

    read : function(){
       let value1 = +prompt("key your value1");
       let value2 = +prompt("key your value2");
        calculator.key1 = value1;
        calculator.key2 = value2;
    },    
    sum : function(){
        return (calculator.key1)+(calculator.key2);
    },
    mul : function(){
        return  (calculator.key1)*(calculator.key2);
    },

}


calculator.read();
alert (calculator.sum);
alert (calculator.mul);

/* ###### เฉลย อ.ซันเต๋อ ##########
######## ใช้ this แล้วกระชับกว่า ########
let calculator = {
    
    read : function(){
       this.number1 = Number(prompt("key your value1"));
       this.number2 = Number(prompt("key your value2"));
    
    },    
    sum : function(){
        return (this.number1)+(this.number2);
    },
    mul : function(){
        return  (this.number1)+(this.number2);;
    },

}


calculator.read();  // พอเรียกใช้ this จะกลายเป็น calculator  เลย 
alert (calculator.sum);
alert (calculator.mul);

*/