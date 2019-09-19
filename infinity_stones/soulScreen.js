//Soul display class
class soulScreen {
  constructor() {
    //no constructor variables needed, since I am using the global variable bright to change the background color 
  }

  //method to display the fading/jarring magenta screen, since the soul stone is the most deeply effective  
  display() {
    //At even intervals...
    if (second() % 2 == 0) {

      //slowly decrease the opacity until its completely white, which then stays white
      bright -= 2;
      //dynamic purple hues 
      background(148, 0, random(211, 255), bright);
    }

  }

}