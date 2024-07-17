//                  Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(true) // fulfilled, resolve
    // reject(new Error(`Promise rejected`)) // reject
  }, 2000)
})

//                Creating settled promises

promise
  .then(result => console.log(result))
  .catch(err => console.log(err))

const promise2 = Promise.resolve(1)
promise2.then(result => console.log(result))

const promise3 = Promise.reject(new Error('oops something went wrong'))
promise3.catch(err => console.log(err))