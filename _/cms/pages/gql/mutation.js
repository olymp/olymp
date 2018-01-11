'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reorderPage = exports.mutatePage = undefined;

var _message3 = require('antd/lib/message');

var _message4 = _interopRequireDefault(_message3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  mutation page($id: String, $input: PageInput, $type: MUTATION_TYPE) {\n    page(id: $id, input: $input, type: $type) {\n      id\n      slug\n      description\n      order\n      isMega\n      name\n      type\n      binding {\n        type\n        query\n        fields\n      }\n      aliasId\n      href\n      sorting\n      parentId\n      blocks {\n        nodes\n        extract\n        text\n        title\n        image {\n          url\n          width\n          height\n          caption\n        }\n        toc\n      }\n      state\n    }\n  }\n'], ['\n  mutation page($id: String, $input: PageInput, $type: MUTATION_TYPE) {\n    page(id: $id, input: $input, type: $type) {\n      id\n      slug\n      description\n      order\n      isMega\n      name\n      type\n      binding {\n        type\n        query\n        fields\n      }\n      aliasId\n      href\n      sorting\n      parentId\n      blocks {\n        nodes\n        extract\n        text\n        title\n        image {\n          url\n          width\n          height\n          caption\n        }\n        toc\n      }\n      state\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    mutation reorderPage($ids: [String], $parentId: String) {\n      reorderPages(ids: $ids, parentId: $parentId) {\n        id\n        order\n        parentId\n      }\n    }\n  '], ['\n    mutation reorderPage($ids: [String], $parentId: String) {\n      reorderPages(ids: $ids, parentId: $parentId) {\n        id\n        order\n        parentId\n      }\n    }\n  ']);

require('antd/lib/message/style');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

var _recompose = require('recompose');

var _olympRouter = require('olymp-router');

var _olympApollo = require('olymp-apollo');

var _query = require('./query');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutateGql = (0, _graphqlTag2.default)(_templateObject);
// const fields = mutateGql.definitions[0].selectionSet.selections[0].selectionSet.selections.map(x => x.name.value,);

var ok = function ok(props, mutate) {
  return function () {
    var form = props.form,
        item = props.item,
        flatNavigation = props.flatNavigation,
        pushPathname = props.pushPathname;

    form.validateFields(function (err, input) {
      if (err) {
        return onError(err);
      }
      var id = item.id;

      mutate({
        variables: {
          id: id,
          type: 'UPDATE',
          input: (0, _olympApollo.omit)(input)
        },
        refetchQueries: [{
          query: _query.pageList
        }],
        optimisticResponse: {
          __typename: 'Mutation',
          page: _extends({
            __typename: 'Page'
          }, input)
        }
      }).then(function (_ref) {
        var page = _ref.data.page;

        _message4.default.success('Die Seite wurde gespeichert');
        form.resetFields();
        var slug = page.slug,
            parentId = page.parentId;

        while (parentId) {
          var parent = flatNavigation.find(function (x) {
            return x.id === parentId;
          }) || {};
          if (parent.slug) {
            slug = ('' + parent.slug + slug).replace('//', '/');
          }
          parentId = parent.parentId;
        }
        pushPathname(slug);
      }).catch(function (err) {
        return _message4.default.error(err.message);
      });
    });
  };
};

var mutatePage = exports.mutatePage = (0, _recompose.compose)(_olympRouter.withPushPathname, (0, _reactApollo.graphql)(mutateGql, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return _extends({}, ownProps, {
      save: ok(ownProps, mutate),
      mutate: mutate
    });
  }
}));

var reorderPage = exports.reorderPage = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject2), {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        mutate = _ref3.mutate;
    return _extends({}, ownProps, {
      reorder: mutate
    });
  }
});

/*


      update: (store, { data: { absence } }) => {
        const variables = {
          start: +startOfMonth(absence.start),
          end: +endOfMonth(absence.start),
        };
        const data = store.readQuery({
          query: gqlList,
          variables,
        });
        if (!id) {
          data.absenceList.push(absence);
        } else {
          const index = data.absenceList.findIndex(x => x.id === input.id);
          if (index >= 0) {
            data.absenceList[index] = { ...data.absenceList[index], ...absence };
          }
        }
        store.writeQuery({
          query: gqlList,
          data,
          variables,
        });
      },

*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ncWwvbXV0YXRpb24uZXM2Il0sIm5hbWVzIjpbIm11dGF0ZUdxbCIsIm9rIiwicHJvcHMiLCJtdXRhdGUiLCJmb3JtIiwiaXRlbSIsImZsYXROYXZpZ2F0aW9uIiwicHVzaFBhdGhuYW1lIiwidmFsaWRhdGVGaWVsZHMiLCJlcnIiLCJpbnB1dCIsIm9uRXJyb3IiLCJpZCIsInZhcmlhYmxlcyIsInR5cGUiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5Iiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiX190eXBlbmFtZSIsInBhZ2UiLCJ0aGVuIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXNldEZpZWxkcyIsInNsdWciLCJwYXJlbnRJZCIsInBhcmVudCIsImZpbmQiLCJ4IiwicmVwbGFjZSIsImNhdGNoIiwiZXJyb3IiLCJtZXNzYWdlIiwibXV0YXRlUGFnZSIsIm93blByb3BzIiwic2F2ZSIsInJlb3JkZXJQYWdlIiwicmVvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsc0RBQU47QUFvQ0E7O0FBRUEsSUFBTUMsS0FBSyxTQUFMQSxFQUFLLENBQUNDLEtBQUQsRUFBUUMsTUFBUjtBQUFBLFNBQW1CLFlBQU07QUFBQSxRQUMxQkMsSUFEMEIsR0FDbUJGLEtBRG5CLENBQzFCRSxJQUQwQjtBQUFBLFFBQ3BCQyxJQURvQixHQUNtQkgsS0FEbkIsQ0FDcEJHLElBRG9CO0FBQUEsUUFDZEMsY0FEYyxHQUNtQkosS0FEbkIsQ0FDZEksY0FEYztBQUFBLFFBQ0VDLFlBREYsR0FDbUJMLEtBRG5CLENBQ0VLLFlBREY7O0FBRWxDSCxTQUFLSSxjQUFMLENBQW9CLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNsQyxVQUFJRCxHQUFKLEVBQVM7QUFDUCxlQUFPRSxRQUFRRixHQUFSLENBQVA7QUFDRDtBQUhpQyxVQUkxQkcsRUFKMEIsR0FJbkJQLElBSm1CLENBSTFCTyxFQUowQjs7QUFLbENULGFBQU87QUFDTFUsbUJBQVc7QUFDVEQsZ0JBRFM7QUFFVEUsZ0JBQU0sUUFGRztBQUdUSixpQkFBTyx1QkFBS0EsS0FBTDtBQUhFLFNBRE47QUFNTEssd0JBQWdCLENBQ2Q7QUFDRUM7QUFERixTQURjLENBTlg7QUFXTEMsNEJBQW9CO0FBQ2xCQyxzQkFBWSxVQURNO0FBRWxCQztBQUNFRCx3QkFBWTtBQURkLGFBRUtSLEtBRkw7QUFGa0I7QUFYZixPQUFQLEVBbUJHVSxJQW5CSCxDQW1CUSxnQkFBd0I7QUFBQSxZQUFiRCxJQUFhLFFBQXJCRSxJQUFxQixDQUFiRixJQUFhOztBQUM1QiwwQkFBUUcsT0FBUixDQUFnQiw2QkFBaEI7QUFDQWxCLGFBQUttQixXQUFMO0FBRjRCLFlBR3RCQyxJQUhzQixHQUdITCxJQUhHLENBR3RCSyxJQUhzQjtBQUFBLFlBR2hCQyxRQUhnQixHQUdITixJQUhHLENBR2hCTSxRQUhnQjs7QUFJNUIsZUFBT0EsUUFBUCxFQUFpQjtBQUNmLGNBQU1DLFNBQVNwQixlQUFlcUIsSUFBZixDQUFvQjtBQUFBLG1CQUFLQyxFQUFFaEIsRUFBRixLQUFTYSxRQUFkO0FBQUEsV0FBcEIsS0FBK0MsRUFBOUQ7QUFDQSxjQUFJQyxPQUFPRixJQUFYLEVBQWlCO0FBQ2ZBLG1CQUFPLE1BQUdFLE9BQU9GLElBQVYsR0FBaUJBLElBQWpCLEVBQXdCSyxPQUF4QixDQUFnQyxJQUFoQyxFQUFzQyxHQUF0QyxDQUFQO0FBQ0Q7QUFDREoscUJBQVdDLE9BQU9ELFFBQWxCO0FBQ0Q7QUFDRGxCLHFCQUFhaUIsSUFBYjtBQUNELE9BL0JILEVBZ0NHTSxLQWhDSCxDQWdDUztBQUFBLGVBQU8sa0JBQVFDLEtBQVIsQ0FBY3RCLElBQUl1QixPQUFsQixDQUFQO0FBQUEsT0FoQ1Q7QUFpQ0QsS0F0Q0Q7QUF1Q0QsR0F6Q1U7QUFBQSxDQUFYOztBQTJDTyxJQUFNQyxrQ0FBYSx1REFFeEIsMEJBQVFqQyxTQUFSLEVBQW1CO0FBQ2pCRSxTQUFPO0FBQUEsUUFBR2dDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWEvQixNQUFiLFNBQWFBLE1BQWI7QUFBQSx3QkFDRitCLFFBREU7QUFFTEMsWUFBTWxDLEdBQUdpQyxRQUFILEVBQWEvQixNQUFiLENBRkQ7QUFHTEE7QUFISztBQUFBO0FBRFUsQ0FBbkIsQ0FGd0IsQ0FBbkI7O0FBV0EsSUFBTWlDLG9DQUFjLHVFQVV6QjtBQUNFbEMsU0FBTztBQUFBLFFBQUdnQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhL0IsTUFBYixTQUFhQSxNQUFiO0FBQUEsd0JBQ0YrQixRQURFO0FBRUxHLGVBQVNsQztBQUZKO0FBQUE7QUFEVCxDQVZ5QixDQUFwQjs7QUFrQlAiLCJmaWxlIjoiY21zL3BhZ2VzL2dxbC9tdXRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHdpdGhQdXNoUGF0aG5hbWUgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ29seW1wLWFwb2xsbyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBwYWdlTGlzdCB9IGZyb20gJy4vcXVlcnknO1xuXG5jb25zdCBtdXRhdGVHcWwgPSBncWxgXG4gIG11dGF0aW9uIHBhZ2UoJGlkOiBTdHJpbmcsICRpbnB1dDogUGFnZUlucHV0LCAkdHlwZTogTVVUQVRJT05fVFlQRSkge1xuICAgIHBhZ2UoaWQ6ICRpZCwgaW5wdXQ6ICRpbnB1dCwgdHlwZTogJHR5cGUpIHtcbiAgICAgIGlkXG4gICAgICBzbHVnXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgb3JkZXJcbiAgICAgIGlzTWVnYVxuICAgICAgbmFtZVxuICAgICAgdHlwZVxuICAgICAgYmluZGluZyB7XG4gICAgICAgIHR5cGVcbiAgICAgICAgcXVlcnlcbiAgICAgICAgZmllbGRzXG4gICAgICB9XG4gICAgICBhbGlhc0lkXG4gICAgICBocmVmXG4gICAgICBzb3J0aW5nXG4gICAgICBwYXJlbnRJZFxuICAgICAgYmxvY2tzIHtcbiAgICAgICAgbm9kZXNcbiAgICAgICAgZXh0cmFjdFxuICAgICAgICB0ZXh0XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgICB3aWR0aFxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgfVxuICAgICAgICB0b2NcbiAgICAgIH1cbiAgICAgIHN0YXRlXG4gICAgfVxuICB9XG5gO1xuLy8gY29uc3QgZmllbGRzID0gbXV0YXRlR3FsLmRlZmluaXRpb25zWzBdLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zWzBdLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLm1hcCh4ID0+IHgubmFtZS52YWx1ZSwpO1xuXG5jb25zdCBvayA9IChwcm9wcywgbXV0YXRlKSA9PiAoKSA9PiB7XG4gIGNvbnN0IHsgZm9ybSwgaXRlbSwgZmxhdE5hdmlnYXRpb24sIHB1c2hQYXRobmFtZSB9ID0gcHJvcHM7XG4gIGZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgaW5wdXQpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gb25FcnJvcihlcnIpO1xuICAgIH1cbiAgICBjb25zdCB7IGlkIH0gPSBpdGVtO1xuICAgIG11dGF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgICBpbnB1dDogb21pdChpbnB1dCksXG4gICAgICB9LFxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJ5OiBwYWdlTGlzdCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgX190eXBlbmFtZTogJ011dGF0aW9uJyxcbiAgICAgICAgcGFnZToge1xuICAgICAgICAgIF9fdHlwZW5hbWU6ICdQYWdlJyxcbiAgICAgICAgICAuLi5pbnB1dCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGE6IHsgcGFnZSB9IH0pID0+IHtcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdEaWUgU2VpdGUgd3VyZGUgZ2VzcGVpY2hlcnQnKTtcbiAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgICBsZXQgeyBzbHVnLCBwYXJlbnRJZCB9ID0gcGFnZTtcbiAgICAgICAgd2hpbGUgKHBhcmVudElkKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gZmxhdE5hdmlnYXRpb24uZmluZCh4ID0+IHguaWQgPT09IHBhcmVudElkKSB8fCB7fTtcbiAgICAgICAgICBpZiAocGFyZW50LnNsdWcpIHtcbiAgICAgICAgICAgIHNsdWcgPSBgJHtwYXJlbnQuc2x1Z30ke3NsdWd9YC5yZXBsYWNlKCcvLycsICcvJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudElkID0gcGFyZW50LnBhcmVudElkO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hQYXRobmFtZShzbHVnKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbXV0YXRlUGFnZSA9IGNvbXBvc2UoXG4gIHdpdGhQdXNoUGF0aG5hbWUsXG4gIGdyYXBocWwobXV0YXRlR3FsLCB7XG4gICAgcHJvcHM6ICh7IG93blByb3BzLCBtdXRhdGUgfSkgPT4gKHtcbiAgICAgIC4uLm93blByb3BzLFxuICAgICAgc2F2ZTogb2sob3duUHJvcHMsIG11dGF0ZSksXG4gICAgICBtdXRhdGUsXG4gICAgfSksXG4gIH0pLFxuKTtcblxuZXhwb3J0IGNvbnN0IHJlb3JkZXJQYWdlID0gZ3JhcGhxbChcbiAgZ3FsYFxuICAgIG11dGF0aW9uIHJlb3JkZXJQYWdlKCRpZHM6IFtTdHJpbmddLCAkcGFyZW50SWQ6IFN0cmluZykge1xuICAgICAgcmVvcmRlclBhZ2VzKGlkczogJGlkcywgcGFyZW50SWQ6ICRwYXJlbnRJZCkge1xuICAgICAgICBpZFxuICAgICAgICBvcmRlclxuICAgICAgICBwYXJlbnRJZFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAge1xuICAgIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIHJlb3JkZXI6IG11dGF0ZSxcbiAgICB9KSxcbiAgfSxcbik7XG5cbi8qXG5cblxuICAgICAgdXBkYXRlOiAoc3RvcmUsIHsgZGF0YTogeyBhYnNlbmNlIH0gfSkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgICAgICAgc3RhcnQ6ICtzdGFydE9mTW9udGgoYWJzZW5jZS5zdGFydCksXG4gICAgICAgICAgZW5kOiArZW5kT2ZNb250aChhYnNlbmNlLnN0YXJ0KSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHN0b3JlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IGdxbExpc3QsXG4gICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgIGRhdGEuYWJzZW5jZUxpc3QucHVzaChhYnNlbmNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGEuYWJzZW5jZUxpc3QuZmluZEluZGV4KHggPT4geC5pZCA9PT0gaW5wdXQuaWQpO1xuICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBkYXRhLmFic2VuY2VMaXN0W2luZGV4XSA9IHsgLi4uZGF0YS5hYnNlbmNlTGlzdFtpbmRleF0sIC4uLmFic2VuY2UgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IGdxbExpc3QsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuKi9cbiJdfQ==
