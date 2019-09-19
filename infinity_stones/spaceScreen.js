//Space display class
class spaceScreen {
  //paramaters for center coordinates and dimensions
  constructor(x, y, dim) {
    //center coordinates
    this.centerx = x;
    this.centery = y;
    //dimeensions that will bee passed in 
    this.dim = dim;



  }
  //method to display the simple planetary(space) effect
  display() {
    //condition to fill with darker blue when object is in the upper left region
    if (this.centerx < 0) {
      fill(64, 122, 157);

    }
    //condition to fill with lighter blue when object is in the lower right region
    else {
      fill(67, 171, 234, 255);
    }

    //dynamic shape/object for planet
    ellipse(this.centerx, this.centery, this.dim, this.dim);


  }

}