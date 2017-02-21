const getProjection = require('./mongo-projection');
const { adaptQuery, adaptSort } = require('./mongo-query');
const { visit, BREAK } = require('graphql/language');
const ShortId = require('shortid');
const moment = require('moment');

/* const DataLoader = require('dataloader');

const loaders = {};
var userLoader = new DataLoader(ids => {
  var params = ids.map(id => '?' ).join();
  var query = `SELECT * FROM users WHERE id IN (${params})`;
  return queryLoader.load([query, ids]).then(
    rows => ids.map(
      id => rows.find(row => row.id === id) || new Error(`Row not found: ${id}`)
    )
  );
});

var queryLoader = new DataLoader(queries => new Promise(resolve => {
  var waitingOn = queries.length;
  var results = [];
  db.parallelize(() => {
    queries.forEach((query, index) => {
      db.all.apply(db, query.concat((error, result) => {
        results[index] = error || result;
        if (--waitingOn === 0) {
          resolve(results);
        }
      }));
    });
  });
}), { cache: false });*/

exports.list = (model, propertyKey, propertyKey2) => (source, args, context, fieldASTs) => {
  const { adapter, beforeHook, afterHook, ast } = context;
  const type = ast.definitions.find(x => x.name && x.name.value === model);
  const hookArgs = Object.assign({ model, propertyKey, type: 'QUERY' }, fieldASTs);
  return beforeHook(args, hookArgs).then((args) => {
    const projection = getProjection(fieldASTs);
    let cursor = adapter.db.collection(model.toLowerCase());
    if (source && propertyKey) {
      if (source[`${propertyKey}Ids`]) { // include xxxIds
        if (!args.query) args.query = {};
        delete args.query.id;
        args.query.id = { in: source[`${propertyKey}Ids`] };
      } else if (source.id && propertyKey2) { // include
        if (!args.query) args.query = {};
        delete args.query.id;
        args.query[`${propertyKey2}Id`] = { eq: source.id };
      } else return [];
    }
    if (args.query) cursor = cursor.find(adaptQuery(args.query), projection);
    else cursor = cursor.find({}, projection);
    if (args.sort) cursor = cursor.sort(adaptSort(args.sort));
    if (args.skip) cursor = cursor.skip(args.skip);
    if (args.limit) cursor = cursor.limit(args.limit);
    return afterHook(cursor.toArray(), hookArgs);
  });
};

exports.one = (model, propertyKey) => (source, args, context, fieldASTs) => {
  const { adapter, beforeHook, afterHook } = context;
  const collection = adapter.db.collection(model.toLowerCase());
  const hookArgs = Object.assign({ model, propertyKey, type: 'QUERY' }, fieldASTs);
  return beforeHook(args, hookArgs).then((args) => {
    const projection = getProjection(fieldASTs);
    let cursor = adapter.db.collection(model.toLowerCase());
    if (source && propertyKey) {
      if (!source[`${propertyKey}Id`]) return null;
      return afterHook(collection.findOne({ id: source[`${propertyKey}Id`] }, projection), hookArgs);
    }
    if (args.id && args.query) cursor.findOne(adaptQuery({ $and: [{ id: args.id }, args.query].filter(x => x) }), projection);
    else if (args.id) cursor = cursor.findOne({ id: args.id }, projection);
    else if (args.query) cursor = cursor.findOne(adaptQuery(args.query), projection);
    return afterHook(cursor, hookArgs);
  });
};

exports.write = model => (source, args, context, fieldASTs) => {
  const { beforeHook, afterHook, user, adapter, ast } = context;
  const collection = adapter.db.collection(model.toLowerCase());
  const hookArgs = Object.assign({ model, type: 'MUTATION' }, fieldASTs);
  return beforeHook(args, hookArgs).then((args) => {
    if (args.input) delete args.input.id;
    if (!args.type) args.type = args.id ? 'UPDATE' : 'INSERT';
    if (['UPDATE', 'REPLACE', 'REMOVE'].includes(args.type) && !args.id) throw new Error('Must provide id for operation');
    if (['UPDATE', 'REPLACE', 'INSERT'].includes(args.type) && !args.input) throw new Error('Must provide input for operation');
    if (args.type === 'INSERT' && args.id) throw new Error('Cannot use id on operation');
    let node;
    visit(ast, {
      enter(_node) {
        if (_node && _node.name && _node.kind.endsWith('TypeDefinition') && _node.name.value === model) {
          node = _node;
          return BREAK;
        } return undefined;
      },
    });

    const state = node.directives.find(x => x.name && x.name.value === 'state');
    const stamp = node.directives.find(x => x.name && x.name.value === 'stamp');
    if (stamp && args.input) {
      delete args.input.createdAt;
      delete args.input.updatedAt;
      delete args.input.createdBy;
      delete args.input.createdById;
      delete args.input.updatedBy;
      delete args.input.updatedById;
    }
    if (args.type === 'REMOVE' && state) {
      if (!args.id) throw new Error('You must provide an id to remove a document');
      const $set = { state: 'REMOVED' };
      if (stamp) $set.updatedAt = +moment();
      return collection.updateOne(
        { id: args.id },
        { $set }
      ).then(() => null);
    } else if (args.type === 'REMOVE') {
      if (!args.id) throw new Error('You must provide an id to remove a document');
      return collection.remove(
        { id: args.id },
        { justOne: true }
      ).then(() => null);
    }

    const promises = [];
    Object.keys(args.input || {}).forEach((key) => {
      const type = node.fields.find(({ name }) => name && name.value === key);
      if (!type) return;
      const relation = type.directives.find(x => x.name && x.name.value === 'relation');
      if (relation) {
        if (!args.input[key]) {
          args.input[`${key}Id`] = null;
        } else if (type.type.name) {
          console.log(type.type.name);
          promises.push(exports.write(type.type.name.value)(args, {
            input: args.input[key],
            id: args.input[key].id,
          }, context, fieldASTs).then((item) => {
            args.input[`${key}Id`] = item.id;
            delete args.input[key];
          }));
        }
      }
    });

    if (stamp) {
      args.input.updatedAt = +moment();
      if (stamp && context.user) args.input.updatedById = context.user.id;
      if (!args.id) {
        args.input.createdAt = +moment();
        if (stamp && context.user) args.input.createdById = context.user.id;
      }
    }
    return Promise.all(promises).then(() => {
      const query = { $and: [{ id: args.id }, args.query].filter(x => x) };
      if (args.type === 'UPDATE') {
        return collection.updateOne(query, { $set: args.input });
      } if (args.type === 'INSERT') {
        args.id = ShortId.generate();
        return collection.insertOne(Object.assign({}, args.input, { id: args.id }));
      } return collection.replaceOne(query, Object.assign({}, args.input, { id: args.id }));
    }).then((x1, x2) => {
      if (!fieldASTs || !args.id) return { id: args.id };
      return exports.one(model)(source, { id: args.id, query: args.query }, context, fieldASTs);
    });
  });
};


