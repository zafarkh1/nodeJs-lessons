//                           Synchronous && asynchronous code
console.log('before')
getUser(1, (user) => {
  getRepositories((repos) => {

  })
} )
console.log('after')

//                         Patterns for dealing with asynchronous code
function getUser(id, callback) {
  setTimeout(() => {
    console.log('this is asynchronous code')
    callback({id:id, name: 'Zafar'})
  }, 1000)
}

//                           Callbacks
function getRepositories(callback) {
  setTimeout(() => {
    callback(['repo1, repo2', 'repo3'])
  }, 2000)
}