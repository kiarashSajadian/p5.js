function setup() {
  createCanvas(600, 600);
  background(120);
  fill(255, 255, 255);
}

let d = 50; // diameter of the circle

let xPosition = 300; // Starting x coordinate
let xSpeed = 9;

let yPosition = 300; // Starting y coordinate
let ySpeed = 11;

function draw() {
  //background(120);

  let r = random(255);
  let g = random(255);
  let b = random(255);

  ellipse(xPosition, yPosition, d);
  xPosition += xSpeed;
  yPosition += ySpeed;

  if (xPosition > width - d / 2 || xPosition < 0 + d / 2) {
    xSpeed *= -1;
    fill(r, g, b);
  }

  if (yPosition > height - d / 2 || yPosition < 0 + d / 2) {
    ySpeed *= -1;
    fill(r, g, b);
  }
}
