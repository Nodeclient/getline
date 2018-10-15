  require('get-data-line');

  var myvar = `Hello_line_1\nHello_line_2\nHello_line_3\nHello_line_4`;

  String(myvar).remline ([3,4],function(data){
    console.log( data )
  });
