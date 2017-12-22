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
import { onSuccess, onError, omit as omit2 } from 'olymp-utils';

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
        return onError(err);
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

        onSuccess('Gespeichert');
        form.resetFields();
        updateQuery(_defineProperty({}, '@' + _lowerFirst(typeName), item.id));
      }).catch(onError);
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

      onSuccess('Kopiert');
      form.resetFields();
      updateQuery(_defineProperty({}, '@' + _lowerFirst(typeName), item.id));
    }).catch(onError);
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

      onSuccess('Gelöscht');
      form.resetFields();
      updateQuery(_defineProperty({}, '@' + _lowerFirst(typeName), null));
    }).catch(onError);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vd2l0aC1pdGVtLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJjcmVhdGVVcGRhdGVRdWVyeSIsImdyYXBocWwiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwib21pdCIsIm9taXQyIiwiZ3FsIiwib2siLCJmb3JtIiwicHJvcHMiLCJpdGVtIiwidXBkYXRlUXVlcnkiLCJtdXRhdGUiLCJ0eXBlTmFtZSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsdWVzIiwic3RhcnQiLCJBcnJheSIsImlzQXJyYXkiLCJlbmQiLCJ2YXJpYWJsZXMiLCJpZCIsImlucHV0IiwicmVmZXRjaFF1ZXJpZXMiLCJ0aGVuIiwiZGF0YSIsInJlc2V0RmllbGRzIiwiY2F0Y2giLCJjbG9uZSIsInJvdXRlciIsImNsb25lSXRlbSIsInVwZGF0ZVF1ZXJpZXMiLCJ0b0xvd2VyQ2FzZSIsInByZXYiLCJtdXRhdGlvblJlc3VsdCIsIml0ZW1zIiwiZGVsIiwidHlwZSIsImZpbHRlciIsIngiLCJjYWNoZSIsImJvdW5kIiwiZmllbGROYW1lcyIsIm11dGF0aW9uIiwicXVlcnkiLCJvd25Qcm9wcyIsIm9wdGlvbnMiLCJmZXRjaFBvbGljeSIsInVuZGVmaW5lZCIsImRpc3BhdGNoZXIiLCJjb2xsZWN0aW9uIiwibmFtZSIsIkJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyxjQUFsQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsY0FBeEI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxPQUFwQixFQUE2QkMsUUFBUUMsS0FBckMsUUFBa0QsYUFBbEQ7O0FBRUEsT0FBT0MsR0FBUCxNQUFnQixhQUFoQjs7QUFFQSxJQUFNQyxLQUFLLFNBQUxBLEVBQUs7QUFBQSxTQUFTLFlBQU07QUFBQSxRQUNoQkMs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QUFQO0FBQ0QsR0FWTSxDQUFQO0FBV0QsQ0ExREQiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi93aXRoLWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVVwZGF0ZVF1ZXJ5IH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgb25TdWNjZXNzLCBvbkVycm9yLCBvbWl0IGFzIG9taXQyIH0gZnJvbSAnb2x5bXAtdXRpbHMnO1xuaW1wb3J0IHsgbG93ZXJGaXJzdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3Qgb2sgPSBwcm9wcyA9PiAoKSA9PiB7XG4gIGNvbnN0IHsgZm9ybSwgaXRlbSwgdXBkYXRlUXVlcnksIG11dGF0ZSwgdHlwZU5hbWUgfSA9IHByb3BzO1xuICBmb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIHZhbHVlcykgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy5zdGFydCAmJiBBcnJheS5pc0FycmF5KHZhbHVlcy5zdGFydCkpIHtcbiAgICAgIHZhbHVlcy5lbmQgPSB2YWx1ZXMuc3RhcnRbMV07XG4gICAgICB2YWx1ZXMuc3RhcnQgPSB2YWx1ZXMuc3RhcnRbMF07XG4gICAgfVxuXG4gICAgbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBpZDogaXRlbSAmJiBpdGVtLmlkLFxuICAgICAgICBpbnB1dDogb21pdDIodmFsdWVzKSxcbiAgICAgIH0sXG4gICAgICByZWZldGNoUXVlcmllczogW1xuICAgICAgICBgJHtsb3dlckZpcnN0KHR5cGVOYW1lKX1MaXN0YCxcbiAgICAgICAgYCR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9YCxcbiAgICAgIF0sXG4gICAgICAvKiB1cGRhdGVRdWVyaWVzOlxuICAgICAgICAhaXRlbSB8fCAhaXRlbS5pZFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgW2Ake3R5cGVOYW1lLnRvTG93ZXJDYXNlKCl9TGlzdGBdOiAocHJldiwgeyBtdXRhdGlvblJlc3VsdCB9KSA9PiAoe1xuICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICBpdGVtczogW211dGF0aW9uUmVzdWx0LmRhdGEuaXRlbSwgLi4ucHJldi5pdGVtc10sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsICovXG4gICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGE6IHsgaXRlbSB9IH0pID0+IHtcbiAgICAgICAgb25TdWNjZXNzKCdHZXNwZWljaGVydCcpO1xuICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5KHsgW2BAJHtsb3dlckZpcnN0KHR5cGVOYW1lKX1gXTogaXRlbS5pZCB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2gob25FcnJvcik7XG4gIH0pO1xufTtcblxuY29uc3QgY2xvbmUgPSBwcm9wcyA9PiAoKSA9PiB7XG4gIGNvbnN0IHsgZm9ybSwgaXRlbSwgcm91dGVyLCB1cGRhdGVRdWVyeSwgbXV0YXRlLCB0eXBlTmFtZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsb25lSXRlbSA9IG9taXQyKGl0ZW0pO1xuICBkZWxldGUgY2xvbmVJdGVtLmlkO1xuICBtdXRhdGUoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaW5wdXQ6IGNsb25lSXRlbSxcbiAgICB9LFxuICAgIHVwZGF0ZVF1ZXJpZXM6IHtcbiAgICAgIFtgJHt0eXBlTmFtZS50b0xvd2VyQ2FzZSgpfUxpc3RgXTogKHByZXYsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgaXRlbXM6IFttdXRhdGlvblJlc3VsdC5kYXRhLml0ZW0sIC4uLnByZXYuaXRlbXNdLFxuICAgICAgfSksXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigoeyBkYXRhOiB7IGl0ZW0gfSB9KSA9PiB7XG4gICAgICBvblN1Y2Nlc3MoJ0tvcGllcnQnKTtcbiAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgIHVwZGF0ZVF1ZXJ5KHsgW2BAJHtsb3dlckZpcnN0KHR5cGVOYW1lKX1gXTogaXRlbS5pZCB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChvbkVycm9yKTtcbn07XG5cbmNvbnN0IGRlbCA9IHByb3BzID0+ICgpID0+IHtcbiAgY29uc3QgeyBmb3JtLCBpdGVtLCByb3V0ZXIsIHVwZGF0ZVF1ZXJ5LCBtdXRhdGUsIHR5cGVOYW1lIH0gPSBwcm9wcztcbiAgcmV0dXJuIG11dGF0ZSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogaXRlbSAmJiBpdGVtLmlkLFxuICAgICAgdHlwZTogJ1JFTU9WRScsXG4gICAgfSxcbiAgICB1cGRhdGVRdWVyaWVzOiB7XG4gICAgICBbYCR7dHlwZU5hbWUudG9Mb3dlckNhc2UoKX1MaXN0YF06IHByZXYgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgaXRlbXM6IHByZXYuaXRlbXMuZmlsdGVyKHggPT4geC5pZCAhPT0gaXRlbS5pZCksXG4gICAgICB9KSxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgb25TdWNjZXNzKCdHZWzDtnNjaHQnKTtcbiAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgIHVwZGF0ZVF1ZXJ5KHsgW2BAJHtsb3dlckZpcnN0KHR5cGVOYW1lKX1gXTogbnVsbCB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChvbkVycm9yKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICBjb25zdCBjYWNoZSA9IHt9O1xuICBjb25zdCBib3VuZCA9ICh7IHR5cGVOYW1lLCBmaWVsZE5hbWVzIH0pID0+IHtcbiAgICBjb25zdCBtdXRhdGlvbiA9IGdyYXBocWwoZ3FsYFxuICAgIG11dGF0aW9uICR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9KCRpZDogU3RyaW5nLCAkaW5wdXQ6ICR7XG4gICAgICB0eXBlTmFtZVxuICAgIH1JbnB1dCwgJHR5cGU6IE1VVEFUSU9OX1RZUEUpIHtcbiAgICAgIGl0ZW06ICR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9KGlkOiAkaWQsIGlucHV0OiAkaW5wdXQsIHR5cGU6ICR0eXBlKSB7XG4gICAgICAgICR7ZmllbGROYW1lc31cbiAgICAgIH1cbiAgICB9XG4gIGApO1xuICAgIGNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbChcbiAgICAgIGdxbGBcbiAgICAgIHF1ZXJ5ICR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9KCRpZDogU3RyaW5nISkge1xuICAgICAgICBpdGVtOiAke2xvd2VyRmlyc3QodHlwZU5hbWUpfShxdWVyeTogeyBpZDoge2VxOiAkaWR9IH0pIHtcbiAgICAgICAgICAke2ZpZWxkTmFtZXN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgICAge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICBwcm9wczogKHsgb3duUHJvcHMsIGRhdGEgfSkgPT4gKHtcbiAgICAgICAgICAuLi5vd25Qcm9wcyxcbiAgICAgICAgICBpdGVtOiBkYXRhLml0ZW0sXG4gICAgICAgIH0pLFxuICAgICAgICBvcHRpb25zOiAoeyBpZCB9KSA9PiAoe1xuICAgICAgICAgIGZldGNoUG9saWN5OiAhaWQgPyAnY2FjaGUtb25seScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICByZXR1cm4gcXVlcnkoXG4gICAgICBtdXRhdGlvbihwcm9wcyA9PiAoXG4gICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHg9e3Byb3BzLmZvcm19XG4gICAgICAgICAgb25TYXZlPXtvayhwcm9wcyl9XG4gICAgICAgICAgb25DbG9uZT17Y2xvbmUocHJvcHMpfVxuICAgICAgICAgIG9uRGVsZXRlPXtkZWwocHJvcHMpfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gY29ubmVjdChudWxsLCBkaXNwYXRjaGVyID0+ICh7XG4gICAgdXBkYXRlUXVlcnk6IGNyZWF0ZVVwZGF0ZVF1ZXJ5KGRpc3BhdGNoZXIpLFxuICB9KSkocHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlTmFtZSAmJiBwcm9wcy5maWVsZE5hbWVzICYmIHByb3BzLmNvbGxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBgJHtwcm9wcy50eXBlTmFtZX18JHtwcm9wcy5maWVsZE5hbWVzfWA7XG4gICAgICBjb25zdCBCb3VuZCA9IGNhY2hlW25hbWVdIHx8IGJvdW5kKHByb3BzKTtcbiAgICAgIGNhY2hlW25hbWVdID0gQm91bmQ7XG4gICAgICByZXR1cm4gPEJvdW5kIHsuLi5wcm9wc30gLz47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9KTtcbn07XG4iXX0=
