const { parse, visit, BREAK } = require('graphql/language');

export default ({ adapter, resolvers }) => ({
  // Type
  collection: {
    name: 'mongodb',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter(node) {
        const type = parse(`
          type ___Model {
            id: String
          }
        `).definitions[0];
        node.fields = node.fields.concat(type.fields);
      },
    },
  },
  stamps: {
    name: 'stamps',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter(node) {
        const type = parse(`
          type ___Stamps {
            createdAt: DateTime
            updatedAt: DateTime
            createdBy: User @relation
            updatedBy: User @relation
          }
        `).definitions[0];
        node.fields = node.fields.concat(type.fields);
      },
      leave(node) {
        resolvers.Query = resolvers.Query || {};
        resolvers.Mutation = resolvers.Mutation || {};
        resolvers[node.name.value] = resolvers[node.name.value] || {};
      },
    },
  },
  // Field
  relation: {
    name: 'relation',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter(node, directive, { resolvers, parent }) {
        const type = parse(`
          type ___Field {
            ${node.name.value}Id: String
          }
        `).definitions[0];
        type.fields.forEach(field => parent.push(field));
      },
    },
  },
  // Query/Mutation
  resolve: {
    name: 'resolve',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter(node, directive, { ast }) {
        const isList = node.type.kind === 'ListType';
        const type = isList ? node.type.type : node.type;
        const collectionName = type.name.value;
        let collectionAst = null;
        visit(ast, {
          enter(node) {
            if (node.kind.endsWith('TypeDefinition') && node.name && node.name.value === collectionName) {
              collectionAst = node;
              return BREAK;
            } return undefined;
          },
        });

        const filterType = parse(`
          input ${node.name.value}Filter {
            ${collectionAst.fields.map(getArgument).join(', ')}
          }
        `).definitions[0];
        ast.definitions.push(filterType);

        const field = parse(`
          type Query {
            func(filter: ${filterType.name.value}): [Page]
          }
        `).definitions[0].fields[0];

        node.arguments = node.arguments.concat(field.arguments);
      },
    },
  },
});

const getArgument = (field) => {
  return `${field.name.value}: String`;
};
