import _upperFirst from 'lodash/upperFirst';
import _get from 'lodash/get';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n      query getType($name: String!) {\n        type: __type(name: $name) {\n          name\n          description\n          fields {\n            description\n            name\n            type {\n              description\n              kind\n              name\n              enumValues {\n                name\n              }\n              fields {\n                description\n                name\n                type {\n                  description\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n              ofType {\n                description\n                kind\n                name\n                enumValues {\n                  name\n                }\n                fields {\n                  description\n                  name\n                  type {\n                    description\n                    kind\n                    name\n                    fields {\n                      description\n                      name\n                      type {\n                        description\n                        kind\n                        name\n                        ofType {\n                          kind\n                          name\n                        }\n                      }\n                    }\n                    ofType {\n                      kind\n                      name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    '], ['\n      query getType($name: String!) {\n        type: __type(name: $name) {\n          name\n          description\n          fields {\n            description\n            name\n            type {\n              description\n              kind\n              name\n              enumValues {\n                name\n              }\n              fields {\n                description\n                name\n                type {\n                  description\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n              ofType {\n                description\n                kind\n                name\n                enumValues {\n                  name\n                }\n                fields {\n                  description\n                  name\n                  type {\n                    description\n                    kind\n                    name\n                    fields {\n                      description\n                      name\n                      type {\n                        description\n                        kind\n                        name\n                        ofType {\n                          kind\n                          name\n                        }\n                      }\n                    }\n                    ofType {\n                      kind\n                      name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    ']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withApollo, graphql } from 'react-apollo';

import { compose, withPropsOnChange } from 'recompose';
import gql from 'graphql-tag';
import { getSpecialFields } from './utils';

var imageFields = '\nid\nurl\ncrop\nwidth\nheight\ncaption\nsource\n';

var userFields = '\nid\nemail\ntoken\nname\n';

var enhance = compose(withApollo, graphql(gql(_templateObject), {
  /* eslint-disable */
  options: function options(_ref) {
    var _ref$routeParams = _ref.routeParams,
        routeParams = _ref$routeParams === undefined ? {} : _ref$routeParams,
        collection = _ref.collection,
        typeName = _ref.typeName;
    return {
      skip: !!collection,
      variables: {
        name: _upperFirst(routeParams.model || typeName)
      }
    };
  }
}), withPropsOnChange(['data'], function (_ref2) {
  var data = _ref2.data;
  return {
    collection: getSpecialFields(_get(data, 'type'))
  };
}), withPropsOnChange(['collection'], function (_ref3) {
  var collection = _ref3.collection;

  var getAttributes = function getAttributes() {
    var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { fields: [] };
    return '' + collection.fields.map(function (field) {
      if (field.type.kind === 'NON_NULL') field = _extends({}, field, { type: field.type.ofType });
      if (field.type.kind === 'ENUM' || field.type.kind === 'SCALAR') return field.name;else if (field.type.kind === 'LIST' && field.type.ofType && (field.type.ofType.kind === 'ENUM' || field.type.ofType.kind === 'SCALAR')) return field.name;else if (field.type.kind === 'LIST' && field.type.ofType && field.type.ofType.kind === 'OBJECT' && field.type.ofType.fields) return field.name + ' { ' + getAttributes({
        fields: field.type.ofType.fields
      }) + ' }';else if (field.type.kind === 'OBJECT' && field.type.name === 'Image') return field.name + ' { ' + imageFields + ' }';else if (field.type.kind === 'OBJECT' && field.type.name === 'User') return field.name + ' { ' + userFields + ' }';else if (field.type.kind === 'OBJECT' && field.type.fields) return field.name + ' { ' + getAttributes({
        fields: field.type.fields
      }) + ' }';else if (field.type.kind === 'OBJECT' && field.type.name === 'Geocode') return field.name + ' { id, streetNumber, route, locality, administrativeAreaLevel1, administrativeAreaLevel2, country, postalCode, formattedAddress, lat, lng, locationType, partialMatch, types }';
      return '';
    }).filter(function (x) {
      return x;
    }).join(', ');
  };

  return {
    fieldNames: getAttributes(collection)
  };
}));

export default (function (WrappedComponent) {
  var _class, _class2, _temp;

  var WithCollectionComponent = enhance(_class = (_temp = _class2 = function (_Component) {
    _inherits(WithCollectionComponent, _Component);

    function WithCollectionComponent() {
      _classCallCheck(this, WithCollectionComponent);

      return _possibleConstructorReturn(this, (WithCollectionComponent.__proto__ || Object.getPrototypeOf(WithCollectionComponent)).apply(this, arguments));
    }

    _createClass(WithCollectionComponent, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            data = _props.data,
            rest = _objectWithoutProperties(_props, ['data']);

        return React.createElement(WrappedComponent, rest);
      }
    }]);

    return WithCollectionComponent;
  }(Component), _class2.propTypes = {
    client: PropTypes.object,
    fieldNames: PropTypes.string,
    typeName: PropTypes.string,
    includeStamps: PropTypes.bool
  }, _temp)) || _class;

  return WithCollectionComponent;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vd2l0aC1jb2xsZWN0aW9uLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIndpdGhBcG9sbG8iLCJncmFwaHFsIiwiY29tcG9zZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwiZ3FsIiwiZ2V0U3BlY2lhbEZpZWxkcyIsImltYWdlRmllbGRzIiwidXNlckZpZWxkcyIsImVuaGFuY2UiLCJvcHRpb25zIiwicm91dGVQYXJhbXMiLCJjb2xsZWN0aW9uIiwidHlwZU5hbWUiLCJza2lwIiwidmFyaWFibGVzIiwibmFtZSIsIm1vZGVsIiwiZGF0YSIsImdldEF0dHJpYnV0ZXMiLCJmaWVsZHMiLCJtYXAiLCJmaWVsZCIsInR5cGUiLCJraW5kIiwib2ZUeXBlIiwiZmlsdGVyIiwieCIsImpvaW4iLCJmaWVsZE5hbWVzIiwiV2l0aENvbGxlY3Rpb25Db21wb25lbnQiLCJwcm9wcyIsInJlc3QiLCJwcm9wVHlwZXMiLCJjbGllbnQiLCJvYmplY3QiLCJzdHJpbmciLCJpbmNsdWRlU3RhbXBzIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLE9BQXJCLFFBQW9DLGNBQXBDOztBQUVBLFNBQVNDLE9BQVQsRUFBa0JDLGlCQUFsQixRQUEyQyxXQUEzQztBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsYUFBaEI7QUFDQSxTQUFTQyxnQkFBVCxRQUFpQyxTQUFqQzs7QUFFQSxJQUFNQyxpRUFBTjs7QUFVQSxJQUFNQyx5Q0FBTjs7QUFPQSxJQUFNQyxVQUFVTixRQUNkRixVQURjLEVBRWRDLFFBQ0VHLEdBREYsbUJBb0VFO0FBQ0U7QUFDQUssV0FBUztBQUFBLGdDQUFHQyxXQUFIO0FBQUEsUUFBR0EsV0FBSCxvQ0FBaUIsRUFB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QUFBQSxhQUFLQyxDQUFMO0FBQUEsS0FyQ1AsRUFzQ0FDLElBdENBLENBc0NLLElBdENMLENBRGlCO0FBQUEsR0FBdEI7O0FBeUNBLFNBQU87QUFDTEMsZ0JBQVlWLGNBQWNQLFVBQWQ7QUFEUCxHQUFQO0FBR0QsQ0E3Q0QsQ0FuRmMsQ0FBaEI7O0FBbUlBLGdCQUFlLDRCQUFvQjtBQUFBOztBQUFBLE1BRTNCa0IsdUJBRjJCLEdBQ2hDckIsT0FEZ0M7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQVV0QjtBQUFBLHFCQUNtQixLQUFLc0IsS0FEeEI7QUFBQSxZQUNDYixJQURELFVBQ0NBLElBREQ7QUFBQSxZQUNVYyxJQURWOztBQUdQLGVBQU8sb0JBQUMsZ0JBQUQsRUFBc0JBLElBQXRCLENBQVA7QUFDRDtBQWQ4Qjs7QUFBQTtBQUFBLElBRUtqQyxTQUZMLFdBR3hCa0MsU0FId0IsR0FHWjtBQUNqQkMsWUFBUWxDLFVBQVVtQyxNQUREO0FBRWpCTixnQkFBWTdCLFVBQVVvQyxNQUZMO0FBR2pCdkIsY0FBVWIsVUFBVW9DLE1BSEg7QUFJakJDLG1CQUFlckMsVUFBVXNDO0FBSlIsR0FIWTs7QUFnQmpDLFNBQU9SLHVCQUFQO0FBQ0QsQ0FqQkQiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi93aXRoLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhBcG9sbG8sIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgZ2V0LCB1cHBlckZpcnN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ2V0U3BlY2lhbEZpZWxkcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBpbWFnZUZpZWxkcyA9IGBcbmlkXG51cmxcbmNyb3BcbndpZHRoXG5oZWlnaHRcbmNhcHRpb25cbnNvdXJjZVxuYDtcblxuY29uc3QgdXNlckZpZWxkcyA9IGBcbmlkXG5lbWFpbFxudG9rZW5cbm5hbWVcbmA7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoQXBvbGxvLFxuICBncmFwaHFsKFxuICAgIGdxbGBcbiAgICAgIHF1ZXJ5IGdldFR5cGUoJG5hbWU6IFN0cmluZyEpIHtcbiAgICAgICAgdHlwZTogX190eXBlKG5hbWU6ICRuYW1lKSB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAga2luZFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIGVudW1WYWx1ZXMge1xuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIHR5cGUge1xuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIGtpbmRcbiAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgIG9mVHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmRcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvZlR5cGUge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAga2luZFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICBlbnVtVmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAga2luZFxuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAga2luZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgb2ZUeXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9mVHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAga2luZFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgIG9wdGlvbnM6ICh7IHJvdXRlUGFyYW1zID0ge30sIGNvbGxlY3Rpb24sIHR5cGVOYW1lIH0pID0+ICh7XG4gICAgICAgIHNraXA6ICEhY29sbGVjdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgbmFtZTogdXBwZXJGaXJzdChyb3V0ZVBhcmFtcy5tb2RlbCB8fCB0eXBlTmFtZSksXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9LFxuICApLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ2RhdGEnXSwgKHsgZGF0YSB9KSA9PiAoe1xuICAgIGNvbGxlY3Rpb246IGdldFNwZWNpYWxGaWVsZHMoZ2V0KGRhdGEsICd0eXBlJykpLFxuICB9KSksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsnY29sbGVjdGlvbiddLCAoeyBjb2xsZWN0aW9uIH0pID0+IHtcbiAgICBjb25zdCBnZXRBdHRyaWJ1dGVzID0gKGNvbGxlY3Rpb24gPSB7IGZpZWxkczogW10gfSkgPT5cbiAgICAgIGAke2NvbGxlY3Rpb24uZmllbGRzXG4gICAgICAgIC5tYXAoZmllbGQgPT4ge1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlLmtpbmQgPT09ICdOT05fTlVMTCcpXG4gICAgICAgICAgICBmaWVsZCA9IHsgLi4uZmllbGQsIHR5cGU6IGZpZWxkLnR5cGUub2ZUeXBlIH07XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUua2luZCA9PT0gJ0VOVU0nIHx8IGZpZWxkLnR5cGUua2luZCA9PT0gJ1NDQUxBUicpXG4gICAgICAgICAgICByZXR1cm4gZmllbGQubmFtZTtcbiAgICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgICAgIGZpZWxkLnR5cGUua2luZCA9PT0gJ0xJU1QnICYmXG4gICAgICAgICAgICBmaWVsZC50eXBlLm9mVHlwZSAmJlxuICAgICAgICAgICAgKGZpZWxkLnR5cGUub2ZUeXBlLmtpbmQgPT09ICdFTlVNJyB8fFxuICAgICAgICAgICAgICBmaWVsZC50eXBlLm9mVHlwZS5raW5kID09PSAnU0NBTEFSJylcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZmllbGQubmFtZTtcbiAgICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgICAgIGZpZWxkLnR5cGUua2luZCA9PT0gJ0xJU1QnICYmXG4gICAgICAgICAgICBmaWVsZC50eXBlLm9mVHlwZSAmJlxuICAgICAgICAgICAgZmllbGQudHlwZS5vZlR5cGUua2luZCA9PT0gJ09CSkVDVCcgJiZcbiAgICAgICAgICAgIGZpZWxkLnR5cGUub2ZUeXBlLmZpZWxkc1xuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBgJHtmaWVsZC5uYW1lfSB7ICR7Z2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgIGZpZWxkczogZmllbGQudHlwZS5vZlR5cGUuZmllbGRzLFxuICAgICAgICAgICAgfSl9IH1gO1xuICAgICAgICAgIGVsc2UgaWYgKGZpZWxkLnR5cGUua2luZCA9PT0gJ09CSkVDVCcgJiYgZmllbGQudHlwZS5uYW1lID09PSAnSW1hZ2UnKVxuICAgICAgICAgICAgcmV0dXJuIGAke2ZpZWxkLm5hbWV9IHsgJHtpbWFnZUZpZWxkc30gfWA7XG4gICAgICAgICAgZWxzZSBpZiAoZmllbGQudHlwZS5raW5kID09PSAnT0JKRUNUJyAmJiBmaWVsZC50eXBlLm5hbWUgPT09ICdVc2VyJylcbiAgICAgICAgICAgIHJldHVybiBgJHtmaWVsZC5uYW1lfSB7ICR7dXNlckZpZWxkc30gfWA7XG4gICAgICAgICAgZWxzZSBpZiAoZmllbGQudHlwZS5raW5kID09PSAnT0JKRUNUJyAmJiBmaWVsZC50eXBlLmZpZWxkcylcbiAgICAgICAgICAgIHJldHVybiBgJHtmaWVsZC5uYW1lfSB7ICR7Z2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgIGZpZWxkczogZmllbGQudHlwZS5maWVsZHMsXG4gICAgICAgICAgICB9KX0gfWA7XG4gICAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICBmaWVsZC50eXBlLmtpbmQgPT09ICdPQkpFQ1QnICYmXG4gICAgICAgICAgICBmaWVsZC50eXBlLm5hbWUgPT09ICdHZW9jb2RlJ1xuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBgJHtmaWVsZC5uYW1lfSB7IGlkLCBzdHJlZXROdW1iZXIsIHJvdXRlLCBsb2NhbGl0eSwgYWRtaW5pc3RyYXRpdmVBcmVhTGV2ZWwxLCBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDIsIGNvdW50cnksIHBvc3RhbENvZGUsIGZvcm1hdHRlZEFkZHJlc3MsIGxhdCwgbG5nLCBsb2NhdGlvblR5cGUsIHBhcnRpYWxNYXRjaCwgdHlwZXMgfWA7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLmpvaW4oJywgJyl9YDtcblxuICAgIHJldHVybiB7XG4gICAgICBmaWVsZE5hbWVzOiBnZXRBdHRyaWJ1dGVzKGNvbGxlY3Rpb24pLFxuICAgIH07XG4gIH0pLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gIEBlbmhhbmNlXG4gIGNsYXNzIFdpdGhDb2xsZWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgY2xpZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZmllbGROYW1lczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaW5jbHVkZVN0YW1wczogUHJvcFR5cGVzLmJvb2wsXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5yZXN0fSAvPjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFdpdGhDb2xsZWN0aW9uQ29tcG9uZW50O1xufTtcbiJdfQ==
