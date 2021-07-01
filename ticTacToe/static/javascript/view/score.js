import "../typedef.js";

/**
 * @param {TypeStateScore} state
 * @returns {String}
 */
const getScoreElement = (state) => {
  const {x, o} = state;
  return `
  <h2>${x} : ${o}</h2>
  `;
};

/**
 * @type {TypeFC}
 * @param {Element} targetElement
 * @param {TypeStateRoot} state
 * @returns {Element}
 */
const Score = (targetElement, state) => {
  const newHeader = targetElement.cloneNode(true);
  newHeader.innerHTML = getScoreElement(state.score);
  return newHeader;
};

export default Score;
