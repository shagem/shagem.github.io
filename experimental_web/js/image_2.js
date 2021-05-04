

let blenderLB;

function preload() {
  blenderLB = loadModel('img/blenderPlate.obj', true);
}



function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	
	
	background(0);
}


function draw() {
	
	camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
	
	scale(4);
	rotateX(180);
	model(blenderLB);
	
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}


