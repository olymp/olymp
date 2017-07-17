const traverse = fn => (context = {}) => (node, key) => {
  const type = node.type || 'text';
  const children = node.children || [];
  const decos = node.decorators || [];
  const value = node.value;
  const props = node.props ? { ...context, ...node.props } : { ...context };
  if (key !== undefined) {
    props.key = key;
  }
  if (node.text) {
    props.text = node.text;
  }
  return fn(
    type,
    { ...props, value, children: children.map(traverse(context)) },
    decos
  );
};
export default traverse;
