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
  const hookArgs = Object.assign({ model, propertyKey, isMutation: false }, fieldASTs);
  return beforeHook(args, hookArgs).then((args) => {
    const projection = getProjection(fieldASTs);
    /*const include = {};
    Object.keys(projection).map((key) => {
      const field = type.fields.find(x => x.name && x.name.value === key);
      if (field) {
        const relation = field.directives.find(x => x.name && x.name.value === 'relation');
        if (relation) {
          const arg = relation.arguments.find(x => x.name && x.name.value === 'ignore');
          if (arg) include[key] = field.type;
        }
      }
    });*/
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
  const hookArgs = Object.assign({ model, propertyKey, isMutation: false }, fieldASTs);
  return beforeHook(args, hookArgs).then((args) => {
    const projection = getProjection(fieldASTs);
    let cursor = adapter.db.collection(model.toLowerCase());
    if (source && propertyKey) {
      if (source[`${propertyKey}Id`]) return cursor.findOne({ id: source[`${propertyKey}Id`] }, projection);
      return null;
    }
    if (args.id) cursor = cursor.findOne({ id: args.id }, projection);
    else if (args.query) cursor = cursor.findOne(adaptQuery(args.query), projection);
    return afterHook(cursor, hookArgs);
  });
};

exports.write = model => (source, args, context, fieldASTs) => {
  const { beforeHook, afterHook, user, adapter, ast } = context;
  const hookArgs = Object.assign({ model, isMutation: true }, fieldASTs);
  return beforeHook(args, hookArgs).then((args) => {
    if (!args.operationType) args.operationType = 'PATCH';
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
    if (args.operationType === 'REMOVE' && state) {
      if (!args.id) throw new Error('You must provide an id to remove a document');
      const $set = { state: 'REMOVED' };
      if (stamp) $set.updatedAt = parseInt(moment().format('x'));
      return adapter.db.collection(model.toLowerCase()).updateOne(
        { id: args.id },
        { $set }
      ).then(() => null);
    } else if (args.operationType === 'REMOVE' || args.operationType === 'FORCE_REMOVE') {
      if (!args.id) throw new Error('You must provide an id to remove a document');
      return adapter.db.collection(model.toLowerCase()).remove(
        { id: args.id },
        { justOne: true }
      ).then(() => null);
    }

    const promises = [];
    Object.keys(args.input || {}).forEach((key) => {
      const type = node.fields.find(({ name }) => name && name.value === key);
      const relation = type.directives.find(x => x.name && x.name.value === 'relation');
      if (relation) {
        if (!args.input[key]) {
          args.input[`${key}Id`] = null;
        } else if (type.type.name) {
          promises.push(write(type.type.name.value)(args, {
            input: args.input[key],
            operationType: args.operationType,
            id: args.input[key].id,
          }, context, fieldASTs).then((item) => {
            args.input[`${key}Id`] = item.id;
            delete args.input[key];
          }));
        }
      }
    });

    if (stamp) {
      args.input.updatedAt = parseInt(moment().format('x'));
      if (stamp && context.user) args.input.updatedById = context.user.id;
      if (!args.id) {
        args.input.createdAt = parseInt(moment().format('x'));
        if (stamp && context.user) args.input.createdById = context.user.id;
      }
    }
    const then = () => {
      if (fieldASTs) return exports.one(model, adapter, { ast })(source, args, context, fieldASTs);
      return { id: args.id };
    };
    if (!args.id) args.id = ShortId.generate();
    args.input.id = args.id;
    if (args.operationType === 'PATCH' && args.id) {
      return Promise.all(promises).then(() => {
        return adapter.db.collection(model.toLowerCase()).updateOne(
          { id: args.id },
          { $set: args.input },
          { upsert: true }
        );
      }).then(then);
    }
    return Promise.all(promises).then(() => {
      return adapter.db.collection(model.toLowerCase()).replaceOne(
        { id: args.id },
        args.input,
        { upsert: true }
      );
    }).then(then);
  });
};


