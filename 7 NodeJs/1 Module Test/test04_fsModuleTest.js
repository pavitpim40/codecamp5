const fs = require('fs');

// ------------ Read แบบ ASynchronous -----------------//
// ไม่มีการรับประกันว่าข้อมูลในไฟล์ codecamp1 จะแสดงผลตัวสุดท้าย

for (let i = 0; i < 20; i++) {
    fs.readFile('codecamp.txt', 'utf8', (err, data) => {
      console.log(data);
    });
    console.log("CC5");
    fs.readFile('codecamp1.txt', 'utf8', (err, data) => {   
    console.log(data);
    });
}

// ------------ Read แบบ Synchronous -----------------//
// รับประกันได้ว่า v2 จะถูก log  หลังจาก v1

for (let i = 0; i < 20; i++) { 
const v1 = fs.readFileSync('./codecamp.txt', 'utf-8');
console.log(v1);

};
const v2 = fs.readFileSync('./codecamp1.txt', 'utf-8');
console.log(v2);