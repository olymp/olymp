import Route from 'route-parser';

export default (pathname, { path, exact }) => {
  if (!path) {
    return undefined;
  } else if (exact) {
    return new Route(path).match(pathname);
  }
  return new Route(`${path}*splat`).match(pathname);
};
