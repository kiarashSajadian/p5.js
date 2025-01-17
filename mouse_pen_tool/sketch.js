let points = []; // Array to store points for curves

function setup() {
  createCanvas(800, 800);
  background(30); // Dark background for contrast
  noFill();
  strokeWeight(2);
}

function draw() {
  background(30, 30); // Slight fade effect
  noFill();

  // Draw all curves stored in the points array
  for (let i = 0; i < points.length - 3; i += 3) {
    stroke(random(255), random(255), random(255)); // Set a random color for each curve
    bezier(
      points[i].x,
      points[i].y,
      points[i + 1].x,
      points[i + 1].y,
      points[i + 2].x,
      points[i + 2].y,
      points[i + 3].x,
      points[i + 3].y
    );
  }
}

function mousePressed() {
  // Add the current mouse position to the points array
  points.push(createVector(mouseX, mouseY));

  // Ensure there are enough points to form a curve
  if (points.length % 3 === 0) {
    // Add an extra point to smooth the curve
    points.push(createVector(mouseX, mouseY));
  }
}
