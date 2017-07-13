export default (names = [], label) =>
  names.map(key => rules[key]).filter(x => x).map(x => x({ label }));

const rules = {
  required: ({ label }) => ({
    required: true,
    message: `'${label}' erforderlich`,
  }),
};
