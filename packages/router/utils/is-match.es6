import Route from 'route-parser';

export default (pathname, { path, exact }) => {
  if (!path) {
    return undefined;
  } else if (exact) {
    return new Route(path).match(pathname);
  }
  const match = new Route(`${path}*splat`).match(pathname);
  if (!match) { return false; }
  if (!match.splat) { return match; }
  if (match.splat.indexOf('/') === 0) { return match; }
  return false;
};
