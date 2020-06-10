//ทดสอบ module ของ node
// อ่านไฟล์
const fs = require('fs');

const data = fs.readFileSync('./readme.txt');  // ถ้าใส่ utf-8 ก็ไม่ต้อง .toString
console.log(data.toString());
console.log('Done...');