
console.log(Boolean(-1||0));
console.log(Boolean(-1 && 0));
console.log(Boolean(null || -1 && 0));


// if(-1||0)  alert('first');  คำสั่งนี้จะถูก run 
// if(-1 && 0) alert('second'); คำสั่งนี้ไม่ถูก run 
// if(null || -1 && 0) alert('thrid'); คำสั่งนี้ไม่ถูก run เพราะทำ and ก่อนแล้วได้ false จากนั้นทำ or ได้ false เช่นกัน