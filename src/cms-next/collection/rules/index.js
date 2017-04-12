export default (names = []) => names.map(key => rules[key]).filter(x => x);

const rules = {
  required: { required: true, message: 'Bitte geben Sie Ihren Namen an' },
}
