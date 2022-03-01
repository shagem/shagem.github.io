
let circleSize;
let borderWidth;
let r;
let g;
let b;


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	borderWidth = random(1, 2)
	
	
	background(0);
}




function draw() {

	strokeWeight(borderWidth);
	
	r = random(1,255);
	g = random(1,255);
	b = random(1,255);

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
	
	if (mouseIsPressed){
		if (mouseButton === LEFT) {
		circleSize = random(1, windowWidth + 250);
		
		
		stroke(r, g, b, 10);
		fill(r, g, b, 10);
		circle(mouseX - (windowWidth / 2), mouseY - (windowHeight / 2), circleSize);
		}
		if (mouseButton === RIGHT) {
		circleSize = random(1, windowWidth + 250);
		stroke(255, 255, 255, 10);
		fill(0, 0, 0, 10);
		circle(mouseX - (windowWidth / 2), mouseY - (windowHeight / 2), circleSize);
		}
	}
	
	
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}


