# Week 4: Getting Over It

## Project Title: Getting Over IT

## Setup and Interaction Instructions:

Open the Github pages ink from your browser to play the game.

The player progresses through a branching of decisions inspired by the scenarios and text spoken from Getting Over It by Bennet.
Each scenario presents two choices:

Take it out or Hold it in 

controls:
mouse pressed - select a choice button
mouse pressed - Return to home screen after reaching the end good/bad
mouse-pressed - To check final cumulative results

- **Game states** — the game moves through `STATE_START`, `STATE_PLAY`, and `STATE_OVER`; each state controls what gets drawn and what responds to clicks; stored as constants to prevent typos
- **Score tracking** — `playerScore` and `npcScore` persist across rounds; only choices and results are reset between rounds using `nextRound()`
- **Early win detection** — `playerChoose()` checks after each round whether someone has reached 2 wins; the game ends immediately rather than waiting for all 3 rounds
- **`nextRound()` vs `resetGame()`** — `nextRound()` clears only the current choices while keeping scores; `resetGame()` resets everything for a brand new game
- **Dynamic button labels** — the Next Round button changes its label to "See Result" when the game is over, using a ternary expression to pick the label based on game state
- **`frameCount`** — a built-in p5.js variable that increases by 1 every frame; used in `drawStartScreen()` and `drawGameOverScreen()` to animate blobs where the blob timers from sketch.js aren't available
- **Passing arguments to scene functions** — `drawGameScreen()` receives `playerBlobT` and `npcBlobT` as arguments so the blobs animate continuously across all screens
- **Shared global scope across files** — `drawHUD()` in scenes.js reads `currentRound`, `MAX_ROUNDS`, `playerScore`, and `npcScore` directly from game.js without any extra wiring, because all files share the same global scope

## Assets
| File | Source |
|------|--------|
| `assets/images/bad_ending.png` |https://www.reddit.com/r/celestegame/comments/qtgrjh/simplified_celeste_peak_wallpaper_in_4k_original/ [1]|
| `assets/images/bg-a.png` |https://celestegame.fandom.com/wiki/Madeline [3]|
| `assets/images/bg-aa.png` |https://celestegame.fandom.com/wiki/Madeline [3]|
| `assets/images/bg-ab.png` |https://celestegame.fandom.com/wiki/Madeline [3]|
| `assets/images/bg-b.png` |https://celestegame.fandom.com/wiki/Madeline [3]|
| `assets/images/bg-ba.png` |https://celestegame.fandom.com/wiki/Madeline [3]|
| `assets/images/bg-bb.png` |https://celestegame.fandom.com/wiki/Madeline [3]|
| `assets/images/ending_aaa.png` |https://celestegame.fandom.com/wiki/Madeline [3]|
| `assets/images/ending_bbb.png` |https://celestegame.fandom.com/wiki/Madeline [3]|
| `assets/images/getting_over_it_background.png` |https://celestegame.fandom.com/wiki/Madeline [3]|

## References

[1] Bennett Foddy monologue transcript. Tumblr.
https://schnedwob.tumblr.com/post/171325817372/full-monologue-getting-over-it-with-bennett

[2] Getting Over It gameplay footage. YouTube.
https://www.youtube.com/watch?v=1f5WWVhg02g

[3] Getting Over It gameplay reference video. YouTube.
https://www.youtube.com/watch?v=ttvZULCi-eA

[4] Getting Over It player guide and visual reference. Steam Community.
https://steamcommunity.com/sharedfiles/filedetails/?id=2435414638

[5] Getting Over It speedrun leaderboard reference. Speedrun.com.
https://www.speedrun.com/fr-FR/goiwbf/runs/zx0o25ez

[6] Getting Over It walkthrough series, Part 1. YouTube.
https://www.youtube.com/watch?v=Xj6LGAIKRyU

[7] Getting Over It walkthrough series, Part 2. YouTube.
https://www.youtube.com/watch?v=5V4vKa6Dkpo

[8] Getting Over It walkthrough series, Part 3. YouTube.
https://www.youtube.com/watch?v=yZ6mX0zVDKI

[9] Orange Hell stage information. Getting Over It Wiki.
https://getting-over-it.fandom.com/wiki/Orange_Hell

[10] Review and discussion of Getting Over It with Bennett Foddy. The Refined Geek.
https://therefinedgeek.com.au/index.php/2018/01/08/getting-over-it-with-bennett-foddy-i-laugh-i-cry-i-continue/

[11] Stage 1 environment reference. Getting Over It Wiki.
https://getting-over-it.fandom.com/wiki/Stage_1

[12] Steam Community visual guide and screenshots. Steam Community.
https://steamcommunity.com/sharedfiles/filedetails/?l=german&id=2435414638

