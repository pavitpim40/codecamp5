//แก้ปัญหา Callback Hell ของ Read fileSync 
const fs = require('fs');

// fs.readFile('start.txt', 'utf-8', (err, data) => {
//     console.log(data)
//     fs.readFile(`${data}`, 'utf-8', (err, data) => {
//         console.log(data)
//         fs.readFile(`${data}`, 'utf-8', (err, data) => {
//             console.log(data)
//       fs.readFile(`${data}`, 'utf-8', (err, data) => {
//       console.log(data)
//     })
//     })
//   })
// })


function getFile(filename) {
return new Promise ( (resolve,reject) => {
    fs.readFile(filename , 'utf-8', (err, data) => resolve(data))
})
}

// const getFile = (filename) => {
//     return new Promise ( (resolve,reject) => {
//         fs.readFile(filename , 'utf-8', (err, data) => resolve(data))
//     })
//     }


getFile('./start.txt')        // เปิด file start อ่านได้ f01.txt  --> resolve ได้ f01.txt

.then (dat => {              // ส่ง f01.txt ผ่านมาทาง resolve 
console.log(dat)             // log f01.txt
return getFile(dat)  })      // เอา f01.txt ไปใส่ promise ตัวที่ 2  -->  resolve ได้ f02.txt
    
.then (dat => {              // ส่ง f02.txt ผ่านมาทาง resolve
console.log(dat);            // log f02.txt
return getFile(dat)  })      // เอา f02.txt ไปใส่ Promise ตัวที่ 3  --> resolve ได้ f03.txt

.then (dat => {              // ส่ง f03.txt ผ่านมาทาง resolve
console.log(dat);            //  log
return getFile(dat)  })      // เอา f03.txt ไปใส่ promise ตัวที่ 4  --> resolve ได้  Ok...

.then (dat => {              // ส่ง Ok... ผ่านมาทาง resolve
console.log(dat);            // log
})

// ลองใช้ตัวแปร dat รับค่าจาก resolve(data) มาก็ใช้ได้  
// แปลว่าอยากตั้งชื่ออะไรก็ตั้งไปแหละ ขอแค่หลัง .then ใช้ชื่อเดียวกัน