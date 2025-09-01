// Minimal React-like library for offline demo
const React = (() => {
  let hooks = [];
  let hookIndex = 0;
  let rootComponent = null;
  function createElement(tag, props, ...children) {
    if (typeof tag === 'function') {
      return tag(Object.assign({}, props, { children: children.flat() }));
    }
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(props || {})) {
      if (key === 'className') {
        el.className = value;
      } else if (key.startsWith('on') && typeof value === 'function') {
        el.addEventListener(key.substring(2).toLowerCase(), value);
      } else if (value !== false && value != null) {
        el.setAttribute(key, value);
      }
    }
    (children.flat()).forEach(child => {
      if (child == null || child === false) return;
      if (typeof child === 'string' || typeof child === 'number') {
        el.appendChild(document.createTextNode(String(child)));
      } else {
        el.appendChild(child);
      }
    });
    return el;
  }
  function useState(initial) {
    const i = hookIndex;
    hooks[i] = hooks[i] !== undefined ? hooks[i] : initial;
    const setState = val => {
      hooks[i] = typeof val === 'function' ? val(hooks[i]) : val;
      render();
    };
    hookIndex++;
    return [hooks[i], setState];
  }
  function render() {
    hookIndex = 0;
    const container = ReactDOM._root;
    container.innerHTML = '';
    container.appendChild(rootComponent());
  }
  return {
    createElement,
    useState,
    _setRoot: comp => { rootComponent = comp; },
    _render: render
  };
})();

const ReactDOM = {
  createRoot(container) {
    this._root = container;
    return {
      render(component) {
        React._setRoot(component);
        React._render();
      }
    };
  }
};
