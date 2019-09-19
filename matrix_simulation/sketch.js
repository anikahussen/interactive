//Declaring and initializing variables
let bgColor = 0;
let sun_fill = 0;
let sand_fill= 0;
let sand_fillg =0;
let sand_fillb =0;
let matrix_x = 0;
let matrix_y = 300;

//pill object
let pill= {
    width: 80,
    half_width: 40,
    height: 180,
    half_height: 90,
    double_height: 360,
    triple_height: 270,
    x_coor: 180,
    y_coor: 250 
    
  }

//red pill objects with initialized color variables 
let red_pill={
r: 0,
b:0,
g: 0
}
  
//blue pill objects with initialized color variables 
let blue_pill={
r: 0,
b:0,
g: 0
}


function setup() {
  createCanvas(800, 600);
  //Setting modes for coordination
  ellipseMode(CENTER);
  rectMode(CENTER);
}



function draw() {
  background(20);
  fill(255);
  //Directions for the user 
  textSize(24);
  text('R E D  P I L L ?', 280,150 );
  text('B L U E  P I L L ?', 280,200 );
  //Random color changing constantly
  fill(random(0,255),random(0,255), random(0,255));
  
  text('H O V E R  T O', 280,300 );
  text('C H O O S E', 280,350 );
  
  //Matrix mode; conditional to when hovering over red pill
  if (mouseX< (pill.x_coor+pill.half_width) &&  mouseX> (pill.x_coor-pill.half_width)) {
  	push()
  	background (10);
  	stroke(50);
  	fill(100);
 		textSize(14);
  	fill(0,128,0);
  	text('01110010 01100001 01100010 01100010 01101001 01110100 00100000 01101000 01101111 01101100 01100101 00001101 00001010', matrix_x, matrix_y);
  	text('01101101 01100001 01110100 01110010 01101001 01111000', matrix_x-100, matrix_y+100);
  	text('01110010 01100101 01100100 00100000 01110000 01101001 01101100 01101100 00001101 00001010', matrix_x, matrix_y+250);
  	text('01100111011011110110111101100100011000100111100101100101', matrix_x-15, matrix_y+200);
  	text('01100111011011110110111101100100011000100111100101100101', matrix_x-45, matrix_y+50);
  	text('01100111011011110110111101100100011000100111100101100101', matrix_x-165, matrix_y-60);
  	text('01100111011011110110111101100100011000100111100101100101', matrix_x, matrix_y-120);
  	text('01100111011011110110111101100100011000100111100101100101', matrix_x, matrix_y-200);
  //text move horizontally 
  	matrix_x += 1;
  
  //resetting coordinates when text leaves the page
  if (matrix_x == width) {
    matrix_x = 0;
  }
    
  
  pop()
  //Glitching effect
  fill(random(0,255));
  textSize(24);
  text("T H E  M A T R I X", 180,50);
    
}
  
  //End game; conditional to when hovering over blue pill
	if (mouseX< (pill.x_coor+pill.half_width+350) &&  mouseX> (pill.x_coor-pill.half_width+350)){
      
    //Periodically changing color of the sky-shades of blue
    background(bgColor);
  		if (frameCount % 60 == 0) {
    
    		let color_shade = random(150,255);
    		bgColor = color(color_shade,color_shade,255);
    	
  	
  }
   
   
   
  stroke(3);
	fill(sun_fill);
  ellipse(width/2.2,height/2,width-200,height+90);
   
  //Periodically changing color of the sun-shades of red
  if (frameCount % 60 == 0) {
   	sun_fill=random(10,255);
   	sun_fill = color(255, sun_fill, sun_fill);
  }
    
  //Periodically changing color of the sun-shades of yellow
  fill(sand_fill);
  rectMode(CORNER);
  rect(0,height/2,width, height/2);
   
   if (frameCount % 60 == 0) {
    sand_fillg=random(10,255);
    sand_fillb= random(5,100);
    sand_fill = color(255, sand_fillg, sand_fillb) ;
   }
    
  //texture sand lines
	 line(770,320,800,320)
   line(670,400,620,400);
   line(560,360,520,360);
   line(510,430,390,430);
   line(320,410, 280,410);
   line(150,430, 70, 430);
   line(80,320,30,320);
   
  //Message for the blue pill people
   stroke(10);
   textSize(36);
   text("I G N O R A N C E  ",240,100);
   text("I S  B L I S S", 250, 200);
	

	}


  
	
  

//remove pill stroke 
 noStroke();

  
  //dynamically change the shade of the red pill 
  //based on mouse position
  push() 
  if (mouseX <(width/4)) {
  	red_pill.r=255;
  }
  if (mouseX <(width/2) && mouseX >(width/4)) {
     red_pill.r=200;
   }
  
  if (mouseX <width && mouseX >(width/2)) {
     red_pill.r=100;
   }
  
 
  
  fill(red_pill.r, red_pill.g, red_pill.b);
  rectMode(CENTER);
 
  rect(pill.x_coor, pill.y_coor, pill.width, pill.height,20);
  arc(pill.x_coor, (pill.y_coor - pill.width), pill.width, pill.half_height, -PI, 0, CHORD);
  
  
  translate(width/2 , height/2 );
	rotate(PI / 1.0);
  arc((pill.x_coor+pill.half_width), (pill.y_coor - pill.triple_height), pill.width, pill.half_height, -PI, 0, CHORD); 
  pop()
  
	//dynamically change the shade of the blue pill 
	//based on mouse position
  
  push()
  
  translate(350,0);
  
  if (mouseX <(width/4)) {
     blue_pill.b=100;
   }
  if (mouseX <(width/2) && mouseX >(width/4)) {
     blue_pill.b=150;
   }
  
  if (mouseX <(width*3/4) && mouseX >(width/2)) {
     blue_pill.b=255;
  }
  
 
  
  fill(blue_pill.r,blue_pill.g , blue_pill.b);
  
  
  rectMode(CENTER);
  rect(pill.x_coor, pill.y_coor, pill.width, pill.height,20);
  arc(pill.x_coor, (pill.y_coor - pill.width), pill.width, pill.half_height, -PI, 0, CHORD);
  
  
  translate(width/2 , height/2 );
	rotate(PI / 1.0);
  arc((pill.x_coor+pill.half_width), (pill.y_coor - pill.triple_height), pill.width, pill.half_height, -PI, 0, CHORD); 
  
	pop()


}