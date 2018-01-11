import { get, set, lowerFirst } from 'lodash';
import { addFields } from 'olymp-graphql/server';
import shortId from 'shortid';
import adaptQuery from './adapt-query';

export default (ast, node, resolvers, typeName, isGeneric) => {
  const name = node.name.value;
  const table = lowerFirst(typeName || name);

  const Query = ast.definitions.find(x => get(x, 'name.value') === 'RootQuery');

  if (Query) {
    // Add one query
    addFields(
      ast,
      Query,
      `${table}(id: String, query: ${name}Query, sort: ${name}Sort): ${name}`,
      {
        replace: false,
      },
    );
    if (!get(resolvers, `RootQuery.${table}`)) {
      set(
        resolvers,
        `RootQuery.${table}`,
        (source, { id, query }, { db, app }) => {
          const x = id ? { id } : adaptQuery(query);
          const q = isGeneric
            ? { ...x, _appId: app.id }
            : { ...x, _type: table, _appId: app.id };
          // db.collection(table).findOne(id ? { id } : adaptQuery(query))
          return db.collection('item').findOne(q);
        },
      );
    }

    // Add list query
    addFields(
      ast,
      Query,
      `${table}List(query: ${name}Query, sort: ${name}Sort, limit: Int, skip: Int): [${name}]`,
      { replace: false },
    );
    if (!get(resolvers, `RootQuery.${table}List`)) {
      set(
        resolvers,
        `RootQuery.${table}List`,
        (source, { query, sort, limit, skip }, { db, app }) => {

          const obj = sort || { name: 'ASC' };
          const sorting = Object.keys(obj).reduce((store, key) => {
            store[key] = obj[key] === 'DESC' ? -1 : 1;
            return store;
          }, {});
          return db
            .collection('item')
            .find(
              isGeneric
                ? { ...adaptQuery(query), _appId: app.id }
                : { ...adaptQuery(query), _type: table, _appId: app.id },
            )
            // .sort(sorting)
            // .limit(limit || 100)
            // .skip(skip || 0)
            .toArray()
        }
      );
    }
  }

  const Mutation = ast.definitions.find(
    x => get(x, 'name.value') === 'RootMutation',
  );

  if (Mutation) {
    // Add mutation
    addFields(
      ast,
      Mutation,
      `${table}(id: String, type: MUTATION_TYPE, input: ${name}Input): ${name}`,
      { replace: false },
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
        } */
        (source, { id, input, type }, { db, app }) => {
          let promise;
          if (!id) {
            id = shortId.generate();
            promise = db
              .collection('item')
              .insertOne({ ...input, _type: table, _appId: app.id, id });
          } else if (type === 'REMOVE') {
            promise = db
              .collection('item')
              .updateOne({ _type: table, id }, { ...input, state: 'REMOVED' });
          } else if (type === 'REPLACE') {
            promise = db
              .collection('item')
              .updateOne(
                { _type: table, id },
                { ...input, _type: table, _appId: app.id, id },
              );
          } else {
            promise = db
              .collection('item')
              .updateOne({ _type: table, id }, { $set: { ...input } });
          }
          return promise.then(() =>
            db.collection('item').findOne({ id, _type: table }),
          );
        },
      );
    }
  }
};
