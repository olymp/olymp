import { Children, cloneElement } from 'react';
import withRouter from './with-router';
import { isMatch } from './utils';

export default withRouter(({ children, pathname, ...rest }) => {
  let notFound = null,
    match = null;
  const routes = Children.toArray(children);
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    /* const isMatch =
      route.props.path === pathname ||
      (route.props.exact === true &&
        pathname.indexOf(`${route.props.path}/`) === 0);*/
    if (route.props.match) {
      match = route;
      break;
    } else {
      const params = isMatch(pathname, route.props);
      if (params) {
        match = cloneElement(route, params);
      } else if (route.props.path === undefined) {
        notFound = route;
      }
    }
  }
  if (match) {
    return match;
  }
  if (!match && notFound) {
    return cloneElement(notFound, { match: true });
  }
  return null;
});
