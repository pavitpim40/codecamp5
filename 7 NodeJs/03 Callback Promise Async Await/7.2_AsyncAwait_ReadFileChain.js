//แก้ปัญหา Callback Hell ของ Read fileSync 
 
const fs = require('fs');

function getFile(filename) {
return new Promise ( (resolve,reject) => { 
    // if (filename === 'f02.txt') reject('Error from f02.txt') //เอาบรรทัดนี้ออกถ้าจะไม่เช็ค Error
    fs.readFile(filename , 'utf-8', (err, data) => resolve(data))
})
}

//----------------- เรียกแบบปกติ -----------------//

async function runGetFile() {
try {
    let data = await getFile('./start.txt')
    console.log(data);
    data = await getFile(data)
    console.log(data);
    data = await getFile(data)
    console.log(data);
    data = await getFile(data)
    console.log(data);    
}catch (err) {
    console.log(err);
}
}

runGetFile()


//----------------- เรียกแบบ IIFE -----------------//
//----Immediately Invoke Function Expression -----//

(async () => {
    try {
        let data = await getFile('./start.txt')
        console.log(data);
        data = await getFile(data)
        console.log(data);
        data = await getFile(data)
        console.log(data);
        data = await getFile(data)
        console.log(data);    
    }catch (err) {
        console.log(err);
    }
    }) ()  
    
