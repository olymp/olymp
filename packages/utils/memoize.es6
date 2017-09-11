export default (func) => {
  const result = {};
  return (...args) => {
    const key = [...args].reduce((prev, curr) => prev + JSON.stringify(curr), '');
    if (!result.hasOwnProperty(key)) {
      result[key] = func(...args);
    }
    return result[key];
  };
};
