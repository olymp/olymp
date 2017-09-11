import Route from 'route-parser';

export default (pathname, { path, exact }) => {
  if (!path) {
    return undefined;
  } else if (exact) {
    return new Route(path).match(pathname);
  }
  const match = new Route(`${path}(/*splat)`).match(pathname);
  if (match && match.splat) {
    match.splat = `/${match.splat}`;
  }
  return match;
};
