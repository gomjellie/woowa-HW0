import "../typedef.js";

/**
 * @param {TypeStateStone} state
 * @returns {String}
 */
const getScoreElement = (state) => {
  const {x, o} = state;
  return `
  <div>X ${x}승 vs O ${o}승</div>
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
