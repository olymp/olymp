import Route from 'route-parser';

export default (pathname, { path, exact }) => {
  if (!path) {
    return undefined;
  }
  let match = exact
    ? new Route(path).match(pathname)
    : new Route(`${path}(/*splat)`).match(pathname);
  if (match && match.splat) {
    match.splat = `/${match.splat}`;
  }
  if (match) {
    match.pathname = pathname;
  }
  return match;
};
