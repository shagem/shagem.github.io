

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	frameRate(30);
	
	background(0);
	
}

let ringRadius = 100;
let tubeRadius = 30;
let runValue = 0;
let r = 0;
let g = 0;
let b = 0;

function draw() {

	
	strokeWeight(1);
	stroke(155, 0, 175);
	fill(r, g, b);
	push();
	torus(ringRadius, tubeRadius);
	pop();
	
	if (mouseIsPressed)
	
	ringRadius = ringRadius + 3;
	torus(ringRadius, tubeRadius);
	
	if (ringRadius > windowWidth / 6 & ringRadius > windowHeight / 6){
		
		tubeRadius = tubeRadius + 3;
		rotateZ(frameCount);
		
		push();
		push();
		push();
		push();
		stroke(0, 0, 255);
		torus(ringRadius, tubeRadius);
		pop();
		stroke(255, 0, 0);
		torus(ringRadius / 2, tubeRadius / 2);
		pop();
		stroke(0, 255, 0);
		torus(ringRadius / 4, tubeRadius / 4);
		pop();
		stroke(255);
		torus(ringRadius / 6, tubeRadius / 6);
		pop();
	}
	else {return;}
	
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}



