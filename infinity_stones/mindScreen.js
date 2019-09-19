//Mind display class
class mindScreen {
  constructor() {
    //initializing constructor variables 
    //center variables 
    this.centerx = 0;
    this.centery = 0;
    //dimension variables 
    this.width = width * 1.5;
    this.height = height - height / 7;


  }

  //method to display a simple mind working 
  display() {

    //show initial fill and stroke weight that should change the nature of the stones as well (stroke changes in the stones as well)
    //since mind is an inner control power
    noFill();

    strokeWeight(1);
    stroke(255, 0, 0, 225);
    //looping from 1 to 10 (9 times to change time intervals of when thee inner circles are created_  
    for (let j = 1; j < 10; j++) {
      //changing time intervals of when thee lighter colored circles show
      if (second() % j == 0) {
        if (j % 2 == 0) {
          stroke(237, 68, 43, 225);

        }

        //dynamic ellipses are displayed  
        ellipse(this.centerx, this.centery, this.width / (j + 1), this.height / (j + 1));


      }


    }


  }
}