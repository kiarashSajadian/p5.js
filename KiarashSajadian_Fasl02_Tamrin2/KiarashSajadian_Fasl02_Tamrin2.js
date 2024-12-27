function setup() {
  createCanvas(600, 600);
  background(220);
  fill(255);
  strokeWeight(2);
  line(width/2, 0, width/2, height);  // Vertical line
  line(0, height/2, width, height/2); // Horizontal line
}

let dia = 25; // Diameter of the circle
let rad = dia/2; // radius of the circle
let s = 25; // Side of the square
/////////////////////
let xPositionA = 150;
let xSpeedA = 3;
let yPositionA = 150;
let ySpeedA = 2;
/////////////////////
let xPositionB = 450;
let xSpeedB = 1;
let yPositionB = 150;
let ySpeedB = -3;
/////////////////////
let xPositionC = 150;
let xSpeedC = -3;
let yPositionC = 450;
let ySpeedC = 4;
/////////////////////
let xPositionD = 450;
let xSpeedD = -3;
let yPositionD = 450;
let ySpeedD = 2;
/////////////////////
function draw() {
  
  let r = random(255);
  let g = random(255);
  let b = random(255);
  
////////////////////////////////////////////////////////////////////////////////////  
  ellipse(xPositionA, yPositionA, dia);
  xPositionA += xSpeedA;
  yPositionA += ySpeedA;
  
  
  if (xPositionA > width/2 - rad || xPositionA < 0 + rad){
      xSpeedA *= -1;
      fill(r, g, 0);
      
      }
  
  if (yPositionA > height/2 - rad || yPositionA < 0 + rad){
      ySpeedA *= -1;
      fill(0, g, b);
      }
////////////////////////////////////////////////////////////////////////////////////
  rect(xPositionB, yPositionB, s);
  xPositionB += xSpeedB;
  yPositionB += ySpeedB;
  
  
  if (xPositionB > width - s || xPositionB < width/2 ){
      xSpeedB *= -1;
      fill(r, g, b);
      
      }
  
  if (yPositionB > height/2 - s || yPositionB < 0 ){
      ySpeedB *= -1;
      fill(r, g, b);
      }
////////////////////////////////////////////////////////////////////////////////////
  rect(xPositionC, yPositionC, s);
  xPositionC += xSpeedC;
  yPositionC += ySpeedC;
  
  
  if (xPositionC > width/2 - s || xPositionC < 0 ){
      xSpeedC *= -1;
      fill(r, 0, b);
      
      }
  
  if (yPositionC > height  || yPositionC < height/2){
      ySpeedC *= -1;
      fill(r, g, 0);
      }
////////////////////////////////////////////////////////////////////////////////////
  ellipse(xPositionD, yPositionD, dia);
  xPositionD += xSpeedD;
  yPositionD += ySpeedD;
  
  
  if (xPositionD > width - rad || xPositionD < width/2 + rad){
      xSpeedD *= -1;
      fill(r, g, 0);
      
      }
  
  if (yPositionD > height - rad || yPositionD < height/2 + rad){
      ySpeedD *= -1;
      fill(r, g, b);
      }
////////////////////////////////////////////////////////////////////////////////////
}
