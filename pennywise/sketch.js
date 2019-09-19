let angle = -270;
let start = 15;
let floating = 1;
let move = 0;
let op = 255;

let scary;


function preload() {
    pW = loadImage("it.png");
    scary = loadFont('horroroid.ttf');
  }

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(0);
  
  op-=1;
  fill(255, 217, 104, op);
  textSize(48);
  textFont(scary);
  text("You'll float too", 85,150);
  
 translate(300, 300);
  
  
  
  
  
  
  //balloon
  
 

  ellipseMode(CENTER);
  
 // console.log(start);
  //console.log(height);
  
  //horizontal movement
    start -= floating;
  
    //reset to the beginning of thee screen 
    if (start <= -height/2) {
      start = height/2;

    }
  
  
  
  
  fill(255, 0,0, 50);
  
  ellipse(73, start, 200, 250);
  push()
  strokeWeight(4);
  stroke(255);
  
  line(73, start +300, 73, start+120);
  pop();
 
  
  fill(250,250,250, 225);
  noStroke();
  beginShape();
  vertex(74,-36);
  vertex(10,-59);
  vertex(-11,-5);
  vertex(6,87);
  vertex(8,122);
  vertex(32,157);
  vertex(50,181);
  vertex(74,188);
  endShape(CLOSE);
  
  
  //image(pW, -100,-150);
  
  beginShape();
  vertex(74,-36);
  vertex(138,-59);
  vertex(159,-5);
  vertex(142,87);
  vertex(140,122);
  vertex(116,157);
  vertex(98,181);
  vertex(74,188);
  endShape(CLOSE);
  
  
  
  
  //left eye
  beginShape();
   vertex(17, 84);
   vertex(32,79);
   vertex(63, 101);
   vertex(36, 109);
  endShape(CLOSE);
  
  //right eye
  push()
  translate(25,0);
  beginShape();
   vertex(105, 84);
   vertex(90,79);
   vertex(57, 101);
   vertex(86, 109);
  endShape(CLOSE);
  pop()
  
  fill (0,0, random(100,255), 250);
  push();
  ellipseMode(CENTER);
  ellipse(37, 93, 18);
  fill(0);
  ellipse(37, 93, 4);
  pop();
  
  push();
  translate(71, 2);
  ellipseMode(CENTER);
  ellipse(37, 93, 18);
  fill(0);
  ellipse(37, 93, 4);
  pop();
  
  
  fill(255,0,0);
  triangle(35,47, 34, 79, 30, 79);
  
  beginShape();
   vertex(33, 108);
   vertex(26, 125);
   vertex(38, 137);
   vertex(47, 141);
  endShape(CLOSE);
  
 beginShape();
   
  fill(255,0,0, 150);
   beginShape();
   vertex(47, 141);
   vertex(59, 149);
   vertex(74,151);
  vertex(53, 158);
  vertex(38, 137);
  endShape(CLOSE);
  
  //other side
  
 
  fill(255,0,0);
  triangle(112,47, 112, 79, 116, 79);
  

  
  beginShape();
   vertex(114, 108);
   vertex(123, 125);
   vertex(109, 137);
   vertex(100, 141);
  endShape(CLOSE);
  
  
  fill(255,0,0, 150);
   beginShape();
   vertex(100, 141);
   vertex(88, 149);
   vertex(73,151);
  vertex(94, 158);
  vertex(109, 137);
  endShape(CLOSE);
  
  
  
  
  
  console.log(mouseX, mouseY);
}


