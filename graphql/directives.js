import { parse } from 'graphql/language';
import capitalize from 'capitalize';
import { list, one, write, addInputTypes } from './utils';

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
        if (!isList) {
          const idType = parse(`
            type ___Field {
              ${node.name.value}Id: String
            }
          `).definitions[0];
          idType.fields.forEach(field => parent.push(field));
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
        if (!resolvers[parentName]) resolvers[parentName] = {};
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
            func(id: String, input: ${capitalize(type.name.value)}Input, operationType: OPERATION_TYPE): ${type.name.value}
          }
        `).definitions[0].fields[0];

        node.arguments = node.arguments.concat(field.arguments);
        resolvers.Mutation[node.name.value] = write(collectionName, node.name.value);
      },
    },
  },
});

