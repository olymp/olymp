module.exports = function (o, func) {
  for (const i in o) {
    func.apply(this, [i, o[i]]);
    if (o[i] !== null && typeof o[i] === 'object') {
      // going on step down in the object tree!!
      traverse(o[i], func);
    }
  }
};
