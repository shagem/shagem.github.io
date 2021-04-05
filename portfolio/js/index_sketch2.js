

function setup() {
  createCanvas(400, 400, WEBGL);
}


function spinUp() {
	
	if (mouseIsPressed) {
		normalMaterial();
		stroke(255, 255, 255);
		rotateX(radians(frameCount));
		sphere(150, 15, 15);
	}
	else
	{
		if (mouseX > 200) {
			normalMaterial();
			stroke(255, 255, 255);
			rotateY(radians(frameCount));
			sphere(150, 15, 15);
		}
		else
		{
			normalMaterial();
			stroke(255, 255, 255);
			rotateY(-radians(frameCount));
			sphere(150, 15, 15);
		}
	}
}


function draw() {
  background(0, 0, 0);
  
	spinUp();
  
}

