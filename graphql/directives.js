import { parse } from 'graphql/language';
import { list, one, write, getInputTypes } from './utils';

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
  relation: { // aggregation
    name: 'relation',
    description: 'Marks a type as a relative.',
    resolveStatic: {
      enter(node, directive, { resolvers, parent, ancestors }) {
        const parentName = ancestors[ancestors.length - 1].name.value;
        const isList = node.type.kind === 'ListType';
        const type = isList ? node.type.type : node.type;
        const collectionName = type.name.value;
        const idType = parse(`
          type ___Field {
            ${node.name.value}Id: String
          }
        `).definitions[0];
        idType.fields.forEach(field => parent.push(field));
        if (!resolvers[parentName]) resolvers[parentName] = {};
        resolvers[parentName][node.name.value] = isList
          ? list(collectionName, adapter, { key: node.name.value })
          : one(collectionName, adapter, { key: node.name.value });
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
        const { queryType, sortType } = getInputTypes(collectionName, ast);
        ast.definitions.push(queryType);
        ast.definitions.push(sortType);

        const field = isList ? parse(`
          type Query {
            func(query: ${queryType.name.value}, sort: ${sortType.name.value}, limit: Int, skip: Int): [${type.name.value}]
          }
        `).definitions[0].fields[0] : parse(`
          type Query {
            func(id: String, query: ${queryType.name.value}): ${type.name.value}
          }
        `).definitions[0].fields[0];

        node.arguments = node.arguments.concat(field.arguments);
        resolvers.Query[node.name.value] = isList
          ? list(collectionName, adapter)
          : one(collectionName, adapter);
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

        const { inputType } = getInputTypes(collectionName, ast);
        ast.definitions.push(inputType);
        const field = parse(`
          type Mutation {
            func(id: String, input: ${type.name.value}Input, operationType: OPERATION_TYPE): ${type.name.value}
          }
        `).definitions[0].fields[0];

        node.arguments = node.arguments.concat(field.arguments);
        resolvers.Mutation[node.name.value] = write(collectionName, adapter, { ast, key: node.name.value });
      },
    },
  },
});

