const http = require('http');
const bl = require('bl');

let url = process.argv[2];

http.get(url, function callback (response) {
  response.pipe(bl(function(err, data) {
    if (err) {
    return console.error('There was an error:', error);
    }
  console.log(data.toString().length);
  console.log(data.toString());
}))
});