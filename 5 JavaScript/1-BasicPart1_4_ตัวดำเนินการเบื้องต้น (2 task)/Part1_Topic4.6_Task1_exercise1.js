let  a = 1 , b = 1 ; 

let c = ++a;
let d = b++; 

/* ระบุค่า a,b,c,d หลังจากจบ Statement ทั้ง 3 บรรทัด 

a = 2 เพราะถูกเพิ่มค่าอีก1 ก่อนนำไป assign ตัวแปร c  
b = 2 เพราะถูกเพิ่มค่าขึ้นอีก 1 หลังจาก assign ค่าให้ตัวแปร d
c = 2 อ้างอิงจาก a ที่เดิมมีค่าเท่ากับ 1 --> และถูกเพิ่มค่าอีก 1  --> ก่อนที่จะ assign ให้ c 
d = 1 อ้างอิงจาก b ที่เดิมมีค่าเท่ากับ 1 --> ได้ถูก assign ให้ d ก่อน --> แล้วb ค่อยเพิ่มขึ้น 1  

*/

//  ทดสอบ
console.log(a);
console.log(b);
console.log(c);
console.log(d);