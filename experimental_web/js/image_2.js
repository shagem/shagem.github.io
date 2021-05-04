

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
	
	scale(3);
	rotateX(180);
	translateY(1)
	model(blenderLB);
	
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}


