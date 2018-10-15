  var myvar = require('get-data-line').loadFile("./demo.txt");

  String(myvar).read( function(data){
    console.log( data )
  });