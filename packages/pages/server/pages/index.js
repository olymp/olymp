export default function () { return ({
    name: 'page',
    mutations: "\n    reorderPages(id: String, ids: [String], order: [Int]): [Page]\n  ",
    resolvers: {
        mutations: {
            reorderPages: function (source, args, _a) {
                var monk = _a.monk;
                return Promise.all(args.ids.map(function (id, order) {
                    return monk.collection('page').update({ id: id }, { $set: { order: order } });
                }));
            },
        },
    },
    schema: "\n    enum PAGE_TYPE {\n      PAGE\n      MENU\n      ALIAS\n      LINK\n      PLACEHOLDER\n    }\n    type Template @collection {\n      id: String\n      name: String\n      text: String\n    }\n    type PageHeading {\n      id: String\n      text: String\n      slug: String\n      children: [PageHeading]\n    }\n    type PageGQL {\n      id: String\n      name: String\n      attributes: [String]\n      field: String\n      prefix: String\n    }\n    type PageBinding {\n      id: String\n      type: String\n      fields: [String]\n      query: Json\n    }\n    type Page @collection {\n      id: String\n      type: PAGE_TYPE\n      menu: String\n      binding: PageBinding\n      sorting: [String]\n      alias: Page @relation\n      gql: PageGQL\n      headings: [PageHeading]\n      href: String\n      state: DOCUMENT_STATE\n      parent: Page @relation(property: \"children\", type: \"1-n\")\n      order: Int\n      name: String\n      description: String\n      slug: String\n      blocks: Blocks\n      text: String\n    }\n    type Settings @collection {\n      id: String\n      # @label(\"Titel\")\n      title: String\n      # @label(\"Beschreibung\")\n      description: String\n      # @label(\"Autor\")\n      author: String\n      # @label(\"Schlagworte\")\n      tags: [String]\n    }\n  ",
}); };
//# sourceMappingURL=index.js.map