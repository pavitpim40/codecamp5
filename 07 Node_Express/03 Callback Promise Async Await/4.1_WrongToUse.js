// ------------------ Promise ---------------------//

new Promise( rs => 
    setTimeout( () => {
        console.log('2'); 
        rs();
    },1500)).then( () => console.log('3'))

const pm1 = new Promise ( resolve => {
   setTimeout ( () => {
        console.log('2')
        resolve ()
    } , 1000)    
})

const pm2 = new Promise ( resolve => {  
    
    setTimeout ( () => {
        console.log('3')
        resolve ()
    } , 5000)
})

console.log('1');
pm1.then(pm2)

// 1 จาก console.log  
// 2 จาก pm1 เมื่อผ่านไป 1 วิ
// 2 จาก new promise เมื่อผ่านไป 1.5วิ 
// 3 จาก new promise เมื่อ resolve
// 3 จาก pm2 เมื่อเวลาผ่านไป 5 วิ