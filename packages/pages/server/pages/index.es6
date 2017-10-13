export default () => ({
  name: 'page',
  mutations: `
    reorderPages(id: String, ids: [String], order: [Int]): [Page]
  `,
  resolvers: {
    mutations: {
      reorderPages: (source, args, { monk }) =>
        Promise.all(args.ids.map((id, order) => monk.collection('page').update({ id }, { $set: { order } })), ),
    },
  },
  schema: `
    enum PAGE_TYPE {
      PAGE
      MENU
      ALIAS
      LINK
      PLACEHOLDER
    }
    type Blocks {
      nodes: Json
      extract: String
      text: String
      title: String
      image: String
      chapters: [String]
    }
    type PageBinding {
      type: String
      fields: [String]
      query: Json
    }
    type Page @collection {
      id: String
      type: PAGE_TYPE
      menu: String
      isMega: Boolean
      binding: PageBinding
      sorting: [String]
      alias: Page @relation
      state: DOCUMENT_STATE
      href: String
      parent: Page @relation(property: "children", type: "1-n")
      order: Int
      name: String
      description: String
      slug: String
      blocks: Blocks
      text: String
    }
    type Settings @collection {
      id: String
      # @label("Titel")
      title: String
      # @label("Beschreibung")
      description: String
      # @label("Autor")
      author: String
      # @label("Schlagworte")
      tags: [String]
    }
  `,
});

/* setTimeout(() => {
    if (!adapter.client) {
      return;
    }
    const collection = adapter.client.collection('page');
    collection
      .findOne({})
      .then((one) => {
        if (one) {
          return;
        }
        adapter.client.collection('page').insertOne({
          id: require('shortid').generate(),
          name: 'Home',
          slug: '/',
          state: 'PUBLISHED',
        });
      })
      .catch(err => console.log(err));
  }, 5000); */
