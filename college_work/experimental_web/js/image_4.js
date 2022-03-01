

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	
	
	background(0);
	
}


let boxHeight = 100;
let boxWidth = 100;


function first() {


rotateX(-frameCount * .75);

push();
fill(255, 0 , 0);
box(boxHeight);
pop();

push();
fill(0, 255 , 0);
translate(-100, 0, 0);
box(boxHeight);
pop();

push();
fill(0, 0 , 255);
translate(100, 0, 0);
box(boxHeight);
pop();



}


function draw() {

	first();




}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}



