const fs = require('fs')
let data , jsobj , users , newdata

// 1 แกะค่าออกมา -- parse เป็น object
data = fs.readFileSync('./sample.json')
jsobj = JSON.parse(data)
users = jsobj.users //ได้ value มาซึ่งเป็น array
//console.log(users);

// 2 แก้ไขค่า
users.map ( x => {
    x.phoneNumber = x.userId.toString().repeat(7)
    console.log(`${x.firstName} : ${x.phoneNumber}`);
 })




// แปลงกลับเป็น JSON

newdata = JSON.stringify(jsobj)
fs.writeFileSync ('./output.json',newdata)
console.log('Save output.json');
