var sketchProc = function(processingInstance) {
  with (processingInstance) {
    size(600, 600); 
    frameRate(60);

    //colors
    var darkOutline = color(50, 50, 50);
    var lightOutline = color(100, 100, 100);

    var MulanTitle = function(x, y, s) {

        pushMatrix();
            translate(x, y);
            scale(s);

            noStroke();
            fill(150);

            //M
            beginShape();
                vertex(7, 33);
                bezierVertex(10, 33, 16, 35, 19, 37);
                bezierVertex(21, 44, 14, 103, 9, 142);
                bezierVertex(7, 155, 7, 162, 7, 168);
                bezierVertex(11, 170, 20, 165, 29, 162);
                bezierVertex(32, 160, 30, 158, 24, 159);
                bezierVertex(20, 144, 23, 118, 26, 90);
                bezierVertex(28, 77, 29, 65, 31, 57);
                bezierVertex(37, 76, 45, 101, 51, 121);
                bezierVertex(55, 134, 57, 143, 59, 146);
                bezierVertex(62, 146, 64, 143, 65, 141);
                bezierVertex(67, 140, 69, 139, 70, 135);
                bezierVertex(75, 117, 85, 93, 98, 63);
                bezierVertex(100, 100, 104, 128, 110, 145);
                bezierVertex(119, 161, 127, 172, 134, 176);
                bezierVertex(140, 177, 145, 176, 156, 181);
                bezierVertex(147, 167, 132, 145, 120, 121);
                bezierVertex(114, 93, 111, 59, 111, 41);
                bezierVertex(113, 26, 119, 19, 128, 15);
                bezierVertex(130, 10, 123, 7, 114, 6);
                bezierVertex(106, 9, 100, 11, 97, 14);
                bezierVertex(91, 24, 84, 45, 80, 64);
                bezierVertex(76, 78, 72, 93, 68, 109);
                bezierVertex(60, 87, 55, 64, 49, 43);
                bezierVertex(50, 40, 45, 30, 37, 21);
                bezierVertex(23, 17, 12, 20, 6, 31);
            endShape(CLOSE);
            //U
            beginShape();
                vertex(119, 63);
                bezierVertex(122, 63, 127, 65, 129, 73);
                bezierVertex(131, 87, 132, 106, 135, 124);
                bezierVertex(140, 137, 148, 146, 158, 148);
                bezierVertex(168, 148, 180, 141, 188, 134);
                bezierVertex(192, 141, 199, 147, 206, 150);
                bezierVertex(201, 138, 198, 123, 199, 100);
                bezierVertex(201, 80, 201, 67, 197, 61);
                bezierVertex(191, 58, 186, 60, 183, 62);
                bezierVertex(186, 70, 186, 86, 185, 105);
                bezierVertex(181, 124, 171, 137, 157, 138);
                bezierVertex(150, 123, 147, 98, 147, 79);
                bezierVertex(147, 68, 143, 62, 138, 59);
                bezierVertex(131, 58, 129, 60, 121, 61);
            endShape(CLOSE);
            //L
            beginShape();
                vertex(208, 33);
                bezierVertex(214, 49, 218, 69, 218, 96);
                bezierVertex(217, 122, 215, 144, 209, 160);
                bezierVertex(219, 154, 236, 147, 252, 149);
                bezierVertex(255, 144, 258, 140, 261, 134);
                bezierVertex(250, 133, 237, 135, 231, 137);
                bezierVertex(230, 114, 233, 91, 232, 66);
                bezierVertex(233, 52, 232, 39, 227, 33);
                bezierVertex(222, 31, 217, 29, 207, 32);
            endShape(CLOSE);
            //A slash
            beginShape();
                vertex(256, 117);
                bezierVertex(266, 109, 279, 104, 292, 102);
                bezierVertex(306, 101, 312, 98, 320, 92);
                bezierVertex(314, 104, 302, 109, 288, 115);
                bezierVertex(276, 117, 262, 120, 257, 120);
            endShape(CLOSE);
            //A
            beginShape();
                vertex(269, 64);
                bezierVertex(272, 66, 276, 67, 280, 68);
                bezierVertex(279, 76, 275, 90, 271, 102);
                bezierVertex(266, 120, 257, 136, 246, 152);
                bezierVertex(234, 167, 222, 178, 209, 187);
                bezierVertex(232, 180, 252, 165, 266, 145);
                bezierVertex(274, 126, 279, 107, 286, 81);
                bezierVertex(291, 97, 296, 119, 304, 142);
                bezierVertex(311, 158, 322, 171, 330, 172);
                bezierVertex(335, 169, 338, 166, 341, 162);
                bezierVertex(335, 159, 326, 150, 317, 136);
                bezierVertex(310, 113, 306, 90, 304, 76);
                bezierVertex(304, 70, 299, 62, 292, 58);
                bezierVertex(284, 56, 276, 57, 269, 62);
            endShape(CLOSE);
            //N
            beginShape();
                vertex(316, 72);
                bezierVertex(321, 72, 328, 74, 330, 84);
                bezierVertex(332, 103, 334, 122, 334, 146);
                bezierVertex(332, 155, 329, 159, 324, 164);
                bezierVertex(329, 167, 341, 162, 352, 152);
                bezierVertex(348, 153, 343, 151, 340, 142);
                bezierVertex(340, 121, 341, 104, 340, 88);
                bezierVertex(354, 107, 365, 127, 373, 140);
                bezierVertex(379, 148, 383, 157, 386, 161);
                bezierVertex(392, 159, 393, 147, 393, 126);
                bezierVertex(394, 96, 394, 73, 393, 54);
                bezierVertex(389, 46, 382, 42, 377, 42);
                bezierVertex(370, 42, 365, 44, 359, 45);
                bezierVertex(368, 47, 375, 54, 377, 65);
                bezierVertex(380, 84, 382, 108, 382, 129);
                bezierVertex(373, 111, 360, 90, 350, 74);
                bezierVertex(340, 63, 326, 61, 314, 69);
            endShape(CLOSE);

        popMatrix();
    };

    //HAIR MASKING
    background(204, 200, 204);

    noFill();
    randomSeed(100);
    for(var y = -30; y < height; y+=2) {
        strokeWeight(random(0.8, 2.4));
        stroke(random(170, 190), random(100, 200));
        line(100, y + random(40, 85), 500, y + random(1, 5));
    }
    for(var x = 150; x < 410; x+=2) {
        for(var y = 0; y < height; y+=2) {
            strokeWeight(random(0.8, 2));
            stroke(random(80, 150), random(20, 140));
            point(x, y);
        }
    }

    var hair = get(100, 0, 400, height);

    background(0, 0);

    //hair (main)
    stroke(0);
    strokeWeight(1);
    fill(255);
    beginShape();
        vertex(407, 355);
        bezierVertex(398, 325, 393, 290, 391, 254);
        bezierVertex(393, 212, 394, 177, 396, 147);
        bezierVertex(390, 108, 379, 84, 360, 61);
        bezierVertex(334, 40, 304, 24, 275, 16);
        bezierVertex(261, 14, 252, 15, 234, 26);
        bezierVertex(215, 44, 195, 63, 182, 76);
        bezierVertex(168, 92, 164, 106, 162, 134);
        bezierVertex(163, 170, 164, 198, 164, 227);
        bezierVertex(166, 264, 167, 286, 167, 315);
        bezierVertex(166, 343, 166, 371, 166, 414);
        bezierVertex(169, 446, 173, 482, 179, 514);
        bezierVertex(187, 546, 199, 570, 212, 602);
        bezierVertex(224, 602, 237, 602, 249, 602);
        bezierVertex(236, 558, 232, 520, 234, 473);
        bezierVertex(238, 440, 245, 400, 252, 378);
        bezierVertex(258, 362, 262, 352, 270, 335);
        bezierVertex(265, 310, 254, 286, 247, 270);
        bezierVertex(234, 262, 214, 248, 201, 230);
        bezierVertex(192, 214, 182, 180, 178, 160);
        bezierVertex(177, 145, 185, 115, 197, 94);
        bezierVertex(206, 81, 219, 62, 234, 48);
        bezierVertex(247, 51, 260, 58, 278, 71);
        bezierVertex(293, 84, 308, 98, 320, 118);
        bezierVertex(330, 154, 334, 176, 338, 198);
        bezierVertex(344, 227, 353, 257, 360, 279);
        bezierVertex(350, 244, 346, 222, 340, 185);
        bezierVertex(336, 167, 333, 148, 327, 118);
        bezierVertex(338, 136, 347, 156, 354, 180);
        bezierVertex(360, 209, 360, 215, 356, 222);
        bezierVertex(350, 234, 346, 240, 337, 250);
        bezierVertex(338, 264, 340, 269, 341, 274);
        bezierVertex(373, 326, 386, 340, 407, 358);
    endShape(CLOSE);

    //hair strip down center
    beginShape();
        vertex(235, 48);
        bezierVertex(251, 79, 254, 132, 248, 174);
        bezierVertex(240, 209, 232, 242, 228, 277);
        bezierVertex(225, 324, 224, 391, 234, 454);
        bezierVertex(224, 390, 224, 324, 230, 272);
        bezierVertex(241, 226, 254, 181, 261, 146);
        bezierVertex(264, 110, 255, 68, 236, 48);
    endShape(CLOSE);

    var hairShape = get(100, 0, 400, height);

    background(255);

    hair.mask(hairShape);

    //LIPS MASKING
    randomSeed(1);
    noFill();

    for(var x = 247; x < 307; x++) {
        for(var y = 217; y < 257; y++) {
            strokeWeight(random(0.8, 1.4));
            stroke(random(80, 150), random(100, 200));
            point(x, y);
        }
    }

    var lips = get(247, 217, 60, 40);

    background(0, 0);

    //lips (top)
    stroke(48, 47, 48, 150);
    strokeWeight(1);
    fill(255, 255, 255);
    beginShape();
        vertex(249, 243);
        bezierVertex(293, 230, 301, 231, 308, 233);
        bezierVertex(303, 231, 299, 229, 293, 224);
        bezierVertex(290, 222, 285, 220, 280, 221);
        bezierVertex(275, 226, 274, 226, 271, 224);
        bezierVertex(267, 223, 263, 225, 259, 230);
        bezierVertex(256, 233, 252, 237, 249, 243);
    endShape(CLOSE);

    //lips (bottom)
    beginShape();
        vertex(250, 242);
        bezierVertex(255, 237, 260, 235, 264, 234);
        bezierVertex(269, 234, 274, 235, 277, 236);
        bezierVertex(281, 234, 285, 230, 291, 229);
        bezierVertex(297, 230, 302, 231, 308, 233);
        bezierVertex(304, 234, 302, 240, 299, 243);
        bezierVertex(293, 248, 289, 251, 282, 254);
        bezierVertex(276, 255, 270, 254, 265, 252);
        bezierVertex(260, 248, 255, 245, 250, 241);
    endShape(CLOSE);

    var lipsMask = get(247, 217, 60, 40);

    lips.mask(lipsMask);

    //Non masking
    background(242, 242, 242);

    //neck
    stroke(darkOutline);
    strokeWeight(1);
    fill(255, 255, 255);
    beginShape();
        vertex(245, 265);
        bezierVertex(250, 278, 256, 291, 261, 306);
        bezierVertex(264, 315, 268, 322, 270, 333);
        bezierVertex(264, 349, 258, 366, 252, 378);
        bezierVertex(257, 424, 262, 437, 267, 446);
        bezierVertex(321, 371, 346, 338, 360, 317);
        bezierVertex(352, 306, 346, 290, 342, 280);
        bezierVertex(340, 270, 338, 259, 336, 244);
    endShape(CLOSE);

    //bottom of neck (right side)
    bezier(270, 332, 271, 342, 274, 349, 273, 356);

    //face
    beginShape();
        vertex(235, 47);
        bezierVertex(218, 64, 203, 85, 193, 101);
        bezierVertex(184, 117, 179, 134, 177, 146);
        bezierVertex(178, 165, 182, 185, 187, 203);
        bezierVertex(196, 223, 205, 236, 216, 249);
        bezierVertex(228, 259, 242, 268, 260, 276);
        bezierVertex(272, 280, 283, 283, 292, 280);
        bezierVertex(316, 272, 326, 262, 338, 250);
        bezierVertex(350, 232, 362, 220, 358, 198);
        bezierVertex(354, 178, 348, 160, 339, 139);
        bezierVertex(332, 126, 325, 114, 313, 101);
        bezierVertex(305, 92, 294, 82, 281, 71);
        bezierVertex(260, 58, 237, 47, 235, 47);
    endShape(CLOSE);

    //eyebrow (left side)
    noStroke();
    fill(94, 94, 94);
    beginShape();
        vertex(325, 102);
        bezierVertex(318, 102, 308, 100, 299, 99);
        bezierVertex(291, 98, 282, 96, 278, 92);
        bezierVertex(281, 99, 288, 107, 296, 111);
        bezierVertex(304, 113, 314, 113, 328, 113);
    endShape(CLOSE);

    //eyebrow (right side)
    beginShape();
        vertex(240, 90);
        bezierVertex(228, 102, 216, 108, 206, 111);
        bezierVertex(197, 116, 190, 128, 184, 137);
        bezierVertex(191, 132, 207, 124, 220, 119);
        bezierVertex(231, 113, 236, 104, 240, 90);
    endShape(CLOSE);

    //eyes (top shading)
    stroke(lightOutline, 70);
    strokeWeight(3);
    noFill();
    bezier(203, 143, 217, 142, 228, 146, 236, 152);
    bezier(294, 140, 300, 130, 309, 127, 318, 124);

    //eye ball (right side)
    noStroke();
    fill(82, 82, 82);
    beginShape();
        vertex(230, 150);
        bezierVertex(222, 147, 214, 144, 207, 145);
        bezierVertex(206, 151, 208, 158, 211, 160);
        bezierVertex(213, 162, 218, 161, 224, 161);
        bezierVertex(228, 158, 228, 156, 230, 151);
    endShape(CLOSE);

    //eye top (right side)
    stroke(darkOutline);
    strokeWeight(2);
    noFill();
    beginShape();
        vertex(240, 158);
        bezierVertex(228, 148, 214, 144, 199, 146);
        bezierVertex(194, 147, 189, 149, 186, 148);
    endShape();

    //eye bottom (right side)
    stroke(darkOutline);
    strokeWeight(1);
    noFill();
    beginShape();
        vertex(240, 159);
        bezierVertex(227, 162, 216, 162, 209, 160);
        bezierVertex(202, 157, 192, 152, 186, 149);
    endShape();

    //eye ball (left side)
    noStroke();
    fill(82, 82, 82);
    beginShape();
        vertex(317, 127);
        bezierVertex(310, 129, 303, 133, 297, 139);
        bezierVertex(300, 145, 301, 146, 308, 148);
        bezierVertex(320, 145, 320, 134, 316, 127);
    endShape(CLOSE);

    //eye top (left side)
    stroke(darkOutline);
    strokeWeight(2);
    noFill();
    beginShape();
        vertex(290, 152);
        bezierVertex(294, 142, 301, 134, 308, 130);
        bezierVertex(315, 127, 325, 125, 334, 126);
    endShape();

    //eye bottom (left side)
    stroke(darkOutline);
    strokeWeight(1);
    noFill();
    beginShape();
        vertex(291, 152);
        bezierVertex(297, 152, 310, 148, 319, 143);
        bezierVertex(325, 138, 330, 132, 334, 126);
    endShape();

    //nose (left side)
    stroke(lightOutline);
    strokeWeight(1);
    noFill();
    bezier(287, 204, 290, 201, 290, 197, 288, 193);
    bezier(274, 206, 275, 204, 278, 202, 282, 204);

    //nose (right side)
    bezier(254, 208, 249, 205, 248, 200, 250, 195);
    bezier(263, 207, 260, 206, 259, 204, 255, 208);

    //hair (main - masked)
    image(hair, 100, 0);

    //hair (main - outline)
    stroke(darkOutline);
    strokeWeight(1);
    noFill();
    beginShape();
        vertex(407, 355);
        bezierVertex(398, 325, 393, 290, 391, 254);
        bezierVertex(393, 212, 394, 177, 396, 147);
        bezierVertex(390, 108, 379, 84, 360, 61);
        bezierVertex(334, 40, 304, 24, 275, 16);
        bezierVertex(261, 14, 252, 15, 234, 26);
        bezierVertex(215, 44, 195, 63, 182, 76);
        bezierVertex(168, 92, 164, 106, 162, 134);
        bezierVertex(163, 170, 164, 198, 164, 227);
        bezierVertex(166, 264, 167, 286, 167, 315);
        bezierVertex(166, 343, 166, 371, 166, 414);
        bezierVertex(169, 446, 173, 482, 179, 514);
        bezierVertex(187, 546, 199, 570, 212, 602);
        bezierVertex(224, 602, 237, 602, 249, 602);
        bezierVertex(236, 558, 232, 520, 234, 473);
        bezierVertex(238, 440, 245, 400, 252, 378);
        bezierVertex(258, 362, 262, 352, 270, 335);
        bezierVertex(265, 310, 254, 286, 247, 270);
        bezierVertex(234, 262, 214, 248, 201, 230);
        bezierVertex(192, 214, 182, 180, 178, 160);
        bezierVertex(177, 145, 185, 115, 197, 94);
        bezierVertex(206, 81, 219, 62, 234, 48);
        bezierVertex(247, 51, 260, 58, 278, 71);
        bezierVertex(293, 84, 308, 98, 320, 118);
        bezierVertex(330, 154, 334, 176, 338, 198);
        bezierVertex(344, 227, 353, 257, 360, 279);
        bezierVertex(350, 244, 346, 222, 340, 185);
        bezierVertex(336, 167, 333, 148, 327, 118);
        bezierVertex(338, 136, 347, 156, 354, 180);
        bezierVertex(360, 209, 360, 215, 356, 222);
        bezierVertex(350, 234, 346, 240, 337, 250);
        bezierVertex(338, 264, 340, 269, 341, 274);
        bezierVertex(373, 326, 386, 340, 407, 358);
    endShape(CLOSE);

    //ear
    stroke(darkOutline);
    strokeWeight(1);
    fill(255, 255, 255);
    beginShape();
        vertex(379, 116);
        bezierVertex(386, 115, 394, 118, 398, 123);
        bezierVertex(402, 131, 401, 142, 399, 150);
        bezierVertex(397, 158, 392, 166, 387, 172);
    endShape(CLOSE);
    stroke(71, 70, 71);
    noFill();
    bezier(383, 125, 387, 124, 392, 126, 394, 129);
    bezier(390, 127, 393, 135, 393, 141, 391, 150);

    //hair strip inner (right side)
    stroke(darkOutline);
    strokeWeight(1);
    noFill();
    beginShape();
        vertex(359, 210);
        bezierVertex(364, 237, 370, 259, 374, 276);
        bezierVertex(378, 292, 382, 311, 392, 335);
    endShape();

    //hair strip outer (right side)
    beginShape();
        vertex(373, 94);
        bezierVertex(380, 114, 385, 145, 387, 178);
        bezierVertex(389, 214, 390, 244, 392, 279);
        bezierVertex(395, 310, 401, 335, 406, 353);
    endShape();

    //collar
    stroke(darkOutline);
    strokeWeight(1);
    fill(255, 255, 255);
    beginShape();
        vertex(342, 279);
        bezierVertex(345, 288, 350, 300, 354, 308);
        bezierVertex(343, 322, 331, 328, 319, 336);
        bezierVertex(306, 349, 298, 366, 290, 388);
        bezierVertex(283, 408, 276, 425, 271, 440);
        bezierVertex(270, 444, 270, 448, 272, 461);
        bezierVertex(290, 424, 308, 398, 328, 372);
        bezierVertex(342, 354, 352, 339, 364, 327);
        bezierVertex(367, 310, 368, 300, 370, 290);
        bezierVertex(370, 284, 368, 282, 364, 280);
        bezierVertex(360, 278, 351, 278, 342, 278);
    endShape(CLOSE);

    //collar (shaded area)
    stroke(darkOutline);
    strokeWeight(1);
    //fill(120, 119, 120);
    fill(255);
    beginShape();
        vertex(354, 309);
        bezierVertex(361, 302, 368, 295, 370, 288);
        bezierVertex(367, 278, 352, 275, 342, 278);
        bezierVertex(343, 286, 348, 300, 354, 309);
    endShape(CLOSE);

    //body outline
    stroke(darkOutline);
    strokeWeight(1);
    noFill();
    beginShape();
        vertex(384, 336);
        bezierVertex(397, 354, 426, 371, 449, 386);
        bezierVertex(451, 397, 451, 414, 450, 424);
    endShape();

    //under collar (right side)
    stroke(darkOutline);
    strokeWeight(1);
    fill(255, 255, 255);
    beginShape();
        vertex(252, 378);
        bezierVertex(259, 402, 268, 433, 272, 461);
        bezierVertex(258, 492, 244, 524, 237, 544);
        bezierVertex(232, 516, 232, 476, 237, 450);
        bezierVertex(240, 424, 245, 404, 252, 378);
    endShape(CLOSE);

    //collar lines (right side)
    stroke(darkOutline);
    strokeWeight(1);
    bezier(282, 409, 277, 396, 266, 386, 253, 380);
    bezier(281, 406, 275, 390, 266, 376, 257, 369);

    //under collar (left side)
    stroke(lightOutline);
    strokeWeight(1);
    noFill();
    beginShape();
        vertex(384, 338);
        bezierVertex(375, 366, 365, 391, 352, 417);
        bezierVertex(339, 442, 325, 467, 299, 512);
    endShape();

    //hair strip down middle of face
    stroke(darkOutline);
    strokeWeight(1);
    fill(204, 202, 204);
    noFill();
    beginShape();
        vertex(235, 48);
        bezierVertex(251, 79, 254, 132, 248, 174);
        bezierVertex(240, 209, 232, 242, 228, 277);
        bezierVertex(225, 324, 224, 391, 234, 454);
        bezierVertex(224, 390, 224, 324, 230, 272);
        bezierVertex(241, 226, 254, 181, 261, 146);
        bezierVertex(264, 110, 255, 68, 236, 48);
    endShape(CLOSE);

    //hair strip (right side)
    stroke(darkOutline);
    strokeWeight(1);
    noFill();
    beginShape();
        vertex(189, 202);
        bezierVertex(190, 232, 186, 261, 183, 290);
        bezierVertex(178, 327, 176, 358, 176, 381);
        bezierVertex(178, 398, 185, 422, 190, 432);
    endShape();

    //hair strip (end over color)
    stroke(0);
    strokeWeight(1);
    noFill();
    bezier(360, 279, 366, 295, 374, 312, 386, 332);

    //lips (masked image)
    image(lips, 247, 217);

    //lips (top)
    stroke(darkOutline, 100);
    strokeWeight(1.8);
    fill(255, 255, 255);
    noFill();
    beginShape();
        vertex(308, 233);
        bezierVertex(290, 222, 285, 220, 280, 221);
        bezierVertex(275, 226, 274, 226, 271, 224);
        bezierVertex(267, 223, 263, 225, 259, 230);
        bezierVertex(256, 233, 252, 237, 249, 243);
    endShape();

    //lips (bottom)
    fill(255, 255, 255);
    noFill();
    beginShape();
        vertex(250, 242);
        bezierVertex(255, 237, 260, 235, 264, 234);
        bezierVertex(269, 234, 274, 235, 277, 236);
        bezierVertex(281, 234, 285, 230, 290, 229);
        bezierVertex(297, 229, 302, 231, 308, 233);
        bezierVertex(304, 234, 302, 240, 299, 243);
        bezierVertex(293, 249, 289, 251, 282, 254);
        bezierVertex(276, 255, 270, 254, 265, 252);
        bezierVertex(260, 248, 255, 245, 250, 241);
    endShape(CLOSE);

    //lines on the collar (left side)
    stroke(lightOutline);
    strokeWeight(1);
    noFill();
    beginShape();
        vertex(243, 552);
        vertex(293, 517);
        vertex(242, 541);
        vertex(306, 497);
        vertex(243, 531);
        vertex(312, 487);
    endShape();
    beginShape();
        vertex(245, 520);
        vertex(314, 474);
        vertex(250, 510);
        vertex(326, 459);
    endShape();
    beginShape();
        vertex(254, 499);
        vertex(329, 449);
        vertex(260, 487);
        vertex(332, 440);
    endShape();
    beginShape();
        vertex(263, 478);
        vertex(340, 427);
        vertex(271, 464);
        vertex(347, 418);
    endShape();
    beginShape();
        vertex(278, 452);
        vertex(350, 412);
        vertex(286, 442);
        vertex(350, 405);
    endShape();
    beginShape();
        vertex(293, 432);
        vertex(353, 399);
        vertex(299, 424);
        vertex(361, 388);
    endShape();
    beginShape();
        vertex(320, 407);
        vertex(364, 378);
        vertex(310, 407);
        vertex(373, 365);
    endShape();
    beginShape();
        vertex(317, 396);
        vertex(359, 365);
        vertex(325, 385);
        vertex(368, 359);
    endShape();
    beginShape();
        vertex(332, 374);
        vertex(377, 347);
        vertex(339, 364);
        vertex(380, 339);
    endShape();
    beginShape();
        vertex(349, 355);
        vertex(377, 335);
        vertex(355, 347);
        vertex(373, 331);
    endShape();

    //lines on the collar (right side)
    stroke(lightOutline);
    strokeWeight(1);
    noFill();
    beginShape();
        vertex(238, 516);
        vertex(264, 464);
        vertex(237, 505);
        vertex(266, 456);
    endShape();
    beginShape();
        vertex(236, 508);
        vertex(266, 456);
        vertex(238, 488);
        vertex(267, 447);
    endShape();
    beginShape();
        vertex(238, 480);
        vertex(266, 443);
        vertex(239, 470);
        vertex(266, 439);
    endShape();
    beginShape();
        vertex(238, 464);
        vertex(264, 433);
        vertex(239, 457);
        vertex(262, 430);
    endShape();
    beginShape();
        vertex(242, 446);
        vertex(261, 422);
        vertex(244, 437);
        vertex(259, 415);
    endShape();
    beginShape();
        vertex(245, 425);
        vertex(256, 412);
        vertex(248, 415);
        vertex(257, 403);
    endShape();
    beginShape();
        vertex(248, 406);
        vertex(255, 396);
        vertex(253, 393);
        vertex(254, 390);
    endShape();

    MulanTitle(295, 520, 0.38);
    
  }
}

var canvas = document.getElementById("canvas"); 
var processingInstance = new Processing(canvas, sketchProc);