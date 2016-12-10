const defaultHook = (source, args, context) => {
  if (!context.user) throw new Error('Must be authenticated');
  return Promise.resolve(args);
};

module.exports = (schema, { adapter, Query, Mutation }) => {
  const theSchema = {
    name: 'page',
    query: `
      page: Page @resolve
      pageList: [Page] @resolve
    `,
    mutation: `
      page: Page @resolve
      reorderPages(id: String, ids: [String], order: [Int]): [Page]
    `,
    resolvers: {
      Query: {
        page: (source, args, context, info) => {
          if (args.slug) {
            return adapter.read('page', { filter: { slug: args.slug } });
          } return adapter.read('page', Object.assign({}, args, { }));
        },
        pageList: (source, args, context, info) => {
          // const attributes = fieldASTs[0].selectionSet.selections.map(x => x.name.value);
          return adapter.list('page', Object.assign({}, args, { }));
        },
      },
      Mutation: {
        page: (source, args, context) => {
          const hook = Mutation && Mutation.page ? Mutation.page : defaultHook;
          return hook(source, Object.assign({}, args), context).then((args) => {
            const { operationType } = args;
            delete args.operationType;

            if (operationType === 'REMOVE') {
              return adapter.remove('page', Object.assign({}, args));
            }
            if (args.input) {
              args = Object.assign({}, args, args.input);
              delete args.input;
            }

            return adapter.write('page', args, { patch: operationType === 'PATCH' });
          });
        },
        reorderPages: (source, args) => {
          // const attributes = fieldASTs[0].selectionSet.selections.map(x => x.name.value);
          return Promise.all(args.ids.map((id, order) => adapter.write('page', { id, order }, { patch: true })));
        },
      },
      Page: {
        parent: (source, args, context, info) => {
          if (!source || !source.parentId) return null;
          return adapter.read('page', Object.assign({}, args, { id: source.parentId }));
        },
      },
    },
    schema: `
      type Page @collection(name: "Page") @stamps {
        menu: String
        alias: Page @relation(type: "one-to-one")
        href: String
        parent: Page @relation(type: "one-to-one")
        order: Int
        name: String
        description: String
        slug: String
        blocks: Json
        templateName: String
        templateData: Json
      }
    `,
  };
  schema.addSchema(theSchema);
};
