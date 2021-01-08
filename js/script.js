$(".light-open").fadeOut(function() { 
  $(this).load(function() { $(this).fadeIn(); }); 
  $(this).attr("src", "images/lightbulb-closed.png"); 
}); 