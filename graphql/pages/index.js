module.exports = (schema, { adapter }) => {
  schema.addSchema({
    name: 'page',
    query: `
      page: Page @query
      pageList: [Page] @query
    `,
    mutation: `
      page: Page @mutate
      reorderPages(id: String, ids: [String], order: [Int]): [Page]
    `,
    resolvers: {
      Mutation: {
        reorderPages: (source, args) => {
          return Promise.all(args.ids.map((id, order) => adapter.write('page', { id, order }, { patch: true })));
        },
      },
    },
    hooks: {
      before: (model, isMutation, args, { user }) => {
        if (isMutation && model === 'Page' && !user) {
          throw new Error('Please log in');
        }
      },
    },
    schema: `
      type Page @collection(name: "Page") @stamp @state {
        menu: String
        alias: Page @relation
        href: String
        parent: Page @relation
        order: Int
        name: String
        description: String
        slug: String
        blocks: Json
        templateName: String
        templateData: Json
      }
    `,
  });
};
