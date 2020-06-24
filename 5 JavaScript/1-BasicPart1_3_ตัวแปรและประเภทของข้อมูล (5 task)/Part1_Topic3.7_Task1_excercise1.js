//ผลลัพธ์ของ Console.log 
let name = "Codecamp";

console.log(name);
console.log(typeof name);   //แสดงผลเป็น string


console.log (`hello ${1}`); //แสดงผลเป็น hello 1
console.log (typeof (`hello ${1}`)); // เป็น string

console.log (`hello ${"name"}`); //แสดงผลเป็น hello name
console.log (typeof(`hello ${"name"}`)); // เป็น string

console.log (`hello ${name}`); //แสดงผลเป็น hello Codecamp  (ว้าววววว นี่หรือ backtick)
console.log (typeof (`hello ${name}`)); // เป็น string เช่นเดิม