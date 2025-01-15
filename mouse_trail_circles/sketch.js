let positions = []; // Array to store the positions of the mouse

function setup() {
  createCanvas(400, 400); // Create a 400x400 canvas
}

function draw() {
  background(220); // Clear the canvas each frame

  // Add the current mouse position to the positions array
  positions.push(createVector(mouseX, mouseY));

  // Limit the number of circles to create a tail effect
  if (positions.length > 100) {
    positions.shift(); // Remove the oldest position to keep the tail size constant
  }

  // Draw the circles at the stored positions
  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];

    // Map the index to a color for each circle
    let r = map(i, 0, positions.length, 0, 255);
    let g = map(i, 0, positions.length, 255, 0);
    let b = map(i, 0, positions.length, 255, 0);

    // Make the circles smaller and more transparent the farther they are from the mouse
    let alpha = map(i, 0, positions.length, 50, 255);
    let size = map(i, 0, positions.length, 5, 20);

    fill(r, g, b, alpha); // Set fill color with changing RGB values
    noStroke();
    ellipse(pos.x, pos.y, size, size); // Draw each circle at the position
  }
}
