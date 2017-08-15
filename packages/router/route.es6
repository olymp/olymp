import { createElement } from 'react';
import withRouter from './with-router';
import { isMatch } from './utils';

export default withRouter(({ path, exact, render, component, ...rest }) => {
  const { pathname, match } = rest;
  if (match !== undefined) {
    if (!match) {
      return null;
    }
    if (component) {
      return createElement(component, rest);
    } else if (render) {
      return render(rest);
    }
    return null;
  }
  const params = isMatch(pathname, { path, exact });
  if (params) {
    const props = {
      ...rest,
      match: {
        ...params,
        path: params.splat ? pathname.substr(0, pathname.length - params.splat.length) : pathname,
      },
    };
    if (component) {
      return createElement(component, props);
    } else if (render) {
      return render(props);
    }
  }
  return null;
});

/*

pathname
query
match { path, splat, ...params }
router { push, replace }

*/
