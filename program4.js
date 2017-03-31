const fs = require('fs');
const path = require('path');
const filepath = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(filepath, ext, (err, list) => {
  if(err) throw err;

  // an alternative to for loop in an array
  list.forEach( (filename) => {
    if (path.extname(filename) === ext)
      console.log(filename);
  });
});

  // for (let i = 0; i < list.length; i++) {
  //   if (`.${ext}` === path.extname(list[i])) {
  //     console.log(list[i]);
  //   }
  // }