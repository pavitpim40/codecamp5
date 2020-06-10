let globalCallbackValue; 



function tryHello4() {
  let returnValue = 'returnValue';
  let callbackValue = 'callbackValue';
  
  function hello4(err, callbackValue) {
    globalCallbackValue = callbackValue;
  }
  hello4(null,callbackValue);
  return returnValue;
}
let x = tryHello4();
console.log(x);
console.log(globalCallbackValue);
