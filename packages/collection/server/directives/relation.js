const { addFields, addArguments } = require('olymp-graphql/server');
const { get, set } = require('lodash');

export default {
  // aggregation
  name: 'relation',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter(node, directive, { resolvers, parent, ancestors, ast }) {
      const isList = node.type.kind === 'ListType';
      const type = isList ? node.type.type : node.type;

      const argProperty =
        directive.arguments.length &&
        directive.arguments.find(x => x.name.value === 'property');
      const argRelationType =
        directive.arguments.length &&
        directive.arguments.find(x => x.name.value === 'type');
      const relationType = get(
        argRelationType,
        'value.value',
        isList ? '1-n' : '1-1'
      );

      const leftType = ancestors[ancestors.length - 1].name.value;
      const leftTable = ancestors[
        ancestors.length - 1
      ].name.value.toLowerCase();
      const leftField = node.name.value;
      const rightType = type.name.value;
      const rightTable = type.name.value.toLowerCase();
      const rightField = get(argProperty, 'value.value');

      // one-to-one / one-to-many
      // Only add xxxId field to store/access the id
      if (relationType === '1-1') {
        const idField = `${leftField}Id`;
        addFields(ast, parent, `${idField}: String`);
        // Add resolver
        set(resolvers, `${leftTable}.${leftField}`, (source, args, { db }) =>
          db.collection(rightTable).findOne({
            id: source[idField],
          })
        );
      } else if (relationType === '1-n') {
        // Add list accessor and xxxIds field since dealing with many
        // addInputTypes(rightTable, ast);
        addArguments(
          ast,
          node,
          `query: ${rightType}Query, sort: ${rightType}Sort, limit: Int, skip: Int`
        );
        addFields(ast, parent, `${leftField}Ids: String`);
        set(resolvers, `${leftType}.${leftField}`, (source, args, { db }) =>
          db.collection(rightTable).find({})
        );
      }

      /* if (rightField) {
        const rightNode = ast.definitions.find(
          x => x.name && x.name.value === node.type.name.value
        );

        if (relationType === '1-n') {
          addFields(ast, rightNode, `${rightField}: [${leftType}]`);
          set(resolvers, `${rightType}.${rightField}`, (source, args, { db }) =>
            db.collection(leftTable).find({})
          );
        } else if (relationType === '1-1') {
          addFields(ast, rightNode, `${rightField}: ${leftType}`);
          set(resolvers, `${rightType}.${rightField}`, (source, args, { db }) =>
            db.collection(leftTable).findOne({})
          );
        }
      }*/
    },
  },
};
