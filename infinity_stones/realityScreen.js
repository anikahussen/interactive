//Reality display class
class realityScreen {
  //initializing constructor variables 
  constructor() {
    //dimensions and coordinates are all random, coordinates are placed in general regions togeether 
    this.x = random(-200, 200);
    this.y = random(-200, 200);
    this.dim = random(100, 500);
    this.x2 = random(-400, 200);
    this.y2 = random(-400, 200);
    this.x3 = random(0, 200);
    this.y3 = random(400, 600);



  }
  //method to display different shapes using constructor variables set to random to illustrate the warping power of the reality stone
  display() {
    rect(this.x, this.y, this.dim, this.dim);
    triangle(this.x2, this.y2, this.x2 + this.dim, this.y2, (2 * this.x2 + this.dim) / 2, this.y2 * 2);
    ellipse(this.x3, this.y3, this.dim, this.dim);



  }







}