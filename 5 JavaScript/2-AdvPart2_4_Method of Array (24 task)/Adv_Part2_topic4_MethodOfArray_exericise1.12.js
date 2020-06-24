array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
  ]


const moment = require('moment');

  
let array2  = array1.map(somevar => {

    somevar.birth = moment(somevar.birth).format('DD MMM YYYY');
    return `<tr> <td>${somevar.name}</td> <td>${somevar.birth}</td> </tr>`;

});

console.log(array2);