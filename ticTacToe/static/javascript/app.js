import "./typedef.js";

import Header from "./view/header.js";
import Score from "./view/score.js";
import Board, { initialState as boardInitialState } from "./view/board.js";
import Buttons from "./view/buttons.js";

import applyDiff from "./applyDiff.js";
import registry from "./registry.js";
import tools from "./tools.js";
import TurnIndicator from "./view/turnIndicator.js";

/** @type {TypeStateRoot} */
const state = {
  board: tools.deepCopy(boardInitialState),
  boardHistory: [],
  score: {
    x: 0,
    o: 0,
  },
  stone: "X",
  finished: false,
};

registry.add("header", Header);
registry.add("score", Score);
registry.add("board", Board);
registry.add("buttons", Buttons);
registry.add("turnIndicator", TurnIndicator);

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".app");
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

/**
 * @param {TypeStateBoard} board
 */
const isGameEnded = (board) => {
  const lines = [
    /* 가로 */
    [...board[0]],
    [...board[1]],
    [...board[2]],
    /* 세로 */
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    /* 대각선 */
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  for (const line of lines) {
    const lineStr = line.join("");
    if (["XXX", "OOO"].includes(lineStr)) {
      return true;
    }
  }
  return false;
};

/**
 * @param {CustomEvent} BlockClickEvent
 */
const onBlockClick = (blockClickEvent) => {
  /** @type {{y: TypeBlock, x:TypeBlock}}*/
  const { y, x } = blockClickEvent.detail;
  if (state.board[y][x] !== "Empty") return;
  if (state.finished) return;

  state.boardHistory.push(tools.deepCopy(state.board));

  state.board[y][x] = state.stone;
  if (isGameEnded(state.board)) {
    state.finished = true;
    state.score[state.stone.toLowerCase()]++;
  }

  state.stone = state.stone === "X" ? "O" : "X";
  render();
};

/**
 * @param {CustomEvent} evt
 */
const onNewGameClick = (evt) => {
  state.finished = false;
  state.board = tools.deepCopy(boardInitialState.slice());

  render();
};

/**
 * @param {CustomEvent} evt
 */
const onCancleClick = (evt) => {
  if (state.finished) {
    alert("게임이 끝났을때는 무르기 못합니다");
    return;
  }
  if (state.boardHistory.length === 0)
    return;
  state.board = state.boardHistory.pop();
  state.stone = state.stone === "X" ? "O" : "X";

  render();
};

window.addEventListener("BlockClick", onBlockClick);
window.addEventListener("NewGameClick", onNewGameClick);
window.addEventListener("CancleClick", onCancleClick);

render();
