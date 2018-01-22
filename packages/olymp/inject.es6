const reduce = (fns = [], value) => {
  const [fn, ...rest] = fns;

  if (fn) {
    const newValue = fn(value);
    if (newValue) {
      return reduce(rest, newValue);
    }
  }
  return value;
};

export default (rawPlugins = []) => {
  let context = {};
  const plugins = rawPlugins.map(x => {
    if (typeof x === 'function') {
      x = x(context);
    }
    if (x.context) {
      context = { ...context, ...x.context };
    }
    return x;
  });
  const decorate = plugins
    .map(x => x.decorate)
    .filter(x => x)
    .reverse();
  const bootstrap = plugins.map(x => x.bootstrap).filter(x => x);
  const template = plugins.map(x => x.template).filter(x => x);
  return {
    decorate: initial => reduce(decorate, initial),
    bootstrap: initial =>
      Promise.all(bootstrap.map(x => Promise.resolve(x(initial)))),
    template: initial => reduce(template, initial),
  };
};
