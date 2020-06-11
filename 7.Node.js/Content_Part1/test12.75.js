//แก้ปัญหา Callback Hell ของ Read fileSync 
 
const fs = require('fs');

function getFile(filename) {
return new Promise ( (resolve,reject) => { 
    if (filename === 'f02.txt') reject('Error from f02.txt')
    fs.readFile(filename , 'utf-8', (err, data) => resolve(data))
})
}

 
async function runGetFile(){
try {
    const data = await getFile('./start.txt');
    console.log(data);

    const d1 = await getFile(data)
    console.log(d1);

    const d2 = await getFile(d1)
    console.log(d2);
    
    const d3 = await getFile(d2)
    console.log(d3);
}catch (err) {
    console.log(err);
}
} 

runGetFile()