let arr = [];


function sumInput(){

    let value = +prompt("Enter your value");
    let sum = 0 ; 

    while (!isNaN(value)){
        sum += value ;
        arr.push(value);
        value = +prompt("Enter your value");
    }
    console.log(sum);
    console.log(arr);
}
