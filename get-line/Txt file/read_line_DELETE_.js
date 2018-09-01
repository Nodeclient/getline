  require('get-data-line').loadFile("./demo.txt");

  var myvar = ``;

  //REMOVE LINES -> ./demo.txt
  String(myvar).remline ([1,3,4,6,95,99,120,250],function(data){
    console.log( data )
  });
