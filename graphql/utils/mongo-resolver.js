import getProjection from './mongo-projection';
import { adaptQuery, adaptSort } from './mongo-query';
const { visit, BREAK } = require('graphql/language');
const ShortId = require('shortid');
const moment = require('moment');

export const list = model => (source, args, context, fieldASTs) => {
  const { adapter, beforeQuery, afterQuery } = context;
  return beforeQuery(model, args).then((args) => {
    const projection = getProjection(fieldASTs);
    let cursor = adapter.db.collection(model.toLowerCase());
    if (args.query) cursor = cursor.find(adaptQuery(args.query), projection);
    else cursor = cursor.find({}, projection);
    if (args.sort) cursor = cursor.sort(adaptSort(args.sort));
    return afterQuery(model, cursor.toArray());
  });
};

export const one = (model, propertyKey) => (source, args, context, fieldASTs) => {
  console.log('mongo-resolver', model, propertyKey);
  const { adapter, beforeQuery, afterQuery } = context;
  return beforeQuery(model, args).then((args) => {
    const projection = getProjection(fieldASTs);
    console.log(projection);
    let cursor = adapter.db.collection(model.toLowerCase());
    if (source && propertyKey) {
      if (source[`${propertyKey}Id`]) return cursor.findOne({ id: source[`${propertyKey}Id`] }, projection);
      return null;
    }
    if (args.id) cursor = cursor.findOne({ id: args.id }, projection);
    if (args.query) cursor = cursor.findOne(adaptQuery(args.query), projection);
    return afterQuery(model, cursor).then(x => {
      console.log(x);
      return x;
    });
  });
};

export const write = model => (source, args, context, fieldASTs) => {
  const { beforeMutation, afterMutation, user, adapter, ast } = context;

  return beforeMutation(model, args).then((args) => {
    if (!args.operationType) args.operationType = 'PATCH';
    let node;
    visit(ast, {
      enter(_node) {
        if (_node.kind.endsWith('TypeDefinition') && _node.name && _node.name.value === model) {
          node = _node;
          return BREAK;
        } return undefined;
      },
    });

    const state = node.directives.find(x => x.name.value === 'state');
    const stamp = node.directives.find(x => x.name.value === 'stamp');
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
      const type = node.fields.find(({ name }) => name.value === key);
      const relation = type.directives.find(x => x.name.value === 'relation');
      if (relation) {
        if (!args.input[key]) {
          args.input[`${key}Id`] = null;
        } else {
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
  });
};


