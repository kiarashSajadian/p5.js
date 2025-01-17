function setup() {
  createCanvas(800, 800);
  noFill();
  stroke(255, 150); // White stroke with transparency
  strokeWeight(2);
  background(30); // Dark background for contrast
}

function draw() {
  background(30); // Clear the canvas on every frame

  // Control points change based on mouse position
  let x1 = width / 4;
  let y1 = height / 2;
  let x2 = mouseX; // First control point follows mouseX
  let y2 = mouseY; // First control point follows mouseY
  let x3 = width - mouseX; // Second control point mirrors mouseX
  let y3 = height - mouseY; // Second control point mirrors mouseY
  let x4 = (3 * width) / 4;
  let y4 = height / 2;

  // Draw a simple bezier curve
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}
