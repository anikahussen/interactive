//Stone class 
class Stone {
  //constructor variables 
  //hue parameter shows what color the stone will be, among other conditions defined in sketch.js 
  constructor(hue) {
    //constructor variables 
    //primary triangle points for the center of the stone objects
    this.x1 = 0;
    this.y1 = 30;
    this.x2 = 30;
    this.y2 = -30;
    this.x3 = -30;
    this.y3 = -30;
    //hue variable that will be passed in
    this.hue = hue;
  }

  //method to present the objects
  show() {

    //based on what is passed in for the hue parameter, change to corresponding infinity stone base color 
    if (this.hue == "soul") {
      fill(158, 16, 168);
    } else if (this.hue == "time") {
      fill(35, 84, 54);
    } else if (this.hue == "space") {
      fill(64, 122, 157);
    } else if (this.hue == "reality") {
      fill(190, 85, 56);
    } else if (this.hue == "power") {
      fill(232, 182, 91);
    } else if (this.hue == "mind") {
      fill(156, 60, 44);

      //parameter that will darken/black out after each stone is pressed
    } else if (this.hue == "deactivate") {
      fill(0, 0, 0);
    }

    //dimensions of the stones using constructor variables (created solely by triangles)
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    triangle(this.x1, this.y1, -this.x2 * 2, this.y1, this.x3, this.y3);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x2 * 2, this.y1);
    triangle(this.x1, this.y1, this.x1, this.y1 * 2, this.x2 * 2, this.y1);
    triangle(this.x1, this.y1, -this.x2 * 2, this.y1, this.x1, this.y1 * 2);
    triangle(-this.x2 * 2, this.y3 - this.y1 / 2, -this.x2 * 2, this.y1, this.x3, this.y3);
    triangle(-this.x2 * 2, this.y3 - this.y1 / 2, this.x1, -this.y1 * 3, this.x3, this.y3);

    //For the shade effect on the gems based on what is passed in for the hue parameter
    if (this.hue == "time") {
      fill(0, 172, 66, 225);
    } else if (this.hue == "space") {
      fill(67, 171, 234, 255);
    } else if (this.hue == "reality") {
      fill(224, 158, 140, 225);
    } else if (this.hue == "power") {
      fill(249, 223, 177, 255);
    } else if (this.hue == "mind") {
      fill(237, 68, 43, 225);
    }
    triangle(this.x2 * 2, this.y3 - this.y1 / 2, this.x2, this.y2, this.x2 * 2, this.y1);
    triangle(this.x2, this.y2, this.x1, -this.y1 * 3, this.x2 * 2, this.y3 - this.y1 / 2);

    //shading thee soul stone (center point)
    if (this.hue == "soul") {
      fill(158, 16, 168, 225);
    }
    triangle(this.x2, this.y2, this.x3, this.y3, this.x1, -this.y1 * 3);

  }




}