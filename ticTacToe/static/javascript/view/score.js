import "../typedef.js";

/**
 * @param {TypeStateScore} state
 * @returns {String}
 */
const getScoreElement = (state) => {
  const {score1, score2} = state;
  return `
  <h2>${score1} : ${score2}</h2>
  `;
};

/**
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
