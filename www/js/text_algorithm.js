// function readFromFile(file) {
//   // console.log("at least this much is working.....")
//   var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//   var storyFile = new XMLHttpRequest();
//   storyFile.open("GET", file, false);
//   console.log(storyFile)
// }

// readFromFile("file:///Users/EKhan/Desktop/ViciousUnicorn/www/storytime/story.txt");

var http = require("http");
var fs = require('fs');

http.createServer(function(request, response) {
  fs.readFile("story.txt", "utf8", function (error, data) {
  console.log(data);
  });
}).listen(8888);





