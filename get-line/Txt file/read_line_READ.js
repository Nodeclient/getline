  require('get-data-line').loadFile("./demo.txt");

  var myvar = ``;

  //READ ALL LINE BY LINE -> ./demo.txt
  String(myvar).read( function(data){
    console.log( data )
  });