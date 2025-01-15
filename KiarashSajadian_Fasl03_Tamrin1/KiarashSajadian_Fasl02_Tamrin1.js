let gridSize = 10;
let cellSize;
let shapes = [];
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    shapes.push("c");
    colors.push(color(random(255), random(255), random(255)));
  }
}

function draw() {
  background(220);

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      let x = col * cellSize;
      let y = row * cellSize;
      let index = row * gridSize + col;

      fill(colors[index]);

      // Draw the correct shape based on the 'shapes' array
      if (shapes[index] === "r") {
        rect(x, y, cellSize, cellSize); // Draw rectangle
      } else if (shapes[index] === "t") {
        triangle(x, y, x + cellSize, y, x + cellSize / 2, y - cellSize); // Draw triangle
      } else if (shapes[index] === "c") {
        ellipse(x + cellSize / 2, y + cellSize / 2, cellSize, cellSize); // Draw circle
      }
    }
  }
}

function keyPressed() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    if (key === "r") {
      shapes[i] = "r";
      colors[i] = color(random(255), random(255), random(255));
    } else if (key === "t") {
      shapes[i] = "t";
      colors[i] = color(random(255), random(255), random(255));
    } else if (key === "c") {
      shapes[i] = "c";
      colors[i] = color(random(255), random(255), random(255));
    } else if (key === "s") {
      let possibleShapes = ["r", "t", "c"];
      shapes[i] = random(possibleShapes);
      colors[i] = color(random(255), random(255), random(255));
    }
  }
}
