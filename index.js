//                                     Building your first server
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config')

const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db')

const Logger = require('./middleware/logger')
const Authentication = require('./middleware/authentication');
const home = require('./routes/home');
const courses = require("./routes/courses");

const app = express();

//           Template engines
app.set('view engine', 'pug')
app.set('views', './views')

//           Structuring express application
app.use('/', home)
app.use('/api/courses', courses)

//         Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

//         Creating Custom Middleware
app.use(Logger)
app.use(Authentication)

//         Third-party middleware
app.use(helmet())
app.use(morgan('combined'));

//         Environment
if(app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

process.env.NODE_ENV = 'production'
console.log(`ENV: ${process.env.NODE_ENV}`); // undefined
console.log(`APP: ${app.get('env')}`); // development

//          Configuration
console.log(`Application name: ${config.get('name')}`) //My first project - development
startupDebugger(`Password: ${config.get('mail.password')}`) //1234 (export app_password

//          Debugger
dbDebugger('Connecting to db...')


const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Listening on port ${port}`));