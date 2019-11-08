function createCircle(x, y, radius, startAngle, endAngle, pie) {
    var c = document.getElementById(pie)
    var ctx = c.getContext("2d")
    ctx.beginPath() 
    ctx.arc(x, y, radius, startAngle, endAngle * Math.PI)
    ctx.stroke()
}


createCircle(295, 245, 240, 0, 2, "pie")