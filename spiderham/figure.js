class SpiderhamFigure {

  constructor() {

  }


  show() {
    //Centering Coordinates
    ellipseMode(CENTER);
    rectMode(CENTER);

    //Right ear
    noStroke();
    fill(175, 1, 2);
    triangle(204, 156, 250, 127, 187, 101);
    fill(126, 1, 19);
    triangle(219, 133, 193, 118, 205, 154);

    //Left ear
    fill(175, 1, 2);
    triangle(391, 156, 350, 127, 414, 101);
    fill(126, 1, 19);
    triangle(392, 149, 376, 135, 406, 118);



    //Legs
    fill(26, 53, 151);
    rect(330, 510, 40, 70, 20, 10);
    rect(270, 510, 40, 70, 20, 10, );

    //Feet
    fill(175, 1, 2);
    rect(255, 551, 70, 30, 20, 10);
    rect(345, 551, 70, 30, 20, 10);


    //Body
    fill(26, 53, 151);
    ellipse(300, 435, 140, 190);
    stroke(0);
    fill(175, 1, 2);
    ellipse(300, 435, 110, 190);


    //Spider emblem
    fill(0, 0, 0);
    ellipse(301, 430, 30, 40);
    ellipse(301, 408, 20, 25);
    strokeWeight(2);
    line(312, 418, 316, 410);
    line(316, 410, 313, 400);
    line(288, 419, 283, 410);
    line(283, 410, 286, 400);
    line(314, 423, 321, 425);
    line(321, 425, 322, 437);
    line(286, 423, 279, 427);
    line(279, 427, 280, 437);
    line(315, 435, 319, 442);
    line(319, 442, 317, 449);
    line(287, 435, 281, 443);
    line(281, 443, 285, 448);


    //Head
    noStroke();
    fill(175, 1, 2);
    rect(298, 230, 200, 210, 50, 50, 40, 40);
    ellipse(298, 320, 210, 60);


    //Spider-Ham suit design lines
    stroke(2);
    line(298, 125, 298, 320);
    line(208, 146, 298, 290);
    line(390, 147, 298, 290);


    line(270, 290, 197, 275);
    line(330, 290, 397, 275);

    line(264, 313, 209, 336);
    line(334, 313, 390, 332);

    //Inner web lines
    line(225, 173, 298, 153);
    line(249, 214, 298, 199);
    line(268, 239, 298, 233);
    line(299, 233, 326, 246);
    line(299, 199, 352, 209);
    line(299, 153, 376, 168);
    line(328, 238, 357, 284);
    line(347, 211, 398, 255);
    line(267, 242, 239, 283);
    line(248, 217, 199, 257);
    line(226, 173, 199, 191);
    line(376, 168, 398, 184);
    line(356, 283, 350, 319);
    line(239, 285, 250, 318);
    line(399, 284, 384, 330);
    line(198, 292, 217, 334);

    //Left eye
    fill(0, 0, 0);
    arc(340, 190, -90, 140, 0, PI + QUARTER_PI, CHORD);
    fill(255, 255, 255);
    arc(340, 200, -70, 110, 0, PI + QUARTER_PI, CHORD);

    //Right eye
    fill(0, 0, 0);
    arc(250, 228, 85, -80, 0, -1 * (PI + QUARTER_PI), CHORD);
    fill(255, 255, 255);
    arc(250, 232, 70, -58, 0, -1 * (PI + QUARTER_PI), CHORD);



    //Nose
    stroke(2);
    fill(126, 1, 19);
    ellipse(300, 310, 70);

    //Suit design lines on bose
    line(300, 275, 300, 343);
    line(330, 294, 300, 314);
    line(268, 296, 300, 314);



    //Nostrils
    strokeWeight(2);
    fill(255, 255, 255);
    arc(315, 300, -25, 40, 0, PI + QUARTER_PI, CHORD);
    arc(285, 310, 25, -20, 0, -1 * (PI + QUARTER_PI), CHORD);


    //Comic textbox effect
    noStroke(0);
    fill(197, 198, 207);
    rect(584, 269, 250, 70, 10);
    stroke(0);
    line(708, 265, 685, 302);
    line(701, 233, 647, 302);
    line(639, 264, 606, 302);
    line(600, 264, 567, 302);
    line(551, 266, 518, 304);
    line(493, 265, 460, 302);

  }
}