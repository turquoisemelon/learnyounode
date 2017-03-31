const http = require('http');
const bl = require('bl');
let results = [];
let count = 0;

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGetRequest (index) {
  http.get(process.argv[2 + index], function callback(response) {
    response.pipe(bl(function(err, data) {
      if (err) {
      return console.error('There was an error:', error);
      }
      results[index] = data.toString();
      count++;

      if (count === 3) {
        printResults();
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGetRequest(i);
}
