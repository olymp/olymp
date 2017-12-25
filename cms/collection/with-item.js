import 'antd/lib/message/style';
import _message7 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message6 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message5 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message4 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message3 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message2 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';
import _lowerFirst from 'lodash/lowerFirst';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    mutation ', '($id: String, $input: ', 'Input, $type: MUTATION_TYPE) {\n      item: ', '(id: $id, input: $input, type: $type) {\n        ', '\n      }\n    }\n  '], ['\n    mutation ', '($id: String, $input: ', 'Input, $type: MUTATION_TYPE) {\n      item: ', '(id: $id, input: $input, type: $type) {\n        ', '\n      }\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      query ', '($id: String!) {\n        item: ', '(query: { id: {eq: $id} }) {\n          ', '\n        }\n      }\n    '], ['\n      query ', '($id: String!) {\n        item: ', '(query: { id: {eq: $id} }) {\n          ', '\n        }\n      }\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { connect } from 'react-redux';
import { createUpdateQuery } from 'olymp-router';
import { graphql } from 'react-apollo';

import { omit as omit2 } from 'olymp-apollo';

import gql from 'graphql-tag';

var ok = function ok(props) {
  return function () {
    var form = props.form,
        item = props.item,
        updateQuery = props.updateQuery,
        mutate = props.mutate,
        typeName = props.typeName;

    form.validateFields(function (err, values) {
      if (err) {
        return _message.error(err);
      }

      if (values.start && Array.isArray(values.start)) {
        values.end = values.start[1];
        values.start = values.start[0];
      }

      mutate({
        variables: {
          id: item && item.id,
          input: omit2(values)
        },
        refetchQueries: [_lowerFirst(typeName) + 'List', '' + _lowerFirst(typeName)]
        /* updateQueries:
          !item || !item.id
            ? {
              [`${typeName.toLowerCase()}List`]: (prev, { mutationResult }) => ({
                ...prev,
                items: [mutationResult.data.item, ...prev.items],
              }),
            }
            : undefined, */
      }).then(function (_ref) {
        var item = _ref.data.item;

        _message2.success('Gespeichert');
        form.resetFields();
        updateQuery(_defineProperty({}, '@' + _lowerFirst(typeName), item.id));
      }).catch(function (err) {
        return _message3.error(err);
      });
    });
  };
};

var clone = function clone(props) {
  return function () {
    var form = props.form,
        item = props.item,
        router = props.router,
        updateQuery = props.updateQuery,
        mutate = props.mutate,
        typeName = props.typeName;

    var cloneItem = omit2(item);
    delete cloneItem.id;
    mutate({
      variables: {
        input: cloneItem
      },
      updateQueries: _defineProperty({}, typeName.toLowerCase() + 'List', function undefined(prev, _ref2) {
        var mutationResult = _ref2.mutationResult;
        return _extends({}, prev, {
          items: [mutationResult.data.item].concat(_toConsumableArray(prev.items))
        });
      })
    }).then(function (_ref3) {
      var item = _ref3.data.item;

      _message4.success('Kopiert');
      form.resetFields();
      updateQuery(_defineProperty({}, '@' + _lowerFirst(typeName), item.id));
    }).catch(function (err) {
      return _message5.error(err);
    });
  };
};

var del = function del(props) {
  return function () {
    var form = props.form,
        item = props.item,
        router = props.router,
        updateQuery = props.updateQuery,
        mutate = props.mutate,
        typeName = props.typeName;

    return mutate({
      variables: {
        id: item && item.id,
        type: 'REMOVE'
      },
      updateQueries: _defineProperty({}, typeName.toLowerCase() + 'List', function undefined(prev) {
        return _extends({}, prev, {
          items: prev.items.filter(function (x) {
            return x.id !== item.id;
          })
        });
      })
    }).then(function (_ref4) {
      var data = _ref4.data;

      _message6.success('Gelöscht');
      form.resetFields();
      updateQuery(_defineProperty({}, '@' + _lowerFirst(typeName), null));
    }).catch(function (err) {
      return _message7.error(err);
    });
  };
};

export default (function (WrappedComponent) {
  var cache = {};
  var bound = function bound(_ref5) {
    var typeName = _ref5.typeName,
        fieldNames = _ref5.fieldNames;

    var mutation = graphql(gql(_templateObject, _lowerFirst(typeName), typeName, _lowerFirst(typeName), fieldNames));
    var query = graphql(gql(_templateObject2, _lowerFirst(typeName), _lowerFirst(typeName), fieldNames), {
      /* eslint-disable */
      props: function props(_ref6) {
        var ownProps = _ref6.ownProps,
            data = _ref6.data;
        return _extends({}, ownProps, {
          item: data.item
        });
      },
      options: function options(_ref7) {
        var id = _ref7.id;
        return {
          fetchPolicy: !id ? 'cache-only' : undefined,
          variables: {
            id: id
          }
        };
      }
    });
    return query(mutation(function (props) {
      return React.createElement(WrappedComponent, _extends({}, props, {
        x: props.form,
        onSave: ok(props),
        onClone: clone(props),
        onDelete: del(props)
      }));
    }));
  };

  return connect(null, function (dispatcher) {
    return {
      updateQuery: createUpdateQuery(dispatcher)
    };
  })(function (props) {
    if (props.typeName && props.fieldNames && props.collection) {
      var name = props.typeName + '|' + props.fieldNames;
      var Bound = cache[name] || bound(props);
      cache[name] = Bound;
      return React.createElement(Bound, props);
    }
    return null;
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3dpdGgtaXRlbS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiY3JlYXRlVXBkYXRlUXVlcnkiLCJncmFwaHFsIiwib21pdCIsIm9taXQyIiwiZ3FsIiwib2siLCJmb3JtIiwicHJvcHMiLCJpdGVtIiwidXBkYXRlUXVlcnkiLCJtdXRhdGUiLCJ0eXBlTmFtZSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsdWVzIiwiZXJyb3IiLCJzdGFydCIsIkFycmF5IiwiaXNBcnJheSIsImVuZCIsInZhcmlhYmxlcyIsImlkIiwiaW5wdXQiLCJyZWZldGNoUXVlcmllcyIsInRoZW4iLCJkYXRhIiwic3VjY2VzcyIsInJlc2V0RmllbGRzIiwiY2F0Y2giLCJjbG9uZSIsInJvdXRlciIsImNsb25lSXRlbSIsInVwZGF0ZVF1ZXJpZXMiLCJ0b0xvd2VyQ2FzZSIsInByZXYiLCJtdXRhdGlvblJlc3VsdCIsIml0ZW1zIiwiZGVsIiwidHlwZSIsImZpbHRlciIsIngiLCJjYWNoZSIsImJvdW5kIiwiZmllbGROYW1lcyIsIm11dGF0aW9uIiwicXVlcnkiLCJvd25Qcm9wcyIsIm9wdGlvbnMiLCJmZXRjaFBvbGljeSIsInVuZGVmaW5lZCIsImRpc3BhdGNoZXIiLCJjb2xsZWN0aW9uIiwibmFtZSIsIkJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixhQUF4QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLGNBQWxDO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixjQUF4Qjs7QUFFQSxTQUFTQyxRQUFRQyxLQUFqQixRQUE4QixjQUE5Qjs7QUFFQSxPQUFPQyxHQUFQLE1BQWdCLGFBQWhCOztBQUVBLElBQU1DLEtBQUssU0FBTEEsRUFBSztBQUFBLFNBQVMsWUFBTTtBQUFBLFFBQ2hCQyxJQURnQixHQUM4QkMsS0FEOUIsQ0FDaEJELElBRGdCO0FBQUEsUUFDVkUsSUFEVSxHQUM4QkQsS0FEOUIsQ0FDVkMsSUFEVTtBQUFBLFFBQ0pDLFdBREksR0FDOEJGLEtBRDlCLENBQ0pFLFdBREk7QUFBQSxRQUNTQyxNQURULEdBQzhCSCxLQUQ5QixDQUNTRyxNQURUO0FBQUEsUUFDaUJDLFFBRGpCLEdBQzhCSixLQUQ5QixDQUNpQkksUUFEakI7O0FBRXhCTCxTQUFLTSxjQUFMLENBQW9CLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNuQyxVQUFJRCxHQUFKLEVBQVM7QUFDUCxlQUFPLFNBQVFFLEtBQVIsQ0FBY0YsR0FBZCxDQUFQO0FBQ0Q7O0FBRUQsVUFBSUMsT0FBT0UsS0FBUCxJQUFnQkMsTUFBTUMsT0FBTixDQUFjSixPQUFPRSxLQUFyQixDQUFwQixFQUFpRDtBQUMvQ0YsZUFBT0ssR0FBUCxHQUFhTCxPQUFPRSxLQUFQLENBQWEsQ0FBYixDQUFiO0FBQ0FGLGVBQU9FLEtBQVAsR0FBZUYsT0FBT0UsS0FBUCxDQUFhLENBQWIsQ0FBZjtBQUNEOztBQUVETixhQUFPO0FBQ0xVLG1CQUFXO0FBQ1RDLGNBQUliLFFBQVFBLEtBQUthLEVBRFI7QUFFVEMsaUJBQU9uQixNQUFNVyxNQUFOO0FBRkUsU0FETjtBQUtMUyx3QkFBZ0IsQ0FDWCxZQUFXWixRQUFYLENBRFcsZ0JBRVgsWUFBV0EsUUFBWCxDQUZXO0FBSWhCOzs7Ozs7Ozs7QUFUSyxPQUFQLEVBbUJHYSxJQW5CSCxDQW1CUSxnQkFBd0I7QUFBQSxZQUFiaEIsSUFBYSxRQUFyQmlCLElBQXFCLENBQWJqQixJQUFhOztBQUM1QixrQkFBUWtCLE9BQVIsQ0FBZ0IsYUFBaEI7QUFDQXBCLGFBQUtxQixXQUFMO0FBQ0FsQiw4Q0FBbUIsWUFBV0UsUUFBWCxDQUFuQixFQUE0Q0gsS0FBS2EsRUFBakQ7QUFDRCxPQXZCSCxFQXdCR08sS0F4QkgsQ0F3QlM7QUFBQSxlQUFPLFVBQVFiLEtBQVIsQ0FBY0YsR0FBZCxDQUFQO0FBQUEsT0F4QlQ7QUF5QkQsS0FuQ0Q7QUFvQ0QsR0F0Q1U7QUFBQSxDQUFYOztBQXdDQSxJQUFNZ0IsUUFBUSxTQUFSQSxLQUFRO0FBQUEsU0FBUyxZQUFNO0FBQUEsUUFDbkJ2QixJQURtQixHQUNtQ0MsS0FEbkMsQ0FDbkJELElBRG1CO0FBQUEsUUFDYkUsSUFEYSxHQUNtQ0QsS0FEbkMsQ0FDYkMsSUFEYTtBQUFBLFFBQ1BzQixNQURPLEdBQ21DdkIsS0FEbkMsQ0FDUHVCLE1BRE87QUFBQSxRQUNDckIsV0FERCxHQUNtQ0YsS0FEbkMsQ0FDQ0UsV0FERDtBQUFBLFFBQ2NDLE1BRGQsR0FDbUNILEtBRG5DLENBQ2NHLE1BRGQ7QUFBQSxRQUNzQkMsUUFEdEIsR0FDbUNKLEtBRG5DLENBQ3NCSSxRQUR0Qjs7QUFFM0IsUUFBTW9CLFlBQVk1QixNQUFNSyxJQUFOLENBQWxCO0FBQ0EsV0FBT3VCLFVBQVVWLEVBQWpCO0FBQ0FYLFdBQU87QUFDTFUsaUJBQVc7QUFDVEUsZUFBT1M7QUFERSxPQUROO0FBSUxDLHlDQUNNckIsU0FBU3NCLFdBQVQsRUFETixXQUNxQyxtQkFBQ0MsSUFBRDtBQUFBLFlBQVNDLGNBQVQsU0FBU0EsY0FBVDtBQUFBLDRCQUM5QkQsSUFEOEI7QUFFakNFLGtCQUFRRCxlQUFlVixJQUFmLENBQW9CakIsSUFBNUIsNEJBQXFDMEIsS0FBS0UsS0FBMUM7QUFGaUM7QUFBQSxPQURyQztBQUpLLEtBQVAsRUFXR1osSUFYSCxDQVdRLGlCQUF3QjtBQUFBLFVBQWJoQixJQUFhLFNBQXJCaUIsSUFBcUIsQ0FBYmpCLElBQWE7O0FBQzVCLGdCQUFRa0IsT0FBUixDQUFnQixTQUFoQjtBQUNBcEIsV0FBS3FCLFdBQUw7QUFDQWxCLDRDQUFtQixZQUFXRSxRQUFYLENBQW5CLEVBQTRDSCxLQUFLYSxFQUFqRDtBQUNELEtBZkgsRUFnQkdPLEtBaEJILENBZ0JTO0FBQUEsYUFBTyxVQUFRYixLQUFSLENBQWNGLEdBQWQsQ0FBUDtBQUFBLEtBaEJUO0FBaUJELEdBckJhO0FBQUEsQ0FBZDs7QUF1QkEsSUFBTXdCLE1BQU0sU0FBTkEsR0FBTTtBQUFBLFNBQVMsWUFBTTtBQUFBLFFBQ2pCL0IsSUFEaUIsR0FDcUNDLEtBRHJDLENBQ2pCRCxJQURpQjtBQUFBLFFBQ1hFLElBRFcsR0FDcUNELEtBRHJDLENBQ1hDLElBRFc7QUFBQSxRQUNMc0IsTUFESyxHQUNxQ3ZCLEtBRHJDLENBQ0x1QixNQURLO0FBQUEsUUFDR3JCLFdBREgsR0FDcUNGLEtBRHJDLENBQ0dFLFdBREg7QUFBQSxRQUNnQkMsTUFEaEIsR0FDcUNILEtBRHJDLENBQ2dCRyxNQURoQjtBQUFBLFFBQ3dCQyxRQUR4QixHQUNxQ0osS0FEckMsQ0FDd0JJLFFBRHhCOztBQUV6QixXQUFPRCxPQUFPO0FBQ1pVLGlCQUFXO0FBQ1RDLFlBQUliLFFBQVFBLEtBQUthLEVBRFI7QUFFVGlCLGNBQU07QUFGRyxPQURDO0FBS1pOLHlDQUNNckIsU0FBU3NCLFdBQVQsRUFETixXQUNxQztBQUFBLDRCQUM5QkMsSUFEOEI7QUFFakNFLGlCQUFPRixLQUFLRSxLQUFMLENBQVdHLE1BQVgsQ0FBa0I7QUFBQSxtQkFBS0MsRUFBRW5CLEVBQUYsS0FBU2IsS0FBS2EsRUFBbkI7QUFBQSxXQUFsQjtBQUYwQjtBQUFBLE9BRHJDO0FBTFksS0FBUCxFQVlKRyxJQVpJLENBWUMsaUJBQWM7QUFBQSxVQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQ2xCLGdCQUFRQyxPQUFSLENBQWdCLFVBQWhCO0FBQ0FwQixXQUFLcUIsV0FBTDtBQUNBbEIsNENBQW1CLFlBQVdFLFFBQVgsQ0FBbkIsRUFBNEMsSUFBNUM7QUFDRCxLQWhCSSxFQWlCSmlCLEtBakJJLENBaUJFO0FBQUEsYUFBTyxVQUFRYixLQUFSLENBQWNGLEdBQWQsQ0FBUDtBQUFBLEtBakJGLENBQVA7QUFrQkQsR0FwQlc7QUFBQSxDQUFaOztBQXNCQSxnQkFBZSw0QkFBb0I7QUFDakMsTUFBTTRCLFFBQVEsRUFBZDtBQUNBLE1BQU1DLFFBQVEsU0FBUkEsS0FBUSxRQUE4QjtBQUFBLFFBQTNCL0IsUUFBMkIsU0FBM0JBLFFBQTJCO0FBQUEsUUFBakJnQyxVQUFpQixTQUFqQkEsVUFBaUI7O0FBQzFDLFFBQU1DLFdBQVczQyxRQUFRRyxHQUFSLGtCQUNOLFlBQVdPLFFBQVgsQ0FETSxFQUVmQSxRQUZlLEVBSVAsWUFBV0EsUUFBWCxDQUpPLEVBS1hnQyxVQUxXLEVBQWpCO0FBU0EsUUFBTUUsUUFBUTVDLFFBQ1pHLEdBRFksbUJBRUosWUFBV08sUUFBWCxDQUZJLEVBR0YsWUFBV0EsUUFBWCxDQUhFLEVBSU5nQyxVQUpNLEdBUVo7QUFDRTtBQUNBcEMsYUFBTztBQUFBLFlBQUd1QyxRQUFILFNBQUdBLFFBQUg7QUFBQSxZQUFhckIsSUFBYixTQUFhQSxJQUFiO0FBQUEsNEJBQ0ZxQixRQURFO0FBRUx0QyxnQkFBTWlCLEtBQUtqQjtBQUZOO0FBQUEsT0FGVDtBQU1FdUMsZUFBUztBQUFBLFlBQUcxQixFQUFILFNBQUdBLEVBQUg7QUFBQSxlQUFhO0FBQ3BCMkIsdUJBQWEsQ0FBQzNCLEVBQUQsR0FBTSxZQUFOLEdBQXFCNEIsU0FEZDtBQUVwQjdCLHFCQUFXO0FBQ1RDO0FBRFM7QUFGUyxTQUFiO0FBQUE7QUFOWCxLQVJZLENBQWQ7QUFzQkEsV0FBT3dCLE1BQ0xELFNBQVM7QUFBQSxhQUNQLG9CQUFDLGdCQUFELGVBQ01yQyxLQUROO0FBRUUsV0FBR0EsTUFBTUQsSUFGWDtBQUdFLGdCQUFRRCxHQUFHRSxLQUFILENBSFY7QUFJRSxpQkFBU3NCLE1BQU10QixLQUFOLENBSlg7QUFLRSxrQkFBVThCLElBQUk5QixLQUFKO0FBTFosU0FETztBQUFBLEtBQVQsQ0FESyxDQUFQO0FBV0QsR0EzQ0Q7O0FBNkNBLFNBQU9SLFFBQVEsSUFBUixFQUFjO0FBQUEsV0FBZTtBQUNsQ1UsbUJBQWFULGtCQUFrQmtELFVBQWxCO0FBRHFCLEtBQWY7QUFBQSxHQUFkLEVBRUgsaUJBQVM7QUFDWCxRQUFJM0MsTUFBTUksUUFBTixJQUFrQkosTUFBTW9DLFVBQXhCLElBQXNDcEMsTUFBTTRDLFVBQWhELEVBQTREO0FBQzFELFVBQU1DLE9BQVU3QyxNQUFNSSxRQUFoQixTQUE0QkosTUFBTW9DLFVBQXhDO0FBQ0EsVUFBTVUsUUFBUVosTUFBTVcsSUFBTixLQUFlVixNQUFNbkMsS0FBTixDQUE3QjtBQUNBa0MsWUFBTVcsSUFBTixJQUFjQyxLQUFkO0FBQ0EsYUFBTyxvQkFBQyxLQUFELEVBQVc5QyxLQUFYLENBQVA7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEdBVk0sQ0FBUDtBQVdELENBMUREIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL3dpdGgtaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlVXBkYXRlUXVlcnkgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBvbWl0IGFzIG9taXQyIH0gZnJvbSAnb2x5bXAtYXBvbGxvJztcbmltcG9ydCB7IGxvd2VyRmlyc3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmNvbnN0IG9rID0gcHJvcHMgPT4gKCkgPT4ge1xuICBjb25zdCB7IGZvcm0sIGl0ZW0sIHVwZGF0ZVF1ZXJ5LCBtdXRhdGUsIHR5cGVOYW1lIH0gPSBwcm9wcztcbiAgZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyLCB2YWx1ZXMpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihlcnIpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMuc3RhcnQgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZXMuc3RhcnQpKSB7XG4gICAgICB2YWx1ZXMuZW5kID0gdmFsdWVzLnN0YXJ0WzFdO1xuICAgICAgdmFsdWVzLnN0YXJ0ID0gdmFsdWVzLnN0YXJ0WzBdO1xuICAgIH1cblxuICAgIG11dGF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgaWQ6IGl0ZW0gJiYgaXRlbS5pZCxcbiAgICAgICAgaW5wdXQ6IG9taXQyKHZhbHVlcyksXG4gICAgICB9LFxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtcbiAgICAgICAgYCR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9TGlzdGAsXG4gICAgICAgIGAke2xvd2VyRmlyc3QodHlwZU5hbWUpfWAsXG4gICAgICBdLFxuICAgICAgLyogdXBkYXRlUXVlcmllczpcbiAgICAgICAgIWl0ZW0gfHwgIWl0ZW0uaWRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgIFtgJHt0eXBlTmFtZS50b0xvd2VyQ2FzZSgpfUxpc3RgXTogKHByZXYsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgaXRlbXM6IFttdXRhdGlvblJlc3VsdC5kYXRhLml0ZW0sIC4uLnByZXYuaXRlbXNdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkLCAqL1xuICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhOiB7IGl0ZW0gfSB9KSA9PiB7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnR2VzcGVpY2hlcnQnKTtcbiAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9YF06IGl0ZW0uaWQgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBtZXNzYWdlLmVycm9yKGVycikpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsb25lID0gcHJvcHMgPT4gKCkgPT4ge1xuICBjb25zdCB7IGZvcm0sIGl0ZW0sIHJvdXRlciwgdXBkYXRlUXVlcnksIG11dGF0ZSwgdHlwZU5hbWUgfSA9IHByb3BzO1xuICBjb25zdCBjbG9uZUl0ZW0gPSBvbWl0MihpdGVtKTtcbiAgZGVsZXRlIGNsb25lSXRlbS5pZDtcbiAgbXV0YXRlKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlucHV0OiBjbG9uZUl0ZW0sXG4gICAgfSxcbiAgICB1cGRhdGVRdWVyaWVzOiB7XG4gICAgICBbYCR7dHlwZU5hbWUudG9Mb3dlckNhc2UoKX1MaXN0YF06IChwcmV2LCB7IG11dGF0aW9uUmVzdWx0IH0pID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGl0ZW1zOiBbbXV0YXRpb25SZXN1bHQuZGF0YS5pdGVtLCAuLi5wcmV2Lml0ZW1zXSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0pXG4gICAgLnRoZW4oKHsgZGF0YTogeyBpdGVtIH0gfSkgPT4ge1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKCdLb3BpZXJ0Jyk7XG4gICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9YF06IGl0ZW0uaWQgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IG1lc3NhZ2UuZXJyb3IoZXJyKSk7XG59O1xuXG5jb25zdCBkZWwgPSBwcm9wcyA9PiAoKSA9PiB7XG4gIGNvbnN0IHsgZm9ybSwgaXRlbSwgcm91dGVyLCB1cGRhdGVRdWVyeSwgbXV0YXRlLCB0eXBlTmFtZSB9ID0gcHJvcHM7XG4gIHJldHVybiBtdXRhdGUoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IGl0ZW0gJiYgaXRlbS5pZCxcbiAgICAgIHR5cGU6ICdSRU1PVkUnLFxuICAgIH0sXG4gICAgdXBkYXRlUXVlcmllczoge1xuICAgICAgW2Ake3R5cGVOYW1lLnRvTG93ZXJDYXNlKCl9TGlzdGBdOiBwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGl0ZW1zOiBwcmV2Lml0ZW1zLmZpbHRlcih4ID0+IHguaWQgIT09IGl0ZW0uaWQpLFxuICAgICAgfSksXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnR2Vsw7ZzY2h0Jyk7XG4gICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9YF06IG51bGwgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IG1lc3NhZ2UuZXJyb3IoZXJyKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgY29uc3QgYm91bmQgPSAoeyB0eXBlTmFtZSwgZmllbGROYW1lcyB9KSA9PiB7XG4gICAgY29uc3QgbXV0YXRpb24gPSBncmFwaHFsKGdxbGBcbiAgICBtdXRhdGlvbiAke2xvd2VyRmlyc3QodHlwZU5hbWUpfSgkaWQ6IFN0cmluZywgJGlucHV0OiAke1xuICAgICAgdHlwZU5hbWVcbiAgICB9SW5wdXQsICR0eXBlOiBNVVRBVElPTl9UWVBFKSB7XG4gICAgICBpdGVtOiAke2xvd2VyRmlyc3QodHlwZU5hbWUpfShpZDogJGlkLCBpbnB1dDogJGlucHV0LCB0eXBlOiAkdHlwZSkge1xuICAgICAgICAke2ZpZWxkTmFtZXN9XG4gICAgICB9XG4gICAgfVxuICBgKTtcbiAgICBjb25zdCBxdWVyeSA9IGdyYXBocWwoXG4gICAgICBncWxgXG4gICAgICBxdWVyeSAke2xvd2VyRmlyc3QodHlwZU5hbWUpfSgkaWQ6IFN0cmluZyEpIHtcbiAgICAgICAgaXRlbTogJHtsb3dlckZpcnN0KHR5cGVOYW1lKX0ocXVlcnk6IHsgaWQ6IHtlcTogJGlkfSB9KSB7XG4gICAgICAgICAgJHtmaWVsZE5hbWVzfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICAgIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAgICAgLi4ub3duUHJvcHMsXG4gICAgICAgICAgaXRlbTogZGF0YS5pdGVtLFxuICAgICAgICB9KSxcbiAgICAgICAgb3B0aW9uczogKHsgaWQgfSkgPT4gKHtcbiAgICAgICAgICBmZXRjaFBvbGljeTogIWlkID8gJ2NhY2hlLW9ubHknIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICk7XG4gICAgcmV0dXJuIHF1ZXJ5KFxuICAgICAgbXV0YXRpb24ocHJvcHMgPT4gKFxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICB4PXtwcm9wcy5mb3JtfVxuICAgICAgICAgIG9uU2F2ZT17b2socHJvcHMpfVxuICAgICAgICAgIG9uQ2xvbmU9e2Nsb25lKHByb3BzKX1cbiAgICAgICAgICBvbkRlbGV0ZT17ZGVsKHByb3BzKX1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGNvbm5lY3QobnVsbCwgZGlzcGF0Y2hlciA9PiAoe1xuICAgIHVwZGF0ZVF1ZXJ5OiBjcmVhdGVVcGRhdGVRdWVyeShkaXNwYXRjaGVyKSxcbiAgfSkpKHByb3BzID0+IHtcbiAgICBpZiAocHJvcHMudHlwZU5hbWUgJiYgcHJvcHMuZmllbGROYW1lcyAmJiBwcm9wcy5jb2xsZWN0aW9uKSB7XG4gICAgICBjb25zdCBuYW1lID0gYCR7cHJvcHMudHlwZU5hbWV9fCR7cHJvcHMuZmllbGROYW1lc31gO1xuICAgICAgY29uc3QgQm91bmQgPSBjYWNoZVtuYW1lXSB8fCBib3VuZChwcm9wcyk7XG4gICAgICBjYWNoZVtuYW1lXSA9IEJvdW5kO1xuICAgICAgcmV0dXJuIDxCb3VuZCB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSk7XG59O1xuIl19
