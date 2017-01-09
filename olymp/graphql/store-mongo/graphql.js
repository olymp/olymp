const capitalize = require('lodash/upperFirst');

/* eslint-disable no-param-reassign */
module.exports = ({ moduleQueries, moduleResolvers, moduleMutations, key, tableName, adapter }) => {
  moduleQueries.push(`
    ${key}(id: String, slug: String): ${key}
    ${key}List(sort: [String], documentState: [DOCUMENT_STATE]): [${key}]
  `);
  moduleMutations.push(`
    ${key}(id: String, input: ${capitalize(key)}Input, operationType: OPERATION_TYPE): ${key}
  `);
  moduleResolvers.Query[key] = (root, args) => {
    if (args.slug) {
      return adapter.read(tableName, { filter: { slug: args.slug } });
    }
    return adapter.read(tableName, Object.assign({}, args, { }));
  };
  moduleResolvers.Query[`${key}List`] = (root, args) => {
    const filter = {};

    if (!args.documentState) {
      args.documentState = ['PUBLISHED'];
    }

    filter.state = { $in: args.documentState };
    if (args.documentState.indexOf('PUBLISHED') !== -1) filter.state.$in.push(null);

    return adapter.list(tableName, Object.assign({}, args, { filter }));
  };
  moduleResolvers.Mutation[key] = (root, args, { user, schema }) => {
    if (args.operationType && args.operationType === 'REMOVE') {
      return adapter.write(tableName, { id: args.id, state: 'REMOVED' }, { patch: true, stamp: user });
      // return adapter.remove(tableName, Object.assign({}, args));
    }
    if (args.input) {
      args = Object.assign({}, args, args.input);
      delete args.input;
    }
    delete args.operationType;
    if (!args.documentState) args.documentState = ['DRAFT'];

    /*Object.keys(args).filter(x => x.name !== 'Image').forEach((property) => {
      const type = schema._typeMap[key]._fields[property].type;
      if (type.constructor.name === 'GraphQLObjectType' && args[property] && args[property].id) {
        args[property] = args[property].id;
      }
    });*/
    return adapter.write(tableName, Object.assign({}, args), { stamp: user });
  };
};
