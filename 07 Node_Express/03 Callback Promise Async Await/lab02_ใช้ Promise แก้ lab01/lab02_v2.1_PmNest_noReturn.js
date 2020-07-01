// ทำแบบ Instant
// เป็น Promise แบบ Nested  ---- ทำไปเรื่อยๆก็เป็น Hell
// Code นี้แสดงผลถูกต้อง 

const pm1 = new Promise ( resolve => {   
    setTimeout ( () => {
        console.log('b')
        resolve ()
    } , 1000)
})

console.log('a');
pm1.then ( () => {
    new Promise (resolve => {
    setTimeout( () => {
        console.log('c')
        resolve()
    } ,1000)

    }).then (() => {
        setTimeout(() => console.log('d'),1000)
    })
})