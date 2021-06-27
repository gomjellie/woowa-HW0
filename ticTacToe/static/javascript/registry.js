import "./typedef.js";
const registry = {};

/**
 * @param {TypeComponent} component
 * @returns {TypeComponent}
 */
const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);

    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target) => {
      const name = target.dataset.component;
      const child = registry[name];
      if (!child) return;

      target.replaceWith(child(target, state));
    });

    return element;
  };
};

/**
 * @param {String} name
 * @param {TypeComponent} component
 */
const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

/**
 * @param {Element} root
 * @param {TypeStateRoot} state
 * @returns {Element}
 */
const renderRoot = (root, state) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state);
};

export default {
  add,
  renderRoot,
};
