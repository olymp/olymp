import { createElement } from 'react';
import withRouter from './with-router';
import { isMatch } from './utils';

export default withRouter(
  ({ path, exact, pathname, render, component, match, ...rest }) => {
    rest = { ...rest, pathname };
    if (match) {
      return createElement(component, rest);
    }
    const params = isMatch(pathname, { path, exact });
    if (params && component) {
      return createElement(component, rest);
    }
    if (params && render) {
      return render(rest);
    }
    return null;
  }
);
