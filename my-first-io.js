const fs = require('fs')

var x = null
x= fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

console.log(x)
