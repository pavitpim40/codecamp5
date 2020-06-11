// พื้นฐาน Promise

// let done = true
 
// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = 'Here is the thing I built'
//     resolve(workDone)
//   } else {
//     const why = 'Still working on something else'
//     reject(why)
//   }
// })

// const checkIfItsDone = () => {
//     isItDoneYet
//       .then(ok => {
//         console.log('come from resolve state in Promise');
//         console.log(ok)
//     })
//     .catch(err => {
//         console.log('come from reject state in Promise');
//         console.error(err)
//       })
//   }

// checkIfItsDone();


// แปลงเป็น Async Await

let done = false

function isItDoneYet() {
  return new Promise( (resolve, reject) => {
    if (done) {
      const workDone = 'Here is the thing I built'
      resolve(workDone)
    } else {
      const why = 'Still working on something else'
      reject(why)
    }
  })
}

async function checkIt() {
  try {
  let d =  await isItDoneYet()
    console.log(d)
  } catch(err) {
    console.log(err)
  }
}

checkIt();

  