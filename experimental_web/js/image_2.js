
let myFont;

function preload() {
	myFont = loadFont('fonts/typographica.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	
	
	background(0);
	
}



function draw() {

	let string = "Click Your Mouse";

	textSize(40);
	fill(255);
	textFont(myFont);
	text(string, windowWidth / 2, windowHeight / 2);
	
	
	
	
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


