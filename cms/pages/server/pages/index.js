'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    name: 'page',
    mutations: '\n    reorderPages(ids: [String], parentId: String): [Page]\n  ',
    resolvers: {
      mutations: {
        reorderPages: function reorderPages(source, _ref, _ref2) {
          var ids = _ref.ids,
              parentId = _ref.parentId;
          var db = _ref2.db;
          return Promise.all(ids.map(function (id, order) {
            return db.collection('item').updateOne({ id: id, _type: 'page' }, { $set: { order: order, parentId: parentId } }).then(function () {
              return { id: id, order: order, parentId: parentId };
            });
          }));
        }
      }
    },
    schema: '\n    enum PAGE_TYPE {\n      PAGE\n      MENU\n      ALIAS\n      LINK\n      PLACEHOLDER\n    }\n    type Blocks {\n      nodes: Json\n      extract: String\n      text: String\n      title: String\n      image: Image\n      toc: Json\n    }\n    type PageBinding {\n      type: String\n      fields: [String]\n      query: Json\n    }\n    type Page @collection {\n      id: String\n      type: PAGE_TYPE\n      menu: String\n      isMega: Boolean\n      binding: PageBinding\n      order: Int\n      sorting: [String]\n      alias: Page @relation\n      state: DOCUMENT_STATE\n      href: String\n      parent: Page @relation(property: "children", type: "1-n")\n      name: String\n      description: String\n      slug: String\n      blocks: Blocks\n      text: String\n    }\n    type Settings @collection {\n      id: String\n      # @label("Titel")\n      title: String\n      # @label("Beschreibung")\n      description: String\n      # @label("Autor")\n      author: String\n      # @label("Schlagworte")\n      tags: [String]\n    }\n  '
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9zZXJ2ZXIvcGFnZXMvaW5kZXguZXM2Il0sIm5hbWVzIjpbIm5hbWUiLCJtdXRhdGlvbnMiLCJyZXNvbHZlcnMiLCJyZW9yZGVyUGFnZXMiLCJzb3VyY2UiLCJpZHMiLCJwYXJlbnRJZCIsImRiIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImlkIiwib3JkZXIiLCJjb2xsZWN0aW9uIiwidXBkYXRlT25lIiwiX3R5cGUiLCIkc2V0IiwidGhlbiIsInNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlO0FBQUEsU0FBTztBQUNwQkEsVUFBTSxNQURjO0FBRXBCQyxnRkFGb0I7QUFLcEJDLGVBQVc7QUFDVEQsaUJBQVc7QUFDVEUsc0JBQWMsc0JBQUNDLE1BQUQ7QUFBQSxjQUFXQyxHQUFYLFFBQVdBLEdBQVg7QUFBQSxjQUFnQkMsUUFBaEIsUUFBZ0JBLFFBQWhCO0FBQUEsY0FBOEJDLEVBQTlCLFNBQThCQSxFQUE5QjtBQUFBLGlCQUNaQyxRQUFRQyxHQUFSLENBQ0VKLElBQUlLLEdBQUosQ0FBUSxVQUFDQyxFQUFELEVBQUtDLEtBQUw7QUFBQSxtQkFDTkwsR0FDR00sVUFESCxDQUNjLE1BRGQsRUFFR0MsU0FGSCxDQUVhLEVBQUVILE1BQUYsRUFBTUksT0FBTyxNQUFiLEVBRmIsRUFFb0MsRUFBRUMsTUFBTSxFQUFFSixZQUFGLEVBQVNOLGtCQUFULEVBQVIsRUFGcEMsRUFHR1csSUFISCxDQUdRO0FBQUEscUJBQU8sRUFBRU4sTUFBRixFQUFNQyxZQUFOLEVBQWFOLGtCQUFiLEVBQVA7QUFBQSxhQUhSLENBRE07QUFBQSxXQUFSLENBREYsQ0FEWTtBQUFBO0FBREw7QUFERixLQUxTO0FBa0JwQlk7QUFsQm9CLEdBQVA7QUFBQSxDOztBQXVFZiIsImZpbGUiOiJjbXMvcGFnZXMvc2VydmVyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgbmFtZTogJ3BhZ2UnLFxuICBtdXRhdGlvbnM6IGBcbiAgICByZW9yZGVyUGFnZXMoaWRzOiBbU3RyaW5nXSwgcGFyZW50SWQ6IFN0cmluZyk6IFtQYWdlXVxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgIHJlb3JkZXJQYWdlczogKHNvdXJjZSwgeyBpZHMsIHBhcmVudElkIH0sIHsgZGIgfSkgPT5cbiAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgaWRzLm1hcCgoaWQsIG9yZGVyKSA9PlxuICAgICAgICAgICAgZGJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgICAgICAudXBkYXRlT25lKHsgaWQsIF90eXBlOiAncGFnZScgfSwgeyAkc2V0OiB7IG9yZGVyLCBwYXJlbnRJZCB9IH0pXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+ICh7IGlkLCBvcmRlciwgcGFyZW50SWQgfSkpLFxuICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgfSxcbiAgfSxcbiAgc2NoZW1hOiBgXG4gICAgZW51bSBQQUdFX1RZUEUge1xuICAgICAgUEFHRVxuICAgICAgTUVOVVxuICAgICAgQUxJQVNcbiAgICAgIExJTktcbiAgICAgIFBMQUNFSE9MREVSXG4gICAgfVxuICAgIHR5cGUgQmxvY2tzIHtcbiAgICAgIG5vZGVzOiBKc29uXG4gICAgICBleHRyYWN0OiBTdHJpbmdcbiAgICAgIHRleHQ6IFN0cmluZ1xuICAgICAgdGl0bGU6IFN0cmluZ1xuICAgICAgaW1hZ2U6IEltYWdlXG4gICAgICB0b2M6IEpzb25cbiAgICB9XG4gICAgdHlwZSBQYWdlQmluZGluZyB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIGZpZWxkczogW1N0cmluZ11cbiAgICAgIHF1ZXJ5OiBKc29uXG4gICAgfVxuICAgIHR5cGUgUGFnZSBAY29sbGVjdGlvbiB7XG4gICAgICBpZDogU3RyaW5nXG4gICAgICB0eXBlOiBQQUdFX1RZUEVcbiAgICAgIG1lbnU6IFN0cmluZ1xuICAgICAgaXNNZWdhOiBCb29sZWFuXG4gICAgICBiaW5kaW5nOiBQYWdlQmluZGluZ1xuICAgICAgb3JkZXI6IEludFxuICAgICAgc29ydGluZzogW1N0cmluZ11cbiAgICAgIGFsaWFzOiBQYWdlIEByZWxhdGlvblxuICAgICAgc3RhdGU6IERPQ1VNRU5UX1NUQVRFXG4gICAgICBocmVmOiBTdHJpbmdcbiAgICAgIHBhcmVudDogUGFnZSBAcmVsYXRpb24ocHJvcGVydHk6IFwiY2hpbGRyZW5cIiwgdHlwZTogXCIxLW5cIilcbiAgICAgIG5hbWU6IFN0cmluZ1xuICAgICAgZGVzY3JpcHRpb246IFN0cmluZ1xuICAgICAgc2x1ZzogU3RyaW5nXG4gICAgICBibG9ja3M6IEJsb2Nrc1xuICAgICAgdGV4dDogU3RyaW5nXG4gICAgfVxuICAgIHR5cGUgU2V0dGluZ3MgQGNvbGxlY3Rpb24ge1xuICAgICAgaWQ6IFN0cmluZ1xuICAgICAgIyBAbGFiZWwoXCJUaXRlbFwiKVxuICAgICAgdGl0bGU6IFN0cmluZ1xuICAgICAgIyBAbGFiZWwoXCJCZXNjaHJlaWJ1bmdcIilcbiAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICAgICMgQGxhYmVsKFwiQXV0b3JcIilcbiAgICAgIGF1dGhvcjogU3RyaW5nXG4gICAgICAjIEBsYWJlbChcIlNjaGxhZ3dvcnRlXCIpXG4gICAgICB0YWdzOiBbU3RyaW5nXVxuICAgIH1cbiAgYCxcbn0pO1xuXG4vKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWFkYXB0ZXIuY2xpZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhZGFwdGVyLmNsaWVudC5jb2xsZWN0aW9uKCdwYWdlJyk7XG4gICAgY29sbGVjdGlvblxuICAgICAgLmZpbmRPbmUoe30pXG4gICAgICAudGhlbigob25lKSA9PiB7XG4gICAgICAgIGlmIChvbmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWRhcHRlci5jbGllbnQuY29sbGVjdGlvbigncGFnZScpLmluc2VydE9uZSh7XG4gICAgICAgICAgaWQ6IHJlcXVpcmUoJ3Nob3J0aWQnKS5nZW5lcmF0ZSgpLFxuICAgICAgICAgIG5hbWU6ICdIb21lJyxcbiAgICAgICAgICBzbHVnOiAnLycsXG4gICAgICAgICAgc3RhdGU6ICdQVUJMSVNIRUQnLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9LCA1MDAwKTsgKi9cbiJdfQ==
