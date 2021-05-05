

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	
	
	
	background(0);
	
}

let cordX;
let cordY;
let borderWidth;
let shapeWidth;
let shapeHeight;
let fr;
let fg;
let fb;
let fo;
let sr;
let sg;
let sb;

function draw() {

	cordX = random( -windowWidth, windowWidth);
	cordY = random( -windowHeight, windowHeight);
	borderWidth = random( 1, 3 );
	shapeWidth = random( 10, 150 );
	shapeHeight = random( 10, 110 );
	
	fr = random( 1, 255 );
	fg = random( 1, 255 );
	fb = random( 1, 255 );
	fo = random( 1, 230 );
	
	sr = random( 1, 255 );
	sg = random( 1, 255 );
	sb = random( 1, 255 );
	
	stroke(sr, sg, sb);
	strokeWeight(borderWidth);
	fill(fr, fg, fb, fo);
	
	if (mouseIsPressed){
		if(mouseButton === LEFT)
		{
			circle(cordX, cordY, shapeWidth);
		}
		if(mouseButton === RIGHT)
		{
			circle(mouseX - (windowWidth / 2), mouseY - (windowHeight / 2), 10 * borderWidth);
			rect(cordX, cordY, shapeWidth, shapeHeight);
		}
		if(mouseButton === CENTER)
		{
			
		}
	}
	else {
		rect(cordX, cordY, shapeWidth, shapeHeight);
	}
	
}







