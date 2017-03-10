const { parse } = require('graphql/language');
const capitalize = require('lodash/upperFirst');
const lowerFirst = require('lodash/lowerFirst');
const { list, one, write, addInputTypes } = require('./utils');

const hasDirective = (ast, model, directive) => {
  const schema = ast.definitions.find(({ name }) => name && name.value === model);
  return schema.directives.filter(({ name }) => name && name.value === 'state').length;
};

module.exports = ({ adapter, resolvers }) => ({
  crud: {
    name: 'crud',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter2(node, directive, { ast }) {
        // Add InputType
        addInputTypes(node.name.value, ast);

        // Find Query object in AST
        const Query = ast.definitions.find(x => x.name && x.name.value === 'Query');
        const Mutation = ast.definitions.find(x => x.name && x.name.value === 'Mutation');
        if (Query && Mutation) {
          // Get name of decorated type
          const name = node.name.value;
          const lower = lowerFirst(node.name.value);

          // Create all type of queries and mutations
          const definitions = parse(`
            type Query {
              ${lower}List(query: ${name}Query, sort: ${name}Sort, limit: Int, skip: Int): [${name}]
              ${lower}(id: String, query: ${name}Query, sort: ${name}Sort): ${name}
            }
            type Mutation {
              ${lower}(id: String, type: MUTATION_TYPE, input: ${name}Input): ${name}
            }
          `).definitions;

          // Iterate over queries
          definitions[0].fields.forEach((field) => {
            // Add to AST
            Query.fields.push(field);
            // Create resolvers for queries
            const isList = field.type.kind === 'ListType';
            resolvers.Query[field.name.value] = isList
              ? list(name)
              : one(name);
          });
          // Iterate over mutations
          definitions[1].fields.forEach((field) => {
            // Add to AST
            Mutation.fields.push(field);
            // Create resolvers for mutations
            resolvers.Mutation[field.name.value] = write(name);
          });
        }
      },
    },
  },
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
  tags: {
    name: 'mongodb',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter(node) {
        const type = parse(`
          type ___Model {
            tags: [String]
          }
        `).definitions[0];
        node.fields = node.fields.concat(type.fields);
      },
    },
  },
  input: {
    name: 'input',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter2(node, directive, { ast }) {
        addInputTypes(node.name.value, ast);
      },
    },
  },
  state: {
    name: 'state',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter(node) {
        const type = parse(`
          type ___Model {
            state: DOCUMENT_STATE
          }
        `).definitions[0];
        node.fields = node.fields.concat(type.fields);
      },
    },
    hooks: {
      before: (args, { model, type, returnType }, { ast }) => {
        if (type === 'QUERY' && returnType.toString().indexOf('[') === 0 && hasDirective(ast, model, 'state')) {
          const query = (args.query || {});
          if (!query.state) {
            query.state = { eq: 'PUBLISHED' };
            args.query = query;
          }
          return args;
        }
        else if (type === 'MUTATION' && args.input && !args.input.state && !args.id) {
          args.input.state = 'DRAFT';
          return args;
        }
      },
    },
  },
  stamp: {
    name: 'stamp',
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
  relation: { // aggregation
    name: 'relation',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter(node, directive, { resolvers, parent, ancestors, ast }) {
        const parentName = ancestors[ancestors.length - 1].name.value;
        const isList = node.type.kind === 'ListType';
        const type = isList ? node.type.type : node.type;
        const collectionName = type.name.value;

        if (directive.arguments.find(x => x.name.value === 'ignore')) return;
        if (!resolvers[parentName]) resolvers[parentName] = {};

        // one-to-one / one-to-many
        if (!isList) {
          const idType = parse(`
            type ___Field {
              ${node.name.value}Id: String
            }
          `).definitions[0];
          idType.fields.forEach(field => parent.push(field));

          // one-to-many property set (parent -> [children])
          if (directive.arguments.length > 0) {
            const property = directive.arguments.find(x => x.name.value === 'property');
            const relationType = directive.arguments.find(x => x.name.value === 'type');
            if (property && relationType && relationType.value.value) {
              const relIsList = relationType.value.value === 'one-to-many';
              const propType = relIsList ? parse(`
                type ___Field {
                  ${property.value.value}: [${parentName}]
                }
              `).definitions[0] : parse(`
                type ___Field {
                  ${property.value.value}: ${parentName}
                }
              `).definitions[0];

              const def = ast.definitions.find(x => x.name && x.name.value === node.type.name.value);
              propType.fields.forEach(field => def.fields.push(field));
              resolvers[parentName][property.value.value] = relIsList ? list(collectionName, property.value.value, node.name.value) : one(collectionName, property.value.value, node.name.value);
            }
          }
        } else {
          addInputTypes(collectionName, ast);
          const argType = parse(`
            type Query {
              func(query: ${collectionName}Query, sort: ${collectionName}Sort, limit: Int, skip: Int): [${collectionName}]
            }
          `).definitions[0].fields[0];
          argType.arguments.forEach(field => node.arguments.push(field));
          const idType = parse(`
            type ___Field {
              ${node.name.value}Ids: [String]
            }
          `).definitions[0];
          idType.fields.forEach(field => parent.push(field));
        }
        resolvers[parentName][node.name.value] = isList
          ? list(collectionName, node.name.value)
          : one(collectionName, node.name.value);
      },
    },
  },
  // Query/Mutation
  query: {
    name: 'query',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter2(node, directive, { ast }) {
        const isList = node.type.kind === 'ListType';
        const type = isList ? node.type.type : node.type;
        const collectionName = type.name.value;
        addInputTypes(collectionName, ast);

        const field = isList ? parse(`
          type Query {
            func(query: ${collectionName}Query, sort: ${collectionName}Sort, limit: Int, skip: Int): [${collectionName}]
          }
        `).definitions[0].fields[0] : parse(`
          type Query {
            func(id: String, query: ${collectionName}Query): ${collectionName}
          }
        `).definitions[0].fields[0];

        node.arguments = node.arguments.concat(field.arguments);
        resolvers.Query[node.name.value] = isList
          ? list(collectionName)
          : one(collectionName);
      },
    },
  },
  mutate: {
    name: 'mutate',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter2(node, directive, { ast }) {
        const type = node.type;
        const collectionName = type.name.value;

        const field = parse(`
          type Mutation {
            func(id: String, input: ${capitalize(type.name.value)}Input, operationType: OPERATION_TYPE, type: MUTATION_TYPE): ${type.name.value}
          }
        `).definitions[0].fields[0];

        node.arguments = node.arguments.concat(field.arguments);
        resolvers.Mutation[node.name.value] = write(collectionName, node.name.value);
      },
    },
  },
});

