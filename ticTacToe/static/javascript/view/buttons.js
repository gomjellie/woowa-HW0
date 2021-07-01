import "../typedef.js";

/**
 * @returns {Array.<Element>}
 */
const getButtonsElement = () => {
  const newGameButton = document.createElement("div");
  const cancleButton = document.createElement("div");

  newGameButton.classList.add("button");
  cancleButton.classList.add("button");

  newGameButton.addEventListener("click", () => {
    const newGameClickEvent = new CustomEvent("NewGameClick");
    window.dispatchEvent(newGameClickEvent);
  });
  cancleButton.addEventListener("click", () => {
    const cancleClickEvent = new CustomEvent("CancleClick");
    window.dispatchEvent(cancleClickEvent);
  });

  newGameButton.textContent = "New Game";
  cancleButton.textContent = "Cancle";

  return [newGameButton, cancleButton];
};

/**
 * @type {TypeFC}
 * @param {Element} targetElement
 * @param {TypeStateRoot} state
 * @returns {Element}
 */
const Buttons = (targetElement, state) => {
  const newButtons = targetElement.cloneNode(true);
  newButtons.innerHTML = "";
  const buttons = getButtonsElement();
  buttons.forEach((button) => {
    newButtons.appendChild(button);
  });
  return newButtons;
};

export default Buttons;
