// ------------------  Require 1 2 3  ---------------------//

// console.log('1');
// setTimeout ( () => console.log('2') , 1000);
// console.log('3');

// ------------------ Promise Nested  ---------------------//
// ลองแบบไม่มีคำสั่ง return   แบบนี้จะเป็น nested

console.log('1')

new Promise ( rs => {
    setTimeout (()=> {
        console.log('2');
        rs()
    },2000)
}).then(()=>{
    new Promise( rs => {   
        setTimeout(()=> {
            console.log('3');
            rs()
        },5000)
    })  // ต้องใส่ .then ตรงบรรทัดนี้ .then( (rs)=> console.log(rs)) ถึงจะแสดงผลถูกต้อง
}).then( (rs)=> console.log(rs))  //ใส่ .then บรรทัดนี้ผิด มันจะใช้ค่า resolve ของ new Promise ตัวแรก