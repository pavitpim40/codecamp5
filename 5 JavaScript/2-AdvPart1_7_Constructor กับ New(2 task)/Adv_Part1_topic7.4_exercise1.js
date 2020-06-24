function Calculator(number1, number2) {
    
    this.read = function(){
       this.number1 = +prompt("key your value1");
       this.number2 = +prompt("key your value2");
    
    }    
    this.sum = function(){
        return (this.number1)+(this.number2);
    }
    this.mul = function(){
        return  (this.number1)*(this.number2);;
    }

}