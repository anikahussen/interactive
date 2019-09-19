//CLASSES

//Fire class
class Fire {
  //initialize variables
  constructor() {
    this.x = 100;
    this.y = 450;
    this.vx = random(-3, 3);
    this.vy = random(-8, -1);
    this.alpha = 255;
    this.g = 0
  }

  //method for when the fire fades away
  end() {
    return this.alpha < 0;
  }

  //spreading the fire and updating the transparency and hue
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
    this.g += 5
  }

  //method to show the fire 
  show() {
    noStroke();
    fill(230, this.g, 0, this.alpha);
    ellipse(this.x, this.y, 16);
  }



}

//Water class 
class Water {
  //initialize the variables
  constructor() {
    this.x = 400;
    this.y = 0;
    this.vx = random(-3, 3);
    this.vy = random(5, 8);
    this.radius = 2;
    this.alpha = 255;
  }

  //method for when the water fades away
  end() {
    return this.alpha < 0;
  }

  //spreading the water and updating the transparency
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  //method to show the water
  show() {
    noStroke();
    fill(0, random(100, 150), 255, this.alpha);
    ellipse(this.x, this.y, this.radius);
  }

}


//Air class 
class Air {
  //initializing variables
  constructor(x, y) {
    this.x = random(0, 500);
    this.y = random(0, 200);
  }

  ///method to show the air
  show() {
    stroke(5);
    fill(0, 0.5);
    arc(this.x, this.y, 50, 50, 0, PI / 2.0); // lower quarter circle

  }

}

//cloud object class
class Cloud {
  //initialize variables
  constructor() {
    this.c = 255;
    this.x = 0;
    this.y = 50;
    this.w = 55;
    this.h = 25;



  }
  //method to show one cloud object
  show() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.w, this.h);
    ellipse(this.x + 25, this.y - 50, this.w, this.h);
    ellipse(this.x + 40, this.y, this.w, this.h);
    ellipse(this.x + 15, this.y - 30, this.w, this.h);
    ellipse(this.x + 30, this.y - 30, this.w, this.h);
    ellipse(this.x + 70, this.y, this.w, this.h);
    ellipse(this.x + 60, this.y - 30, this.w, this.h);
    ellipse(this.x + 60, this.y - 10, this.w + 1.5, this.h);
    ellipse(this.x + 30, this.y - 10, this.w, this.h);
    ellipse(this.x + 20, this.y - 10, this.w, this.h);
  }
}

//Earth Class 
class Earth {
  constructor(x, y) {
    this.x = random(0, 500);
    this.y = random(0, 100);
    this.w = random(20, 50);
    this.speed = 0;
    this.gravity = 0.1;
    this.r = 118;
    this.g = 144;
    this.b = 40;
  }
  //method to show earth emblems 
  show() {
    ellipseMode(CENTER);
    rectMode(CENTER);
    fill(this.r, this.g, this.b);
    stroke(0);
    ellipse(this.x, this.y, this.w, this.w);
    noFill()
    ellipse(this.x, this.y, this.w / 1.2, this.w / 1.2);
    ellipse(this.x, this.y, this.w / 2, this.w / 2);
    rect(this.x, this.y, this.w / 5, this.w / 5);
  }

  //method to create bouncing effect 
  update() {
    // add speed to y axis
    this.y = this.y + this.speed;

    // add gravity to speed
    this.speed = this.speed + this.gravity;

    // reverse speed when emblem reach the bottom
    if (this.y > height) {
      this.speed = this.speed * -0.95;
    }
  }
}