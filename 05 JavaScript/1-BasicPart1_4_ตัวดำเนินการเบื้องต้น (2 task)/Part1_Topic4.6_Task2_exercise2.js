// จงหาผลลัพธ์ของ Statement ที่กำหนดให้ 

console.log(""+1+0); //แสดงผลลัพธ์เป็น 10 เพราะมี String 1 ตัว ตัวอื่นจึงถูกบังคับให้เป็น String
console.log("" - 1 + 0); //แสดงผลลัพธ์เป็น -1 , เจอลบบังคับให้เป็น Number , String เปล่าแปลงเป็นเลขได้ 0
console.log(true + false); //แสดงผลลัพธ์เป็น 1
console.log(6/"3"); //แสดงผลลัพธ์เป็น 2 เพราะการหารทำให้ string กลายเป็น number
console.log("2" * "3"); //แสดงผลลัพธ์เป็น 6  (string กลายเป็น number)
console.log(4 + 5 + "px") ; //แสดงผลเป็น 9px 
console.log("$" + 4 + 5); //แสดงผลเป็น $45
console.log("4" - 2); //แสดงผลเป็น2
console.log("4px" - 2);//แสดงผลเป็น Nan
console.log(7 / 0); //แสดงผลเป็น infinity
console.log("  -9  " + 5); //แสดงผลเป็น -9 5 (แบบมีช่องว่างระหว่าง9 กับ 5) ,เจอบวกจึงบังคับให้ Number เป็น String 
console.log("  -9  " - 5); //แสดงผลเป็น -14, เจอลบจึงบังคับให้ String เป็น Number
console.log(null + 1); // แสดงผลเป็น 1 
console.log(undefined + 1); //แสดงผลเป็น NaN เพราะยังไม่ทราบว่าตัวที่ undefined เป็นตัวแปรแบบไหน
console.log(" \t \n" - 2); // แสดงผลเป็น -2 ที่ว่างแปลงเป็น Number ได้ 0 พอลบกับ 2 จึงได้ -2

//พื้นที่เด็กซน
console.log(typeof(true + false));
console.log(typeof(" \t \n" - 2));
console.log(typeof(" \t \n" + 2));