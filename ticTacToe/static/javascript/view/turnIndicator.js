import "../typedef.js";

/**
 * @param {TypeBlock} stone
 * @returns {String}
 */
const turnIndicatorElement = (stone) => {
  return `
  <span class=${stone}>
    ${stone} 차례
  </span>
  `;
};

/**
 * @type {TypeFC}
 * @param {Element} targetElement
 * @param {TypeStateRoot} state
 * @returns {Element}
 */
const TurnIndicator = (targetElement, state) => {
  const newIndicator = targetElement.cloneNode(true);
  newIndicator.innerHTML = turnIndicatorElement(state.stone);
  return newIndicator;
};

export default TurnIndicator;
