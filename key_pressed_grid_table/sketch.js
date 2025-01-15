let gridSize = 10; // Number of rows and columns in the grid
let cellSize; // Size of each cell in the grid
let keysPressed = []; // Array to store the keys pressed by the user
let keyColors = {}; // Object to store a unique color for each key

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas that matches the screen size
  cellSize = width / gridSize; // Calculate cell size based on the canvas width
  textAlign(CENTER, CENTER); // Align text in the center of each cell
  textSize(cellSize / 2); // Set text size based on cell size
}

function draw() {
  background(220); // Clear the canvas

  // Draw the grid
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      let x = col * cellSize; // X-coordinate of the cell
      let y = row * cellSize; // Y-coordinate of the cell

      // Calculate the index of the current cell
      let index = row * gridSize + col;

      // Draw the cell
      if (index < keysPressed.length) {
        // Use the color corresponding to the key
        let key = keysPressed[index];
        if (keyColors[key]) {
          fill(keyColors[key]);
        } else {
          fill(255); // Default color if no color is assigned
        }
        rect(x, y, cellSize, cellSize);

        // Display the key
        fill(0);
        text(keysPressed[index], x + cellSize / 2, y + cellSize / 2);
      } else {
        fill(255); // Empty cell
        rect(x, y, cellSize, cellSize);
      }
    }
  }
}

// Detect key presses
function keyPressed() {
  // Add the pressed key to the keysPressed array if the grid is not full
  if (keysPressed.length < gridSize * gridSize) {
    keysPressed.push(key);

    // Assign a random color to the key if it doesn't already have one
    if (!keyColors[key]) {
      keyColors[key] = color(random(255), random(255), random(255));
    }
  }
}

// Resize the canvas if the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust the canvas size
  cellSize = width / gridSize; // Recalculate the cell size
  textSize(cellSize / 2); // Adjust text size to the new cell size
}
