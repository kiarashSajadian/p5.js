let r = 10;
let a = 0;
let isSpiralActive = true;

function setup() {
  createCanvas(800, 800);
  background(175);
}

function draw() {
  if (isSpiralActive) {
    let x = r * cos(a);
    let y = r * sin(a);

    ellipse(width / 2 + x, height / 2 + y, 20, 20); // Draw a small ellipse at new position

    r += 0.1; // Increase radius
    a += 100.05; // Increase angle slowly
  }
}

function mousePressed() {
  isSpiralActive = !isSpiralActive; // Toggle spiral state on mouse click
}
