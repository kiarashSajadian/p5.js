let img;
let runningRectangles = true; // Rect loop default condition
let runningLines = true; // Line loop default condition
let runningEllipses = true; // Ellipse loop default condition

function setup() {
  createCanvas(1000, 1000);
  img = loadImage("asset/kiarash.png");
}

function draw() {
  noStroke();

  // Rect loop
  if (runningRectangles) {
    for (let i = 0; i < 50; i++) {
      let x = random(width);
      let y = random(height);
      let clr = img.get(x, y);
      fill(clr);

      // Use mouseX and mouseY to control the size of the rectangles
      let size = map(mouseX, 0, width, 10, 50);
      rect(x, y, size, size);
    }
  }

  // Line loop
  if (runningLines) {
    for (let x = 0; x < width; x += 10) {
      for (let y = 0; y < height; y += 10) {
        let clr = img.get(x, y);
        stroke(clr);

        // Use mouseX and mouseY to influence the randomness of line movement
        line(
          x + random(-mouseX / 20, mouseX / 20),
          y + random(-mouseY / 20, mouseY / 20),
          x + random(-10, 10),
          y + random(-10, 10)
        );
      }
    }
  }

  // Ellipse loop
  if (runningEllipses) {
    for (let x = 0; x < width; x += 20) {
      for (let y = 0; y < height; y += 20) {
        let clr = img.get(x, y);
        fill(clr);

        // Use mouseX and mouseY to control the size of the ellipses
        let size = map(mouseY, 0, height, 10, 50);
        ellipse(x + random(-10, 10), y + random(-10, 10), size, size);
      }
    }
  }
}

// Toggles the loops based on key presses
function keyPressed() {
  if (key === 'r' || key === 'R') {
    runningRectangles = !runningRectangles; // Toggle the rectangle loop
  }

  if (key === 'l' || key === 'L') {
    runningLines = !runningLines; // Toggle the line loop
  }

  if (key === 'e' || key === 'E') {
    runningEllipses = !runningEllipses; // Toggle the ellipse loop
  }
}
