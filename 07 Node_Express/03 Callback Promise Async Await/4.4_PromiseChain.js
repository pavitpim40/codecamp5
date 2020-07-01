// ------------------  Require 1 2 3  ---------------------//

// console.log('1');
// setTimeout ( () => console.log('2') , 1000);
// console.log('3');


// ------------------ Promise Chain  ---------------------//
// ใส่ return ตรง new Promise 2  
console.log('1')

new Promise ( rs => {
    setTimeout (()=> {
        console.log('2');
        rs()
    },1000)
}).then(()=>{
    return new Promise( rs => {   //new Promise ตัวนี้จะถูกสร้างเมื่อ Promise ตัวแรกถูก resolve ** ต้องใช้ return
        setTimeout(()=> {
            console.log('3');
            rs()
        },2000)
    })
}).then( ()=> console.log('End')) //บรรทัดนี้จะถูก run เมื่อ Promise ตัวที่สองถูก resolve


