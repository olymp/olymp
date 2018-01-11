const {
  addFields,
  addArguments,
  createTypeFetcher,
} = require('olymp-graphql/server');
const { get, set, lowerFirst } = require('lodash');

export default {
  // aggregation
  name: 'relation',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter(node, directive, { resolvers, parent, ancestors, ast }) {
      const isList = node.type.kind === 'ListType';
      const type = isList ? node.type.type : node.type;

      const argProperty =
        directive.arguments.length &&
        directive.arguments.find(x => x.name.value === 'property');
      const argRelationType =
        directive.arguments.length &&
        directive.arguments.find(x => x.name.value === 'type');
      const relationType = get(
        argRelationType,
        'value.value',
        isList ? '1-n' : '1-1',
      );

      const leftType = ancestors[ancestors.length - 1].name.value;
      const leftTable = ancestors[
        ancestors.length - 1
      ].name.value.toLowerCase();
      const leftField = node.name.value;
      const leftNode = parent;
      const rightType = type.name.value;
      const rightTable = type.name.value.toLowerCase();
      const rightField =
        get(argProperty, 'value.value') || lowerFirst(leftTable);
      const rightNode = createTypeFetcher(
        node =>
          get(node, 'name.value') === rightType &&
          get(node, 'kind') === 'ObjectTypeDefinition',
      )(ast);

      // one-to-one / one-to-many
      // Only add xxxId field to store/access the id
      if (relationType === '1-1') {
        addFields(ast, leftNode, `${leftField}Id: String`);
        if (rightType === 'User') {
          set(resolvers, `${leftType}.${leftField}`, (source, args, { db }) =>
            db.collection(rightTable).findOne({
              id: source[`${leftField}Id`],
            }),
          );
        } else {
          set(resolvers, `${leftType}.${leftField}`, (source, args, { db }) =>
            db.collection('item').findOne({
              id: source[`${leftField}Id`],
              _type: rightTable,
            }),
          );
        }
      } else if (relationType === 'embedsMany') {
        addFields(ast, leftNode, `${leftField}Ids: [String]`);
        set(
          resolvers,
          `${leftType}.${leftField}`,
          (source, args, { db }) =>
            source[`${leftField}Ids`] &&
            db
              .collection('item')
              .find({
                id: { $in: source[`${leftField}Ids`] || [] },
                _type: rightTable,
              })
              .toArray(),
        );
      } else if (relationType === '1-n') {
        // Add list accessor and xxxIds field since dealing with many
        // addInputTypes(rightTable, ast);
        /* addArguments(
          ast,
          node,
          `query: ${rightType}Query, sort: ${rightType}Sort, limit: Int, skip: Int`
        ); */
        addFields(ast, leftNode, `${leftField}Id: String`);
        if (rightType === 'User') {
          set(resolvers, `${leftType}.${leftField}`, (source, args, { db }) =>
            db.collection(rightTable).findOne({
              id: source[`${leftField}Id`],
            }),
          );
        } else {
          set(resolvers, `${leftType}.${leftField}`, (source, args, { db }) =>
            db.collection('item').findOne({
              id: source[`${leftField}Id`],
              _type: rightTable,
            }),
          );
        }
        addFields(ast, rightNode, `${rightField}: [${leftType}]`);
        set(resolvers, `${rightType}.${rightField}`, (source, args, { db }) =>
          db
            .collection('item')
            .find({
              [`${leftField}Id`]: source.id,
              _type: leftTable,
            })
            .toArray(),
        );
      }

      /* if (rightField) {
        const rightNode = ast.definitions.find(
          x => x.name && x.name.value === node.type.name.value
        );

        if (relationType === '1-n') {
          addFields(ast, rightNode, `${rightField}: [${leftType}]`);
          set(resolvers, `${rightType}.${rightField}`, (source, args, { db }) =>
            db.collection(leftTable).find({}).toArray()
          );
        } else if (relationType === '1-1') {
          addFields(ast, rightNode, `${rightField}: ${leftType}`);
          set(resolvers, `${rightType}.${rightField}`, (source, args, { db }) =>
            db.collection(leftTable).findOne({})
          );
        }
      } */
    },
  },
};
