import "./typedef.js";

import Header from "./view/header.js";
import Score from "./view/score.js";
import Board from "./view/board.js";

import applyDiff from "./applyDiff.js";
import registry from "./registry.js";

/** @type {TypeStateRoot} */
const state = {
  board: [
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
  ],
  score: {
    score1: 1,
    score2: 0,
  },
  stone: "X",
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

/**
 * @param {CustomEvent} BlockClickEvent
 */
const onBlockClick = (blockClickEvent) => {
  /** @type {{y: TypeBlock, x:TypeBlock}}*/
  const { y, x } = blockClickEvent.detail;
  if (state.board[y][x] !== "Empty") return;

  state.board[y][x] = state.stone;

  state.stone = state.stone === "X" ? "O" : "X";
  render();
};

window.addEventListener("BlockClick", onBlockClick);

render();
