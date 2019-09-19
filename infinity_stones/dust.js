//Dust class
class Dust {

  constructor() {
    //constructor variables
    //center point variables 
    this.x = 0;
    this.y = 500;
    //range of the object appearances
    this.vx = random(-8, 10);
    this.vy = random(-8, -10);
    //opacity variable set to full 
    this.alpha = 255;
    //set all rgb color attributes off (for black)
    this.g = 0
    this.r = 0;
    this.b = 0;
  }

  //method to signify when the objects should stop being pushed into array
  //returning based on whether or not the particles have faded into 0 opacity
  end() {
    return this.alpha < 0;
  }

  //method to spread the particles 
  update() {
    this.x += this.vx;
    this.y += this.vy;
    //decrease opacity variable
    this.alpha -= 5;
  }

  //method to display the dust particles; mimicking the characters turning into dust after the stones have been used 
  show() {
    //attributes of the object appearances
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    ellipse(this.x, this.y, 16);
  }



}

//RESOURCES:
//https://p5js.org/examples/simulate-particle-system.html