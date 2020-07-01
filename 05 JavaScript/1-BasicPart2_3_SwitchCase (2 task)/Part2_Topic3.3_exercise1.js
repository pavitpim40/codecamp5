//แปลง Switch เป็น if-else 

let browser = prompt('Tell me about your browser')

if ( browser === 'Edge'){
    alert("You've got the Edge!");

}

else if ( browser === 'Chrome' 
          || browser === 'Firefox' 
          || browser === 'Safari' 
          || browser === 'Opera'){
    
    alert('Okay we support these browsers too');

}

else {
    alert('We hope that this page look ok!');
}