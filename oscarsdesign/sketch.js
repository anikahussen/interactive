//declare variables for objects
let light1;
let light2;
let light3;
let hline;
let hline2;
let hline3;
let vline;
let vline2;
let vline3;

//preloading all the media
function preload() {
  oscars = loadImage("oscars.png");
  logo = loadImage("oscarslogo.png");
}

function setup() {
  createCanvas(600, 600);
  //creating objects and storing into varoables with the parameters I set up in my classes
  //light parameters: 
  //x coordinate, y coordinate, 
  //dimensions(width and height are the same),
	//red, green, blue (rgb)
  light1 = new Lights(110, 110, 70, 234, 44, 11)
  light2 = new Lights(310, 310, 210, 255, 255, 255);
  light3 = new Lights(510, 510, 210, 223, 202, 78);
  
  //gridv parameter: y starting coordinate
  hline = new GridV(0);
  hline2 = new GridV(200);
  hline3 = new GridV(400);
  //gridh parameter: x starting coordinate
  vline = new GridH(0);
  vline2 = new GridH(200);
  vline3 = new GridH(400);
}



function draw() {
  background(17, 14, 14);
  //calling methods for each object show on screen,move vertically, move horizontally
  hline.moveVertical();
  hline2.show();
  hline2.moveVertical();
  hline3.show();
  hline3.moveVertical();
  vline.show();
  vline.moveHorizontal();
  vline2.show();
  vline2.moveHorizontal();
  vline3.show();
  vline3.moveHorizontal();
  
  //calling methods for each object show on screen and grow, stay constant, shrink
  light1.show();
  light1.grow();
  light2.show();
  light3.show();
  light3.shrink();

}