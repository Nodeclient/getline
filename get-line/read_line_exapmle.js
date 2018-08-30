  require('get-data-line');

  var myvar = `Hello_line_1\nHello_line_2\nHello_line_3`;

  loadFile("./demo.txt");

  //READ ONLY LINES -> 5,6,7,8,9,10
  String(myvar).getline([5,6,7,8,9,10], function(data){
    console.log( data )
  });

  //REMOVE LINES -> 1,3,4,6
  String(myvar).remline ([1,3,4,6],function(data){
    console.log( data )
  });


  /*
  String(myvar).remline ([1,3],function(data){
    console.log( data )
  });

  String(myvar).getline([1,2], function(data){
    console.log( data )
  });

  String(myvar).read( function(data){
    console.log( data )
  });
 */