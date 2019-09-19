//Time Display class 
class timeScreen {
  constructor() {
    //initializing constructor variables
    this.angle = 0;
    this.speed = 0.025;
    this.centerx = 0;
    this.centery = 0;
    this.dim = 250;



  }
  //method to display time effect mimicking Dr.Strange's power
  display() {
    //Bolden all strokes
    strokeWeight(2);
    //Make all strokes green
    stroke(0, 172, 66);
    //set for no fill in color   
    noFill();
    //set a center mode for rectangles  
    rectMode(CENTER);

    //Create 4 squares with proportional dimensions within each other, but increasingly smaller  
    for (let i = 0; i <= 4; i++) {
      rect(this.centerx, this.centery, this.dim / i, this.dim / i);

      //Create a visible "line" across the 3D plane 
      triangle(-width, -height, width, height, width / 2, height / 2);
      //square designs on the opposite edges of the central square 
      rect(-this.dim / 2, -this.dim / 2, 100, 100);
      rect(this.dim / 2, this.dim / 2, 100, 100);


    }

  }

  //method to rotate the time design 
  rot() {
    this.angle += this.speed;

    //every other second, create a glitching effect  
    if (second() % 2 == 0) {
      angle *= -1;
    }
    rotateZ(angle);
  }


}