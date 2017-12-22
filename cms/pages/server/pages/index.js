export default (function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL3NlcnZlci9wYWdlcy9pbmRleC5lczYiXSwibmFtZXMiOlsibmFtZSIsIm11dGF0aW9ucyIsInJlc29sdmVycyIsInJlb3JkZXJQYWdlcyIsInNvdXJjZSIsImlkcyIsInBhcmVudElkIiwiZGIiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaWQiLCJvcmRlciIsImNvbGxlY3Rpb24iLCJ1cGRhdGVPbmUiLCJfdHlwZSIsIiRzZXQiLCJ0aGVuIiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZTtBQUFBLFNBQU87QUFDcEJBLFVBQU0sTUFEYztBQUVwQkMsZ0ZBRm9CO0FBS3BCQyxlQUFXO0FBQ1RELGlCQUFXO0FBQ1RFLHNCQUFjLHNCQUFDQyxNQUFEO0FBQUEsY0FBV0MsR0FBWCxRQUFXQSxHQUFYO0FBQUEsY0FBZ0JDLFFBQWhCLFFBQWdCQSxRQUFoQjtBQUFBLGNBQThCQyxFQUE5QixTQUE4QkEsRUFBOUI7QUFBQSxpQkFDWkMsUUFBUUMsR0FBUixDQUNFSixJQUFJSyxHQUFKLENBQVEsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMO0FBQUEsbUJBQ05MLEdBQ0dNLFVBREgsQ0FDYyxNQURkLEVBRUdDLFNBRkgsQ0FFYSxFQUFFSCxNQUFGLEVBQU1JLE9BQU8sTUFBYixFQUZiLEVBRW9DLEVBQUVDLE1BQU0sRUFBRUosWUFBRixFQUFTTixrQkFBVCxFQUFSLEVBRnBDLEVBR0dXLElBSEgsQ0FHUTtBQUFBLHFCQUFPLEVBQUVOLE1BQUYsRUFBTUMsWUFBTixFQUFhTixrQkFBYixFQUFQO0FBQUEsYUFIUixDQURNO0FBQUEsV0FBUixDQURGLENBRFk7QUFBQTtBQURMO0FBREYsS0FMUztBQWtCcEJZO0FBbEJvQixHQUFQO0FBQUEsQ0FBZjs7QUF1RUEiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvc2VydmVyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgbmFtZTogJ3BhZ2UnLFxuICBtdXRhdGlvbnM6IGBcbiAgICByZW9yZGVyUGFnZXMoaWRzOiBbU3RyaW5nXSwgcGFyZW50SWQ6IFN0cmluZyk6IFtQYWdlXVxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgIHJlb3JkZXJQYWdlczogKHNvdXJjZSwgeyBpZHMsIHBhcmVudElkIH0sIHsgZGIgfSkgPT5cbiAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgaWRzLm1hcCgoaWQsIG9yZGVyKSA9PlxuICAgICAgICAgICAgZGJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgICAgICAudXBkYXRlT25lKHsgaWQsIF90eXBlOiAncGFnZScgfSwgeyAkc2V0OiB7IG9yZGVyLCBwYXJlbnRJZCB9IH0pXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+ICh7IGlkLCBvcmRlciwgcGFyZW50SWQgfSkpLFxuICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgfSxcbiAgfSxcbiAgc2NoZW1hOiBgXG4gICAgZW51bSBQQUdFX1RZUEUge1xuICAgICAgUEFHRVxuICAgICAgTUVOVVxuICAgICAgQUxJQVNcbiAgICAgIExJTktcbiAgICAgIFBMQUNFSE9MREVSXG4gICAgfVxuICAgIHR5cGUgQmxvY2tzIHtcbiAgICAgIG5vZGVzOiBKc29uXG4gICAgICBleHRyYWN0OiBTdHJpbmdcbiAgICAgIHRleHQ6IFN0cmluZ1xuICAgICAgdGl0bGU6IFN0cmluZ1xuICAgICAgaW1hZ2U6IEltYWdlXG4gICAgICB0b2M6IEpzb25cbiAgICB9XG4gICAgdHlwZSBQYWdlQmluZGluZyB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIGZpZWxkczogW1N0cmluZ11cbiAgICAgIHF1ZXJ5OiBKc29uXG4gICAgfVxuICAgIHR5cGUgUGFnZSBAY29sbGVjdGlvbiB7XG4gICAgICBpZDogU3RyaW5nXG4gICAgICB0eXBlOiBQQUdFX1RZUEVcbiAgICAgIG1lbnU6IFN0cmluZ1xuICAgICAgaXNNZWdhOiBCb29sZWFuXG4gICAgICBiaW5kaW5nOiBQYWdlQmluZGluZ1xuICAgICAgb3JkZXI6IEludFxuICAgICAgc29ydGluZzogW1N0cmluZ11cbiAgICAgIGFsaWFzOiBQYWdlIEByZWxhdGlvblxuICAgICAgc3RhdGU6IERPQ1VNRU5UX1NUQVRFXG4gICAgICBocmVmOiBTdHJpbmdcbiAgICAgIHBhcmVudDogUGFnZSBAcmVsYXRpb24ocHJvcGVydHk6IFwiY2hpbGRyZW5cIiwgdHlwZTogXCIxLW5cIilcbiAgICAgIG5hbWU6IFN0cmluZ1xuICAgICAgZGVzY3JpcHRpb246IFN0cmluZ1xuICAgICAgc2x1ZzogU3RyaW5nXG4gICAgICBibG9ja3M6IEJsb2Nrc1xuICAgICAgdGV4dDogU3RyaW5nXG4gICAgfVxuICAgIHR5cGUgU2V0dGluZ3MgQGNvbGxlY3Rpb24ge1xuICAgICAgaWQ6IFN0cmluZ1xuICAgICAgIyBAbGFiZWwoXCJUaXRlbFwiKVxuICAgICAgdGl0bGU6IFN0cmluZ1xuICAgICAgIyBAbGFiZWwoXCJCZXNjaHJlaWJ1bmdcIilcbiAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICAgICMgQGxhYmVsKFwiQXV0b3JcIilcbiAgICAgIGF1dGhvcjogU3RyaW5nXG4gICAgICAjIEBsYWJlbChcIlNjaGxhZ3dvcnRlXCIpXG4gICAgICB0YWdzOiBbU3RyaW5nXVxuICAgIH1cbiAgYCxcbn0pO1xuXG4vKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWFkYXB0ZXIuY2xpZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhZGFwdGVyLmNsaWVudC5jb2xsZWN0aW9uKCdwYWdlJyk7XG4gICAgY29sbGVjdGlvblxuICAgICAgLmZpbmRPbmUoe30pXG4gICAgICAudGhlbigob25lKSA9PiB7XG4gICAgICAgIGlmIChvbmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWRhcHRlci5jbGllbnQuY29sbGVjdGlvbigncGFnZScpLmluc2VydE9uZSh7XG4gICAgICAgICAgaWQ6IHJlcXVpcmUoJ3Nob3J0aWQnKS5nZW5lcmF0ZSgpLFxuICAgICAgICAgIG5hbWU6ICdIb21lJyxcbiAgICAgICAgICBzbHVnOiAnLycsXG4gICAgICAgICAgc3RhdGU6ICdQVUJMSVNIRUQnLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9LCA1MDAwKTsgKi9cbiJdfQ==
