export default (data = []) => {
  const tags = data.reduce((state, file) => {
    (file.tags || []).forEach(tag => {
      if (state[tag] === undefined) {
        state[tag] = []; // eslint-disable-line no-param-reassign
      }
      state[tag].push(file);
    }); return state;
  }, {});
  return Object.keys(tags).map(key => ({
    tag: key,
    items: tags[key],
  }));
};
