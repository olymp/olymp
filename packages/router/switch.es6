import { Children, cloneElement } from 'react';
import withRouter from './with-router';

export default withRouter(({ children, pathname, ...rest }) => {
  let notFound = null,
    match = null;
  const routes = Children.toArray(children);
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    if (route.props.path === pathname) {
      match = route;
    } else if (route.props.path === undefined) {
      notFound = route;
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
