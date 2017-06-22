import { get, set, lowerFirst } from 'lodash';
import { addFields } from 'olymp-graphql/server';

export default (ast, node, resolvers) => {
  const name = node.name.value;
  const table = lowerFirst(name);

  const Query = ast.definitions.find(
    x => x.name && x.name.value === 'RootQuery'
  );

  if (Query) {
    // Add list query
    addFields(
      ast,
      Query,
      `${table}List(query: ${name}Query, sort: ${name}Sort, limit: Int, skip: Int): [${name}]`
    );
    set(resolvers, `RootQuery.${table}List`, (source, args, { db }) =>
      db.collection(table).find({})
    );

    // Add one query
    addFields(
      ast,
      Query,
      `${table}(id: String, query: ${name}Query, sort: ${name}Sort): ${name}`
    );
    set(resolvers, `RootQuery.${table}`, (source, { id }, { db }) =>
      db.collection(table).find({ id })
    );
  }

  const Mutation = ast.definitions.find(
    x => x.name && x.name.value === 'RootMutation'
  );

  if (Mutation) {
    // Add mutation
    addFields(
      ast,
      Mutation,
      `${table}(id: String, type: MUTATION_TYPE, input: ${name}Input): ${name}`
    );
    set(
      resolvers,
      `RootMutation.${table}`,
      (source, { id, input, type }, { db }) => {
        if (!id) {
          db.collection(table).insert(input);
        } else if (type === 'REPLACE') {
          db.collection(table).update(input);
        } else {
          db.collection(table).update({ $set: input });
        }
      }
    );
  }
};
