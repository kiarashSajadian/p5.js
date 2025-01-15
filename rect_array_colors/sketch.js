let colors = []; // Array to store colors
let rectWidth; // Width of each rectangle

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a full-screen canvas

  // Generate dynamic colors for the array
  for (let i = 0; i < 10; i++) {
    // You can change 10 to any number of rectangles
    colors.push(color(random(255), random(255), random(255))); // Generate random colors
  }

  rectWidth = width / colors.length; // Calculate the width of each rectangle
  noLoop(); // Prevent automatic redrawing
}

function draw() {
  background(220); // Clear the canvas with a light gray background

  // Loop through the colors array and draw rectangles
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]); // Set the fill color for the current rectangle
    noStroke(); // Remove the stroke for a clean look
    rect(i * rectWidth, 0, rectWidth, height); // Draw the rectangle
  }
}

function mousePressed() {
  // Change colors dynamically when the mouse is pressed
  for (let i = 0; i < colors.length; i++) {
    colors[i] = color(random(255), random(255), random(255)); // Generate new random colors
  }
  redraw(); // Redraw the canvas with the new colors
}
