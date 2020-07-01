// ####################  คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร ########################
// #####################   โจทย์เดิมใช้ Alert ################################ 

// alert( null || 2 || undefined ); // แสดงค่า 2
// alert(alert(1)|| 2 || alert(3)); //  Alert ค่า 1 และตามด้วย 2 
// alert( 1 && null && 2); //แสดงค่า null
// alert(alert(1) && alert(2)); //แสดงค่า 1 และ undefined
// alert(null||2 && 3 ||4  ); // แสดงค่าเป็น 3

// ################ ลองแปลง Alert ทุกตัวเป็น Console.log ######################

console.log(null || 2 || undefined); 
// แสดงค่าเป็น 2

console.log(console.log(1)|| 2 || console.log(3)); 
//แสดงค่าเป็น 2 (แต่ถ้าดูใน Console จะขึ้น 1 ก่อนและตามด้วย 2)

console.log(1 && null && 2);  
//แสดงค่าเป็น null

console.log(console.log(1) && console.log(2)); 
// แสดงค่าเป็น undefine เนื่องจาก console.log เป็น undefine และตอนแปลงเป็น boolean ได้ false
// ใน console จะแสดง 1 ก่อน และตามด้วย undefined

console.log(null||2 && 3 ||4 ); 
//แสดงค่าเป็น 3 โดยทำ and ก่อน or  



//############################# ทดลองบางอย่าง ##########################

//ทด Null กับ undefined
// console.log(typeof null);
// console.log(typeof undefined);

// console.log(Boolean(null));
// console.log(Boolean(undefined));

// console.log(Boolean(null||2));
// console.log(Boolean(2 && 3));



//ทด Console.log
// console.log(typeof console.log);
// console.log(typeof console.log());
// console.log(typeof console.log(1));

// console.log(Boolean(console.log));
// console.log(Boolean(console.log()));
// console.log(Boolean(console.log(3)));