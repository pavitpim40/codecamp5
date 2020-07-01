var fs = require('fs');
function readMessage(){
 return new Promise(function (fulfill, reject){
    fs.readFile('message.txt', 'utf8', function (err, res){
      if (err) reject(err);
      else fulfill(res);
    });
  });
}
function writeMessage(dat){
 return new Promise(function (fulfill, reject){
    fs.writeFile('out.txt', dat, function (err, res){
      if (err) reject(err);
      else fulfill(res);
    });
  });
}
// ถ้า .then return ตัวเดียวก็ละ argument ไปเลย // ไม่ต้อง arrow 
readMessage().then(writeMessage).then(function(){
 console.log('success');
});
// แบบไม่ย่อ
// readMessage().then(data => writeMessage(data)).then(function(){
//   console.log('success');
//  });
 

