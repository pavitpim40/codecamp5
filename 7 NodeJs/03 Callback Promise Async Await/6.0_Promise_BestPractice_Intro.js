//Refractor ตรง .then

let done = true
 
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})


const checkIfItsDone = () => {
    isItDoneYet
      .then(console.log)  //สังเกต ไม่มีตัวแปรมารับค่า
    .catch(err => {
        console.log('come from reject state in Promise');  
        console.error(err)
      })
  }

checkIfItsDone();