const fs = require('fs');
fs.readFile(process.argv[2],'utf-8', (err, data) => {
  if(err) throw err;
  let str = data.split('\n');
  console.log(str.length-1);
});
