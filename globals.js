// ============================================================
// GAME STATES
// ============================================================

const STATE_HOME = "home";
const STATE_RECORD = "record";

const STATE_START = "start";

const STATE_A = "A";
const STATE_B = "B";

const STATE_AA = "AA";
const STATE_AB = "AB";
const STATE_BA = "BA";
const STATE_BB = "BB";

const STATE_AAA = "AAA";
const STATE_AAB = "AAB";
const STATE_ABA = "ABA";
const STATE_ABB = "ABB";
const STATE_BAA = "BAA";
const STATE_BAB = "BAB";
const STATE_BBA = "BBA";
const STATE_BBB = "BBB";

const STATE_ANGER_OVER = "angerOver";

// ============================================================
// CURRENT GAME STATE
// ============================================================

let gameState = STATE_HOME;

// ============================================================
// HOME SCREEN
// ============================================================

let homeBg;

// ============================================================
// RECORD HISTORY
// ============================================================

let wins = 0;
let losses = 0;

let startTime = 0;
let clearTime = "00h:00m:00.000s";

// ============================================================
// ANGER SYSTEM
// ============================================================

let playerAnger = 0;
let npcAnger = 0;

const MAX_ANGER = 100;

// ============================================================
// BUTTON POSITIONS
// ============================================================

const LEFT_BTN_X = 240;
const RIGHT_BTN_X = 560;

const BTN_Y = 360;

const BTN_W = 240;
const BTN_H = 56;

// For Background images for each screen

let bgStart;
let bgA;
let bgB;
let bgAA;
let bgAB;
let bgBA;
let bgBB;

let bgAAA;
let bgAAB;
let bgABA;
let bgABB;
let bgBAA;
let bgBAB;
let bgBBA;
let bgBBB;



