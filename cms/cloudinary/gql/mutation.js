import 'antd/lib/message/style';
import _message3 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message2 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    mutation file(\n      $id: String\n      $input: FileInput\n      $operationType: MUTATION_TYPE\n    ) {\n      item: file(id: $id, input: $input, type: $operationType) {\n        id\n        publicId\n        format\n        version\n        resourceType\n        type\n        createdAt\n        height\n        width\n        bytes\n        tags\n        url\n        caption\n        source\n        removed\n        folder\n        pages\n        colors\n      }\n    }\n  '], ['\n    mutation file(\n      $id: String\n      $input: FileInput\n      $operationType: MUTATION_TYPE\n    ) {\n      item: file(id: $id, input: $input, type: $operationType) {\n        id\n        publicId\n        format\n        version\n        resourceType\n        type\n        createdAt\n        height\n        width\n        bytes\n        tags\n        url\n        caption\n        source\n        removed\n        folder\n        pages\n        colors\n      }\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    mutation cloudinaryRequestDone(\n      $id: String\n      $token: String\n      $folder: String\n      $tags: [String]\n    ) {\n      cloudinaryRequestDone(\n        id: $id\n        token: $token\n        folder: $folder\n        tags: $tags\n      ) {\n        id\n        publicId\n        url\n        tags\n        colors\n        width\n        height\n        createdAt\n        caption\n        folder\n        source\n        format\n        bytes\n        removed\n      }\n    }\n  '], ['\n    mutation cloudinaryRequestDone(\n      $id: String\n      $token: String\n      $folder: String\n      $tags: [String]\n    ) {\n      cloudinaryRequestDone(\n        id: $id\n        token: $token\n        folder: $folder\n        tags: $tags\n      ) {\n        id\n        publicId\n        url\n        tags\n        colors\n        width\n        height\n        createdAt\n        caption\n        folder\n        source\n        format\n        bytes\n        removed\n      }\n    }\n  ']);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


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
      _message.success('Datei \'' + newItem.id + '\' wurde gel\xF6scht');
    } else {
      _message2.success('Datei \'' + newItem.id + '\' wurde gespeichert');
    }
  }).catch(function (err) {
    return _message3.error(err.message);
  });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2dxbC9tdXRhdGlvbi5lczYiXSwibmFtZXMiOlsiZ3FsIiwiZ3JhcGhxbCIsIm9rIiwiaXRlbSIsIm11dGF0ZSIsInJlbW92ZSIsInZhcmlhYmxlcyIsImlkIiwiaW5wdXQiLCJfX3R5cGVuYW1lIiwidW5kZWZpbmVkIiwib3BlcmF0aW9uVHlwZSIsInJlbW92ZWQiLCJ1cGRhdGVRdWVyaWVzIiwiZmlsZUxpc3QiLCJwcmV2IiwibXV0YXRpb25SZXN1bHQiLCJpdGVtcyIsImZpbHRlciIsImRhdGEiLCJ0aGVuIiwibmV3SXRlbSIsInN1Y2Nlc3MiLCJjYXRjaCIsImVycm9yIiwiZXJyIiwibWVzc2FnZSIsInByb3BzIiwib3duUHJvcHMiLCJzYXZlIiwiY2xvdWRpbmFyeVJlcXVlc3REb25lIiwiZG9uZSIsInRva2VuIiwiZm9sZGVyIiwidGFncyIsIm5ld0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxHQUFQLE1BQWdCLGFBQWhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixjQUF4Qjs7O0FBR0EsSUFBTUMsS0FBSyxTQUFMQSxFQUFLLENBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxNQUFmLEVBQTBCO0FBQ25DRCxTQUFPO0FBQ0xFLGVBQVc7QUFDVEMsVUFBSUosS0FBS0ksRUFEQTtBQUVUQywwQkFBWUwsSUFBWixJQUFrQk0sWUFBWUMsU0FBOUIsR0FGUztBQUdUQyxxQkFBZVIsS0FBS1MsT0FBTCxHQUFlLFFBQWYsR0FBMEI7QUFIaEMsS0FETjtBQU1MQyxtQkFBZVYsS0FBS1MsT0FBTCxHQUNYO0FBQ0VFLGdCQUFVLGtCQUFDQyxJQUFEO0FBQUEsWUFBU0MsY0FBVCxRQUFTQSxjQUFUO0FBQUEsNEJBQ0xELElBREs7QUFFUkUsaUJBQU9GLEtBQUtFLEtBQUwsQ0FBV0MsTUFBWCxDQUNMO0FBQUEsbUJBQVFmLEtBQUtJLEVBQUwsS0FBWVMsZUFBZUcsSUFBZixDQUFvQmhCLElBQXBCLENBQXlCSSxFQUE3QztBQUFBLFdBREs7QUFGQztBQUFBO0FBRFosS0FEVyxHQVNYRztBQWZDLEdBQVAsRUFpQkdVLElBakJILENBaUJRLGlCQUFpQztBQUFBLFFBQWhCQyxPQUFnQixTQUE5QkYsSUFBOEIsQ0FBdEJoQixJQUFzQjs7QUFDckMsUUFBSUUsTUFBSixFQUFZO0FBQ1YsZUFBUWlCLE9BQVIsY0FBMEJELFFBQVFkLEVBQWxDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsZ0JBQVFlLE9BQVIsY0FBMEJELFFBQVFkLEVBQWxDO0FBQ0Q7QUFDRixHQXZCSCxFQXdCR2dCLEtBeEJILENBd0JTO0FBQUEsV0FBTyxVQUFRQyxLQUFSLENBQWNDLElBQUlDLE9BQWxCLENBQVA7QUFBQSxHQXhCVDtBQXlCRCxDQTFCRDs7QUE0QkEsZUFBZXpCLFFBQ2JELEdBRGEsbUJBNkJiO0FBQ0UyQixTQUFPO0FBQUEsUUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYXhCLE1BQWIsU0FBYUEsTUFBYjtBQUFBLHdCQUNGd0IsUUFERTtBQUVMQyxZQUFNLGNBQUMxQixJQUFELEVBQU9FLE1BQVA7QUFBQSxlQUFrQkgsR0FBR0MsSUFBSCxFQUFTQyxNQUFULEVBQWlCQyxNQUFqQixDQUFsQjtBQUFBLE9BRkQ7QUFHTEQ7QUFISztBQUFBO0FBRFQsQ0E3QmEsQ0FBZjs7QUFzQ0EsT0FBTyxJQUFNMEIsd0JBQXdCN0IsUUFDbkNELEdBRG1DLG9CQStCbkM7QUFDRTJCLE9BREYsd0JBQzhCO0FBQUEsUUFBcEJDLFFBQW9CLFNBQXBCQSxRQUFvQjtBQUFBLFFBQVZ4QixNQUFVLFNBQVZBLE1BQVU7O0FBQzFCLFdBQU87QUFDTDJCLFVBREssdUJBQzZCO0FBQUEsWUFBM0J4QixFQUEyQixTQUEzQkEsRUFBMkI7QUFBQSxZQUF2QnlCLEtBQXVCLFNBQXZCQSxLQUF1QjtBQUFBLFlBQWhCQyxNQUFnQixTQUFoQkEsTUFBZ0I7QUFBQSxZQUFSQyxJQUFRLFNBQVJBLElBQVE7O0FBQ2hDLGVBQU85QixPQUFPO0FBQ1pFLHFCQUFXLEVBQUVDLE1BQUYsRUFBTXlCLFlBQU4sRUFBYUMsY0FBYixFQUFxQkMsVUFBckIsRUFEQztBQUVackIseUJBQWU7QUFDYkMsc0JBQVUsa0JBQUNDLElBQUQsU0FBOEI7QUFBQSxrQkFBckJDLGNBQXFCLFNBQXJCQSxjQUFxQjs7QUFDdEMsa0JBQU1tQixVQUFVbkIsZUFBZUcsSUFBZixDQUFvQlcscUJBQXBDO0FBQ0Esa0NBQ0tmLElBREw7QUFFRUUsd0JBQVFrQixPQUFSLDRCQUFvQnBCLEtBQUtFLEtBQXpCO0FBRkY7QUFJRDtBQVBZO0FBRkgsU0FBUCxDQUFQO0FBWUQ7QUFkSSxLQUFQO0FBZ0JEO0FBbEJILENBL0JtQyxDQUE5QiIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9ncWwvbXV0YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBvayA9IChpdGVtLCBtdXRhdGUsIHJlbW92ZSkgPT4ge1xuICBtdXRhdGUoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICBpbnB1dDogeyAuLi5pdGVtLCBfX3R5cGVuYW1lOiB1bmRlZmluZWQgfSxcbiAgICAgIG9wZXJhdGlvblR5cGU6IGl0ZW0ucmVtb3ZlZCA/ICdSRU1PVkUnIDogJ1VQREFURScsXG4gICAgfSxcbiAgICB1cGRhdGVRdWVyaWVzOiBpdGVtLnJlbW92ZWRcbiAgICAgID8ge1xuICAgICAgICAgIGZpbGVMaXN0OiAocHJldiwgeyBtdXRhdGlvblJlc3VsdCB9KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGl0ZW1zOiBwcmV2Lml0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgICAgaXRlbSA9PiBpdGVtLmlkICE9PSBtdXRhdGlvblJlc3VsdC5kYXRhLml0ZW0uaWQsXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfSlcbiAgICAudGhlbigoeyBkYXRhOiB7IGl0ZW06IG5ld0l0ZW0gfSB9KSA9PiB7XG4gICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgRGF0ZWkgJyR7bmV3SXRlbS5pZH0nIHd1cmRlIGdlbMO2c2NodGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKGBEYXRlaSAnJHtuZXdJdGVtLmlkfScgd3VyZGUgZ2VzcGVpY2hlcnRgKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChcbiAgZ3FsYFxuICAgIG11dGF0aW9uIGZpbGUoXG4gICAgICAkaWQ6IFN0cmluZ1xuICAgICAgJGlucHV0OiBGaWxlSW5wdXRcbiAgICAgICRvcGVyYXRpb25UeXBlOiBNVVRBVElPTl9UWVBFXG4gICAgKSB7XG4gICAgICBpdGVtOiBmaWxlKGlkOiAkaWQsIGlucHV0OiAkaW5wdXQsIHR5cGU6ICRvcGVyYXRpb25UeXBlKSB7XG4gICAgICAgIGlkXG4gICAgICAgIHB1YmxpY0lkXG4gICAgICAgIGZvcm1hdFxuICAgICAgICB2ZXJzaW9uXG4gICAgICAgIHJlc291cmNlVHlwZVxuICAgICAgICB0eXBlXG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICBoZWlnaHRcbiAgICAgICAgd2lkdGhcbiAgICAgICAgYnl0ZXNcbiAgICAgICAgdGFnc1xuICAgICAgICB1cmxcbiAgICAgICAgY2FwdGlvblxuICAgICAgICBzb3VyY2VcbiAgICAgICAgcmVtb3ZlZFxuICAgICAgICBmb2xkZXJcbiAgICAgICAgcGFnZXNcbiAgICAgICAgY29sb3JzXG4gICAgICB9XG4gICAgfVxuICBgLFxuICB7XG4gICAgcHJvcHM6ICh7IG93blByb3BzLCBtdXRhdGUgfSkgPT4gKHtcbiAgICAgIC4uLm93blByb3BzLFxuICAgICAgc2F2ZTogKGl0ZW0sIHJlbW92ZSkgPT4gb2soaXRlbSwgbXV0YXRlLCByZW1vdmUpLFxuICAgICAgbXV0YXRlLFxuICAgIH0pLFxuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGNsb3VkaW5hcnlSZXF1ZXN0RG9uZSA9IGdyYXBocWwoXG4gIGdxbGBcbiAgICBtdXRhdGlvbiBjbG91ZGluYXJ5UmVxdWVzdERvbmUoXG4gICAgICAkaWQ6IFN0cmluZ1xuICAgICAgJHRva2VuOiBTdHJpbmdcbiAgICAgICRmb2xkZXI6IFN0cmluZ1xuICAgICAgJHRhZ3M6IFtTdHJpbmddXG4gICAgKSB7XG4gICAgICBjbG91ZGluYXJ5UmVxdWVzdERvbmUoXG4gICAgICAgIGlkOiAkaWRcbiAgICAgICAgdG9rZW46ICR0b2tlblxuICAgICAgICBmb2xkZXI6ICRmb2xkZXJcbiAgICAgICAgdGFnczogJHRhZ3NcbiAgICAgICkge1xuICAgICAgICBpZFxuICAgICAgICBwdWJsaWNJZFxuICAgICAgICB1cmxcbiAgICAgICAgdGFnc1xuICAgICAgICBjb2xvcnNcbiAgICAgICAgd2lkdGhcbiAgICAgICAgaGVpZ2h0XG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICBjYXB0aW9uXG4gICAgICAgIGZvbGRlclxuICAgICAgICBzb3VyY2VcbiAgICAgICAgZm9ybWF0XG4gICAgICAgIGJ5dGVzXG4gICAgICAgIHJlbW92ZWRcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHtcbiAgICBwcm9wcyh7IG93blByb3BzLCBtdXRhdGUgfSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZSh7IGlkLCB0b2tlbiwgZm9sZGVyLCB0YWdzIH0pIHtcbiAgICAgICAgICByZXR1cm4gbXV0YXRlKHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogeyBpZCwgdG9rZW4sIGZvbGRlciwgdGFncyB9LFxuICAgICAgICAgICAgdXBkYXRlUXVlcmllczoge1xuICAgICAgICAgICAgICBmaWxlTGlzdDogKHByZXYsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBtdXRhdGlvblJlc3VsdC5kYXRhLmNsb3VkaW5hcnlSZXF1ZXN0RG9uZTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbbmV3RGF0YSwgLi4ucHJldi5pdGVtc10sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4pO1xuIl19
