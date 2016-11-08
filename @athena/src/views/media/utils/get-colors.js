export default (data = []) => {
  const colors = data.reduce((state, file) => {
    (file.palette || []).forEach(color => {
      if (state[color] === undefined) {
        state[color] = 0; // eslint-disable-line no-param-reassign
      }
      state[color] = state[color] + 1; // eslint-disable-line no-param-reassign
    }); return state;
  }, {});
  return Object.keys(colors).map(color => ({
    color,
    count: colors[color],
  }));
};
