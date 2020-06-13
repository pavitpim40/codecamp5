// ------------------  Require 1 2 3  ---------------------//

// console.log('1');
// setTimeout ( () => console.log('2') , 1000);
// console.log('3');




// ------------------ V.1 Promise สร้างแบบ Instant ---------------------//

let pm = new Promise( (resolve,reject) => {        
    setTimeout( () => {
        console.log('2');
        resolve();
    },1000)
})

console.log('1')
pm.then( () => console.log('3'))



// ------------------ V.2 Promise สร้างแบบ Instant ---------------------//
// ลองเอา resolve ไว้ที่อื่น // รันแล้วได้ 1 3 2

let pm = new Promise( (resolve,reject) => {
    console.log('1')
    setTimeout( () => {console.log('2');},1000)
    resolve();  //เอา resolve ไว้ข้างนอก setTimeout มันจะไม่รอและข้ามไป .then แล้ว log 3 เลย
})

pm.then( () => console.log('3'))


