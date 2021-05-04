

let blenderLB;

function preload() {
  blenderLB = loadModel('img/blenderPlate.obj', true);
}



function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	
	
	background(150);
}


function draw() {
	
	scale(3);
	model(blenderLB);
	
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}

