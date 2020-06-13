// -------------- Code V.1 --------------------//
let callbackValue;
function hello4(err, value) {
  callbackValue = value;
}

function tryHello4(callbackFunction) {
  let returnValue = 'returnValue';
  let callbackValue = 'callbackValue';
  callbackFunction(null, callbackValue);
  return returnValue;
}

console.log(tryHello4(hello4)); // print returnValue
console.log(callbackValue); // print callbackValue



// -------------- Code V.2 --------------------//
let cb_gb

function hello(err, value) {
    cb_gb = value
}

function tryHello(cb) {
    let rtv = 'This is Return Value from tryHello'
    let cb_lc = 'This is value from local variable in tryHello'
    cb(null, cb_lc)
    return rtv
}

console.log(tryHello(hello))
console.log('cb_gb = ', cb_gb)