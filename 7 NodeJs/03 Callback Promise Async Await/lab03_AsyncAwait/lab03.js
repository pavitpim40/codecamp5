function showText(text,time) {
    return new Promise ( rs => {
        setTimeout( ()=> {
            console.log(text);
            rs();  //resolove ไม่ได้ส่งอะไรมา
        },time)
    })
} 

async function runText() {
try {
    await showText('a',1000)  // ไม่ต้องเขียนเป็น function Expression ก็คือไม่ต้องเอาตัวแปรมารับ 
    await showText('b',1000)
    await showText('c',1000)
    await showText('d',1000)
    console.log('Done');
}catch(err) {
    console.log(err);
}  
}

runText();