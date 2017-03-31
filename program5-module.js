const fs = require('fs');
const path = require('path');

module.exports = function mod (filepath, ext, callback) {
  let filteredFiles = [];
  fs.readdir(filepath, ext, (err, data) => {
    if(err) {
      return callback(err);
    }
    else {
    data.forEach( (filename) => {
      if (path.extname(filename) === `.${ext}`)
        filteredFiles.push(filename);
    });
  }
    callback(null, filteredFiles);
  });
}
