//ทดสอบ module ของ node

// เรียกใช้ Module อ่านไฟล์
const fs = require('fs');

//Read File แบบ Synchronous
const data = fs.readFileSync('./readme.txt');  // ถ้าใส่ utf-8 ก็ไม่ต้อง .toString
console.log(data.toString());
console.log('Done...');