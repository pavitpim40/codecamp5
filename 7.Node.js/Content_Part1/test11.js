
// console.log('1');
// setTimeout ( () => console.log('2') , 1000);
// console.log('3');

 //### Code 1 
let pm = new Promise( (resolve,reject) => {
    
    
    setTimeout( () => {
        console.log('2');
        resolve();
    },2500)
})

console.log('1')
pm.then( () => console.log('3'))

//  ### Code 2 ลองเอา resolve ไว้ที่อื่น 
// let pm = new Promise( (resolve,reject) => {
//     console.log('1')
    
//     setTimeout( () => {
//         console.log('2');
       
//     },2500)
//     resolve();  // รันแล้วได้ 1 3 2
// })


// pm.then( () => console.log('3'))



//  ##### Code 3 :  Refractor จาก Code1
// console.log('1')
// new Promise( rs => 
//     setTimeout( () => {
//         console.log('2'); 
//         rs();
//     },1500)).then( () => console.log('3'))


// const pm1 = new Promise ( resolve => {
   
//     setTimeout ( () => {
//         console.log('2')
//         resolve ()
//     } , 1000)
    
// })

// const pm2 = new Promise ( resolve => {  
//     setTimeout ( () => {
//         console.log('3')
//         resolve ()
//     } , 5000)

// })

// console.log('1');
// pm1.then (pm2)
