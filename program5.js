let mymodule = require('./program5-module.js');
const filepath = process.argv[2];
const ext = process.argv[3];

mymodule(filepath, ext, (err, data) => {
  if (err) {
    return console.error('There was an error:', error);
  } else {
    data.forEach(function (file) {
      console.log(file);
    });
  }
});