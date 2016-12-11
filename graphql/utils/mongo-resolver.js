import getProjection from './mongo-projection';
import { adaptQuery, adaptSort } from './mongo-query';
const { visit, BREAK } = require('graphql/language');
const ShortId = require('shortid');

export const list = (model, adapter) => (source, args, context, fieldASTs) => {
  const projection = getProjection(fieldASTs);
  let cursor = adapter.db.collection(model.toLowerCase());
  if (args.query) cursor = cursor.find(adaptQuery(args.query), projection);
  if (args.sort) cursor = cursor.sort(adaptSort(args.sort));
  return cursor.toArray();
};

export const one = (model, adapter, { key } = {}) => (source, args, context, fieldASTs) => {
  const projection = getProjection(fieldASTs);
  let cursor = adapter.db.collection(model.toLowerCase());
  if (source && key) {
    if (source[`${key}Id`]) return cursor.findOne({ id: source[`${key}Id`] }, projection);
    return null;
  }
  if (args.id) cursor = cursor.findOne({ id: args.id }, projection);
  if (args.query) cursor = cursor.findOne(adaptQuery(args.query), projection);
  return cursor;
};

export const write = (model, adapter, { ast } = {}) => (source, args, context, fieldASTs) => {
  if (!args.operationType) args.operationType = 'PATCH';
  let schema;
  visit(ast, {
    enter(node) {
      if (node.kind.endsWith('TypeDefinition') && node.name && node.name.value === model) {
        schema = node;
        return BREAK;
      } return undefined;
    },
  });

  const softd = schema.directives.find(x => x.name.value === 'softdelete');
  if (args.operationType === 'REMOVE' && softd) {
    if (!args.id) throw new Error('You must provide an id to remove a document');
    return adapter.db.collection(model.toLowerCase()).updateOne(
      { id: args.id },
      { $set: { state: 'REMOVED' } }
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
    const type = schema.fields.find(({ name }) => name.value === key);
    const relation = type.directives.find(x => x.name.value === 'relation');
    if (relation) {
      if (!args.input[key]) {
        args.input[`${key}Id`] = null;
      } else {
        promises.push(write(type.type.name.value, adapter, { ast })(args, {
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

  const then = () => {
    if (fieldASTs) return one(model, adapter, { ast })(source, args, context, fieldASTs);
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
};

