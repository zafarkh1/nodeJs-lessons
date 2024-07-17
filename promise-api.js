//                         Running promises in parallel
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('i am a first async function')
    // resolve(1)
    reject(new Error('i am rejected'))
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('i am a second async function')
    resolve(2)
  }, 1000)
})

// Promise.all([p1, p2])
//   .then(result => console.log(result))
//   .catch(err => console.log(err))

Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log(err))