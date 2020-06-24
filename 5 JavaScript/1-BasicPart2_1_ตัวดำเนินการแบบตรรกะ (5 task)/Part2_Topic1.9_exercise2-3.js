// 2.เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18-60 

let age = prompt ('Are you in 18-60 years old range ? , Type your age for check')

if ( age >=18 && age <=60) {
    alert('Yes, you are in  this range.');
}
else if (age < 0 ) {
    alert ('Invalid Value , Refresh this page and try again');
}
    
else if(!( age >=18 && age <=60)) {
    alert ('No , you are not in this range');
}



// ไม่งั้นก็ใช้เป็น else เอา