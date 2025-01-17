let r = 0.05;
let a = 0;
let isSpiralActive = true;

function setup() {
  createCanvas(800, 800);

  background(175);

  noFill();

  colorMode(HSB, 255);
}

function draw() {
  if (isSpiralActive) {
    translate(width / 2, height / 2);

    beginShape();
    for (let i = 0; i < 5; i++) {
      r += 0.035; // Increment radius
      a += 0.05; // Increment angle

      let x1 = r * cos(a);
      let y1 = r * sin(a);

      vertex(x1, y1);

      let x2 = x1 + random(-50, 50); // Control point 1
      let y2 = y1 + random(-50, 50);

      let x3 = x1 + random(-50, 50); // Control point 2
      let y3 = y1 + random(-50, 50);

      let x4 = x1 + random(-20, 20); // End point
      let y4 = y1 + random(-20, 20);

      // Reduce saturation based on r (radius)
      let hueValue = random(255);
      let saturation = map(r, 1, width / 4, 200, 150);
      stroke(hueValue, saturation, 255);

      bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    }
    endShape(CLOSE);
  }
}

function mousePressed() {
  isSpiralActive = !isSpiralActive;
}

function keyPressed() {
  if (key === " ") {
    // Reset everything if spacebar is pressed
    background(175);
    r = 10;
    a = 0;
  }
}
