import 'antd/lib/message/style';
import _message2 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  mutation page($id: String, $input: PageInput, $type: MUTATION_TYPE) {\n    page(id: $id, input: $input, type: $type) {\n      id\n      slug\n      description\n      order\n      isMega\n      name\n      type\n      binding {\n        type\n        query\n        fields\n      }\n      aliasId\n      href\n      sorting\n      parentId\n      blocks {\n        nodes\n        extract\n        text\n        title\n        image {\n          url\n          width\n          height\n          caption\n        }\n        toc\n      }\n      state\n    }\n  }\n'], ['\n  mutation page($id: String, $input: PageInput, $type: MUTATION_TYPE) {\n    page(id: $id, input: $input, type: $type) {\n      id\n      slug\n      description\n      order\n      isMega\n      name\n      type\n      binding {\n        type\n        query\n        fields\n      }\n      aliasId\n      href\n      sorting\n      parentId\n      blocks {\n        nodes\n        extract\n        text\n        title\n        image {\n          url\n          width\n          height\n          caption\n        }\n        toc\n      }\n      state\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    mutation reorderPage($ids: [String], $parentId: String) {\n      reorderPages(ids: $ids, parentId: $parentId) {\n        id\n        order\n        parentId\n      }\n    }\n  '], ['\n    mutation reorderPage($ids: [String], $parentId: String) {\n      reorderPages(ids: $ids, parentId: $parentId) {\n        id\n        order\n        parentId\n      }\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withPushPathname } from 'olymp-router';
import { omit } from 'olymp-apollo';

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

        _message.success('Die Seite wurde gespeichert');
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
        return _message2.error(err.message);
      });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ncWwvbXV0YXRpb24uZXM2Il0sIm5hbWVzIjpbImdxbCIsImdyYXBocWwiLCJjb21wb3NlIiwid2l0aFB1c2hQYXRobmFtZSIsIm9taXQiLCJwYWdlTGlzdCIsIm11dGF0ZUdxbCIsIm9rIiwicHJvcHMiLCJtdXRhdGUiLCJmb3JtIiwiaXRlbSIsImZsYXROYXZpZ2F0aW9uIiwicHVzaFBhdGhuYW1lIiwidmFsaWRhdGVGaWVsZHMiLCJlcnIiLCJpbnB1dCIsIm9uRXJyb3IiLCJpZCIsInZhcmlhYmxlcyIsInR5cGUiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5Iiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiX190eXBlbmFtZSIsInBhZ2UiLCJ0aGVuIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXNldEZpZWxkcyIsInNsdWciLCJwYXJlbnRJZCIsInBhcmVudCIsImZpbmQiLCJ4IiwicmVwbGFjZSIsImNhdGNoIiwiZXJyb3IiLCJtZXNzYWdlIiwibXV0YXRlUGFnZSIsIm93blByb3BzIiwic2F2ZSIsInJlb3JkZXJQYWdlIiwicmVvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsR0FBUCxNQUFnQixhQUFoQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsY0FBeEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLFdBQXhCO0FBQ0EsU0FBU0MsZ0JBQVQsUUFBaUMsY0FBakM7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCOztBQUVBLFNBQVNDLFFBQVQsUUFBeUIsU0FBekI7O0FBRUEsSUFBTUMsWUFBWU4sR0FBWixpQkFBTjtBQW9DQTs7QUFFQSxJQUFNTyxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsU0FBbUIsWUFBTTtBQUFBLFFBQzFCQyxJQUQwQixHQUNtQkYsS0FEbkIsQ0FDMUJFLElBRDBCO0FBQUEsUUFDcEJDLElBRG9CLEdBQ21CSCxLQURuQixDQUNwQkcsSUFEb0I7QUFBQSxRQUNkQyxjQURjLEdBQ21CSixLQURuQixDQUNkSSxjQURjO0FBQUEsUUFDRUMsWUFERixHQUNtQkwsS0FEbkIsQ0FDRUssWUFERjs7QUFFbENILFNBQUtJLGNBQUwsQ0FBb0IsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ2xDLFVBQUlELEdBQUosRUFBUztBQUNQLGVBQU9FLFFBQVFGLEdBQVIsQ0FBUDtBQUNEO0FBSGlDLFVBSTFCRyxFQUowQixHQUluQlAsSUFKbUIsQ0FJMUJPLEVBSjBCOztBQUtsQ1QsYUFBTztBQUNMVSxtQkFBVztBQUNURCxnQkFEUztBQUVURSxnQkFBTSxRQUZHO0FBR1RKLGlCQUFPWixLQUFLWSxLQUFMO0FBSEUsU0FETjtBQU1MSyx3QkFBZ0IsQ0FDZDtBQUNFQyxpQkFBT2pCO0FBRFQsU0FEYyxDQU5YO0FBV0xrQiw0QkFBb0I7QUFDbEJDLHNCQUFZLFVBRE07QUFFbEJDO0FBQ0VELHdCQUFZO0FBRGQsYUFFS1IsS0FGTDtBQUZrQjtBQVhmLE9BQVAsRUFtQkdVLElBbkJILENBbUJRLGdCQUF3QjtBQUFBLFlBQWJELElBQWEsUUFBckJFLElBQXFCLENBQWJGLElBQWE7O0FBQzVCLGlCQUFRRyxPQUFSLENBQWdCLDZCQUFoQjtBQUNBbEIsYUFBS21CLFdBQUw7QUFGNEIsWUFHdEJDLElBSHNCLEdBR0hMLElBSEcsQ0FHdEJLLElBSHNCO0FBQUEsWUFHaEJDLFFBSGdCLEdBR0hOLElBSEcsQ0FHaEJNLFFBSGdCOztBQUk1QixlQUFPQSxRQUFQLEVBQWlCO0FBQ2YsY0FBTUMsU0FBU3BCLGVBQWVxQixJQUFmLENBQW9CO0FBQUEsbUJBQUtDLEVBQUVoQixFQUFGLEtBQVNhLFFBQWQ7QUFBQSxXQUFwQixLQUErQyxFQUE5RDtBQUNBLGNBQUlDLE9BQU9GLElBQVgsRUFBaUI7QUFDZkEsbUJBQU8sTUFBR0UsT0FBT0YsSUFBVixHQUFpQkEsSUFBakIsRUFBd0JLLE9BQXhCLENBQWdDLElBQWhDLEVBQXNDLEdBQXRDLENBQVA7QUFDRDtBQUNESixxQkFBV0MsT0FBT0QsUUFBbEI7QUFDRDtBQUNEbEIscUJBQWFpQixJQUFiO0FBQ0QsT0EvQkgsRUFnQ0dNLEtBaENILENBZ0NTO0FBQUEsZUFBTyxVQUFRQyxLQUFSLENBQWN0QixJQUFJdUIsT0FBbEIsQ0FBUDtBQUFBLE9BaENUO0FBaUNELEtBdENEO0FBdUNELEdBekNVO0FBQUEsQ0FBWDs7QUEyQ0EsT0FBTyxJQUFNQyxhQUFhckMsUUFDeEJDLGdCQUR3QixFQUV4QkYsUUFBUUssU0FBUixFQUFtQjtBQUNqQkUsU0FBTztBQUFBLFFBQUdnQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhL0IsTUFBYixTQUFhQSxNQUFiO0FBQUEsd0JBQ0YrQixRQURFO0FBRUxDLFlBQU1sQyxHQUFHaUMsUUFBSCxFQUFhL0IsTUFBYixDQUZEO0FBR0xBO0FBSEs7QUFBQTtBQURVLENBQW5CLENBRndCLENBQW5COztBQVdQLE9BQU8sSUFBTWlDLGNBQWN6QyxRQUN6QkQsR0FEeUIsb0JBVXpCO0FBQ0VRLFNBQU87QUFBQSxRQUFHZ0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYS9CLE1BQWIsU0FBYUEsTUFBYjtBQUFBLHdCQUNGK0IsUUFERTtBQUVMRyxlQUFTbEM7QUFGSjtBQUFBO0FBRFQsQ0FWeUIsQ0FBcEI7O0FBa0JQIiwiZmlsZSI6ImNtcy9wYWdlcy9ncWwvbXV0YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoUHVzaFBhdGhuYW1lIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdvbHltcC1hcG9sbG8nO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgcGFnZUxpc3QgfSBmcm9tICcuL3F1ZXJ5JztcblxuY29uc3QgbXV0YXRlR3FsID0gZ3FsYFxuICBtdXRhdGlvbiBwYWdlKCRpZDogU3RyaW5nLCAkaW5wdXQ6IFBhZ2VJbnB1dCwgJHR5cGU6IE1VVEFUSU9OX1RZUEUpIHtcbiAgICBwYWdlKGlkOiAkaWQsIGlucHV0OiAkaW5wdXQsIHR5cGU6ICR0eXBlKSB7XG4gICAgICBpZFxuICAgICAgc2x1Z1xuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIG9yZGVyXG4gICAgICBpc01lZ2FcbiAgICAgIG5hbWVcbiAgICAgIHR5cGVcbiAgICAgIGJpbmRpbmcge1xuICAgICAgICB0eXBlXG4gICAgICAgIHF1ZXJ5XG4gICAgICAgIGZpZWxkc1xuICAgICAgfVxuICAgICAgYWxpYXNJZFxuICAgICAgaHJlZlxuICAgICAgc29ydGluZ1xuICAgICAgcGFyZW50SWRcbiAgICAgIGJsb2NrcyB7XG4gICAgICAgIG5vZGVzXG4gICAgICAgIGV4dHJhY3RcbiAgICAgICAgdGV4dFxuICAgICAgICB0aXRsZVxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBjYXB0aW9uXG4gICAgICAgIH1cbiAgICAgICAgdG9jXG4gICAgICB9XG4gICAgICBzdGF0ZVxuICAgIH1cbiAgfVxuYDtcbi8vIGNvbnN0IGZpZWxkcyA9IG11dGF0ZUdxbC5kZWZpbml0aW9uc1swXS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9uc1swXS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5tYXAoeCA9PiB4Lm5hbWUudmFsdWUsKTtcblxuY29uc3Qgb2sgPSAocHJvcHMsIG11dGF0ZSkgPT4gKCkgPT4ge1xuICBjb25zdCB7IGZvcm0sIGl0ZW0sIGZsYXROYXZpZ2F0aW9uLCBwdXNoUGF0aG5hbWUgfSA9IHByb3BzO1xuICBmb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIGlucHV0KSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIG9uRXJyb3IoZXJyKTtcbiAgICB9XG4gICAgY29uc3QgeyBpZCB9ID0gaXRlbTtcbiAgICBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0eXBlOiAnVVBEQVRFJyxcbiAgICAgICAgaW5wdXQ6IG9taXQoaW5wdXQpLFxuICAgICAgfSxcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyeTogcGFnZUxpc3QsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXG4gICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICBfX3R5cGVuYW1lOiAnUGFnZScsXG4gICAgICAgICAgLi4uaW5wdXQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhOiB7IHBhZ2UgfSB9KSA9PiB7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnRGllIFNlaXRlIHd1cmRlIGdlc3BlaWNoZXJ0Jyk7XG4gICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgbGV0IHsgc2x1ZywgcGFyZW50SWQgfSA9IHBhZ2U7XG4gICAgICAgIHdoaWxlIChwYXJlbnRJZCkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGZsYXROYXZpZ2F0aW9uLmZpbmQoeCA9PiB4LmlkID09PSBwYXJlbnRJZCkgfHwge307XG4gICAgICAgICAgaWYgKHBhcmVudC5zbHVnKSB7XG4gICAgICAgICAgICBzbHVnID0gYCR7cGFyZW50LnNsdWd9JHtzbHVnfWAucmVwbGFjZSgnLy8nLCAnLycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnRJZCA9IHBhcmVudC5wYXJlbnRJZDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoUGF0aG5hbWUoc2x1Zyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG11dGF0ZVBhZ2UgPSBjb21wb3NlKFxuICB3aXRoUHVzaFBhdGhuYW1lLFxuICBncmFwaHFsKG11dGF0ZUdxbCwge1xuICAgIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIHNhdmU6IG9rKG93blByb3BzLCBtdXRhdGUpLFxuICAgICAgbXV0YXRlLFxuICAgIH0pLFxuICB9KSxcbik7XG5cbmV4cG9ydCBjb25zdCByZW9yZGVyUGFnZSA9IGdyYXBocWwoXG4gIGdxbGBcbiAgICBtdXRhdGlvbiByZW9yZGVyUGFnZSgkaWRzOiBbU3RyaW5nXSwgJHBhcmVudElkOiBTdHJpbmcpIHtcbiAgICAgIHJlb3JkZXJQYWdlcyhpZHM6ICRpZHMsIHBhcmVudElkOiAkcGFyZW50SWQpIHtcbiAgICAgICAgaWRcbiAgICAgICAgb3JkZXJcbiAgICAgICAgcGFyZW50SWRcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHtcbiAgICBwcm9wczogKHsgb3duUHJvcHMsIG11dGF0ZSB9KSA9PiAoe1xuICAgICAgLi4ub3duUHJvcHMsXG4gICAgICByZW9yZGVyOiBtdXRhdGUsXG4gICAgfSksXG4gIH0sXG4pO1xuXG4vKlxuXG5cbiAgICAgIHVwZGF0ZTogKHN0b3JlLCB7IGRhdGE6IHsgYWJzZW5jZSB9IH0pID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgICAgICAgIHN0YXJ0OiArc3RhcnRPZk1vbnRoKGFic2VuY2Uuc3RhcnQpLFxuICAgICAgICAgIGVuZDogK2VuZE9mTW9udGgoYWJzZW5jZS5zdGFydCksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzdG9yZS5yZWFkUXVlcnkoe1xuICAgICAgICAgIHF1ZXJ5OiBncWxMaXN0LFxuICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICBkYXRhLmFic2VuY2VMaXN0LnB1c2goYWJzZW5jZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBkYXRhLmFic2VuY2VMaXN0LmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGlucHV0LmlkKTtcbiAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgZGF0YS5hYnNlbmNlTGlzdFtpbmRleF0gPSB7IC4uLmRhdGEuYWJzZW5jZUxpc3RbaW5kZXhdLCAuLi5hYnNlbmNlIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0b3JlLndyaXRlUXVlcnkoe1xuICAgICAgICAgIHF1ZXJ5OiBncWxMaXN0LFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiovXG4iXX0=
