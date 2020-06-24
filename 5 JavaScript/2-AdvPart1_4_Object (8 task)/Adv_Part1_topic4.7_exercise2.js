//สร้าง object เปล่า
let fruit = {};

let key , value ;

while (key !== "stop" && value !== "stop"){
    key = prompt("Name fruit");
    if (key ==="stop") { continue;}
    
    value = prompt(`Enter the number of ${key}`); 
    if (value ==="stop"){
        key = null;
        continue;
    }
    if (value > 1){
        key = key +"s";
    }

    fruit[key] = value ;  //add ค่าเข้าไปใน object value
}

console.log(fruit);