import { get, set, lowerFirst } from 'lodash';
import { addFields } from 'olymp-graphql/server';
import adaptQuery from './adapt-query';
import shortId from 'shortid';

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
      { replace: false }
    );
    if (!get(resolvers, `RootQuery.${table}`)) {
      set(resolvers, `RootQuery.${table}`, (source, { id, query }, { monk, app }) => {
        const x = id ? { id } : adaptQuery(query);
        const q = isGeneric ? { ...x, _appId: app.id } : { ...x, _type: table, _appId: app.id };
        // monk.collection(table).findOne(id ? { id } : adaptQuery(query))
        return monk.collection('item').findOne(q);
      });
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
        (source, { query, sort }, { monk, app }) =>
          // monk.collection(table).find(adaptQuery(query))
          monk
            .collection('item')
            .find(
            isGeneric ? { ...adaptQuery(query), _appId: app.id } : { ...adaptQuery(query), _type: table, _appId: app.id },
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
        /* (source, { id, input, type }, { monk }) => {
          if (!id) {
            monk.collection(table).insert(input);
          } else if (type === 'REPLACE') {
            monk.collection(table).update(input);
          } else {
            monk.collection(table).update({ $set: input });
          }
        }*/
        (source, { id, input, type }, { monk, app }) => {
          let promise;
          if (!id) {
            id = shortId.generate();
            promise = monk
              .collection('item')
              .insert({ ...input, _type: table, _appId: app.id, id });
          } else if (type === 'REMOVE') {
            promise = monk
              .collection('item')
              .update({ _type: table, id }, { ...input, state: 'REMOVED' });
          } else if (type === 'REPLACE') {
            promise = monk
              .collection('item')
              .update({ _type: table, id }, { ...input, _type: table, _appId: app.id, id });
          } else {
            promise = monk
              .collection('item')
              .update({ _type: table, id }, { $set: { ...input } });
          }
          return promise.then(() => monk.collection('item').findOne({ id }));
        }
      );
    }
  }
};
