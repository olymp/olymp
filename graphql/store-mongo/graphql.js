/* eslint-disable no-param-reassign */
module.exports = ({ moduleQueries, moduleResolvers, moduleMutations, key, tableName, adapter }) => {
  moduleQueries.push(`
    ${key}(id: String, slug: String): ${key}
    ${key}List(sort: [String], documentState: DOCUMENT_STATE): [${key}]
  `);
  moduleMutations.push(`
    ${key}(id: String, input: ${key}Input, operationType: OPERATION_TYPE): ${key}
  `);
  moduleResolvers.Query[key] = (source, args, x, { fieldASTs }) => {
    const attributes = fieldASTs[0].selectionSet.selections.map(x => x.name.value);
    if (args.slug) {
      return adapter.read(tableName, { filter: { slug: args.slug }, attributes });
    }
    return adapter.read(tableName, Object.assign({}, args, { attributes }));
  };
  moduleResolvers.Query[`${key}List`] = (source, args, x, { fieldASTs }) => {
    const attributes = fieldASTs[0].selectionSet.selections.map(x => x.name.value);
    const filter = {};
    if (args.documentState) filter.state = args.documentState;
    else filter.$or = [{ state: null }, { state: 'PUBLISHED' }];
    return adapter.list(tableName, Object.assign({}, args, { attributes, filter }));
  };
  moduleResolvers.Mutation[key] = (source, args, x, { fieldASTs }, x2, x3, x4) => {
    const attributes = fieldASTs[0].selectionSet.selections.map(x => x.name.value);
    if (args.operationType && args.operationType === 'REMOVE') {
      return adapter.write(tableName, { id: args.id, state: 'REMOVED' }, { patch: true });
      // return adapter.remove(tableName, Object.assign({}, args));
    }
    if (args.input) {
      args = Object.assign({}, args, args.input);
      delete args.input;
    }
    delete args.operationType;
    if (!args.documentState) args.documentState = 'DRAFT';
    return adapter.write(tableName, Object.assign({}, args), { attributes });
  };
};
