const fs = require('fs')
let data , jsobj , users , newdata

// วิเคราะห์ข้อมูล parse เป็น object
data = fs.readFileSync('./sample.json')
jsobj = JSON.parse(data)
users = jsobj.users
//console.log(users);

// เขียนค่าขึ้นมาใหม่
users.map ( x => {
    x.phoneNumber = x.userId.toString().repeat(7)
    console.log(`${x.firstName} : ${x.phoneNumber}`);
 })




// แปลงกลับเป็น JSON

newdata = JSON.stringify(jsobj)
fs.writeFileSync ('./output.json',newdata)
console.log('Save output.json');
