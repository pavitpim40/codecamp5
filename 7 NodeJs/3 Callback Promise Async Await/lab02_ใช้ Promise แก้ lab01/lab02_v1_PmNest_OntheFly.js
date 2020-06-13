// ทำแบบ On the Fly
// เป็น Promise แบบ Nested  ---- ทำไปเรื่อยๆก็เป็น Hell
// Code นี้แสดงผลถูกต้อง 

console.log('a');
new Promise ( rs => {
    setTimeout( () => {
    console.log('b')
    rs()
    },1000)
}).then ( ( ) => {
    new Promise ( rs => {
    setTimeout (()=> {
        console.log('c');
        rs();
    } ,1000 )
    }).then (() => {    //สังเกต .then ต้องต่อหลัง Promise ตัวที่2
    setTimeout(() => console.log('d') , 1000 )
})
})