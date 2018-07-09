var canvas = document.getElementById('onda');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//var date = Date.now();
function draw(delta) {
	requestAnimationFrame(draw);
	canvas.width = canvas.width;
	ctx.fillStyle = "#353B71";

	var randomLeft = Math.abs(Math.pow( Math.sin(delta/1000), 2 )) * 100;
	var randomRight = Math.abs(Math.pow( Math.sin((delta/1000) + 10), 2 )) * 100;
	var randomLeftConstraint = Math.abs(Math.pow( Math.sin((delta/1000)+2), 2 )) * 100;
	var randomRightConstraint = Math.abs(Math.pow( Math.sin((delta/1000)+1), 2)) * 100;

	ctx.beginPath();
	ctx.moveTo(0, randomLeft);

    // ctx.lineTo(canvas.width, randomRight);
    ctx.bezierCurveTo(canvas.width / 3, randomLeftConstraint, canvas.width / 3 * 2, randomRightConstraint, canvas.width, randomRight);
    ctx.lineTo(canvas.width , canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(0, randomLeft);
    
    ctx.closePath();
    ctx.fill();
}
requestAnimationFrame(draw);