$(document).ready(function(){
  $("#botonA").click(function(){
    var largo = $("#lista li").length;
    $("#lista").append("<li>"+(largo+1)+"</li>");
  });
  $("#botonQ").click(function(){
    $("#lista li").first().remove();
  });
});
