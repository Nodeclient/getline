  var myvar = require('get-data-line').loadFile("./demo.txt");

  String(myvar).getline([200,250,50,2,9,10], function(data){
    console.log( data )
  });

