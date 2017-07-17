import { Children, cloneElement } from 'react';

export default ({ children, ...rest }) => {
  let notFound, match;
  const routes = Children.toArray(children);
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    if (route.props.match) {
      match = route;
    } else if (route.props.match === undefined) {
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
};
