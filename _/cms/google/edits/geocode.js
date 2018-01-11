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

var enhance = (0, _recompose.compose)(_reactApollo.withApollo, (0, _recompose.withState)('lat', 'setLat'), (0, _recompose.withState)('lng', 'setLng'), (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options(_ref) {
    var lat = _ref.lat,
        lng = _ref.lng;
    return {
      skip: lat === undefined || lng === undefined,
      variables: {
        address: lat + ', ' + lng
      }
    };
  },
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        data = _ref2.data;
    return _extends({}, ownProps, {
      value: (0, _get3.default)(data, 'geocodeList[0]', {})
    });
  }
}), (0, _recompose.withState)('items', 'setItems', []));

var GeocodeEditor = enhance(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(GeocodeEditor, _Component);

  function GeocodeEditor() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, GeocodeEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = GeocodeEditor.__proto__ || Object.getPrototypeOf(GeocodeEditor)).call.apply(_ref3, [this].concat(args))), _this), _this.onAdd = function (code) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          items = _this$props.items;


      _this.text = null;
      var item = items.find(function (x) {
        return x.id === code;
      });
      onChange(item);
    }, _this.handleSearch = function (term) {
      _this.text = term;

      if (term) {
        _this.performSearch(term);
      }
    }, _this.performSearch = (0, _debounce3.default)(function (address) {
      var _this$props2 = _this.props,
          client = _this$props2.client,
          setItems = _this$props2.setItems;


      return client.query({
        query: (0, _graphqlTag2.default)('\n              query geocodeList($address: String!) {\n                geocodeList(address: $address, region: "DE", language: "DE") {\n                  id\n                  streetNumber\n                  route\n                  locality\n                  administrativeAreaLevel1\n                  administrativeAreaLevel2\n                  country\n                  postalCode\n                  formattedAddress\n                  lat\n                  lng\n                  locationType\n                  partialMatch\n                  types\n                }\n              }\n            '),
        variables: {
          address: address
        }
      }).then(function (_ref4) {
        var data = _ref4.data;

        setItems(data.geocodeList);
      });
    }, 500, { trailing: true, leading: false }), _this.renderOption = function (_ref5) {
      var id = _ref5.id,
          formattedAddress = _ref5.formattedAddress;
      return _react2.default.createElement(
        _autoComplete2.default.Option,
        { key: id, text: formattedAddress },
        _react2.default.createElement(
          'div',
          { style: { whiteSpace: 'initial', display: 'flex' } },
          formattedAddress
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
                navigator.geolocation.getCurrentPosition(function (_ref6) {
                  var coords = _ref6.coords;

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvZWRpdHMvZ2VvY29kZS5lczYiXSwibmFtZXMiOlsiZW5oYW5jZSIsIm9wdGlvbnMiLCJsYXQiLCJsbmciLCJza2lwIiwidW5kZWZpbmVkIiwidmFyaWFibGVzIiwiYWRkcmVzcyIsInByb3BzIiwib3duUHJvcHMiLCJkYXRhIiwidmFsdWUiLCJHZW9jb2RlRWRpdG9yIiwib25BZGQiLCJvbkNoYW5nZSIsIml0ZW1zIiwidGV4dCIsIml0ZW0iLCJmaW5kIiwieCIsImlkIiwiY29kZSIsImhhbmRsZVNlYXJjaCIsInRlcm0iLCJwZXJmb3JtU2VhcmNoIiwiY2xpZW50Iiwic2V0SXRlbXMiLCJxdWVyeSIsInRoZW4iLCJnZW9jb2RlTGlzdCIsInRyYWlsaW5nIiwibGVhZGluZyIsInJlbmRlck9wdGlvbiIsImZvcm1hdHRlZEFkZHJlc3MiLCJ3aGl0ZVNwYWNlIiwiZGlzcGxheSIsInNpemUiLCJwbGFjZWhvbGRlciIsInNldExhdCIsInNldExuZyIsIndpZHRoIiwibWFwIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLGlEQUVkLDBCQUFVLEtBQVYsRUFBaUIsUUFBakIsQ0FGYyxFQUdkLDBCQUFVLEtBQVYsRUFBaUIsUUFBakIsQ0FIYyxFQUlkLHNFQXFCRTtBQUNFQyxXQUFTO0FBQUEsUUFBR0MsR0FBSCxRQUFHQSxHQUFIO0FBQUEsUUFBUUMsR0FBUixRQUFRQSxHQUFSO0FBQUEsV0FBbUI7QUFDMUJDLFlBQU1GLFFBQVFHLFNBQVIsSUFBcUJGLFFBQVFFLFNBRFQ7QUFFMUJDLGlCQUFXO0FBQ1RDLGlCQUFZTCxHQUFaLFVB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Q0FBc0JDLGtCQUF0QixDQUF5QyxpQkFBZ0I7QUFBQSxzQkFBYkMsTUFBYSxTQUFiQSxNQUFhOztBQUN2RFAseUJBQU9PLE9BQU9DLFFBQWQ7QUFDQVAseUJBQU9NLE9BQU9FLFNBQWQ7QUFDRCxpQkFIRDtBQUlEO0FBQ0Y7QUFUSDtBQUpKO0FBUkYsT0FERjtBQTRCRDs7Ozs2QkFqR01DLFksR0FBZTtBQUNwQnJDLFNBQU87QUFEYSxDOztrQkFESEMsYSIsImZpbGUiOiJjbXMvZ29vZ2xlL2VkaXRzL2dlb2NvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFOZXV0ZXIgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyB3aXRoQXBvbGxvLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBnZXQsIGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aEFwb2xsbyxcbiAgd2l0aFN0YXRlKCdsYXQnLCAnc2V0TGF0JyksXG4gIHdpdGhTdGF0ZSgnbG5nJywgJ3NldExuZycpLFxuICBncmFwaHFsKFxuICAgIGdxbGBcbiAgICAgIHF1ZXJ5IGdlb2NvZGVMaXN0KCRhZGRyZXNzOiBTdHJpbmchKSB7XG4gICAgICAgIGdlb2NvZGVMaXN0KGFkZHJlc3M6ICRhZGRyZXNzLCByZWdpb246IFwiREVcIiwgbGFuZ3VhZ2U6IFwiREVcIikge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgc3RyZWV0TnVtYmVyXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgICBsb2NhbGl0eVxuICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMVxuICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMlxuICAgICAgICAgIGNvdW50cnlcbiAgICAgICAgICBwb3N0YWxDb2RlXG4gICAgICAgICAgZm9ybWF0dGVkQWRkcmVzc1xuICAgICAgICAgIGxhdFxuICAgICAgICAgIGxuZ1xuICAgICAgICAgIGxvY2F0aW9uVHlwZVxuICAgICAgICAgIHBhcnRpYWxNYXRjaFxuICAgICAgICAgIHR5cGVzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHtcbiAgICAgIG9wdGlvbnM6ICh7IGxhdCwgbG5nIH0pID0+ICh7XG4gICAgICAgIHNraXA6IGxhdCA9PT0gdW5kZWZpbmVkIHx8IGxuZyA9PT0gdW5kZWZpbmVkLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBhZGRyZXNzOiBgJHtsYXR9LCAke2xuZ31gLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBwcm9wczogKHsgb3duUHJvcHMsIGRhdGEgfSkgPT4gKHtcbiAgICAgICAgLi4ub3duUHJvcHMsXG4gICAgICAgIHZhbHVlOiBnZXQoZGF0YSwgJ2dlb2NvZGVMaXN0WzBdJywge30pLFxuICAgICAgfSksXG4gICAgfSxcbiAgKSxcbiAgd2l0aFN0YXRlKCdpdGVtcycsICdzZXRJdGVtcycsIFtdKSxcbik7XG5cbkBlbmhhbmNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9jb2RlRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogbnVsbCxcbiAgfTtcblxuICBvbkFkZCA9IGNvZGUgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy50ZXh0ID0gbnVsbDtcbiAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCh4ID0+IHguaWQgPT09IGNvZGUpO1xuICAgIG9uQ2hhbmdlKGl0ZW0pO1xuICB9O1xuXG4gIGhhbmRsZVNlYXJjaCA9IHRlcm0gPT4ge1xuICAgIHRoaXMudGV4dCA9IHRlcm07XG5cbiAgICBpZiAodGVybSkge1xuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoKHRlcm0pO1xuICAgIH1cbiAgfTtcblxuICBwZXJmb3JtU2VhcmNoID0gZGVib3VuY2UoXG4gICAgYWRkcmVzcyA9PiB7XG4gICAgICBjb25zdCB7IGNsaWVudCwgc2V0SXRlbXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiBjbGllbnRcbiAgICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgICBxdWVyeTogZ3FsKGBcbiAgICAgICAgICAgICAgcXVlcnkgZ2VvY29kZUxpc3QoJGFkZHJlc3M6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgICBnZW9jb2RlTGlzdChhZGRyZXNzOiAkYWRkcmVzcywgcmVnaW9uOiBcIkRFXCIsIGxhbmd1YWdlOiBcIkRFXCIpIHtcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICBzdHJlZXROdW1iZXJcbiAgICAgICAgICAgICAgICAgIHJvdXRlXG4gICAgICAgICAgICAgICAgICBsb2NhbGl0eVxuICAgICAgICAgICAgICAgICAgYWRtaW5pc3RyYXRpdmVBcmVhTGV2ZWwxXG4gICAgICAgICAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDJcbiAgICAgICAgICAgICAgICAgIGNvdW50cnlcbiAgICAgICAgICAgICAgICAgIHBvc3RhbENvZGVcbiAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3NcbiAgICAgICAgICAgICAgICAgIGxhdFxuICAgICAgICAgICAgICAgICAgbG5nXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvblR5cGVcbiAgICAgICAgICAgICAgICAgIHBhcnRpYWxNYXRjaFxuICAgICAgICAgICAgICAgICAgdHlwZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGApLFxuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICBzZXRJdGVtcyhkYXRhLmdlb2NvZGVMaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICA1MDAsXG4gICAgeyB0cmFpbGluZzogdHJ1ZSwgbGVhZGluZzogZmFsc2UgfSxcbiAgKTtcblxuICByZW5kZXJPcHRpb24gPSAoeyBpZCwgZm9ybWF0dGVkQWRkcmVzcyB9KSA9PiAoXG4gICAgPEF1dG9Db21wbGV0ZS5PcHRpb24ga2V5PXtpZH0gdGV4dD17Zm9ybWF0dGVkQWRkcmVzc30+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdpbml0aWFsJywgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICB7Zm9ybWF0dGVkQWRkcmVzc31cbiAgICAgIDwvZGl2PlxuICAgIDwvQXV0b0NvbXBsZXRlLk9wdGlvbj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2l6ZSwgcGxhY2Vob2xkZXIsIGl0ZW1zLCBzZXRMYXQsIHNldExuZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QXV0b0NvbXBsZXRlXG4gICAgICAgIHZhbHVlPXt0aGlzLnRleHQgfHwgKHZhbHVlID8gdmFsdWUuZm9ybWF0dGVkQWRkcmVzcyA6ICcnKX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICBkYXRhU291cmNlPXsoaXRlbXMgfHwgW10pLm1hcCh0aGlzLnJlbmRlck9wdGlvbil9XG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uQWRkfVxuICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgIG9wdGlvbkxhYmVsUHJvcD1cInRleHRcIlxuICAgICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgJ1N1Y2hlIC4uLid9XG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgPEZhTmV1dGVyXG4gICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXQoY29vcmRzLmxhdGl0dWRlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG5nKGNvb3Jkcy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L0F1dG9Db21wbGV0ZT5cbiAgICApO1xuICB9XG59XG4iXX0=
