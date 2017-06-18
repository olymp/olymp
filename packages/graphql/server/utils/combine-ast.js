const { visit } = require('graphql/language');

function combineASTTypes(types) {
  return types.reduce(
    (p, n) => Object.assign(p, n, { fields: n.fields.concat(p.fields || []) }),
    {}
  );
}

module.exports = (schemas) => {
  const result = { kind: 'Document', definitions: [] };
  const queries = [];
  const mutations = [];
  const subscription = [];
  const withoutRootTypes = schemas.map(schema =>
    visit(schema, {
      enter(node /* key, parent, path, ancestors*/) {
        if (node.kind === 'ObjectTypeDefinition') {
          if (node.name.value === 'Query') {
            queries.push(node);
            return null;
          } else if (node.name.value === 'Mutation') {
            mutations.push(node);
            return null;
          } else if (node.name.value === 'Subscription') {
            subscription.push(node);
            return null;
          }
        }
        return undefined;
      },
    })
  );
  const query = combineASTTypes(queries);
  const mutation = combineASTTypes(mutations);
  if (queries.length) { result.definitions.push(query); }
  if (mutations.length) { result.definitions.push(mutation); }
  if (subscription.length) { result.definitions.push(subscription); }
  withoutRootTypes.forEach((schema) => {
    result.definitions = [...result.definitions, ...schema.definitions];
  });
  return result;
};
