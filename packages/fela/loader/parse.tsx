
const eq = (a, b) => a === b;
const first = (a, b) => a && a[0] === b;
const last = (a, b) => a && a[a.length - 1] === b;
const ensure = (a, p, b) => (!a[p] ? (a[p] = b) : null);

export default (schema = '') => {
  if (!first(schema, '[')) schema = `[${schema}]`;
  let result = [];
  let path = [result];
  for (let i = 0; i < schema.length; i++) {
    const char = schema[i];
    const currentPath = path[path.length - 1];
    const prevPath = path[path.length - 2];
    const finish = () => {
      if (currentPath.width) {
        currentPath.width = last(currentPath.width, '%') ? currentPath.width : parseInt(currentPath.width);
      }
      if (currentPath.height) {
        currentPath.height = last(currentPath.height, '%') ? currentPath.height : parseInt(currentPath.height);
      }
      if (currentPath.size) {
        currentPath.size = parseInt(currentPath.size);
      }
      if (currentPath.repeat) {
        currentPath.repeat = parseInt(currentPath.repeat);
      }
      if (currentPath.type === 'cg') {
        currentPath.container = true;
        currentPath.grid = true;
      }
      if (currentPath.type === 'sc') {
        currentPath.container = true;
        currentPath.size = 'small';
      }
      if (currentPath.type === 'g') {
        currentPath.grid = true;
      }
      if (currentPath.type === 'c') {
        currentPath.container = true;
      }
      delete currentPath.type;
    }
    if (eq(char, '[')) {
      ensure(currentPath, 'children', []);
      path.push({});
    } else if (eq(char, ']')) {
      finish();
      prevPath.children.push(path.pop());
    } else if (eq(char, ',')) {
      finish();
      prevPath.children.push(path.pop());
      path.push({});
    } else if (
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '%'].includes(char)
    ) {
      if (currentPath.repeat !== undefined) {
        currentPath.repeat += char;
      } else if (currentPath.type !== undefined) {
        ensure(currentPath, 'size', '');
        currentPath.size += char;
      } else if (currentPath.width !== undefined) {
        currentPath.width += char;
      } else {
        ensure(currentPath, 'height', '');
        currentPath.height += char;
      }
    } else if (eq(char, '*')) {
      ensure(currentPath, 'repeat', '');
    } else if (eq(char, 'x')) {
      ensure(currentPath, 'width', '');
    } else {
      ensure(currentPath, 'type', '');
      currentPath.type += char;
    }
  }

  return result.children;
};
