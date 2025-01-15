function setup() {
  createCanvas(windowWidth, windowHeight); // Create a full-screen canvas
  noLoop(); // Stop draw from looping automatically
}

function draw() {
  background(0); // Set the background to black

  // Loop through every pixel position on the canvas
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Generate a random grayscale color for noise
      let brightness = random(255); // Random value between 0 (black) and 255 (white)
      stroke(brightness); // Set the stroke color to this random brightness
      point(x, y); // Draw a single point at the current position
    }
  }
}