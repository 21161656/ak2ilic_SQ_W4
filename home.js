function drawHomeScreen() {
  image(homeBg, 0, 0, width, height);

  fill(0, 120);
  rect(0, 0, width, height);

  fill(255);
  textAlign(RIGHT, CENTER);

  textSize(42);
  text("Getting Over It", width - 60, 150);

  textSize(18);
  text("with Ana Katarina Ilic", width - 60, 195);

  drawChoiceButton(220, 250, 220, 55, "New Game");
  drawChoiceButton(220, 320, 220, 55, "Record History");
}

function drawRecordScreen() {
  background(30);

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(32);
  text("Record History", width / 2, 90);

  textSize(18);
  text("Wins: " + wins, width / 2, 160);
  text("Losses: " + losses, width / 2, 200);

  text("Total Clear Time:", width / 2, 260);
  text(clearTime, width / 2, 295);

  drawChoiceButton(220, 370, 220, 55, "Back");
}







