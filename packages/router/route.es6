import React from 'react';
import { withPathname } from './decorators';
import { isMatch } from './utils';

export default withPathname(({ path, exact, render, component: Component, ...rest }) => {
  const { pathname, match } = rest;
  if (match !== undefined) {
    if (!match) {
      return null;
    }
    if (Component) {
      return <Component {...rest} />;
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
    if (Component) {
      return <Component {...props} />;
    } else if (render) {
      return render(props);
    }
  }
  return null;
});
