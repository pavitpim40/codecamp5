function Accumulator(startingValue) {

    this.value = startingValue ;

    this.read = function(){
        this.number = +prompt("key your value1");
        this.value += this.number;
     }   

}