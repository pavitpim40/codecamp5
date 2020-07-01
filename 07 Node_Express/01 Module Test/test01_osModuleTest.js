//ทดสอบ module ของ node

//เรียกใช้ module ที่มีชื่อว่า os
const os = require('os');

// หา Total mem และ Free mem 
tmem = os.totalmem;
fmem = os.freemem;
cpus = os.cpus()
//แสดงผล
console.log(`Total Ram = ${tmem} and free memory = ${fmem}`);
console.log(`usage = ${tmem-fmem}`);
console.log(os.hostname());
console.log(cpus);

