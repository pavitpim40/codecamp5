// ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object

let user = {
    name: 'John',
    age: 30
  };

  
function count(obj){
    let count = 0;
    for( let somevar in obj){
        count ++
    }
    return count;
}