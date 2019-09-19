//declaring and initializing arrays
let fire = [];
let water = [];
let air = [];
let cloud;
let earth = [];

//loading avatar drawing
function preload() {
  avatar = loadImage("avatar.png");
}

function setup() {
  createCanvas(500, 500);
  //create 1 instance of cloud object
  cloud1 = new Cloud();
}

function draw() {
  background(200);
  //show cloud
  cloud1.show()
  fill(0);
  //text directions for air element
  text("Press", 0, 15);
  text("for", 30, 30);
  text("Air", 45, 45);
  image(avatar, 200, 320);

  //FIRE
  //pushing Fire objects to fire array
  for (let i = 0; i < 5; i++) {
    let f = new Fire();
    fire.push(f);
  }
  //For all objects in fire array (counting down)
  for (let i = fire.length - 1; i >= 0; i--) {
    fire[i].update();
    fire[i].show();
    //when fire fades away, remove current iterating object from array
    if (fire[i].end()) {
      fire.splice(i, 5);
    }
  }

  //WATER
  //pushing Water objeects into water array
  for (let j = 0; j < 50; j++) {
    let w = new Water();
    water.push(w);
  }
  //For all objects in water array (counting down)
  for (let j = water.length - 1; j >= 0; j--) {
    water[j].update();
    water[j].show();
    //when water fades away, remove current iterating object from array
    if (water[j].end()) {
      water.splice(j, 1);
    }
  }

  //AIR
  //condition for mousepressed cloud; move Wind objects into array
  // AND display wind
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 70) {
    for (let k = 0; k < 10; k++) {
      if (mouseIsPressed) {
        let a = new Air();
        air.push(a);
        a.show();
      }
    }
  }

  //EARTH
  //Push 5 Earth objects into earth array; call show and update method (bouncing)
  for (let h = 0; h < 5; h++) {
    let e = new Earth();
    earth.push(e);

    earth[h].show();
    earth[h].update();


  }


}

//RESOURCES:
//https://p5js.org/examples/simulate-particle-system.html