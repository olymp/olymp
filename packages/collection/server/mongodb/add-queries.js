import { get, set, lowerFirst } from 'lodash';
import { addFields } from 'olymp-graphql/server';
import adaptQuery from './adapt-query';
import shortId from 'shortid';

export default (ast, node, resolvers) => {
  const name = node.name.value;
  const table = lowerFirst(name);

  const Query = ast.definitions.find(x => get(x, 'name.value') === 'RootQuery');

  if (Query) {
    // Add one query
    addFields(
      ast,
      Query,
      `${table}(id: String, query: ${name}Query, sort: ${name}Sort): ${name}`,
      { replace: false }
    );
    if (!get(resolvers, `RootQuery.${table}`)) {
      set(resolvers, `RootQuery.${table}`, (source, { id, query }, { db }) =>
        // db.collection(table).findOne(id ? { id } : adaptQuery(query))
        db.collection('item').findOne(id ? { id } : adaptQuery(query))
      );
    }

    // Add list query
    addFields(
      ast,
      Query,
      `${table}List(query: ${name}Query, sort: ${name}Sort, limit: Int, skip: Int): [${name}]`,
      { replace: false }
    );
    if (!get(resolvers, `RootQuery.${table}List`)) {
      set(
        resolvers,
        `RootQuery.${table}List`,
        (source, { query, sort }, { db, app }) =>
          // db.collection(table).find(adaptQuery(query))
          db
            .collection('item')
            .find(
              { ...adaptQuery(query), _type: table, _appId: app.id },
              { rawCursor: true }
            )
            .then((cursor) => {
              const obj = sort || { name: 'ASC' };
              const sorting = Object.keys(obj).reduce((store, key) => {
                store[key] = obj[key] === 'DESC' ? -1 : 1;
                return store;
              }, {});
              return cursor.sort(sorting).toArray();
            })
      );
    }
  }

  const Mutation = ast.definitions.find(
    x => get(x, 'name.value') === 'RootMutation'
  );

  if (Mutation) {
    // Add mutation
    addFields(
      ast,
      Mutation,
      `${table}(id: String, type: MUTATION_TYPE, input: ${name}Input): ${name}`,
      { replace: false }
    );
    if (!get(resolvers, `RootMutation.${table}`)) {
      set(
        resolvers,
        `RootMutation.${table}`,
        /* (source, { id, input, type }, { db }) => {
          if (!id) {
            db.collection(table).insert(input);
          } else if (type === 'REPLACE') {
            db.collection(table).update(input);
          } else {
            db.collection(table).update({ $set: input });
          }
        }*/
        (source, { id, input, type }, { db, app }) => {
          let promise;
          if (!id) {
            id = shortId.generate();
            promise = db
              .collection('item')
              .insert({ ...input, _type: table, _appId: app.id, id });
          } else if (type === 'REMOVE') {
            promise = db
              .collection('item')
              .update({ id }, { ...input, state: 'REMOVED' });
          } else if (type === 'REPLACE') {
            promise = db
              .collection('item')
              .update({ id }, { ...input, _type: table, _appId: app.id, id });
          } else {
            promise = db
              .collection('item')
              .update({ id }, { $set: { ...input } });
          }
          return promise.then(() => db.collection('item').findOne({ id }));
        }
      );
    }
  }
};
