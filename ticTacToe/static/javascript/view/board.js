import "../typedef.js";

/**
 * @param {TypeStateRoot} state
 * @returns {Element[]}
 */
const getBoardElements = (state) => {
  const { board } = state;

  const rows = board.map((row, i) => {
    const $div = document.createElement("div");
    $div.classList.add("row");

    const cells = row.map((block, j) => {
      const $span = document.createElement("span");
      $span.classList.add("cell");
      $span.addEventListener("click", () => {
        const newEvent = new CustomEvent("BlockClick", {
          detail: {
            y: i,
            x: j,
          },
        });
        window.dispatchEvent(newEvent);
      });

      $span.textContent = block === "Empty" ? " " : block;
      $span.classList.add(block);
      return $span;
    });

    cells.forEach((c) => {
      $div.appendChild(c);
    });
    return $div;
  });
  return rows;
};

/**
 * @type {TypeFC}
 * @param {Element} targetElement
 * @param {TypeStateRoot} state
 * @returns {Element}
 */
const Board = (targetElement, state) => {
  const newBoard = targetElement.cloneNode(true);
  newBoard.innerHTML = "";
  const boards = getBoardElements(state);
  boards.forEach((b) => {
    newBoard.appendChild(b);
  });
  return newBoard;
};

/** @type {TypeStateBoard} */
const initialState = [
  ["Empty", "Empty", "Empty"],
  ["Empty", "Empty", "Empty"],
  ["Empty", "Empty", "Empty"],
];

export default Board;
export { initialState };
