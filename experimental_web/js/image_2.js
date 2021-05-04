

let blenderLL;

function preload() {
  blenderLL = loadModel('img/lava_lamp.obj', true);
}



function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	
	
	background(255);
}


function draw() {
	
	orbitControl();
	scale(3);
	rotateX(180);
	model(blenderLL);
	
	
	
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}


