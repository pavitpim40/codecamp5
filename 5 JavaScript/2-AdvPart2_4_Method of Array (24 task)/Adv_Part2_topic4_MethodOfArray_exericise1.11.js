// 1.11 
let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
  ]
//   array2 [
//     { name: "apple", birth: "2000-01-01", age: 19 },
//     { name: "banana", birth: "1990-10-01", age: 29 },
//     { name: "watermelon", birth: "1985-12-01", age: 33 },
//   ] 
const moment = require('moment');

let array2  = array1.map(somevar => {

    somevar.age = moment().diff(somevar.birth,'years');
    return somevar;

});

console.log(array2);