// ------------------  Require 1 2 3  ---------------------//

// console.log('1');
// setTimeout ( () => console.log('2') , 1000);
// console.log('3');

// --------------  Promise On the fly--------------//

console.log('1')

new Promise( (resolve,reject) => {        
    setTimeout( () => {
        console.log('2');
        resolve();
    },1000)
}).then( () => console.log('3'))