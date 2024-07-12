//                                    Using a package

// let _ = require('underscore');
//
// // Core module => 'fs' || 'http'
// // File or folder => ./underscore || ./underscore/index.js
// // node_modules => package like 'underscore'
//
// const result = _.contains([1,2,3], 1)
// console.log(result)

// semantic versioning => ^, ~, MMP major minor patch
// listing the installed packages => npm list, npm list --depth=0
// viewing registry info for a package => npm view underscore (dependencies, versions)
// installing specific version of a package => npm i underscore@2.2.2
// updating local packages => npm i -g npm-check-updates, npm-check-updates, ncu -u, ncu
// devDependencies => npm i jshint --save-dev
// uninstalling packages => npm un mongoose
// working with global packages => sudo npm -g outdated, sudo npm un -g npm

//                                 publishing a package
// const avocado = require('avacado-lib')
//
// const add = avocado.add(1,3)
// const multiply = avocado.multiply(2,5)
// console.log(multiply)