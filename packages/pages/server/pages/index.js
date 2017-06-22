export default () => ({
  name: 'page',
  mutations: `
    reorderPages(id: String, ids: [String], order: [Int]): [Page]
  `,
  resolvers: {
    mutations: {
      reorderPages: (source, args, { db }) =>
        Promise.all(
          args.ids.map((id, order) =>
            db.collection('page').update({ id }, { $set: { order } })
          )
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
    type Template @collection {
      id: String
      name: String
      text: String
    }
    type PageHeading {
      id: String
      text: String
      slug: String
      children: [PageHeading]
    }
    type PageGQL {
      id: String
      name: String
      attributes: [String]
      field: String
      prefix: String
    }
    type Page @collection {
      id: String
      type: PAGE_TYPE
      menu: String
      binding: String
      sorting: String
      aliasId: String
      alias: Page @relation
      gql: PageGQL
      headings: [PageHeading]
      href: String
      state: DOCUMENT_STATE
      parentId: String
      parent: Page @relation(property: "children", type: "1-n")
      order: Int
      name: String
      description: String
      slug: String
      blocks: Json
      text: String
      templateName: String
      templateData: Json
      showHeadings: Boolean
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
  }, 5000);*/
