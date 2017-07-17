export default (ast, model, directive) => {
  const schema = ast.definitions.find(
    ({ name }) => name && name.value === model
  );
  return schema.directives.filter(
    ({ name }) => name && name.value === directive
  ).length;
};
