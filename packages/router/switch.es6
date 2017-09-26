import { Children, cloneElement } from 'react';
import { isMatch } from './utils';
import { withPathname } from './decorators';

export default withPathname(({ children, pathname, ...rest }) => {
  let notFound = null,
    match = null;
  const routes = Children.toArray(children);
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    if (route.props.match !== undefined) {
      if (route.props.match) {
        match = route;
        break;
      }
    } else {
      const params = isMatch(pathname, route.props);
      if (params) {
        const path =
          params && params.splat
            ? pathname.substr(0, pathname.length - params.splat.length)
            : pathname;
        match = cloneElement(route, { match: { path, ...params } });
        break;
      } else if (route.props.path === undefined || route.props.match === undefined) {
        notFound = route;
      }
    }
  }
  if (match) {
    return match;
  }
  if (notFound) {
    return cloneElement(notFound, { match: true });
  }
  return null;
});
