var fs = require("fs")
var glob = require("glob")
var path = require("path")
var toDoubleQuotes = require("to-double-quotes");

var patterns = process.argv.slice(2);

var fixFile = function(file){
  fs.readFile(file, function(err, data){
    if(err) throw err;
    fs.writeFile(file, toDoubleQuotes(data.toString()));
  });
};

patterns.forEach(function(pattern){
  glob(pattern, function(err, files){
    if(err) throw err;
    files.forEach(function(file){
      fixFile(path.resolve(__dirname, file));
    });
  });
});
