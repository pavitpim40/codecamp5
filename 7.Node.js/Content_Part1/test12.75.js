//แก้ปัญหา Callback Hell ของ Read fileSync 
 
const fs = require('fs');

function getFile(filename) {
return new Promise ( (resolve,reject) => { 
    if (filename === 'f02.txt') reject('Error from f02.txt')
    fs.readFile(filename , 'utf-8', (err, data) => resolve(data))
})
}

 
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

// runGetFile()