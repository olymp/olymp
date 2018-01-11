const reduce = (fns = [], value) => {
  const [fn, ...rest] = fns;
  if (fn) {
    const newValue = fn(value);
    if (newValue) {
      reduce(rest, newValue);
    }
  }
  return value;
};

export default (plugins = []) => {
  const decorate = plugins.map(x => x.decorate).filter(x => x);
  const bootstrap = plugins.map(x => x.bootstrap).filter(x => x);
  const template = plugins.map(x => x.template).filter(x => x);
  return {
    decorate: initial => reduce(decorate, initial),
    bootstrap: initial =>
      Promise.all(bootstrap.map(x => Promise.resolve(x(initial)))),
    template: initial => reduce(template, value),
  };
};
