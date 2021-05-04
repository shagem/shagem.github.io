
let circleSize;
let borderWidth;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	borderWidth = random(1, 2)
	
	
	background(0);
}




function draw() {

	strokeWeight(borderWidth);

	if (mouseX > windowWidth / 2 & mouseY > windowHeight / 2){
	circleSize = random(1, windowWidth + 250);
	stroke(87, 101, 255, 10);
	fill(255, 0, 0, 10);
	circle(0, 0, circleSize);
	}
	else if (mouseX > windowWidth / 2 & mouseY < windowHeight / 2){
	circleSize = random(1, windowWidth + 250);
	stroke(145, 248, 255, 10);
	fill(0, 0, 255, 10);
	circle(0, 0, circleSize);	
	}
	else if (mouseX < windowWidth / 2 & mouseY < windowHeight / 2){
	circleSize = random(1, windowWidth + 250);
	stroke(255, 192, 92, 10);
	fill(252, 191, 255, 15);
	circle(0, 0, circleSize);	
	}
	else {
	circleSize = random(1, windowWidth + 250);
	stroke(255, 153, 246, 10);
	fill(255, 249, 79, 10);
	circle(0, 0, circleSize);
	}
	
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}

