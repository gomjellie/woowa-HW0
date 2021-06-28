import "./typedef.js";

import Header from "./view/header.js";
import Score from "./view/score.js";
import Board from "./view/board.js";

import applyDiff from "./applyDiff.js";
import registry from "./registry.js";

/** @type {TypeStateRoot} */
const state = {
  /** @type {TypeStateBoard} */
  board: [
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
  ],
  /** @type {TypeStateScore} */
  score: {
    score1: 1,
    score2: 0,
  },
};

registry.add("header", Header);
registry.add("score", Score);
registry.add("board", Board);

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".app");
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

// const getBoard = () => {
//   return [
//     ["X", "X", "X"],
//     ["X", "X", "X"],
//     ["X", "X", "X"],
//   ];
// }

// window.setInterval(() => {
//   state.board = getBoard();
//   render();
// }, 1000);

render();
