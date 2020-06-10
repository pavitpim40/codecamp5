//ทดสอบ module ของ node
// หา Total mem และ Free mem 
const os = require('os');

tmem = os.totalmem;
fmem = os.freemem;

console.log(`Total Ram = ${tmem} and free memory = ${fmem}`);
console.log(`usage = ${tmem-fmem}`);
console.log(os.hostname());

