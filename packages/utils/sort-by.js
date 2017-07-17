export default (array, attrib = 'name') => {
  // can be 'name', x => x.name || x.title, (todo: ['name', 'title'], [x => x.name, x => x.title])
  array = [...array];
  const getAttrib = (x) => {
    if (attrib && typeof attrib === 'string') { return x[attrib]; }
    if (attrib && typeof attrib === 'function') { return attrib(x); }
    return '';
  };
  array.sort((a, b) => compare(getAttrib(a), getAttrib(b)));
  return array;
};

const compare = (left, right, idx) => {
  idx = idx === undefined ? 0 : idx++;
  const run = right.length <= left.length
    ? idx < right.length - 1
    : idx < left.length - 1;
  if (!run) {
    if (left[0].localeCompare(right[0]) === 0) {
      return left.localeCompare(right);
    }
    return left[0].localeCompare(right[0]);
  }

  if (left.localeCompare(right) !== left[0].localeCompare(right[0])) {
    const myLeft = left.slice(1, left.length);
    const myRight = right.slice(1, right.length);
    if (myLeft.localeCompare(myRight) !== myLeft[0].localeCompare(myRight[0])) {
      return compare(myLeft, myRight, idx);
    }
    if (left[0].localeCompare(right[0]) === 0) {
      return compare(myLeft, myRight, idx);
    }
    return left[0].localeCompare(right[0]);
  }
  return left.localeCompare(right);
};
