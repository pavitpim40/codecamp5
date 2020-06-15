//ใส่่ error
const fs = require('fs');

//Readfile แบบ Asynchronous
fs.readFile('./readme.txt', (err,data) => {
    if (err) {
        console.log("Error..."); 
        return;
    }
    console.log(data) ;
    console.log(data.toString()) ;
    console.log('Done...');
});

console.log('Done...');
