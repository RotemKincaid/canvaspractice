$(function() {
  var data = [0, 400, 200]
  drawBarVertical('bar-vertical', data)
});

drawBarVertical = (id, data) => {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext("2d");

  ctx.strokeStyle="#00AEEF"; //nikolablue
  ctx.beginPath();
  ctx.moveTo(00,500); // beginning point
  
  var widthApart = 1000 / (data.length - 1)
  for(var x = 0;x < data.length; x++){
    ctx.lineTo(x*widthApart, 500-data[x]);
    ctx.stroke();  
  }
}
