'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _autoComplete = require('antd/lib/auto-complete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _debounce2 = require('lodash/debounce');

var _debounce3 = _interopRequireDefault(_debounce2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n      query geocodeList($address: String!) {\n        geocodeList(address: $address, region: "DE", language: "DE") {\n          id\n          streetNumber\n          route\n          locality\n          administrativeAreaLevel1\n          administrativeAreaLevel2\n          country\n          postalCode\n          formattedAddress\n          lat\n          lng\n          locationType\n          partialMatch\n          types\n        }\n      }\n    '], ['\n      query geocodeList($address: String!) {\n        geocodeList(address: $address, region: "DE", language: "DE") {\n          id\n          streetNumber\n          route\n          locality\n          administrativeAreaLevel1\n          administrativeAreaLevel2\n          country\n          postalCode\n          formattedAddress\n          lat\n          lng\n          locationType\n          partialMatch\n          types\n        }\n      }\n    ']);

require('antd/lib/auto-complete/style');

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _faNeuter = require('olymp-icons/lib/fa-neuter');

var _faNeuter2 = _interopRequireDefault(_faNeuter);

var _reactApollo = require('react-apollo');

var _recompose = require('recompose');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var enhance = (0, _recompose.compose)(_reactApollo.withApollo, (0, _recompose.withState)('items', 'setItems', []), (0, _recompose.withState)('lat', 'setLat', function (_ref) {
  var lat = _ref.lat;
  return lat;
}), (0, _recompose.withState)('lng', 'setLng', function (_ref2) {
  var lng = _ref2.lng;
  return lng;
}), (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options(_ref3) {
    var lat = _ref3.lat,
        lng = _ref3.lng;
    return {
      skip: lat === undefined || lng === undefined,
      variables: {
        address: lat + ', ' + lng
      }
    };
  },
  props: function props(_ref4) {
    var ownProps = _ref4.ownProps,
        data = _ref4.data;
    return _extends({}, ownProps, {
      value: (0, _get3.default)(data, 'geocodeList[0]', {})
    });
  }
}));

var GeocodeEditor = enhance(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(GeocodeEditor, _Component);

  function GeocodeEditor() {
    var _ref5;

    var _temp, _this, _ret;

    _classCallCheck(this, GeocodeEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = GeocodeEditor.__proto__ || Object.getPrototypeOf(GeocodeEditor)).call.apply(_ref5, [this].concat(args))), _this), _this.onAdd = function (code) {
      var _this$props = _this.props,
          items = _this$props.items,
          client = _this$props.client,
          onChange = _this$props.onChange;


      _this.text = null;

      var _items$find = items.find(function (x) {
        return x.id === code;
      }),
          placeId = _items$find.placeId;

      client.query({
        query: (0, _graphqlTag2.default)('\n        query place($placeId: String!) {\n          place(placeId: $placeId) {\n            id\n            streetNumber\n            route\n            locality\n            administrativeAreaLevel1\n            administrativeAreaLevel2\n            country\n            postalCode\n            formattedAddress\n            lat\n            lng\n            locationType\n            partialMatch\n            types\n          }\n        }\n      '),
        variables: {
          placeId: placeId
        }
      }).then(function (_ref6) {
        var data = _ref6.data;
        return onChange(data.place);
      }).catch(function (err) {
        return console.log(err);
      });
    }, _this.handleSearch = function (term) {
      _this.text = term;

      if (term) {
        _this.performSearch(term);
      }
    }, _this.performSearch = (0, _debounce3.default)(function (input) {
      var _this$props2 = _this.props,
          client = _this$props2.client,
          setItems = _this$props2.setItems;


      return client.query({
        query: (0, _graphqlTag2.default)('\n            query places($input: String!) {\n              places(input: $input, lat: 50.103053, lng: 8.677393) {\n                id\n                placeId\n                description\n              }\n            }\n          '),
        variables: {
          input: input
        }
      }).then(function (_ref7) {
        var data = _ref7.data;

        setItems(data.places);
      });
    }, 500, { trailing: true, leading: false }), _this.renderOption = function (_ref8) {
      var id = _ref8.id,
          description = _ref8.description;
      return _react2.default.createElement(
        _autoComplete2.default.Option,
        { key: id, text: description },
        _react2.default.createElement(
          'div',
          { style: { whiteSpace: 'initial', display: 'flex' } },
          description
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GeocodeEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          size = _props.size,
          placeholder = _props.placeholder,
          items = _props.items,
          setLat = _props.setLat,
          setLng = _props.setLng;


      return _react2.default.createElement(
        _autoComplete2.default,
        {
          value: this.text || (value ? value.formattedAddress : ''),
          style: { width: '100%' },
          dataSource: (items || []).map(this.renderOption),
          onSelect: this.onAdd,
          onSearch: this.handleSearch,
          optionLabelProp: 'text'
        },
        _react2.default.createElement(_input2.default, {
          placeholder: placeholder || 'Suche ...',
          size: size,
          suffix: _react2.default.createElement(_faNeuter2.default, {
            size: 14,
            onClick: function onClick() {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (_ref9) {
                  var coords = _ref9.coords;

                  setLat(coords.latitude);
                  setLng(coords.longitude);
                });
              }
            }
          })
        })
      );
    }
  }]);

  return GeocodeEditor;
}(_react.Component), _class2.defaultProps = {
  value: null
}, _temp2)) || _class;

exports.default = GeocodeEditor;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvZWRpdHMvcGxhY2UuZXM2Il0sIm5hbWVzIjpbImVuaGFuY2UiLCJsYXQiLCJsbmciLCJvcHRpb25zIiwic2tpcCIsInVuZGVmaW5lZCIsInZhcmlhYmxlcyIsImFkZHJlc3MiLCJwcm9wcyIsIm93blByb3BzIiwiZGF0YSIsInZhbHVlIiwiR2VvY29kZUVkaXRvciIsIm9uQWRkIiwiaXRlbXMiLCJjbGllbnQiLCJvbkNoYW5nZSIsInRleHQiLCJmaW5kIiwieCIsImlkIiwiY29kZSIsInBsYWNlSWQiLCJxdWVyeSIsInRoZW4iLCJwbGFjZSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVyciIsImhhbmRsZVNlYXJjaCIsInRlcm0iLCJwZXJmb3JtU2VhcmNoIiwic2V0SXRlbXMiLCJpbnB1dCIsInBsYWNlcyIsInRyYWlsaW5nIiwibGVhZGluZyIsInJlbmRlck9wdGlvbiIsImRlc2NyaXB0aW9uIiwid2hpdGVTcGFjZSIsImRpc3BsYXkiLCJzaXplIiwicGxhY2Vob2xkZXIiLCJzZXRMYXQiLCJzZXRMbmciLCJmb3JtYXR0ZWRBZGRyZXNzIiwid2lkdGgiLCJtYXAiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsaURBRWQsMEJBQVUsT0FBVixFQUFtQixVQUFuQixFQUErQixFQUEvQixDQUZjLEVBR2QsMEJBQVUsS0FBVixFQUFpQixRQUFqQixFQUEyQjtBQUFBLE1BQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLFNBQWFBLEdBQWI7QUFBQSxDQUEzQixDQUhjLEVBSWQsMEJBQVUsS0FBVixFQUFpQixRQUFqQixFQUEyQjtB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a0M4QixNQURsQyxVQUNrQ0EsTUFEbEM7QUFBQSxVQUMwQ0MsTUFEMUMsVUFDMENBLE1BRDFDOzs7QUFHUCxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPLEtBQUs1QixJQUFMLEtBQWNOLFFBQVFBLE1BQU1tQyxnQkFBZCxHQUFpQyxFQUEvQyxDQURUO0FBRUUsaUJBQU8sRUFBRUMsT0FBTyxNQUFULEVBRlQ7QUFHRSxzQkFBWSxDQUFDakMsU0FBUyxFQUFWLEVBQWNrQyxHQUFkLENBQWtCLEtBQUtWLFlBQXZCLENBSGQ7QUFJRSxvQkFBVSxLQUFLekIsS0FKakI7QUFLRSxvQkFBVSxLQUFLaUIsWUFMakI7QUFNRSwyQkFBZ0I7QUFObEI7QUFRRTtBQUNFLHVCQUFhYSxlQUFlLFdBRDlCO0FBRUUsZ0JBQU1ELElBRlI7QUFHRSxrQkFDRTtBQUNFLGtCQUFNLEVBRFI7QUFFRSxxQkFBUyxtQkFBTTtBQUNiLGtCQUFJTyxVQUFVQyxXQUFkLEVBQTJCO0FBQ3pCRCwwQkFBVUMsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDLGlCQUFnQjtBQUFBLHNCQUFiQyxNQUFhLFNBQWJBLE1BQWE7O0FBQ3ZEUix5QkFBT1EsT0FBT0MsUUFBZDtBQUNBUix5QkFBT08sT0FBT0UsU0FBZDtBQUNELGlCQUhEO0FBSUQ7QUFDRjtBQVRIO0FBSko7QUFSRixPQURGO0FBNEJEOzs7OzZCQW5ITUMsWSxHQUFlO0FBQ3BCNUMsU0FBTztBQURhLEM7O2tCQURIQyxhIiwiZmlsZSI6ImNtcy9nb29nbGUvZWRpdHMvcGxhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0LCBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBGYU5ldXRlciB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IHdpdGhBcG9sbG8sIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aEFwb2xsbyxcbiAgd2l0aFN0YXRlKCdpdGVtcycsICdzZXRJdGVtcycsIFtdKSxcbiAgd2l0aFN0YXRlKCdsYXQnLCAnc2V0TGF0JywgKHsgbGF0IH0pID0+IGxhdCksXG4gIHdpdGhTdGF0ZSgnbG5nJywgJ3NldExuZycsICh7IGxuZyB9KSA9PiBsbmcpLFxuICBncmFwaHFsKFxuICAgIGdxbGBcbiAgICAgIHF1ZXJ5IGdlb2NvZGVMaXN0KCRhZGRyZXNzOiBTdHJpbmchKSB7XG4gICAgICAgIGdlb2NvZGVMaXN0KGFkZHJlc3M6ICRhZGRyZXNzLCByZWdpb246IFwiREVcIiwgbGFuZ3VhZ2U6IFwiREVcIikge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgc3RyZWV0TnVtYmVyXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgICBsb2NhbGl0eVxuICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMVxuICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMlxuICAgICAgICAgIGNvdW50cnlcbiAgICAgICAgICBwb3N0YWxDb2RlXG4gICAgICAgICAgZm9ybWF0dGVkQWRkcmVzc1xuICAgICAgICAgIGxhdFxuICAgICAgICAgIGxuZ1xuICAgICAgICAgIGxvY2F0aW9uVHlwZVxuICAgICAgICAgIHBhcnRpYWxNYXRjaFxuICAgICAgICAgIHR5cGVzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHtcbiAgICAgIG9wdGlvbnM6ICh7IGxhdCwgbG5nIH0pID0+ICh7XG4gICAgICAgIHNraXA6IGxhdCA9PT0gdW5kZWZpbmVkIHx8IGxuZyA9PT0gdW5kZWZpbmVkLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBhZGRyZXNzOiBgJHtsYXR9LCAke2xuZ31gLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBwcm9wczogKHsgb3duUHJvcHMsIGRhdGEgfSkgPT4gKHtcbiAgICAgICAgLi4ub3duUHJvcHMsXG4gICAgICAgIHZhbHVlOiBnZXQoZGF0YSwgJ2dlb2NvZGVMaXN0WzBdJywge30pLFxuICAgICAgfSksXG4gICAgfSxcbiAgKSxcbik7XG5cbkBlbmhhbmNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9jb2RlRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogbnVsbCxcbiAgfTtcblxuICBvbkFkZCA9IGNvZGUgPT4ge1xuICAgIGNvbnN0IHsgaXRlbXMsIGNsaWVudCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnRleHQgPSBudWxsO1xuICAgIGNvbnN0IHsgcGxhY2VJZCB9ID0gaXRlbXMuZmluZCh4ID0+IHguaWQgPT09IGNvZGUpO1xuXG4gICAgY2xpZW50XG4gICAgICAucXVlcnkoe1xuICAgICAgICBxdWVyeTogZ3FsKGBcbiAgICAgICAgcXVlcnkgcGxhY2UoJHBsYWNlSWQ6IFN0cmluZyEpIHtcbiAgICAgICAgICBwbGFjZShwbGFjZUlkOiAkcGxhY2VJZCkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHN0cmVldE51bWJlclxuICAgICAgICAgICAgcm91dGVcbiAgICAgICAgICAgIGxvY2FsaXR5XG4gICAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDFcbiAgICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMlxuICAgICAgICAgICAgY291bnRyeVxuICAgICAgICAgICAgcG9zdGFsQ29kZVxuICAgICAgICAgICAgZm9ybWF0dGVkQWRkcmVzc1xuICAgICAgICAgICAgbGF0XG4gICAgICAgICAgICBsbmdcbiAgICAgICAgICAgIGxvY2F0aW9uVHlwZVxuICAgICAgICAgICAgcGFydGlhbE1hdGNoXG4gICAgICAgICAgICB0eXBlc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCksXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHBsYWNlSWQsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiBvbkNoYW5nZShkYXRhLnBsYWNlKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH07XG5cbiAgaGFuZGxlU2VhcmNoID0gdGVybSA9PiB7XG4gICAgdGhpcy50ZXh0ID0gdGVybTtcblxuICAgIGlmICh0ZXJtKSB7XG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2godGVybSk7XG4gICAgfVxuICB9O1xuXG5cbiAgcGVyZm9ybVNlYXJjaCA9IGRlYm91bmNlKFxuICAgIGlucHV0ID0+IHtcbiAgICAgIGNvbnN0IHsgY2xpZW50LCBzZXRJdGVtcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIGNsaWVudFxuICAgICAgICAucXVlcnkoe1xuICAgICAgICAgIHF1ZXJ5OiBncWwoYFxuICAgICAgICAgICAgcXVlcnkgcGxhY2VzKCRpbnB1dDogU3RyaW5nISkge1xuICAgICAgICAgICAgICBwbGFjZXMoaW5wdXQ6ICRpbnB1dCwgbGF0OiA1MC4xMDMwNTMsIGxuZzogOC42NzczOTMpIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIHBsYWNlSWRcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYCksXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICBzZXRJdGVtcyhkYXRhLnBsYWNlcyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgNTAwLFxuICAgIHsgdHJhaWxpbmc6IHRydWUsIGxlYWRpbmc6IGZhbHNlIH0sXG4gICk7XG5cbiAgcmVuZGVyT3B0aW9uID0gKHsgaWQsIGRlc2NyaXB0aW9uIH0pID0+IChcbiAgICA8QXV0b0NvbXBsZXRlLk9wdGlvbiBrZXk9e2lkfSB0ZXh0PXtkZXNjcmlwdGlvbn0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdpbml0aWFsJywgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L2Rpdj5cbiAgICA8L0F1dG9Db21wbGV0ZS5PcHRpb24+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHNpemUsIHBsYWNlaG9sZGVyLCBpdGVtcywgc2V0TGF0LCBzZXRMbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEF1dG9Db21wbGV0ZVxuICAgICAgICB2YWx1ZT17dGhpcy50ZXh0IHx8ICh2YWx1ZSA/IHZhbHVlLmZvcm1hdHRlZEFkZHJlc3MgOiAnJyl9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgZGF0YVNvdXJjZT17KGl0ZW1zIHx8IFtdKS5tYXAodGhpcy5yZW5kZXJPcHRpb24pfVxuICAgICAgICBvblNlbGVjdD17dGhpcy5vbkFkZH1cbiAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICBvcHRpb25MYWJlbFByb3A9XCJ0ZXh0XCJcbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyIHx8ICdTdWNoZSAuLi4nfVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgc3VmZml4PXtcbiAgICAgICAgICAgIDxGYU5ldXRlclxuICAgICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHsgY29vcmRzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TGF0KGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldExuZyhjb29yZHMubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9BdXRvQ29tcGxldGU+XG4gICAgKTtcbiAgfVxufVxuIl19
