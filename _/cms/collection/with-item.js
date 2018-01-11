'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message8 = require('antd/lib/message');

var _message9 = _interopRequireDefault(_message8);

var _lowerFirst2 = require('lodash/lowerFirst');

var _lowerFirst3 = _interopRequireDefault(_lowerFirst2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    mutation ', '($id: String, $input: ', 'Input, $type: MUTATION_TYPE) {\n      item: ', '(id: $id, input: $input, type: $type) {\n        ', '\n      }\n    }\n  '], ['\n    mutation ', '($id: String, $input: ', 'Input, $type: MUTATION_TYPE) {\n      item: ', '(id: $id, input: $input, type: $type) {\n        ', '\n      }\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      query ', '($id: String!) {\n        item: ', '(query: { id: {eq: $id} }) {\n          ', '\n        }\n      }\n    '], ['\n      query ', '($id: String!) {\n        item: ', '(query: { id: {eq: $id} }) {\n          ', '\n        }\n      }\n    ']);

require('antd/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _olympRouter = require('olymp-router');

var _reactApollo = require('react-apollo');

var _olympApollo = require('olymp-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ok = function ok(props) {
  return function () {
    var form = props.form,
        item = props.item,
        updateQuery = props.updateQuery,
        mutate = props.mutate,
        typeName = props.typeName;

    form.validateFields(function (err, values) {
      if (err) {
        return _message9.default.error(err);
      }

      if (values.start && Array.isArray(values.start)) {
        values.end = values.start[1];
        values.start = values.start[0];
      }

      mutate({
        variables: {
          id: item && item.id,
          input: (0, _olympApollo.omit)(values)
        },
        refetchQueries: [(0, _lowerFirst3.default)(typeName) + 'List', '' + (0, _lowerFirst3.default)(typeName)]
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

        _message9.default.success('Gespeichert');
        form.resetFields();
        updateQuery(_defineProperty({}, '@' + (0, _lowerFirst3.default)(typeName), item.id));
      }).catch(function (err) {
        return _message9.default.error(err);
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

    var cloneItem = (0, _olympApollo.omit)(item);
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

      _message9.default.success('Kopiert');
      form.resetFields();
      updateQuery(_defineProperty({}, '@' + (0, _lowerFirst3.default)(typeName), item.id));
    }).catch(function (err) {
      return _message9.default.error(err);
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

      _message9.default.success('Gelöscht');
      form.resetFields();
      updateQuery(_defineProperty({}, '@' + (0, _lowerFirst3.default)(typeName), null));
    }).catch(function (err) {
      return _message9.default.error(err);
    });
  };
};

exports.default = function (WrappedComponent) {
  var cache = {};
  var bound = function bound(_ref5) {
    var typeName = _ref5.typeName,
        fieldNames = _ref5.fieldNames;

    var mutation = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject, (0, _lowerFirst3.default)(typeName), typeName, (0, _lowerFirst3.default)(typeName), fieldNames));
    var query = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject2, (0, _lowerFirst3.default)(typeName), (0, _lowerFirst3.default)(typeName), fieldNames), {
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
      return _react2.default.createElement(WrappedComponent, _extends({}, props, {
        x: props.form,
        onSave: ok(props),
        onClone: clone(props),
        onDelete: del(props)
      }));
    }));
  };

  return (0, _reactRedux.connect)(null, function (dispatcher) {
    return {
      updateQuery: (0, _olympRouter.createUpdateQuery)(dispatcher)
    };
  })(function (props) {
    if (props.typeName && props.fieldNames && props.collection) {
      var name = props.typeName + '|' + props.fieldNames;
      var Bound = cache[name] || bound(props);
      cache[name] = Bound;
      return _react2.default.createElement(Bound, props);
    }
    return null;
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3dpdGgtaXRlbS5lczYiXSwibmFtZXMiOlsib2siLCJmb3JtIiwicHJvcHMiLCJpdGVtIiwidXBkYXRlUXVlcnkiLCJtdXRhdGUiLCJ0eXBlTmFtZSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsdWVzIiwiZXJyb3IiLCJzdGFydCIsIkFycmF5IiwiaXNBcnJheSIsImVuZCIsInZhcmlhYmxlcyIsImlkIiwiaW5wdXQiLCJyZWZldGNoUXVlcmllcyIsInRoZW4iLCJkYXRhIiwic3VjY2VzcyIsInJlc2V0RmllbGRzIiwiY2F0Y2giLCJjbG9uZSIsInJvdXRlciIsImNsb25lSXRlbSIsInVwZGF0ZVF1ZXJpZXMiLCJ0b0xvd2VyQ2FzZSIsInByZXYiLCJtdXRhdGlvblJlc3VsdCIsIml0ZW1zIiwiZGVsIiwidHlwZSIsImZpbHRlciIsIngiLCJjYWNoZSIsImJvdW5kIiwiZmllbGROYW1lcyIsIm11dGF0aW9uIiwicXVlcnkiLCJvd25Qcm9wcyIsIm9wdGlvbnMiLCJmZXRjaFBvbGljeSIsInVuZGVmaW5lZCIsImRpc3BhdGNoZXIiLCJjb2xsZWN0aW9uIiwibmFtZSIsIkJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLFNBQUxBLEVBQUs7QUFBQSxTQUFTLFlBQU07QUFBQSxRQUNoQkMsSUFEZ0IsR0FDOEJDLEtBRDlCLENBQ2hCRCxJQURnQjtBQUFBLFFBQ1ZFLElBRFUsR0FDOEJELEtBRDlCLENBQ1ZDLElBRFU7QUFBQSxRQUNKQyxXQURJLEdBQzhCRixLQUQ5QixDQUNKRSxXQURJO0FBQUEsUUFDU0MsTUFEVCxHQUM4QkgsS0FEOUIsQ0FDU0csTUFEVDtBQUFBLFFBQ2lCQyxRQURqQixHQUM4QkosS0FEOUIsQ0FDaUJJLFFBRGpCOztBQUV4QkwsU0FBS00sY0FBTCxDQUFvQixVQUFD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ZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlVXBkYXRlUXVlcnkgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBvbWl0IGFzIG9taXQyIH0gZnJvbSAnb2x5bXAtYXBvbGxvJztcbmltcG9ydCB7IGxvd2VyRmlyc3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmNvbnN0IG9rID0gcHJvcHMgPT4gKCkgPT4ge1xuICBjb25zdCB7IGZvcm0sIGl0ZW0sIHVwZGF0ZVF1ZXJ5LCBtdXRhdGUsIHR5cGVOYW1lIH0gPSBwcm9wcztcbiAgZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyLCB2YWx1ZXMpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihlcnIpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMuc3RhcnQgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZXMuc3RhcnQpKSB7XG4gICAgICB2YWx1ZXMuZW5kID0gdmFsdWVzLnN0YXJ0WzFdO1xuICAgICAgdmFsdWVzLnN0YXJ0ID0gdmFsdWVzLnN0YXJ0WzBdO1xuICAgIH1cblxuICAgIG11dGF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgaWQ6IGl0ZW0gJiYgaXRlbS5pZCxcbiAgICAgICAgaW5wdXQ6IG9taXQyKHZhbHVlcyksXG4gICAgICB9LFxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtcbiAgICAgICAgYCR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9TGlzdGAsXG4gICAgICAgIGAke2xvd2VyRmlyc3QodHlwZU5hbWUpfWAsXG4gICAgICBdLFxuICAgICAgLyogdXBkYXRlUXVlcmllczpcbiAgICAgICAgIWl0ZW0gfHwgIWl0ZW0uaWRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgIFtgJHt0eXBlTmFtZS50b0xvd2VyQ2FzZSgpfUxpc3RgXTogKHByZXYsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgaXRlbXM6IFttdXRhdGlvblJlc3VsdC5kYXRhLml0ZW0sIC4uLnByZXYuaXRlbXNdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkLCAqL1xuICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhOiB7IGl0ZW0gfSB9KSA9PiB7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnR2VzcGVpY2hlcnQnKTtcbiAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9YF06IGl0ZW0uaWQgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBtZXNzYWdlLmVycm9yKGVycikpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsb25lID0gcHJvcHMgPT4gKCkgPT4ge1xuICBjb25zdCB7IGZvcm0sIGl0ZW0sIHJvdXRlciwgdXBkYXRlUXVlcnksIG11dGF0ZSwgdHlwZU5hbWUgfSA9IHByb3BzO1xuICBjb25zdCBjbG9uZUl0ZW0gPSBvbWl0MihpdGVtKTtcbiAgZGVsZXRlIGNsb25lSXRlbS5pZDtcbiAgbXV0YXRlKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlucHV0OiBjbG9uZUl0ZW0sXG4gICAgfSxcbiAgICB1cGRhdGVRdWVyaWVzOiB7XG4gICAgICBbYCR7dHlwZU5hbWUudG9Mb3dlckNhc2UoKX1MaXN0YF06IChwcmV2LCB7IG11dGF0aW9uUmVzdWx0IH0pID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGl0ZW1zOiBbbXV0YXRpb25SZXN1bHQuZGF0YS5pdGVtLCAuLi5wcmV2Lml0ZW1zXSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0pXG4gICAgLnRoZW4oKHsgZGF0YTogeyBpdGVtIH0gfSkgPT4ge1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKCdLb3BpZXJ0Jyk7XG4gICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9YF06IGl0ZW0uaWQgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IG1lc3NhZ2UuZXJyb3IoZXJyKSk7XG59O1xuXG5jb25zdCBkZWwgPSBwcm9wcyA9PiAoKSA9PiB7XG4gIGNvbnN0IHsgZm9ybSwgaXRlbSwgcm91dGVyLCB1cGRhdGVRdWVyeSwgbXV0YXRlLCB0eXBlTmFtZSB9ID0gcHJvcHM7XG4gIHJldHVybiBtdXRhdGUoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IGl0ZW0gJiYgaXRlbS5pZCxcbiAgICAgIHR5cGU6ICdSRU1PVkUnLFxuICAgIH0sXG4gICAgdXBkYXRlUXVlcmllczoge1xuICAgICAgW2Ake3R5cGVOYW1lLnRvTG93ZXJDYXNlKCl9TGlzdGBdOiBwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGl0ZW1zOiBwcmV2Lml0ZW1zLmZpbHRlcih4ID0+IHguaWQgIT09IGl0ZW0uaWQpLFxuICAgICAgfSksXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnR2Vsw7ZzY2h0Jyk7XG4gICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9YF06IG51bGwgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IG1lc3NhZ2UuZXJyb3IoZXJyKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgY29uc3QgYm91bmQgPSAoeyB0eXBlTmFtZSwgZmllbGROYW1lcyB9KSA9PiB7XG4gICAgY29uc3QgbXV0YXRpb24gPSBncmFwaHFsKGdxbGBcbiAgICBtdXRhdGlvbiAke2xvd2VyRmlyc3QodHlwZU5hbWUpfSgkaWQ6IFN0cmluZywgJGlucHV0OiAke1xuICAgICAgdHlwZU5hbWVcbiAgICB9SW5wdXQsICR0eXBlOiBNVVRBVElPTl9UWVBFKSB7XG4gICAgICBpdGVtOiAke2xvd2VyRmlyc3QodHlwZU5hbWUpfShpZDogJGlkLCBpbnB1dDogJGlucHV0LCB0eXBlOiAkdHlwZSkge1xuICAgICAgICAke2ZpZWxkTmFtZXN9XG4gICAgICB9XG4gICAgfVxuICBgKTtcbiAgICBjb25zdCBxdWVyeSA9IGdyYXBocWwoXG4gICAgICBncWxgXG4gICAgICBxdWVyeSAke2xvd2VyRmlyc3QodHlwZU5hbWUpfSgkaWQ6IFN0cmluZyEpIHtcbiAgICAgICAgaXRlbTogJHtsb3dlckZpcnN0KHR5cGVOYW1lKX0ocXVlcnk6IHsgaWQ6IHtlcTogJGlkfSB9KSB7XG4gICAgICAgICAgJHtmaWVsZE5hbWVzfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICAgIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAgICAgLi4ub3duUHJvcHMsXG4gICAgICAgICAgaXRlbTogZGF0YS5pdGVtLFxuICAgICAgICB9KSxcbiAgICAgICAgb3B0aW9uczogKHsgaWQgfSkgPT4gKHtcbiAgICAgICAgICBmZXRjaFBvbGljeTogIWlkID8gJ2NhY2hlLW9ubHknIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICk7XG4gICAgcmV0dXJuIHF1ZXJ5KFxuICAgICAgbXV0YXRpb24ocHJvcHMgPT4gKFxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICB4PXtwcm9wcy5mb3JtfVxuICAgICAgICAgIG9uU2F2ZT17b2socHJvcHMpfVxuICAgICAgICAgIG9uQ2xvbmU9e2Nsb25lKHByb3BzKX1cbiAgICAgICAgICBvbkRlbGV0ZT17ZGVsKHByb3BzKX1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGNvbm5lY3QobnVsbCwgZGlzcGF0Y2hlciA9PiAoe1xuICAgIHVwZGF0ZVF1ZXJ5OiBjcmVhdGVVcGRhdGVRdWVyeShkaXNwYXRjaGVyKSxcbiAgfSkpKHByb3BzID0+IHtcbiAgICBpZiAocHJvcHMudHlwZU5hbWUgJiYgcHJvcHMuZmllbGROYW1lcyAmJiBwcm9wcy5jb2xsZWN0aW9uKSB7XG4gICAgICBjb25zdCBuYW1lID0gYCR7cHJvcHMudHlwZU5hbWV9fCR7cHJvcHMuZmllbGROYW1lc31gO1xuICAgICAgY29uc3QgQm91bmQgPSBjYWNoZVtuYW1lXSB8fCBib3VuZChwcm9wcyk7XG4gICAgICBjYWNoZVtuYW1lXSA9IEJvdW5kO1xuICAgICAgcmV0dXJuIDxCb3VuZCB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSk7XG59O1xuIl19
