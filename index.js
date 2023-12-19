
import { initgame } from "./data/data.js";
import { initgamerender } from "./render/main.js";
// import { chiragevent } from "./Events/chirag.js";
import { agrawal } from "./new game/pawnmove.js";

// useful till end of game
const globalstate=initgame();

initgamerender(globalstate);
// chiragevent();
agrawal();

export{globalstate};