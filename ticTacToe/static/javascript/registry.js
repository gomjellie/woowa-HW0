import "./typedef.js";
const registry = {};

/**
 * @param {(targetElement: Element, state: TypeRootState) => Element} component
 * @returns {(targetElement: Element, state: TypeRootState) => Element}
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
 * @param {(targetElement: Element, state: TypeRootState) => Element} component
 */
const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

/**
 * @param {Element} root
 * @param {TypeRootState} state
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
