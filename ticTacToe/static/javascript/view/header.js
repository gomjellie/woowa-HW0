import "../typedef.js";

/**
 * @returns {String}
 */
const getHeaderElement = () => {
  return `
  <h1>Tic Tac Toe</h1>
  `;
}

/**
 * @param {Element} targetElement 
 * @param {TypeRootState} state
 * @returns {Element}
 */
const Header = (targetElement, state) => {
  const newHeader = targetElement.cloneNode(true);
  newHeader.innerHTML = getHeaderElement();
  return newHeader;
}

export default Header;
