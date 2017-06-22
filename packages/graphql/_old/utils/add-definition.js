export default (ast, type) => {
  const def = ast.definitions || ast;
  const index = def.indexOf(
    def.find(x => x.name && type.name && x.name.value === type.name.value)
  );
  if (index === undefined || index === -1) {
    def.push(type);
  } else {
    def[index] = type;
  }
};
