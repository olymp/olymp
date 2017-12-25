import 'antd/lib/auto-complete/style';
import _AutoComplete2 from 'antd/lib/auto-complete';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/auto-complete/style';
import _AutoComplete from 'antd/lib/auto-complete';
import _debounce from 'lodash/debounce';
import _get from 'lodash/get';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n      query geocodeList($address: String!) {\n        geocodeList(address: $address, region: "DE", language: "DE") {\n          id\n          streetNumber\n          route\n          locality\n          administrativeAreaLevel1\n          administrativeAreaLevel2\n          country\n          postalCode\n          formattedAddress\n          lat\n          lng\n          locationType\n          partialMatch\n          types\n        }\n      }\n    '], ['\n      query geocodeList($address: String!) {\n        geocodeList(address: $address, region: "DE", language: "DE") {\n          id\n          streetNumber\n          route\n          locality\n          administrativeAreaLevel1\n          administrativeAreaLevel2\n          country\n          postalCode\n          formattedAddress\n          lat\n          lng\n          locationType\n          partialMatch\n          types\n        }\n      }\n    ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import FaNeuter from 'olymp-icons/lib/fa-neuter';

import { withApollo, graphql } from 'react-apollo';
import { compose, withState } from 'recompose';

import gql from 'graphql-tag';

var enhance = compose(withApollo, withState('lat', 'setLat'), withState('lng', 'setLng'), graphql(gql(_templateObject), {
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
      value: _get(data, 'geocodeList[0]', {})
    });
  }
}), withState('items', 'setItems', []));

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
    }, _this.performSearch = _debounce(function (address) {
      var _this$props2 = _this.props,
          client = _this$props2.client,
          setItems = _this$props2.setItems;


      return client.query({
        query: gql('\n              query geocodeList($address: String!) {\n                geocodeList(address: $address, region: "DE", language: "DE") {\n                  id\n                  streetNumber\n                  route\n                  locality\n                  administrativeAreaLevel1\n                  administrativeAreaLevel2\n                  country\n                  postalCode\n                  formattedAddress\n                  lat\n                  lng\n                  locationType\n                  partialMatch\n                  types\n                }\n              }\n            '),
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
      return React.createElement(
        _AutoComplete.Option,
        { key: id, text: formattedAddress },
        React.createElement(
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


      return React.createElement(
        _AutoComplete2,
        {
          value: this.text || (value ? value.formattedAddress : ''),
          style: { width: '100%' },
          dataSource: (items || []).map(this.renderOption),
          onSelect: this.onAdd,
          onSearch: this.handleSearch,
          optionLabelProp: 'text'
        },
        React.createElement(_Input, {
          placeholder: placeholder || 'Suche ...',
          size: size,
          suffix: React.createElement(FaNeuter, {
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
}(Component), _class2.defaultProps = {
  value: null
}, _temp2)) || _class;

export { GeocodeEditor as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvZWRpdHMvZ2VvY29kZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoQXBvbGxvIiwiZ3JhcGhxbCIsImNvbXBvc2UiLCJ3aXRoU3RhdGUiLCJncWwiLCJlbmhhbmNlIiwib3B0aW9ucyIsImxhdCIsImxuZyIsInNraXAiLCJ1bmRlZmluZWQiLCJ2YXJpYWJsZXMiLCJhZGRyZXNzIiwicHJvcHMiLCJvd25Qcm9wcyIsImRhdGEiLCJ2YWx1ZSIsIkdlb2NvZGVFZGl0b3IiLCJvbkFkZCIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJ0ZXh0IiwiaXRlbSIsImZpbmQiLCJ4IiwiaWQiLCJjb2RlIiwiaGFuZGxlU2VhcmNoIiwidGVybSIsInBlcmZvcm1TZWFyY2giLCJjbGllbnQiLCJzZXRJdGVtcyIsInF1ZXJ5IiwidGhlbiIsImdlb2NvZGVMaXN0IiwidHJhaWxpbmciLCJsZWFkaW5nIiwicmVuZGVyT3B0aW9uIiwiZm9ybWF0dGVkQWRkcmVzcyIsIndoaXRlU3BhY2UiLCJkaXNwbGF5Iiwic2l6ZSIsInBsYWNlaG9sZGVyIiwic2V0TGF0Iiwic2V0TG5nIiwid2lkdGgiLCJtYXAiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7OztBQUdBLFNBQVNDLFVBQVQsRUFBcUJDLE9BQXJCLFFBQW9DLGNBQXBDO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsUUFBbUMsV0FBbkM7O0FBRUEsT0FBT0MsR0FBUCxNQUFnQixhQUFoQjs7QUFFQSxJQUFNQyxVQUFVSCxRQUNkRixVQURjLEVBRWRHLFVBQVUsS0FBVixFQUFpQixRQUFqQixDQUZjLEVBR2RBLFVBQVUsS0FBVixFQUFpQixRQUFqQixDQUhjLEVBSWRGLFFBQ0VHLEdBREYsbUJBcUJFO0FBQ0VFLFdBQVM7QUFBQSxRQUFHQyxHQUFILFFBQUdBLEdBQUg7QUFBQSxRQUFRQyxHQUFSLFFBQVFBLEdBQVI7QUFBQSxXQUFtQjtBQUMxQkMsWUFBTUYsUUFBUUcsU0FBUixJQUFxQkYsUUFBUUUsU0FEVDtBQUUxQkMsaUJBQVc7QUFDVEMsaUJBQVlMLEdBQVosVUFBb0JDO0FBRFg7QUFGZSxLQUFuQjtBQUFBLEdBRFg7QUFPRUssU0FBTztBQUFBLFFBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWFDLElBQWIsU0FBYUEsSUFBYjtBQUFBLHdCQUNGRCxRQURFO0FBRUxFLGFBQU8sS0FBSUQsSUFBSixFQUFVLGdCQUFWLEVBQTRCLEVBQTVCO0FBRkY7QUFBQTtBQVBULENBckJGLENBSmMsRUFzQ2RaLFVBQVUsT0FBVixFQUFtQixVQUFuQixFQUErQixFQUEvQixDQXRDYyxDQUFoQjs7SUEwQ3FCYyxhLEdBRHBCWixPOzs7Ozs7Ozs7Ozs7OztzTUFNQ2EsSyxHQUFRLGdCQUFRO0FBQUEsd0JBQ2MsTUFBS0wsS0FEbkI7QUFBQSxVQUNOTSxRQURNLGVBQ05BLFFBRE07QUFBQSxVQUNJQyxLQURKLGVBQ0lBLEtBREo7OztBQUdkLFlBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBTUMsT0FBT0YsTUFBTUcsSUFBTixDQUFXO0FBQUEsZUFBS0MsRUFBRUMsRUFBRixLQUFTQyxJQUFkO0FBQUEsT0FBWCxDQUFiO0FBQ0FQLGVBQVNHLElBQVQ7QUFDRCxLLFFBRURLLFksR0FBZSxnQkFBUTtBQUNyQixZQUFLTixJQUFMLEdBQVlPLElBQVo7O0FBRUEsVUFBSUEsSUFBSixFQUFVO0FBQ1IsY0FBS0MsYUFBTCxDQUFtQkQsSUFBbkI7QUFDRDtBQUNGLEssUUFFREMsYSxHQUFnQixVQUNkLG1CQUFXO0FBQUEseUJBQ29CLE1BQUtoQixLQUR6QjtBQUFBLFVBQ0RpQixNQURDLGdCQUNEQSxNQURDO0FBQUEsVUFDT0MsUUFEUCxnQkFDT0EsUUFEUDs7O0FBR1QsYUFBT0QsT0FDSkUsS0FESSxDQUNFO0FBQ0xBLGVBQU81QixzbUJBREY7QUFxQkxPLG1CQUFXO0FBQ1RDO0FBRFM7QUFyQk4sT0FERixFQTBCSnFCLElBMUJJLENBMEJDLGlCQUFjO0FBQUEsWUFBWGxCLElBQVcsU0FBWEEsSUFBVzs7QUFDbEJnQixpQkFBU2hCLEtBQUttQixXQUFkO0FBQ0QsT0E1QkksQ0FBUDtBQTZCRCxLQWpDYSxFQWtDZCxHQWxDYyxFQW1DZCxFQUFFQyxVQUFVLElBQVosRUFBa0JDLFNBQVMsS0FBM0IsRUFuQ2MsQyxRQXNDaEJDLFksR0FBZTtBQUFBLFVBQUdaLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFVBQU9hLGdCQUFQLFNBQU9BLGdCQUFQO0FBQUEsYUFDYjtBQUFBLHNCQUFjLE1BQWQ7QUFBQSxVQUFxQixLQUFLYixFQUExQixFQUE4QixNQUFNYSxnQkFBcEM7QUFDRTtBQUFBO0FBQUEsWUFBSyxPQUFPLEVBQUVDLFlBQVksU0FBZCxFQUF5QkMsU0FBUyxNQUFsQyxFQUFaO0FBQ0dGO0FBREg7QUFERixPQURhO0FBQUEsSzs7Ozs7NkJBUU47QUFBQSxtQkFDcUQsS0FBS3pCLEtBRDFEO0FBQUEsVUFDQ0csS0FERCxVQUNDQSxLQUREO0FBQUEsVUFDUXlCLElBRFIsVUFDUUEsSUFEUjtBQUFBLFVBQ2NDLFdBRGQsVUFDY0EsV0FEZDtBQUFBLFVBQzJCdEIsS0FEM0IsVUFDMkJBLEtBRDNCO0FBQUEsVUFDa0N1QixNQURsQyxVQUNrQ0EsTUFEbEM7QUFBQSxVQUMwQ0MsTUFEMUMsVUFDMENBLE1BRDFDOzs7QUFHUCxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPLEtBQUt2QixJQUFMLEtBQWNMLFFBQVFBLE1BQU1zQixnQkFBZCxHQUFpQyxFQUEvQyxDQURUO0FBRUUsaUJBQU8sRUFBRU8sT0FBTyxNQUFULEVBRlQ7QUFHRSxzQkFBWSxDQUFDekIsU0FBUyxFQUFWLEVBQWMwQixHQUFkLENBQWtCLEtBQUtULFlBQXZCLENBSGQ7QUFJRSxvQkFBVSxLQUFLbkIsS0FKakI7QUFLRSxvQkFBVSxLQUFLUyxZQUxqQjtBQU1FLDJCQUFnQjtBQU5sQjtBQVFFO0FBQ0UsdUJBQWFlLGVBQWUsV0FEOUI7QUFFRSxnQkFBTUQsSUFGUjtBQUdFLGtCQUNFLG9CQUFDLFFBQUQ7QUFDRSxrQkFBTSxFQURSO0FBRUUscUJBQVMsbUJBQU07QUFDYixrQkFBSU0sVUFBVUMsV0FBZCxFQUEyQjtBQUN6QkQsMEJBQVVDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5QyxpQkFBZ0I7QUFBQSxzQkFBYkMsTUFBYSxTQUFiQSxNQUFhOztBQUN2RFAseUJBQU9PLE9BQU9DLFFBQWQ7QUFDQVAseUJBQU9NLE9BQU9FLFNBQWQ7QUFDRCxpQkFIRDtBQUlEO0FBQ0Y7QUFUSDtBQUpKO0FBUkYsT0FERjtBQTRCRDs7OztFQWxHd0NyRCxTLFdBQ2xDc0QsWSxHQUFlO0FBQ3BCckMsU0FBTztBQURhLEM7O1NBREhDLGEiLCJmaWxlIjoiY21zL2dvb2dsZS9lZGl0cy9nZW9jb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEZhTmV1dGVyIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgd2l0aEFwb2xsbywgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgZ2V0LCBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhBcG9sbG8sXG4gIHdpdGhTdGF0ZSgnbGF0JywgJ3NldExhdCcpLFxuICB3aXRoU3RhdGUoJ2xuZycsICdzZXRMbmcnKSxcbiAgZ3JhcGhxbChcbiAgICBncWxgXG4gICAgICBxdWVyeSBnZW9jb2RlTGlzdCgkYWRkcmVzczogU3RyaW5nISkge1xuICAgICAgICBnZW9jb2RlTGlzdChhZGRyZXNzOiAkYWRkcmVzcywgcmVnaW9uOiBcIkRFXCIsIGxhbmd1YWdlOiBcIkRFXCIpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHN0cmVldE51bWJlclxuICAgICAgICAgIHJvdXRlXG4gICAgICAgICAgbG9jYWxpdHlcbiAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDFcbiAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDJcbiAgICAgICAgICBjb3VudHJ5XG4gICAgICAgICAgcG9zdGFsQ29kZVxuICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3NcbiAgICAgICAgICBsYXRcbiAgICAgICAgICBsbmdcbiAgICAgICAgICBsb2NhdGlvblR5cGVcbiAgICAgICAgICBwYXJ0aWFsTWF0Y2hcbiAgICAgICAgICB0eXBlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB7XG4gICAgICBvcHRpb25zOiAoeyBsYXQsIGxuZyB9KSA9PiAoe1xuICAgICAgICBza2lwOiBsYXQgPT09IHVuZGVmaW5lZCB8fCBsbmcgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgYWRkcmVzczogYCR7bGF0fSwgJHtsbmd9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAgIC4uLm93blByb3BzLFxuICAgICAgICB2YWx1ZTogZ2V0KGRhdGEsICdnZW9jb2RlTGlzdFswXScsIHt9KSxcbiAgICAgIH0pLFxuICAgIH0sXG4gICksXG4gIHdpdGhTdGF0ZSgnaXRlbXMnLCAnc2V0SXRlbXMnLCBbXSksXG4pO1xuXG5AZW5oYW5jZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvY29kZUVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6IG51bGwsXG4gIH07XG5cbiAgb25BZGQgPSBjb2RlID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMudGV4dCA9IG51bGw7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbmQoeCA9PiB4LmlkID09PSBjb2RlKTtcbiAgICBvbkNoYW5nZShpdGVtKTtcbiAgfTtcblxuICBoYW5kbGVTZWFyY2ggPSB0ZXJtID0+IHtcbiAgICB0aGlzLnRleHQgPSB0ZXJtO1xuXG4gICAgaWYgKHRlcm0pIHtcbiAgICAgIHRoaXMucGVyZm9ybVNlYXJjaCh0ZXJtKTtcbiAgICB9XG4gIH07XG5cbiAgcGVyZm9ybVNlYXJjaCA9IGRlYm91bmNlKFxuICAgIGFkZHJlc3MgPT4ge1xuICAgICAgY29uc3QgeyBjbGllbnQsIHNldEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gY2xpZW50XG4gICAgICAgIC5xdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IGdxbChgXG4gICAgICAgICAgICAgIHF1ZXJ5IGdlb2NvZGVMaXN0KCRhZGRyZXNzOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgICAgZ2VvY29kZUxpc3QoYWRkcmVzczogJGFkZHJlc3MsIHJlZ2lvbjogXCJERVwiLCBsYW5ndWFnZTogXCJERVwiKSB7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgc3RyZWV0TnVtYmVyXG4gICAgICAgICAgICAgICAgICByb3V0ZVxuICAgICAgICAgICAgICAgICAgbG9jYWxpdHlcbiAgICAgICAgICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMVxuICAgICAgICAgICAgICAgICAgYWRtaW5pc3RyYXRpdmVBcmVhTGV2ZWwyXG4gICAgICAgICAgICAgICAgICBjb3VudHJ5XG4gICAgICAgICAgICAgICAgICBwb3N0YWxDb2RlXG4gICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzXG4gICAgICAgICAgICAgICAgICBsYXRcbiAgICAgICAgICAgICAgICAgIGxuZ1xuICAgICAgICAgICAgICAgICAgbG9jYXRpb25UeXBlXG4gICAgICAgICAgICAgICAgICBwYXJ0aWFsTWF0Y2hcbiAgICAgICAgICAgICAgICAgIHR5cGVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgKSxcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgc2V0SXRlbXMoZGF0YS5nZW9jb2RlTGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgNTAwLFxuICAgIHsgdHJhaWxpbmc6IHRydWUsIGxlYWRpbmc6IGZhbHNlIH0sXG4gICk7XG5cbiAgcmVuZGVyT3B0aW9uID0gKHsgaWQsIGZvcm1hdHRlZEFkZHJlc3MgfSkgPT4gKFxuICAgIDxBdXRvQ29tcGxldGUuT3B0aW9uIGtleT17aWR9IHRleHQ9e2Zvcm1hdHRlZEFkZHJlc3N9PlxuICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnaW5pdGlhbCcsIGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAge2Zvcm1hdHRlZEFkZHJlc3N9XG4gICAgICA8L2Rpdj5cbiAgICA8L0F1dG9Db21wbGV0ZS5PcHRpb24+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHNpemUsIHBsYWNlaG9sZGVyLCBpdGVtcywgc2V0TGF0LCBzZXRMbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEF1dG9Db21wbGV0ZVxuICAgICAgICB2YWx1ZT17dGhpcy50ZXh0IHx8ICh2YWx1ZSA/IHZhbHVlLmZvcm1hdHRlZEFkZHJlc3MgOiAnJyl9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgZGF0YVNvdXJjZT17KGl0ZW1zIHx8IFtdKS5tYXAodGhpcy5yZW5kZXJPcHRpb24pfVxuICAgICAgICBvblNlbGVjdD17dGhpcy5vbkFkZH1cbiAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICBvcHRpb25MYWJlbFByb3A9XCJ0ZXh0XCJcbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyIHx8ICdTdWNoZSAuLi4nfVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgc3VmZml4PXtcbiAgICAgICAgICAgIDxGYU5ldXRlclxuICAgICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHsgY29vcmRzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TGF0KGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldExuZyhjb29yZHMubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9BdXRvQ29tcGxldGU+XG4gICAgKTtcbiAgfVxufVxuIl19
