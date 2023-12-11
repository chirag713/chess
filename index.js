// import { chiragevent } from "./chirag.js";
import { initgame } from "./data/data.js";
import { initgamerender } from "./render/main.js";

// useful till end of game
const globalstate=initgame();

initgamerender(globalstate);
// chiragevent();