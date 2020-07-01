const Em1 = require('./2.0event1-emit')
const em1 = new Em1()

em1.emit1()
em1.on('one sec', (e) => {
    console.log(e);
} )
