import { createElement } from 'react';

export default ({ match, render, component, location, ...rest }) => {
  rest = { ...rest, ...location, location };
  if (match && component) {
    return createElement(component, rest);
  }
  if (match && render) {
    return render(rest);
  }
  return null;
};
