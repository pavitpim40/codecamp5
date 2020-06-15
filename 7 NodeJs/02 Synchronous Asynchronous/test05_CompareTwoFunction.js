
// Synchronous Function
function addSync(a, b) {
  return a + b;
}
let sum = addSync(1,2);
console.log(sum);

// Asynchronous Function
function add(a, b, callbackFunction) {
  callbackFunction( null, a + b );
}

let sum2;
add(1, 2, (err, returnValue) => {sum2 = returnValue;});

console.log(sum2);

  
//ลำดับการทำงาน
// 1.กำหนดตัวแปร sum2
// 2.เรียกใช้งานฟังก์ชัน add (Callstack 1)
// 3.ฟังก์ชัน add ไปเรียกใช้งานอีกฟังก์ชัน ---- ซึงก็คือฟังก์ชันไร้ชื่อของเรา (หรือ callbackFunction ใน add) (Callstack 2)
// ฟังก์ชันไร้ชื่อของเรา จะมีค่า err เป็น null และ returnValue เป็น 1+2
// 4.ฟังก์ชันไร้ชื่อของเรากำหนด sum2 = 3 // ทำงานครบ ฟังก์ชันไร้ชื่อหายไป (Callstack2 หาย)
// 5.ฟังก์ชัน add ทำงานครบแล้ว CallStack1 หาย
// 6. console.log ทำงาน

// สรุปเท่าที่เข้าใจตอนนี้คือ --> callback ตัวอย่างนี้ยังอยู่ใน callstack