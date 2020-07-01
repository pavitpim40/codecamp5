//สร้าง object เปล่า
let user = {};

let key , value ;

while (key !== "stop" && value !== "stop"){
    key = prompt("Set your new key");

    if (key ==="stop") { continue;}
    value = prompt("Set a value."); 
    if (value ==="stop"){
        key = null;
        continue;
    }
    user[key] = value ;  //add ค่าเข้าไปใน object value
}

console.log(user);