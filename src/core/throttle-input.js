module.exports = function (limit) {
  if (!limit) { limit = 1000; }
  let _callback = null;
  return function (callback) {
    _callback = callback;
    setTimeout(() => {
      if (_callback === callback) {
        callback();
      }
    }, limit);
  };
};
