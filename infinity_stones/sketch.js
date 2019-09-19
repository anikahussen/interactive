//declare all variables
let soul_stone, time_stone, space_stone, reality_stone, power_stone, mind_stone;
let angle;
let angleDiff;
let translatex;
let translatey;
let hue = [];
let stone_width;
let bright;
let soul, time, space, reality, power, mind;
let coorx, coory;
let space_obj = [];
let mDiam;
let dust = [];

function setup() {
  //Diimensions for a 3D plane
  createCanvas(800, 800, WEBGL);
  //assign needed values to variables
  angle = 0;
  angleDiff = 0;
  translatex = [0, 0, 250, -250, -150, 150];
  translatey = [0, -250, -125, -125, 250, 250];
  hue = ["soul", "time", "space", "reality", "power", "mind"]
  stone_width = 120;
  bright = 255;
  mDiam = 500;

}

function draw() {
  background(255, 255);

  //rotating pivot point for outer stones
  angle += 0.025;
  //rotating pivot point for center soul gem
  angleDiff += 0.2;


  //SOUL STONE
  //push/pop to separate translations
  push();
  //using corresponding array indexes to translate object instances
  translate(translatex[0], translatey[0]);
  //rotating on x axis on declared angle
  rotateX(angleDiff);
  //create new object from the Stone class using hue array index as an argumen
  soul_stone = new Stone(hue[0]);
  //show method to present the stone
  soul_stone.show();
  pop();

  //TIME STONE
  //push/pop to separate translations
  push();
  //using corresponding array indexes to translate object instances
  translate(translatex[1], translatey[1]);
  //rotating on y axis on declared angle
  rotateY(angle);
  //create new object from the Stone class using hue array index as an argumen
  time_stone = new Stone(hue[1]);
  //show method to present the stone
  time_stone.show();
  pop();


  //SPACE STONE
  //push/pop to separate translations
  push();
  //using corresponding array indexes to translate object instances
  translate(translatex[2], translatey[2]);
  //rotating on y axis on declared angle
  rotateY(angle);
  //create new object from the Stone class using hue array index as an argumen
  space_stone = new Stone(hue[2]);
  //show method to present the stone
  space_stone.show();
  pop();

  //REALITY STONE
  //push/pop to separate translations
  push();
  //using corresponding array indexes to translate object instances
  translate(translatex[3], translatey[3]);
  //rotating on y axis on declared angle
  rotateY(angle);
  //create new object from the Stone class using hue array index as an argumen
  reality_stone = new Stone(hue[3]);
  //show method to present the stone 
  reality_stone.show();
  pop();

  //POWER STONE
  //push/pop to separate translations
  push();
  //using corresponding array indexes to translate object instances
  translate(translatex[4], translatey[4]);
  //rotating on y axis on declared angle
  rotateY(angle);
  //create new object from the Stone class using hue array index as an argumen
  power_stone = new Stone(hue[4]);
  //show method to present the stone
  power_stone.show();
  pop();


  //MIND STONE
  //push/pop to separate translations
  push();
  //using corresponding array indexes to translate object instances
  translate(translatex[5], translatey[5]);
  //rotating on y axis on declared angle
  rotateY(angle);
  //create new object from the Stone class using hue array index as an argument
  mind_stone = new Stone(hue[5]);
  //show method to present the stone
  mind_stone.show();
  pop();


  //iterating over hue array to call corresponding classes for display of the stone's power
  for (let i = 0; i < hue.length; i++) {
    //condition for user to press-hold down to see effect
    if (mouseIsPressed) {
      //calculating the end points of the gems 
      coorx = translatex[i] + 400;
      coory = translatey[i] + 400;
      //condition to check if mouse is within the stones
      if (mouseX > coorx - stone_width && mouseX < coorx + stone_width && mouseY > coory - stone_width && mouseY < coory + stone_width) {
        //reseting all pressed objects as darken
        hue[i] = "deactivate"
        //mouse pressed condition within the stone boundaries 
        if (mouseIsPressed) {
          //using hue array index to create corresponding display object

          //SOUL DISPLAY
          if (i == 0) {
            //create display object
            soul = new soulScreen();
            //method to show corresponding effect
            soul.display();

            //TIME DISPLAY
          } else if (i == 1) {
            //create display object
            time = new timeScreen()
            //rotate method to make the design to glitch and rotate
            time.rot();
            //method to show corresponding effect
            time.display();


            //SPACE DISPLAY
          } else if (i == 2) {
            //3 instances of space stones
            //create display object with arguments for center coordinate and radius
            space = new spaceScreen(150, 150, 100);
            //push space object into ss array
            space_obj.push(space);
            //method to show the object
            space.display();

            //create display object with arguments for center coordinate and radius
            space2 = new spaceScreen(400, 400, 300);
            space_obj.push(space2);
            //method to show the object
            space2.display();

            //create display object with arguments for center coordinate and radius
            space3 = new spaceScreen(-500, -300, 500);
            //push space object into ss array
            space_obj.push(space3);
            //method to show the object
            space3.display();



            //REALITY DISPLAY
          } else if (i == 3) {
            //create display object
            reality = new realityScreen();
            //method to show corresponding effect
            reality.display();


            //POWER DISPLAY
          } else if (i == 4) {
            //create display object
            power = new powerScreen();
            //method to show corresponding effect
            power.pulse();


            //MIND DISPLAY
          } else if (i == 5) {
            //create display object
            mind = new mindScreen();
            //method to show corresponding effect
            mind.display();
          }
        }
      }
    }
  }



  //Condition checking if hue array variables are set to deactivate
  if (hue[0] == "deactivate" && hue[1] == "deactivate" && hue[2] == "deactivate" && hue[3] == "deactivate" && hue[4] == "deactivate" && hue[5] == "deactivate") {
    //Then, stop all rotations
    angle = 0;
    angleDiff = 0;

    //Then, show the dust that people turn to as all the stones have been used
    //particle system
    for (let i = 0; i < 5; i++) {
      //Create object from Dust class 
      let d = new Dust();
      //push Dust object to dust array
      dust.push(d);
    }
    //iterate through all objects in dust array 
    for (let i = dust.length - 1; i >= 0; i--) {
      //generate and spray out particles
      dust[i].update();
      //display dust particles
      dust[i].show();

      //check if dust objects are done
      if (dust[i].end()) {
        //remove current iterating object from array
        dust.splice(i, 5);
      }
    }


  }



  //console.log(mouseX, mouseY);
}