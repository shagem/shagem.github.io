function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

// mix these in to begin to modulate your animations
// // position - put in translate
// var tx = 200 * cos(0.01*frameCount);

// // size  - put in the 3d shape statement
// var s1 = 100 * tan(0.01*frameCount);

// // rotate - add into rotate via * or /
// var r1 = TWO_PI * sin(0.001*frameCount);

function draw() {
  background(240, 240, 240);

  push();
  push();
  normalMaterial();
  stroke(255, 255, 255);
  rotateY(radians(frameCount));
  sphere(30, 15, 15);
  pop();

  for (var i = 0; i < 20; i++) {
    push();
    var s1 = 20 * cos(0.01 * frameCount);

    rotateY(radians(frameCount));

    rotate((TWO_PI * i) / 20);
    translate(100, 0, 0);
    sphere(s1, 15, 15);
    pop();
  }

  for (var i = 0; i < 20; i++) {
    push();
    var s2 = 20 * cos(0.01 * frameCount);

    rotateX(radians(frameCount));

    rotate((TWO_PI * i) / 20);
    translate(150, 0, 0);
    sphere(s2, 15, 15);
    pop();
  }

  for (var i = 0; i < 20; i++) {
    push();
    var s1 = 20 * cos(0.01 * frameCount);

    rotateY(radians(frameCount));

    rotate((TWO_PI * i) / 20);
    translate(200, 0, 0);
    sphere(s1, 15, 15);
    pop();
  }

  for (var i = 0; i < 20; i++) {
    push();
    var s2 = 20 * cos(0.01 * frameCount);

    rotateX(radians(frameCount));

    rotate((TWO_PI * i) / 20);
    translate(250, 0, 0);
    sphere(s2, 15, 15);
    pop();
  }

  pop();
}

