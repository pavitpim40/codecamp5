const fs = require('fs');

fs.readFile('./readm.txt', (err,data) => {
    if (err) {
        console.log("Error..."); 
        return;
    }
    console.log(data) ;
    console.log(data.toString()) ;
    console.log('Done...');
});

console.log('Done...');
