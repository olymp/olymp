var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    mutation file(\n      $id: String\n      $input: FileInput\n      $operationType: MUTATION_TYPE\n    ) {\n      item: file(id: $id, input: $input, type: $operationType) {\n        id\n        publicId\n        format\n        version\n        resourceType\n        type\n        createdAt\n        height\n        width\n        bytes\n        tags\n        url\n        caption\n        source\n        removed\n        folder\n        pages\n        colors\n      }\n    }\n  '], ['\n    mutation file(\n      $id: String\n      $input: FileInput\n      $operationType: MUTATION_TYPE\n    ) {\n      item: file(id: $id, input: $input, type: $operationType) {\n        id\n        publicId\n        format\n        version\n        resourceType\n        type\n        createdAt\n        height\n        width\n        bytes\n        tags\n        url\n        caption\n        source\n        removed\n        folder\n        pages\n        colors\n      }\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    mutation cloudinaryRequestDone(\n      $id: String\n      $token: String\n      $folder: String\n      $tags: [String]\n    ) {\n      cloudinaryRequestDone(\n        id: $id\n        token: $token\n        folder: $folder\n        tags: $tags\n      ) {\n        id\n        publicId\n        url\n        tags\n        colors\n        width\n        height\n        createdAt\n        caption\n        folder\n        source\n        format\n        bytes\n        removed\n      }\n    }\n  '], ['\n    mutation cloudinaryRequestDone(\n      $id: String\n      $token: String\n      $folder: String\n      $tags: [String]\n    ) {\n      cloudinaryRequestDone(\n        id: $id\n        token: $token\n        folder: $folder\n        tags: $tags\n      ) {\n        id\n        publicId\n        url\n        tags\n        colors\n        width\n        height\n        createdAt\n        caption\n        folder\n        source\n        format\n        bytes\n        removed\n      }\n    }\n  ']);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { onError, onSuccess } from 'olymp-utils';

var ok = function ok(item, mutate, remove) {
  mutate({
    variables: {
      id: item.id,
      input: _extends({}, item, { __typename: undefined }),
      operationType: item.removed ? 'REMOVE' : 'UPDATE'
    },
    updateQueries: item.removed ? {
      fileList: function fileList(prev, _ref) {
        var mutationResult = _ref.mutationResult;
        return _extends({}, prev, {
          items: prev.items.filter(function (item) {
            return item.id !== mutationResult.data.item.id;
          })
        });
      }
    } : undefined
  }).then(function (_ref2) {
    var newItem = _ref2.data.item;

    if (remove) {
      onSuccess('Datei \'' + newItem.id + '\' wurde gel\xF6scht');
    } else {
      onSuccess('Datei \'' + newItem.id + '\' wurde gespeichert');
    }
  }).catch(onError);
};

export default graphql(gql(_templateObject), {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        mutate = _ref3.mutate;
    return _extends({}, ownProps, {
      save: function save(item, remove) {
        return ok(item, mutate, remove);
      },
      mutate: mutate
    });
  }
});

export var cloudinaryRequestDone = graphql(gql(_templateObject2), {
  props: function props(_ref4) {
    var ownProps = _ref4.ownProps,
        mutate = _ref4.mutate;

    return {
      done: function done(_ref5) {
        var id = _ref5.id,
            token = _ref5.token,
            folder = _ref5.folder,
            tags = _ref5.tags;

        return mutate({
          variables: { id: id, token: token, folder: folder, tags: tags },
          updateQueries: {
            fileList: function fileList(prev, _ref6) {
              var mutationResult = _ref6.mutationResult;

              var newData = mutationResult.data.cloudinaryRequestDone;
              return _extends({}, prev, {
                items: [newData].concat(_toConsumableArray(prev.items))
              });
            }
          }
        });
      }
    };
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvZ3FsL211dGF0aW9uLmVzNiJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwib25FcnJvciIsIm9uU3VjY2VzcyIsIm9rIiwiaXRlbSIsIm11dGF0ZSIsInJlbW92ZSIsInZhcmlhYmxlcyIsImlkIiwiaW5wdXQiLCJfX3R5cGVuYW1lIiwidW5kZWZpbmVkIiwib3BlcmF0aW9uVHlwZSIsInJlbW92ZWQiLCJ1cGRhdGVRdWVyaWVzIiwiZmlsZUxpc3QiLCJwcmV2IiwibXV0YXRpb25SZXN1bHQiLCJpdGVtcyIsImZpbHRlciIsImRhdGEiLCJ0aGVuIiwibmV3SXRlbSIsImNhdGNoIiwicHJvcHMiLCJvd25Qcm9wcyIsInNhdmUiLCJjbG91ZGluYXJ5UmVxdWVzdERvbmUiLCJkb25lIiwidG9rZW4iLCJmb2xkZXIiLCJ0YWdzIiwibmV3RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsR0FBUCxNQUFnQixhQUFoQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsY0FBeEI7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxTQUFsQixRQUFtQyxhQUFuQzs7QUFFQSxJQUFNQyxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsSUFBRCxFQUFPQyxNQUFQLEVBQWVDLE1BQWYsRUFBMEI7QUFDbkNELFNBQU87QUFDTEUsZUFBVztBQUNUQyxVQUFJSixLQUFLSSxFQURBO0FBRVRDLDBCQUFZTCxJQUFaLElBQWtCTSxZQUFZQyxTQUE5QixHQUZTO0FBR1RDLHFCQUFlUixLQUFLUyxPQUFMLEdBQWUsUUFBZixHQUEwQjtBQUhoQyxLQUROO0FBTUxDLG1CQUFlVixLQUFLUyxPQUFMLEdBQ1g7QUFDRUUsZ0JBQVUsa0JBQUNDLElBQUQ7QUFBQSxZQUFTQyxjQUFULFFBQVNBLGNBQVQ7QUFBQSw0QkFDTEQsSUFESztBQUVSRSxpQkFBT0YsS0FBS0UsS0FBTCxDQUFXQyxNQUFYLENBQ0w7QUFBQSxtQkFBUWYsS0FBS0ksRUFBTCxLQUFZUyxlQUFlRyxJQUFmLENBQW9CaEIsSUFBcEIsQ0FBeUJJLEVBQTdDO0FBQUEsV0FESztBQUZDO0FBQUE7QUFEWixLQURXLEdBU1hHO0FBZkMsR0FBUCxFQWlCR1UsSUFqQkgsQ0FpQlEsaUJBQWlDO0FBQUEsUUFBaEJDLE9BQWdCLFNBQTlCRixJQUE4QixDQUF0QmhCLElBQXNCOztBQUNyQyxRQUFJRSxNQUFKLEVBQVk7QUFDVkosNkJBQW9Cb0IsUUFBUWQsRUFBNUI7QUFDRCxLQUZELE1BRU87QUFDTE4sNkJBQW9Cb0IsUUFBUWQsRUFBNUI7QUFDRDtBQUNGLEdBdkJILEVBd0JHZSxLQXhCSCxDQXdCU3RCLE9BeEJUO0FBeUJELENBMUJEOztBQTRCQSxlQUFlRCxRQUNiRCxHQURhLG1CQTZCYjtBQUNFeUIsU0FBTztBQUFBLFFBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWFwQixNQUFiLFNBQWFBLE1BQWI7QUFBQSx3QkFDRm9CLFFBREU7QUFFTEMsWUFBTSxjQUFDdEIsSUFBRCxFQUFPRSxNQUFQO0FBQUEsZUFBa0JILEdBQUdDLElBQUgsRUFBU0MsTUFBVCxFQUFpQkMsTUFBakIsQ0FBbEI7QUFBQSxPQUZEO0FBR0xEO0FBSEs7QUFBQTtBQURULENBN0JhLENBQWY7O0FBc0NBLE9BQU8sSUFBTXNCLHdCQUF3QjNCLFFBQ25DRCxHQURtQyxvQkErQm5DO0FBQ0V5QixPQURGLHdCQUM4QjtBQUFBLFFBQXBCQyxRQUFvQixTQUFwQkEsUUFBb0I7QUFBQSxRQUFWcEIsTUFBVSxTQUFWQSxNQUFVOztBQUMxQixXQUFPO0FBQ0x1QixVQURLLHVCQUM2QjtBQUFBLFlBQTNCcEIsRUFBMkIsU0FBM0JBLEVBQTJCO0FBQUEsWUFBdkJxQixLQUF1QixTQUF2QkEsS0FBdUI7QUFBQSxZQUFoQkMsTUFBZ0IsU0FBaEJBLE1BQWdCO0FBQUEsWUFBUkMsSUFBUSxTQUFSQSxJQUFROztBQUNoQyxlQUFPMUIsT0FBTztBQUNaRSxxQkFBVyxFQUFFQyxNQUFGLEVBQU1xQixZQUFOLEVBQWFDLGNBQWIsRUFBcUJDLFVBQXJCLEVBREM7QUFFWmpCLHlCQUFlO0FBQ2JDLHNCQUFVLGtCQUFDQyxJQUFELFNBQThCO0FBQUEsa0JBQXJCQyxjQUFxQixTQUFyQkEsY0FBcUI7O0FBQ3RDLGtCQUFNZSxVQUFVZixlQUFlRyxJQUFmLENBQW9CTyxxQkFBcEM7QUFDQSxrQ0FDS1gsSUFETDtBQUVFRSx3QkFBUWMsT0FBUiw0QkFBb0JoQixLQUFLRSxLQUF6QjtBQUZGO0FBSUQ7QUFQWTtBQUZILFNBQVAsQ0FBUDtBQVlEO0FBZEksS0FBUDtBQWdCRDtBQWxCSCxDQS9CbUMsQ0FBOUIiLCJmaWxlIjoicGFja2FnZXMvY2xvdWRpbmFyeS9ncWwvbXV0YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgb25FcnJvciwgb25TdWNjZXNzIH0gZnJvbSAnb2x5bXAtdXRpbHMnO1xuXG5jb25zdCBvayA9IChpdGVtLCBtdXRhdGUsIHJlbW92ZSkgPT4ge1xuICBtdXRhdGUoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICBpbnB1dDogeyAuLi5pdGVtLCBfX3R5cGVuYW1lOiB1bmRlZmluZWQgfSxcbiAgICAgIG9wZXJhdGlvblR5cGU6IGl0ZW0ucmVtb3ZlZCA/ICdSRU1PVkUnIDogJ1VQREFURScsXG4gICAgfSxcbiAgICB1cGRhdGVRdWVyaWVzOiBpdGVtLnJlbW92ZWRcbiAgICAgID8ge1xuICAgICAgICAgIGZpbGVMaXN0OiAocHJldiwgeyBtdXRhdGlvblJlc3VsdCB9KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGl0ZW1zOiBwcmV2Lml0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgICAgaXRlbSA9PiBpdGVtLmlkICE9PSBtdXRhdGlvblJlc3VsdC5kYXRhLml0ZW0uaWQsXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfSlcbiAgICAudGhlbigoeyBkYXRhOiB7IGl0ZW06IG5ld0l0ZW0gfSB9KSA9PiB7XG4gICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgIG9uU3VjY2VzcyhgRGF0ZWkgJyR7bmV3SXRlbS5pZH0nIHd1cmRlIGdlbMO2c2NodGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25TdWNjZXNzKGBEYXRlaSAnJHtuZXdJdGVtLmlkfScgd3VyZGUgZ2VzcGVpY2hlcnRgKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChvbkVycm9yKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoXG4gIGdxbGBcbiAgICBtdXRhdGlvbiBmaWxlKFxuICAgICAgJGlkOiBTdHJpbmdcbiAgICAgICRpbnB1dDogRmlsZUlucHV0XG4gICAgICAkb3BlcmF0aW9uVHlwZTogTVVUQVRJT05fVFlQRVxuICAgICkge1xuICAgICAgaXRlbTogZmlsZShpZDogJGlkLCBpbnB1dDogJGlucHV0LCB0eXBlOiAkb3BlcmF0aW9uVHlwZSkge1xuICAgICAgICBpZFxuICAgICAgICBwdWJsaWNJZFxuICAgICAgICBmb3JtYXRcbiAgICAgICAgdmVyc2lvblxuICAgICAgICByZXNvdXJjZVR5cGVcbiAgICAgICAgdHlwZVxuICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgaGVpZ2h0XG4gICAgICAgIHdpZHRoXG4gICAgICAgIGJ5dGVzXG4gICAgICAgIHRhZ3NcbiAgICAgICAgdXJsXG4gICAgICAgIGNhcHRpb25cbiAgICAgICAgc291cmNlXG4gICAgICAgIHJlbW92ZWRcbiAgICAgICAgZm9sZGVyXG4gICAgICAgIHBhZ2VzXG4gICAgICAgIGNvbG9yc1xuICAgICAgfVxuICAgIH1cbiAgYCxcbiAge1xuICAgIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIHNhdmU6IChpdGVtLCByZW1vdmUpID0+IG9rKGl0ZW0sIG11dGF0ZSwgcmVtb3ZlKSxcbiAgICAgIG11dGF0ZSxcbiAgICB9KSxcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBjbG91ZGluYXJ5UmVxdWVzdERvbmUgPSBncmFwaHFsKFxuICBncWxgXG4gICAgbXV0YXRpb24gY2xvdWRpbmFyeVJlcXVlc3REb25lKFxuICAgICAgJGlkOiBTdHJpbmdcbiAgICAgICR0b2tlbjogU3RyaW5nXG4gICAgICAkZm9sZGVyOiBTdHJpbmdcbiAgICAgICR0YWdzOiBbU3RyaW5nXVxuICAgICkge1xuICAgICAgY2xvdWRpbmFyeVJlcXVlc3REb25lKFxuICAgICAgICBpZDogJGlkXG4gICAgICAgIHRva2VuOiAkdG9rZW5cbiAgICAgICAgZm9sZGVyOiAkZm9sZGVyXG4gICAgICAgIHRhZ3M6ICR0YWdzXG4gICAgICApIHtcbiAgICAgICAgaWRcbiAgICAgICAgcHVibGljSWRcbiAgICAgICAgdXJsXG4gICAgICAgIHRhZ3NcbiAgICAgICAgY29sb3JzXG4gICAgICAgIHdpZHRoXG4gICAgICAgIGhlaWdodFxuICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgY2FwdGlvblxuICAgICAgICBmb2xkZXJcbiAgICAgICAgc291cmNlXG4gICAgICAgIGZvcm1hdFxuICAgICAgICBieXRlc1xuICAgICAgICByZW1vdmVkXG4gICAgICB9XG4gICAgfVxuICBgLFxuICB7XG4gICAgcHJvcHMoeyBvd25Qcm9wcywgbXV0YXRlIH0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRvbmUoeyBpZCwgdG9rZW4sIGZvbGRlciwgdGFncyB9KSB7XG4gICAgICAgICAgcmV0dXJuIG11dGF0ZSh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgaWQsIHRva2VuLCBmb2xkZXIsIHRhZ3MgfSxcbiAgICAgICAgICAgIHVwZGF0ZVF1ZXJpZXM6IHtcbiAgICAgICAgICAgICAgZmlsZUxpc3Q6IChwcmV2LCB7IG11dGF0aW9uUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gbXV0YXRpb25SZXN1bHQuZGF0YS5jbG91ZGluYXJ5UmVxdWVzdERvbmU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW25ld0RhdGEsIC4uLnByZXYuaXRlbXNdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuKTtcbiJdfQ==
