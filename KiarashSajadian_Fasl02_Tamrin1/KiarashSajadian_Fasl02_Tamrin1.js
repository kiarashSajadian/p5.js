function setup() {
  createCanvas(600, 600);
  background(220);
  fill(255);
  strokeWeight(2);
  line(width/2, 0, width/2, height);  // Vertical line
  line(0, height/2, width, height/2); // Horizontal line
}

let d = 25; // Diameter of the circle
let r = d/2; // radius of the circle

let s = 25; // Side of the square

function draw() {
  
///// top-left //////////////////////////
  if(mouseX > 0 && mouseX <  width/2 - r && mouseY < height/2 - r && mouseY > 0){
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, d);
  };
  
///// top-right ////////////////////////
  if(mouseX > width/2 && mouseX < width && mouseY < height/2 - s && mouseY > 0){
    fill(0, 255, 0);
    rect(mouseX, mouseY, s);
  };

///// bottom-left ///////////////////////
  if(mouseX > 0 && mouseX <  width/2 - s && mouseY > height/2 && mouseY < width){
    fill(0, 255, 255);
    rect(mouseX, mouseY, s);
  };
  
///// bottom-right //////////////////////
  if(mouseX > width/2 + r && mouseX - d <  width - s && mouseY > height/2 + r && mouseY < width){
    fill(255, 0, 255);
    ellipse(mouseX, mouseY, d);
  }; 

}
