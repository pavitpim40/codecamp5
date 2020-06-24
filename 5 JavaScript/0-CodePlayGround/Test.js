// ################# PROBLEM 
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


// ######## CURRENT TIME WITH MOMENT.JS
const moment = require('moment');
console.log(moment);


let current = moment().format('YYYY-MM-DD');
console.log(current);


let myMoment1 = "2000-01-01";
let myMoment2 = "1990-10-10";
let myMoment3 = "1985-12-30";
let myMoment4 = "1990-05-09";

//ลองหาผลต่างปี
console.log(moment().diff(myMoment1,'years'));
console.log(moment().diff(myMoment2,'years'));
console.log(moment().diff(myMoment3,'years'));
console.log(moment().diff(myMoment4,'years'));

//ลองเปลี่ยน format
myMoment1V2 = moment(myMoment1).format('DD MMM YYYY');
console.log(myMoment1V2);


//############### NEW ARRAY 
let array2  = array1.map(somevar => {

     somevar.age = moment().diff(somevar.birth,'years');
     return somevar

});