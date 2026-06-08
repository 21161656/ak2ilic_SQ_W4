// ============================================================
// GBDA 302 - Week 4 Decision Tree Game
// Inspired by Getting Over It
// ============================================================

function preload() {
  homeBg = loadImage("assets/images/getting_over_it_background.png");

  bgStart = loadImage("assets/images/bad_ending.png");

  bgA = loadImage("assets/images/bg-a.png");
  bgB = loadImage("assets/images/bg-b.png");

  bgAA = loadImage("assets/images/bg-aa.png");
  bgAB = loadImage("assets/images/bg-ab.png");
  bgBA = loadImage("assets/images/bg-ba.png");
  bgBB = loadImage("assets/images/bg-bb.png");

  bgAAA = loadImage("assets/images/ending_aaa.png");
  bgAAB = loadImage("assets/images/bad_ending.png");
  bgABA = loadImage("assets/images/bad_ending.png");
  bgABB = loadImage("assets/images/bad_ending.png");
  bgBAA = loadImage("assets/images/bad_ending.png");
  bgBAB = loadImage("assets/images/bad_ending.png");
  bgBBA = loadImage("assets/images/bad_ending.png");
  bgBBB = loadImage("assets/images/ending_bbb.png");
}

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

function draw() {
  background(220);

  if (gameState === STATE_HOME) {
    drawHomeScreen();
  } else if (gameState === STATE_RECORD) {
    drawRecordScreen();
  } else {
    drawAngerBars();

    if (gameState === STATE_START) {
      drawStartScreen();
    } else if (gameState === STATE_A) {
      drawScreenA();
    } else if (gameState === STATE_B) {
      drawScreenB();
    } else if (gameState === STATE_AA) {
      drawScreenAA();
    } else if (gameState === STATE_AB) {
      drawScreenAB();
    } else if (gameState === STATE_BA) {
      drawScreenBA();
    } else if (gameState === STATE_BB) {
      drawScreenBB();
    } else if (gameState === STATE_AAA) {
      drawEndingAAA();
    } else if (gameState === STATE_AAB) {
      drawEndingAAB();
    } else if (gameState === STATE_ABA) {
      drawEndingABA();
    } else if (gameState === STATE_ABB) {
      drawEndingABB();
    } else if (gameState === STATE_BAA) {
      drawEndingBAA();
    } else if (gameState === STATE_BAB) {
      drawEndingBAB();
    } else if (gameState === STATE_BBA) {
      drawEndingBBA();
    } else if (gameState === STATE_BBB) {
      drawEndingBBB();
    } else if (gameState === STATE_ANGER_OVER) {
      drawAngerOverScreen();
    }

    checkAngerLimit();
  }
}

function mousePressed() {
  if (gameState === STATE_HOME) {
    if (isMouseOver(220, 250, 220, 55)) {
      startTime = millis();
      gameState = STATE_START;
    } else if (isMouseOver(220, 320, 220, 55)) {
      gameState = STATE_RECORD;
    }
  }

  else if (gameState === STATE_RECORD) {
    if (isMouseOver(220, 370, 220, 55)) {
      gameState = STATE_HOME;
    }
  }

  else if (gameState === STATE_START) {
    if (isMouseOver(LEFT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      playerAnger += 10;
      npcAnger += 5;
      gameState = STATE_A;
    } else if (isMouseOver(RIGHT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      playerAnger += 5;
      npcAnger += 10;
      gameState = STATE_B;
    }
  }

  else if (gameState === STATE_A) {
    if (isMouseOver(LEFT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      playerAnger += 10;
      gameState = STATE_AA;
    } else if (isMouseOver(RIGHT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      npcAnger += 10;
      gameState = STATE_AB;
    }
  }

  else if (gameState === STATE_B) {
    if (isMouseOver(LEFT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      playerAnger += 15;
      gameState = STATE_BA;
    } else if (isMouseOver(RIGHT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      npcAnger += 15;
      gameState = STATE_BB;
    }
  }

  else if (gameState === STATE_AA) {
    if (isMouseOver(LEFT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_AAA;
    } else if (isMouseOver(RIGHT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_AAB;
    }
  }

  else if (gameState === STATE_AB) {
    if (isMouseOver(LEFT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_ABA;
    } else if (isMouseOver(RIGHT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_ABB;
    }
  }

  else if (gameState === STATE_BA) {
    if (isMouseOver(LEFT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_BAA;
    } else if (isMouseOver(RIGHT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_BAB;
    }
  }

  else if (gameState === STATE_BB) {
    if (isMouseOver(LEFT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_BBA;
    } else if (isMouseOver(RIGHT_BTN_X, BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_BBB;
    }
  }

  else {
  saveGameResult();
  resetGame();
  gameState = STATE_HOME;
}
}
