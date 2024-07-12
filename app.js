//                                                          Introduction

// function sayHello (name) {
//     console.log('Hello ' + name)
// }
//
// sayHello('Zafar')

//                                                           Global object

// console.log() //global

// console.log(window) //there is no window object in node
// console.log(global) //instead we have global object
//
// var msg = 'Hello world'
// console.log(global.msg) //undefined, because msg variable is available only in this (app.js) file not outside of browser

//                                                             Modules

// console.log(module)

//                                                             Loading a module

// const logger = require('./logger')
// logger.log('Hi')

// const log = require('./logger')
//
// log('alright')

//                                                              Path module
// const path = require('path')
//
// const parseObj = path.parse(__filename)
// console.log(parseObj)

//                                                               OS module

// const os = require('os');
//
// const totalMemory = os.totalmem()
// const freeMemory = os.freemem()
// const upTime = os.uptime()
//
// console.log(`Total memory is ${Math.floor(totalMemory / (1000 * 1000))} gb`)
// console.log(`Free memory is ${Math.floor(freeMemory / (1000 * 1000))} gb`)
// console.log(`System working ${Math.floor(upTime / 3600)} hours`)

//                                                               File system module

// const fs = require('fs')
//
// const files = fs.readdirSync('../../../')
// console.log(files)
//
// fs.readdir('./', (err, files) => {
//   if(err) console.log('Error: ', err)
//   console.log('Result: ', files)
// })

//                                                              Events module && Event arguments

// const EventEmitter = require('events')
// const emitter = new EventEmitter()
//
// // Register a listener
// emitter.on('msg', function (args) {
//   console.log('Data: ', args)
// })
//
// // Raise an event
// emitter.emit('msg', {id: 1, url: 'https://whoscored.com'})

//                                                               Extending EventEmitter

// const Logger = require('./logger')
// const logger = new Logger();
//
// // Register a listener
// logger.on('msg', (arg) => {
//   console.log('Data: ', arg)
// })
//
// logger.log("What's up")

//                                                                HTTP module

// const http = require('http')
//
// const server = http.createServer((req, res) => {
//   if(req.url === '/') {
//     res.write('Bye world')
//     res.end()
//   }
//
//   if(req.url === '/api/users') {
//     res.write(JSON.stringify([1,2,3,4,5]))
//     res.end()
//   }
// })
//
// // server.on('connection', (socket) => {
// //     console.log(socket)
// //     console.log('New connection...')
// // })
//
//
// server.listen(8000)
// console.log('Listening on port 8000')