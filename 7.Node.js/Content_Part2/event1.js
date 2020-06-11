const EventEmitter = require('events')
const em1 = new EventEmitter()
const em2 = new EventEmitter()

setInterval(() => em1.emit('one sec','Hi All.'), 1000)
setInterval(() => em1.emit('two sec',{id:2 , text:'Two Second..'}), 2000)

em1.on('one sec' , (e) => {
    console.log(e);
}) 
em2.on('one sec' , () => {
    console.log('from em2');
}) 
// em1.on('two sec' , (e) => {
//     console.log('2sec Event...');
// }) 

// em1 กับ em2 ทำงานร่วมกันไม่ได้ 