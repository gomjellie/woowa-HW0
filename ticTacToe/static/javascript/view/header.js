import "../typedef.js";

/**
 * @returns {String}
 */
const getHeaderElement = () => {
  return `
  TIC TAC TOE
  `;
}

/**
 * @type {TypeFC}
 * @param {Element} targetElement 
 * @param {TypeStateRoot} state
 * @returns {Element}
 */
const Header = (targetElement, state) => {
  const newHeader = targetElement.cloneNode(true);
  newHeader.innerHTML = getHeaderElement();
  return newHeader;
}

export default Header;
