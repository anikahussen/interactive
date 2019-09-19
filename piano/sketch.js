//declare all variables
let bright;
let w, h, x, y, rd, gd, bd, rr, gr, br;
let rm, gm, bm, rf, gf, bf;
let rectx, recty, rectw, recth;
function setup() {
  createCanvas(600, 600);
  //initialize all variables
  imgx = 30;
  imgy = 0;
  h = 300;
  x = 0;
  y = 300;
  rectx = 260;
  recty = 110;
  rectw = 20;
  recth = 80;
  xspeed = 1;
  yspeed = 1;
  bright = 0
  halfscreen = 120;
  pausecolor = 255;
	

  
}
	//preload all sound and images
	function preload() {
		dos = loadSound("do.wav");
		res = loadSound("re.wav"); 
		mis = loadSound("mi.wav");
		fas = loadSound("fa.wav");
		hp = loadImage("headphones.png");  

	}
	function draw() {
 		background(0);

		//condition statement for when on bottom of the non-keyboard screen, change to dark  
		if (mouseX > x && mouseY < halfscreen) {
    	bright = 255;
  		pausecolor = 0;
		//other half of the non-keyboard screen, change to light   
		}else {
  		pausecolor = 255;
		}
		//fade screen  
		bright -= 2
		background(bright);  

  	//intial keyboard color
  	fill(255);
  	stroke(1);
    //first key
  	if ((mouseX>x && mouseX<(x+width/4)) && (mouseY>y && mouseY<(y+h))){
  		rd = 255;
  		gd = 0;
  		bd = 0;
      if(dos.isPlaying() == false){
					dos.play();
			}
  		  
	  //second key
		}else if ((mouseX>x && mouseX<(x+(2*width/4))) && (mouseY>y && mouseY<(y+h))){
			rr = 255;
  		gr = 127;
  		br = 0; 
    	if(res.isPlaying() == false){
					res.play();
			} 
    //third key  
		}else if ((mouseX>x && mouseX<(x+(3*width/4))) && (mouseY>y && mouseY<(y+h))){
			rm = 255;
    	gm = 255;
    	bm = 0;
    	if(mis.isPlaying() == false){
					mis.play();
			} 
    
    //fourth key
  	}else if ((mouseX>x && mouseX<(x+(4*width/4))) && (mouseY>y && mouseY<(y+h))){
			rf = 0;
    	gf = 255;
    	bf = 0;
    	if(fas.isPlaying() == false){
					fas.play();
			} 
      
  	}  

    
 
    //reverse color of pause button 
  	fill(pausecolor);
		rect(rectx, recty, rectw, recth);
  	rect(rectx+60,recty, rectw, recth);
  
  

    //pressing the pause button resets the keyboard color/sound
   	if (mouseX>rectx && mouseX<(rectx + (5*rectw)) && mouseY>recty && mouseY<(recty+recth) ){
      if (mouseIsPressed) {
  			rd = 255;
    		gd = 255;
    		bd = 255;
    		rr = 255;
    		gr = 255;
    		br = 255;
    		rm = 255;
    		gm = 255;
    		bm = 255;
    		rf = 255;
    		gf = 255;
    		bf = 255;
    		dos.stop();    
  			res.stop();
    		mis.stop();
    		fas.stop();
  		}
    }
    //keys + conditional color variables from preevious if/if else statements
  	fill(rd,gd,bd);
  	rect(x, y, width/4, h);
  	fill(rr,gr,br);
  	rect(x+(width/4), y, width/4, h);
  	fill(rm,gm,bm);
  	rect(x+(2*(width/4)), y, width/4, h);
  	fill(rf,gf,bf);
  	rect(x+(3*(width/4)), y, width/4, h);
  
    //dimensions of graphic (headphones)
  	image(hp, imgx, height / 8, hp.width / 8, hp.height / 8);
  
  	//horizontal movement
  	imgx += xspeed;
  
    //reset to the beginning of thee screen 
		if (imgx >= width) {
    	imgx = 0;

  	}
  	
    //mouse music note icon
  	textSize(24);
  	fill(138,43,226);
  	text("♭", mouseX, mouseY);

  	textSize(14);
  
    //prompts for user
  	text("Click to reset", rectx, recty-30)
  
 
  
 
}


