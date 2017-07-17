export default (obj) => {
  if (obj.skipSort) {
    return {};
  }
  delete obj.skipSort;
  Object.keys(obj).forEach((key) => {
    obj[key] = obj[key] === 'DESC' ? -1 : 1;
  });
  return obj;
};
