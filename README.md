# Week 4: Getting Over It

## Project Title: Getting Over IT

## Setup and Interaction Instructions:

Open the Github pages ink from your browser to play the game.

The player progresses through a branching of decisions inspired by the scenarios and text spoken from Getting Over It by Bennet.
Each scenario presents two choices:

Take it out
Hold it in 

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
| `assets/images/Celeste Background.png` |https://www.reddit.com/r/celestegame/comments/qtgrjh/simplified_celeste_peak_wallpaper_in_4k_original/ [1]|
| `assets/images/celeste character.png` |https://celestegame.fandom.com/wiki/Madeline [3]|



## References

<!-- COMMENTS AND LINKS -->

<!-- https://schnedwob.tumblr.com/post/171325817372/full-monologue-getting-over-it-with-bennett -->

N/A
