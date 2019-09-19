//Power display class
class powerScreen {
  constructor() {
    //no constructor variables needed, since I am using the global variable angle and mDiam to pulsate my ellipse orb 
  }

  //method to pulsate the orb, illustrating the vibrating power of the respective stone
  pulse() {
    //set the dynamic changing of the diameter (and in a larger sense, the size) of the circle
    let diam = 100 + sin(angle) * mDiam;
    //slow pulsing
    angle += .01;


    noStroke();
    //darker core
    fill(249, 223, 177, 255);
    //dynamic dimensions for the pulsing circle
    ellipse(0, 0, mDiam * 1.4, mDiam * 1.4);
    //lighter glow fill
    fill(232, 182, 91);
    //outer circle that remains standard 
    ellipse(0, 0, diam, diam);


  }
}


//RESOURCES:
//https://editor.p5js.org/dansakamoto/sketches/H1ICcXXtm