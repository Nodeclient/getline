  require('get-data-line');

  var myvar = `Hello_line_1\nHello_line_2\nHello_line_3\nHello_line_4`;

  //READ ALL LINES 1,2,3,4
  String(myvar).read( function(data){
    console.log( data )
  });
