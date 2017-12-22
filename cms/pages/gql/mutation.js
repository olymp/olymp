var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  mutation page($id: String, $input: PageInput, $type: MUTATION_TYPE) {\n    page(id: $id, input: $input, type: $type) {\n      id\n      slug\n      description\n      order\n      isMega\n      name\n      type\n      binding {\n        type\n        query\n        fields\n      }\n      aliasId\n      href\n      sorting\n      parentId\n      blocks {\n        nodes\n        extract\n        text\n        title\n        image {\n          url\n          width\n          height\n          caption\n        }\n        toc\n      }\n      state\n    }\n  }\n'], ['\n  mutation page($id: String, $input: PageInput, $type: MUTATION_TYPE) {\n    page(id: $id, input: $input, type: $type) {\n      id\n      slug\n      description\n      order\n      isMega\n      name\n      type\n      binding {\n        type\n        query\n        fields\n      }\n      aliasId\n      href\n      sorting\n      parentId\n      blocks {\n        nodes\n        extract\n        text\n        title\n        image {\n          url\n          width\n          height\n          caption\n        }\n        toc\n      }\n      state\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    mutation reorderPage($ids: [String], $parentId: String) {\n      reorderPages(ids: $ids, parentId: $parentId) {\n        id\n        order\n        parentId\n      }\n    }\n  '], ['\n    mutation reorderPage($ids: [String], $parentId: String) {\n      reorderPages(ids: $ids, parentId: $parentId) {\n        id\n        order\n        parentId\n      }\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withPushPathname } from 'olymp-router';
import { onError, onSuccess, omit } from 'olymp-utils';
import { pageList } from './query';

var mutateGql = gql(_templateObject);
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
          input: omit(input)
        },
        refetchQueries: [{
          query: pageList
        }],
        optimisticResponse: {
          __typename: 'Mutation',
          page: _extends({
            __typename: 'Page'
          }, input)
        }
      }).then(function (_ref) {
        var page = _ref.data.page;

        onSuccess('Die Seite wurde gespeichert');
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
      }).catch(onError);
    });
  };
};

export var mutatePage = compose(withPushPathname, graphql(mutateGql, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return _extends({}, ownProps, {
      save: ok(ownProps, mutate),
      mutate: mutate
    });
  }
}));

export var reorderPage = graphql(gql(_templateObject2), {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2dxbC9tdXRhdGlvbi5lczYiXSwibmFtZXMiOlsiZ3FsIiwiZ3JhcGhxbCIsImNvbXBvc2UiLCJ3aXRoUHVzaFBhdGhuYW1lIiwib25FcnJvciIsIm9uU3VjY2VzcyIsIm9taXQiLCJwYWdlTGlzdCIsIm11dGF0ZUdxbCIsIm9rIiwicHJvcHMiLCJtdXRhdGUiLCJmb3JtIiwiaXRlbSIsImZsYXROYXZpZ2F0aW9uIiwicHVzaFBhdGhuYW1lIiwidmFsaWRhdGVGaWVsZHMiLCJlcnIiLCJpbnB1dCIsImlkIiwidmFyaWFibGVzIiwidHlwZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJvcHRpbWlzdGljUmVzcG9uc2UiLCJfX3R5cGVuYW1lIiwicGFnZSIsInRoZW4iLCJkYXRhIiwicmVzZXRGaWVsZHMiLCJzbHVnIiwicGFyZW50SWQiLCJwYXJlbnQiLCJmaW5kIiwieCIsInJlcGxhY2UiLCJjYXRjaCIsIm11dGF0ZVBhZ2UiLCJvd25Qcm9wcyIsInNhdmUiLCJyZW9yZGVyUGFnZSIsInJlb3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxHQUFQLE1BQWdCLGFBQWhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixjQUF4QjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsV0FBeEI7QUFDQSxTQUFTQyxnQkFBVCxRQUFpQyxjQUFqQztBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLFNBQWxCLEVBQTZCQyxJQUE3QixRQUF5QyxhQUF6QztBQUNBLFNBQVNDLFFBQVQsUUFBeUIsU0FBekI7O0FBRUEsSUFBTUMsWUFBWVIsR0FBWixpQkFBTjtBQW9DQTs7QUFFQSxJQUFNUyxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsU0FBbUIsWUFBTTtBQUFBLFFBQzFCQyxJQUQwQixHQUNtQkYsS0FEbkIsQ0FDMUJFLElBRDBCO0FBQUEsUUFDcEJDLElBRG9CLEdBQ21CSCxLQURuQixDQUNwQkcsSUFEb0I7QUFBQSxRQUNkQyxjQURjLEdBQ21CSixLQURuQixDQUNkSSxjQURjO0FBQUEsUUFDRUMsWUFERixHQUNtQkwsS0FEbkIsQ0FDRUssWUFERjs7QUFFbENILFNBQUtJLGNBQUwsQ0FBb0IsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ2xDLFVBQUlELEdBQUosRUFBUztBQUNQLGVBQU9iLFFBQVFhLEdBQVIsQ0FBUDtBQUNEO0FBSGlDLFVBSTFCRSxFQUowQixHQUluQk4sSUFKbUIsQ0FJMUJNLEVBSjBCOztBQUtsQ1IsYUFBTztBQUNMUyxtQkFBVztBQUNURCxnQkFEUztBQUVURSxnQkFBTSxRQUZHO0FBR1RILGlCQUFPWixLQUFLWSxLQUFMO0FBSEUsU0FETjtBQU1MSSx3QkFBZ0IsQ0FDZDtBQUNFQyxpQkFBT2hCO0FBRFQsU0FEYyxDQU5YO0FBV0xpQiw0QkFBb0I7QUFDbEJDLHNCQUFZLFVBRE07QUFFbEJDO0FBQ0VELHdCQUFZO0FBRGQsYUFFS1AsS0FGTDtBQUZrQjtBQVhmLE9BQVAsRUFtQkdTLElBbkJILENBbUJRLGdCQUF3QjtBQUFBLFlBQWJELElBQWEsUUFBckJFLElBQXFCLENBQWJGLElBQWE7O0FBQzVCckIsa0JBQVUsNkJBQVY7QUFDQU8sYUFBS2lCLFdBQUw7QUFGNEIsWUFHdEJDLElBSHNCLEdBR0hKLElBSEcsQ0FHdEJJLElBSHNCO0FBQUEsWUFHaEJDLFFBSGdCLEdBR0hMLElBSEcsQ0FHaEJLLFFBSGdCOztBQUk1QixlQUFPQSxRQUFQLEVBQWlCO0FBQ2YsY0FBTUMsU0FBU2xCLGVBQWVtQixJQUFmLENBQW9CO0FBQUEsbUJBQUtDLEVBQUVmLEVBQUYsS0FBU1ksUUFBZDtBQUFBLFdBQXBCLEtBQStDLEVBQTlEO0FBQ0EsY0FBSUMsT0FBT0YsSUFBWCxFQUFpQjtBQUNmQSxtQkFBTyxNQUFHRSxPQUFPRixJQUFWLEdBQWlCQSxJQUFqQixFQUF3QkssT0FBeEIsQ0FBZ0MsSUFBaEMsRUFBc0MsR0FBdEMsQ0FBUDtBQUNEO0FBQ0RKLHFCQUFXQyxPQUFPRCxRQUFsQjtBQUNEO0FBQ0RoQixxQkFBYWUsSUFBYjtBQUNELE9BL0JILEVBZ0NHTSxLQWhDSCxDQWdDU2hDLE9BaENUO0FBaUNELEtBdENEO0FBdUNELEdBekNVO0FBQUEsQ0FBWDs7QUEyQ0EsT0FBTyxJQUFNaUMsYUFBYW5DLFFBQ3hCQyxnQkFEd0IsRUFFeEJGLFFBQVFPLFNBQVIsRUFBbUI7QUFDakJFLFNBQU87QUFBQSxRQUFHNEIsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYTNCLE1BQWIsU0FBYUEsTUFBYjtBQUFBLHdCQUNGMkIsUUFERTtBQUVMQyxZQUFNOUIsR0FBRzZCLFFBQUgsRUFBYTNCLE1BQWIsQ0FGRDtBQUdMQTtBQUhLO0FBQUE7QUFEVSxDQUFuQixDQUZ3QixDQUFuQjs7QUFXUCxPQUFPLElBQU02QixjQUFjdkMsUUFDekJELEdBRHlCLG9CQVV6QjtBQUNFVSxTQUFPO0FBQUEsUUFBRzRCLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWEzQixNQUFiLFNBQWFBLE1BQWI7QUFBQSx3QkFDRjJCLFFBREU7QUFFTEcsZUFBUzlCO0FBRko7QUFBQTtBQURULENBVnlCLENBQXBCOztBQWtCUCIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9ncWwvbXV0YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoUHVzaFBhdGhuYW1lIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IG9uRXJyb3IsIG9uU3VjY2Vzcywgb21pdCB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IHBhZ2VMaXN0IH0gZnJvbSAnLi9xdWVyeSc7XG5cbmNvbnN0IG11dGF0ZUdxbCA9IGdxbGBcbiAgbXV0YXRpb24gcGFnZSgkaWQ6IFN0cmluZywgJGlucHV0OiBQYWdlSW5wdXQsICR0eXBlOiBNVVRBVElPTl9UWVBFKSB7XG4gICAgcGFnZShpZDogJGlkLCBpbnB1dDogJGlucHV0LCB0eXBlOiAkdHlwZSkge1xuICAgICAgaWRcbiAgICAgIHNsdWdcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBvcmRlclxuICAgICAgaXNNZWdhXG4gICAgICBuYW1lXG4gICAgICB0eXBlXG4gICAgICBiaW5kaW5nIHtcbiAgICAgICAgdHlwZVxuICAgICAgICBxdWVyeVxuICAgICAgICBmaWVsZHNcbiAgICAgIH1cbiAgICAgIGFsaWFzSWRcbiAgICAgIGhyZWZcbiAgICAgIHNvcnRpbmdcbiAgICAgIHBhcmVudElkXG4gICAgICBibG9ja3Mge1xuICAgICAgICBub2Rlc1xuICAgICAgICBleHRyYWN0XG4gICAgICAgIHRleHRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgY2FwdGlvblxuICAgICAgICB9XG4gICAgICAgIHRvY1xuICAgICAgfVxuICAgICAgc3RhdGVcbiAgICB9XG4gIH1cbmA7XG4vLyBjb25zdCBmaWVsZHMgPSBtdXRhdGVHcWwuZGVmaW5pdGlvbnNbMF0uc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnNbMF0uc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMubWFwKHggPT4geC5uYW1lLnZhbHVlLCk7XG5cbmNvbnN0IG9rID0gKHByb3BzLCBtdXRhdGUpID0+ICgpID0+IHtcbiAgY29uc3QgeyBmb3JtLCBpdGVtLCBmbGF0TmF2aWdhdGlvbiwgcHVzaFBhdGhuYW1lIH0gPSBwcm9wcztcbiAgZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyLCBpbnB1dCkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgfVxuICAgIGNvbnN0IHsgaWQgfSA9IGl0ZW07XG4gICAgbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBpZCxcbiAgICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICAgIGlucHV0OiBvbWl0KGlucHV0KSxcbiAgICAgIH0sXG4gICAgICByZWZldGNoUXVlcmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgcXVlcnk6IHBhZ2VMaXN0LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxuICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgX190eXBlbmFtZTogJ1BhZ2UnLFxuICAgICAgICAgIC4uLmlucHV0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHsgZGF0YTogeyBwYWdlIH0gfSkgPT4ge1xuICAgICAgICBvblN1Y2Nlc3MoJ0RpZSBTZWl0ZSB3dXJkZSBnZXNwZWljaGVydCcpO1xuICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgIGxldCB7IHNsdWcsIHBhcmVudElkIH0gPSBwYWdlO1xuICAgICAgICB3aGlsZSAocGFyZW50SWQpIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBmbGF0TmF2aWdhdGlvbi5maW5kKHggPT4geC5pZCA9PT0gcGFyZW50SWQpIHx8IHt9O1xuICAgICAgICAgIGlmIChwYXJlbnQuc2x1Zykge1xuICAgICAgICAgICAgc2x1ZyA9IGAke3BhcmVudC5zbHVnfSR7c2x1Z31gLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50SWQgPSBwYXJlbnQucGFyZW50SWQ7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaFBhdGhuYW1lKHNsdWcpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChvbkVycm9yKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbXV0YXRlUGFnZSA9IGNvbXBvc2UoXG4gIHdpdGhQdXNoUGF0aG5hbWUsXG4gIGdyYXBocWwobXV0YXRlR3FsLCB7XG4gICAgcHJvcHM6ICh7IG93blByb3BzLCBtdXRhdGUgfSkgPT4gKHtcbiAgICAgIC4uLm93blByb3BzLFxuICAgICAgc2F2ZTogb2sob3duUHJvcHMsIG11dGF0ZSksXG4gICAgICBtdXRhdGUsXG4gICAgfSksXG4gIH0pLFxuKTtcblxuZXhwb3J0IGNvbnN0IHJlb3JkZXJQYWdlID0gZ3JhcGhxbChcbiAgZ3FsYFxuICAgIG11dGF0aW9uIHJlb3JkZXJQYWdlKCRpZHM6IFtTdHJpbmddLCAkcGFyZW50SWQ6IFN0cmluZykge1xuICAgICAgcmVvcmRlclBhZ2VzKGlkczogJGlkcywgcGFyZW50SWQ6ICRwYXJlbnRJZCkge1xuICAgICAgICBpZFxuICAgICAgICBvcmRlclxuICAgICAgICBwYXJlbnRJZFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAge1xuICAgIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIHJlb3JkZXI6IG11dGF0ZSxcbiAgICB9KSxcbiAgfSxcbik7XG5cbi8qXG5cblxuICAgICAgdXBkYXRlOiAoc3RvcmUsIHsgZGF0YTogeyBhYnNlbmNlIH0gfSkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgICAgICAgc3RhcnQ6ICtzdGFydE9mTW9udGgoYWJzZW5jZS5zdGFydCksXG4gICAgICAgICAgZW5kOiArZW5kT2ZNb250aChhYnNlbmNlLnN0YXJ0KSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHN0b3JlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IGdxbExpc3QsXG4gICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgIGRhdGEuYWJzZW5jZUxpc3QucHVzaChhYnNlbmNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGEuYWJzZW5jZUxpc3QuZmluZEluZGV4KHggPT4geC5pZCA9PT0gaW5wdXQuaWQpO1xuICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBkYXRhLmFic2VuY2VMaXN0W2luZGV4XSA9IHsgLi4uZGF0YS5hYnNlbmNlTGlzdFtpbmRleF0sIC4uLmFic2VuY2UgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IGdxbExpc3QsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuKi9cbiJdfQ==
