// Lesson-2

console.log() //gloabal

// console.log(window) //there is no window object in node
console.log(global) //instead we have global object

var msg = 'Hello world'
console.log(global.msg) //undefined, because msg variable is available only in this (app.js) file not outside of browser