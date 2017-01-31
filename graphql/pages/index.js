module.exports = (schema, { adapter, attributes, globalAttributes }) => {
  schema.addSchema({
    name: 'page',
    query: `
      page: Page @query
      pageList: [Page] @query
      global: Global @query
      globalList: [Global] @query
    `,
    mutation: `
      page: Page @mutate
      reorderPages(id: String, ids: [String], order: [Int]): [Page]
      global: Global @mutate
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
      type PageHeading {
        id: String
        text: String
        slug: String
        children: [PageHeading]
      }
      type Page @collection(name: "Page") @stamp @state {
        menu: String
        alias: Page @relation
        headings: [PageHeading]
        href: String
        parent: Page @relation(property: "children", type: "one-to-many")
        order: Int
        name: String
        description: String
        slug: String
        blocks: Json
        templateName: String
        templateData: Json
        showHeadings: Boolean
        ${attributes || ''}
      }
      type Global implements CollectionInterface @collection(name: "Global") @stamp @state {
        name: String
        title: String
        description: String
        tags: [String]
        ${globalAttributes || ''}
      }
    `,
  });

  setTimeout(() => {
    if (!adapter.client) return;
    const collection = adapter.client.collection('page');
    collection.findOne({ }).then((one) => {
      if (one) return;
      adapter.client.collection('page').insertOne(
        { id: require('shortid').generate(), name: 'Home', slug: '/', state: 'PUBLISHED' }
      );
    }).catch(err => console.log(err));
  }, 5000);
  setTimeout(() => {
    if (!adapter.client) return;
    const collection = adapter.client.collection('global');
    collection.findOne({ }).then((one) => {
      if (one) return;
      adapter.client.collection('global').insertOne(
        { id: require('shortid').generate(), name: 'Home', slug: '/', state: 'PUBLISHED' }
      );
    }).catch(err => console.log(err));
  }, 5000);
};
