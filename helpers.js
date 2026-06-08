
function isMouseOver(cx, cy, w, h) {
  return mouseX > cx - w / 2 &&
         mouseX < cx + w / 2 &&
         mouseY > cy - h / 2 &&
         mouseY < cy + h / 2;
}

function drawChoiceButton(cx, cy, w, h, label) {
  stroke(0);
  fill(245);
  rectMode(CENTER);
  rect(cx, cy, w, h, 8);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text(label, cx, cy);

  rectMode(CORNER);
}

function drawAngerBars() {
  fill(0);
  textSize(14);
  textAlign(LEFT, BASELINE);

  text("Player anger", 30, 30);
  text("NPC anger", 30, 60);

  fill(80);
  rect(150, 18, 200, 14);
  rect(150, 48, 200, 14);

  fill(220, 60, 60);
  rect(150, 18, playerAnger * 2, 14);

  fill(255, 150, 0);
  rect(150, 48, npcAnger * 2, 14);
}

function checkAngerLimit() {
  if (playerAnger >= MAX_ANGER || npcAnger >= MAX_ANGER) {
    gameState = STATE_ANGER_OVER;
  }
}

function drawBasicScreen(bg, title, scenarioText, leftChoice, rightChoice) {
  image(bg, 0, 0, width, height);

  fill(0, 150);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(26);
  text(title, width / 2, 100);

  textSize(16);
  text(scenarioText, width / 2 - 250, 150, 500, 120);

  drawChoiceButton(LEFT_BTN_X, BTN_Y, BTN_W, BTN_H, leftChoice);
  drawChoiceButton(RIGHT_BTN_X, BTN_Y, BTN_W, BTN_H, rightChoice);
}

function drawEndingScreen(bg, title, endingText) {
  image(bg, 0, 0, width, height);

  fill(0, 150);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(26);
  text(title, width / 2, 130);

  textSize(16);
  text(endingText, width / 2 - 250, 190, 500, 120);

  textSize(14);
  text("Click here to return home.", width / 2, 340);
}

function drawAngerOverScreen() {
  background(30);

  fill(255, 80, 80);
  textAlign(CENTER, CENTER);

  textSize(28);
  text("ANGER LIMIT REACHED", width / 2, 190);

  textSize(16);
  text("Click here to restart.", width / 2, 270);
}

function formatTime(timeMillis) {
  let totalSeconds = timeMillis / 1000;

  let hours = floor(totalSeconds / 3600);
  let minutes = floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return nf(hours, 2) + "h:" +
         nf(minutes, 2) + "m:" +
         nf(seconds, 2, 3) + "s";
}

function resetGame() {
  playerAnger = 0;
  npcAnger = 0;
}

function saveGameResult() {
  clearTime = formatTime(millis() - startTime);

  if (gameState === STATE_BBB || gameState === STATE_AAA) {
    wins++;
  } else {
    losses++;
  }
}









