function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(255, 255, 255);
  
  push();
  
  
  if (mouseIsPressed) {
	normalMaterial();
	stroke(255, 255, 255);
	rotateX(radians(frameCount));
	sphere(30, 15, 15);
  }	else {
	normalMaterial();
	stroke(255, 255, 255);
	rotateY(radians(frameCount));
	sphere(30, 15, 15);
  }
  pop();
  
  
  
  
}

