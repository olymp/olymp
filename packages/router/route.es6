import { createElement } from 'react';
import withRouter from './with-router';

export default withRouter(({ path, pathname, render, component, ...rest }) => {
  rest = { ...rest, pathname };
  const match = path === pathname;
  if (match && component) {
    return createElement(component, rest);
  }
  if (match && render) {
    return render(rest);
  }
  return null;
});
