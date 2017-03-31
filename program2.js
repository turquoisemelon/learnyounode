var fs = require('fs');

var bufferObj = fs.readFileSync(process.argv[2]);

var str = bufferObj.toString();

var newStr = str.split('\n');

// console.log(newStr);

console.log(newStr.length-1);

// /\r?\n/