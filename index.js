$(function() {
  $('canvas').each(function(){
    var canvas = $(this)[0]
    var ctx = canvas.getContext("2d");
    var background = new Image();
    background.src = "./assets/logo.png";
    background.onload = function(){
      imgWidth = 120
      imgHeight = 30
      ctx.drawImage(background,(canvas.width/2) - (imgWidth/2), (canvas.height/2) - (imgHeight/2), imgWidth, imgHeight);   
    }
  })
});
