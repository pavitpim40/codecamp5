//###### Code นี้แสดงผลถูกต้อง

const pm1 = new Promise ( resolve => {   
    setTimeout ( () => {
        console.log('b')
        resolve ()
    } , 1000)
})

console.log('a');
pm1.then ( () => {
    return new Promise ( resolve => {   //ถ้า .then ตัวที่ 2 nest ไม่ต้องมี return ก็ได้  -- ถ้า chainต้องมี
    setTimeout (() => {
        console.log('c')
        resolve ()
    } , 1000)

    })
}).then ( () => {
    setTimeout ( () => {console.log('d')},1000) //Chain
})
