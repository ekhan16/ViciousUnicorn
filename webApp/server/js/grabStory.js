var Promise = require("bluebird");
var path = require("path");

var readFile = Promise.promisify(require("fs").readFile);
var pathToFile = path.join(__dirname, "../../story/volume1/volume1.html");
module.exports = {
  getDocFromGoogleDrive: function(){
    return readFile(pathToFile, "utf8").then(function(content){
      console.log(content);
      return content;
    });
  }
};
