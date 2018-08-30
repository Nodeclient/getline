  require('get-data-line');

  var myvar = `Hello_line_1\nHello_line_2\nHello_line_3\nHello_line_4`;

  //READ ONLY LINES -> 1,3,4
  String(myvar).getline([1,3,4], function(data){
    console.log( data )
  });

  //REMOVE LINES -> 3,4
  String(myvar).remline ([3,4],function(data){
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