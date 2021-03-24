

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(0, 0, 0);
  
  push();
  
  
  if (mouseIsPressed) {
	normalMaterial();
	stroke(255, 255, 255);
	rotateX(radians(frameCount));
	sphere(150, 15, 15);
  }	else {
	normalMaterial();
	stroke(255, 255, 255);
	rotateY(radians(frameCount));
	sphere(150, 15, 15);
  }
  pop();
  
  
  
  
}

