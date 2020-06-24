let id = prompt('Who are you ?  Enter your login ID');



if (id === 'admin') {
    
    let pass = prompt('รหัสผ่านคืออะไร');

    if (pass === 'codecamp#5'){
        alert('ยินดีต้อนรับ');
    }

    else if (Number(pass) === 0) {
        alert('ยกเลิก');

    }

    else {
        alert('รหัสผ่านผิด');
      
    }
    
}

else if (Number(id) === 0 ) {
    alert('ยกเลิก');
}

else {

     alert('ฉันไม่รู้จักคุณ');
 }