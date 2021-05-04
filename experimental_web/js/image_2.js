

let blenderLL;



function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	
	
	background(255);
}



function draw() {
	
	orbitControl();
	scale(3);
	rotateX(180);
	
	blenderLL = loadModel('img/lava_lamp.obj', true);
	
	
	
	
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}


