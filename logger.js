//                                                             Creating module

// let url = 'https://www.whoscored.com/Players/11119/Show/Lionel-Messi'
//
// function log(message) {
//   //Send a HTTP request
//   console.log(message);
// }
//
// // log('Hello')
//
// // module.exports.log = log;
// module.exports = log;

//                                                               Module wrapper function

// (function (exports, require, module, __dirname, __filename) {
//   function show(msg) {
//     console.log(msg);
//   }
//
//   module.exports.show = show
//   // module.exports = show
//   // exports.show = show
//
//   // exports = show //error, because exports is reference to module.exports
// })()

// console.log(exports)
// console.log(require)
// console.log(module)
// console.log(__dirname)
// console.log(__filename)