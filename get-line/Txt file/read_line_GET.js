  require('get-data-line').loadFile("./demo.txt");

  var myvar = ``;

  //READ ONLY SELECTED ->
  String(myvar).getline([200,250,50,2,9,10], function(data){
    console.log( data )
  });

