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
      before: (args, { model, isMutation }, { user }) => {
        if (isMutation && model === 'Page' && !user) {
          throw new Error('Please log in');
        }
      },
    },
    schema: `
      enum PAGE_TYPE {
        DEFAULT
        CHAPTERS
        ALIAS
        LINK
      }
      type Page @collection(name: "Page") @stamp @state {
        menu: String
        alias: Page @relation
        href: String
        parent: Page @relation(property: "children", type: "one-to-many")
        order: Int
        name: String
        description: String
        slug: String
        blocks: Json
        templateName: String
        templateData: Json
        type: PAGE_TYPE
      }
    `,
  });

  /*const db = server.adapter.client;
  server.auth.register({ email: 'bkniffler@me.com', name: 'Benjamin Kniffler' }, 'asd').then(({ token }) => {
    server.auth.confirm(token);
  });*/
  setTimeout(() => {
    const collection = adapter.client.collection('page');
    collection.findOne({ }).then((one) => {
      if (one) return;
      adapter.client.collection('page').insertOne(
        { id: require('shortid').generate(), slug: '/', state: 'PUBLISHED' }
      );
    }).catch(err => console.log(err));
  }, 3000);
};
