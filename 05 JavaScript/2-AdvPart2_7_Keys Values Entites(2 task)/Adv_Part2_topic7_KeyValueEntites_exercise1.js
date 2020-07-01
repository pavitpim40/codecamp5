let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };


function sumSalaries(salaries) {
    let sum = 0;  
    for (let somevar in salaries){

        sum += salaries[somevar];
    }
    return sum;
}


// เอาไว้ทวน
// function sumSalaries(salaries) {
//     //Summary with Reduce
//     return Object.values(salaries).reduce((total, value) => {
//       return total + value;
//     }, 0);
//   }
  
//   let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
//   };
  
//   console.log(sumSalaries(salaries));

