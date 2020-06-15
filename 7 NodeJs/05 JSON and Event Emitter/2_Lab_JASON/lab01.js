// ลองแก้ mac เป็น apple
const fs = require('fs')

let data = fs.readFileSync('./sample.json' , 'utf-8')
//console.log(data);

let jsonArr = JSON.parse(data).users
//console.log(jsonArr);
//console.log(typeof(jsonArr))

jsonArr.map ( x => {
    if (x.lastName === 'mac') x.lastName = 'Apple'
})
//console.log(jsonArr);

// แปลงกลับเป็น JSON
let newdata = JSON.stringify(jsonArr)
//console.log(newdata);
fs.writeFileSync ('./lab01_output.json',newdata)
// console.log('Save output.json');