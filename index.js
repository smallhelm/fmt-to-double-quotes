var fs = require("fs")
var glob = require("glob")
var path = require("path")
var toDoubleQuotes = require("to-double-quotes");

var fixFile = function(file){
  fs.readFile(file, function(err, data){
    if(err) throw err;
    fs.writeFile(file, toDoubleQuotes(data.toString()));
  });
};

module.exports = function(patterns){
  patterns.forEach(function(pattern){
    glob(pattern, function(err, files){
      if(err) throw err;
      files.forEach(fixFile);
    });
  });
};
