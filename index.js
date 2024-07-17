// //                           Synchronous && asynchronous code
// console.log('before')
// getUser(1, displayUser)
// console.log('after')
//
// //                           Named function to rescue
// function displayUser(user) {
//   getRepositories(user.name, displayRepository)
//   console.log(user)
// }
//
// function displayRepository(repo) {
//   getCommits(repo, displayCommit)
//   console.log(repo)
// }
//
// function displayCommit(commit) {
//   console.log(commit)
// }
//
// //                         Patterns for dealing with asynchronous code
// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log('this is asynchronous code')
//     callback({id: id, name: 'Zafar'})
//   }, 1000)
// }
//
// //                           Callbacks
// function getRepositories(username, callback) {
//   setTimeout(() => {
//     callback(['repo1, repo2', 'repo3'])
//   }, 2000)
// }
//
// function getCommits(repos, callback) {
//   setTimeout(() => {
//     callback(['commit1', 'commit2'])
//   }, 1000)
// }

//                           Replacing callbacks with promise
console.log('before')
//                           Consuming promises
// getUser(1)
//   .then(user => getRepositories(user.name))
//   .then(repo => getCommits(repo))
//   .then(commit => console.log(commit))
//   .catch(err => console.log(err))

console.log('after')

//                           Async and await
async function displayCommit() {
  try {
    const user = await getUser(1)
    const repository = await getRepositories(user.name)
    const commit = await getCommits(repository)
    console.log(commit)
  } catch (err) {
    console.error(err)
  }
}

displayCommit()

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id: id, name: 'Zafar'})
    }, 1000)
  })
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(['repo1, repo2', 'repo3'])
      reject(new Error('oops something went wrong'))
    }, 2000)
  })
}

function getCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['commit1', 'commit2'])
    }, 1000)
  })
}