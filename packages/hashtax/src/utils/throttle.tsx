export default (limit) => {
  if (!limit) limit = 1000;
  var _callback = null;
  return (callback) => {
    _callback = callback;
    setTimeout(() => {
      if (_callback === callback) {
        callback();
      }
    }, limit);
  }
}
