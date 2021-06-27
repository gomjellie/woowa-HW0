import "./types.js";

import Header from "./view/header.js";
import Score from "./view/score.js";

import applyDiff from "./applyDiff.js";
import registry from "./registry.js";

/** @type {TypeRootState} */
const state = {
  /** @type {TypeBoard} */
  board: [
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
  ],
  /** @type {TypeScore} */
  score: {
    score1: 1,
    score2: 0,
  },
};

registry.add("header", Header);
registry.add("score", Score);

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".app");
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

// window.setInterval(() => {
//   // state.board = getBoard();
//   render();
// }, 1000);

render();
