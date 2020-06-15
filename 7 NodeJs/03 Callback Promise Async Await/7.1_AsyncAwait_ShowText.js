
// แปลง test12 เป็น async await

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
    await showText('1',1000)  // ไม่ต้องเขียนเป็น function Expression ก็คือไม่ต้องเอาตัวแปรมารับ 
    await showText('2',1000)
    await showText('3',1000)
    await showText('4',1000)
    console.log('Done');
}catch(err) {
    console.log(err);
}  
}

runText();