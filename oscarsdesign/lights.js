//class for decorative circles objects
class Lights {
  //constructor with variables
  constructor(x, y, d, r, g, b) {
    this.x_coor = x;
    this.y_coor = y;
    this.d = d;
    this.threeD = d * 3;
    this.r = r
    this.g = g
    this.b = b
    this.fontSize = d / 3;

  }
	//method to show circle
  show() {
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x_coor, this.y_coor, this.d, this.d);
    image(logo, width / 2.5, height / 2.1, 150, 50);



  }
	//method to grow circle
  grow() {
    this.d += 1;
    if (this.d > this.threeD || this.d < this.d) {
      this.d -= 1;
      image(oscars, this.x_coor / 2.7, this.y_coor / 2.7, this.d / 1.5, this.d / 1.5);

    }


  }
  //method to shrink circle
  shrink() {
    this.d -= 1;
    if (this.d <= 0) {
      this.d += 1;
      textAlign(CENTER);
      textSize(this.fontSize);
      text("2019", this.x_coor - 30, this.y_coor);
    }
  }

}

//class for vertical lines
class GridV {
  //constructor with variables
  constructor(y) {
    this.yPos = y;
    this.r = 255;
    this.g = 255;
    this.b = 255;

  }
  //method to show vertical lines
  show() {
    stroke(this.r, this.g, this.b);
    line(0, this.yPos, width, this.yPos);
  }
	//method to move lines vertically
  moveVertical() {
    this.yPos = this.yPos - 1;
    if (this.yPos < 0) {
      this.yPos = height;
    }

  }

}

//class for horizontal lines
class GridH {
  constructor(x) {
    this.xPos = x;
    this.r = 255;
    this.g = 255;
    this.b = 255;

  }
  //method to show horizontal lines
  show() {
    stroke(this.r, this.g, this.b);
    line(this.xPos, 0, this.xPos, height);
  }

  //method to move lines horizontally
  moveHorizontal() {
    this.xPos = this.xPos - 0.05;
    if (this.xPos < 0) {
      this.xPos = width;
    }

  }

}