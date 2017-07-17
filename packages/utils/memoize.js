export default func => {
  const result = {};
  return (...args) => {
    const key = [...args].reduce((prev, curr) => {
      return prev + JSON.stringify(curr);
    }, 'undefined-');
    if (!result.hasOwnProperty(key)) {
      result[key] = func(...args);
    }
    return result[key];
  };
};
