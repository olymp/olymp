export default () => ({
  name: 'page',
  mutations: `
    reorderPages(ids: [String], parentId: String): [Page]
  `,
  resolvers: {
    mutations: {
      reorderPages: (source, { ids, parentId }, { db }) =>
        Promise.all(
          ids.map((id, order) =>
            db
              .collection('item')
              .updateOne({ id, _type: 'page' }, { $set: { order, parentId } })
              .then(() => ({ id, order, parentId })),
          ),
        ),
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
      image: Image
      toc: Json
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
      order: Int
      sorting: [String]
      alias: Page @relation
      state: DOCUMENT_STATE
      href: String
      parent: Page @relation(property: "children", type: "1-n")
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
