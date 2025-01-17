let t = 0; // Time variable to animate along the curve

function setup() {
  createCanvas(800, 800);
  background(30); // Dark background for contrast
  noFill();
  stroke(255); // White stroke color for the curve
  strokeWeight(1);
}

function draw() {
  background(30); // Redraw with slight transparency for fading effect
  noFill();

  // Define control points for the Bezier curve
  let x0 = 100,
    y0 = 700; // Start point
  let x1 = 300,
    y1 = 100; // Control point 1
  let x2 = 100,
    y2 = 400; // Control point 2
  let x3 = 500,
    y3 = 200; // End point

  // Calculate the point on the Bezier curve based on t
  let x = bezierPoint(x0, x1, x2, x3, t);
  let y = bezierPoint(y0, y1, y2, y3, t);

  // Draw the moving point on the curve
  stroke(255, 0, 0); // Red for the moving point
  ellipse(x, y, 10, 10); // Draw the point on the curve

  // Draw the Bezier curve itself (optional, for reference)
  stroke(255); // White for the Bezier curve
  noFill();
  bezier(x0, y0, x1, y1, x2, y2, x3, y3);

  // Animate the t value to move the point along the curve
  t += 0.005;
  if (t > 1) {
    t = 0; // Reset t to start again
  }
}
