


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	
	
	background(0);
	
}

let r = 50;
let x = 0;
let y = 0;


function draw() {

	
	normalMaterial();
	translate(x, y, 0);
	rotateX(frameCount);
	sphere(r);
	
	


}


function mouseMoved() {
	
	r = random(25, 75);
	x = random(-width / 2, width / 2);
	y = random(-height / 2, height / 2);
	
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}



