
// ไม่ได้เพราะมี new 2 ครั้ง มันจะเริ่มนับเวลาเลย
const pm1 = new Promise ( resolve => {   
    setTimeout ( () => {
        console.log('b')
        resolve ()
    } , 1000)
})
const pm2 = new Promise ( resolve => {  
    setTimeout ( () => {
        console.log('c')
        resolve ()
    } , 1000)
})

console.log('a');
pm1.then ( () => {
   return pm2.then ( () => {
        setTimeout ( () => {
            console.log('d')
        },1000)
    })
})
