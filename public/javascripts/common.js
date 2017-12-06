
// Callbacks
function onDoggyButtonClick() {
  //alert("buttonclicked");
  var jqxhr = $.getJSON( "https://dog.ceo/api/breed/husky/images/random", function() {
  console.log( "jsonSuccess" );
  })
  .done(function( data ) {
    console.log(data);
    $("#ImageContainer").attr("src",data.message);
  })
  .fail(function() {
    alert("Doggies are not responding :(, try again later")
  })
  .always(function() {
    console.log( "complete" );
  });
  
}

