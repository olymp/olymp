import 'antd/lib/auto-complete/style';
import _AutoComplete2 from 'antd/lib/auto-complete';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/auto-complete/style';
import _AutoComplete from 'antd/lib/auto-complete';
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

import { throttleInput } from 'olymp-utils';
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
    }, _this.throttle = throttleInput(500), _this.handleSearch = function (term) {
      _this.text = term;

      if (term) {
        _this.throttle(function () {
          _this.performSearch(term);
        });
      }
    }, _this.performSearch = function (address) {
      var _this$props2 = _this.props,
          client = _this$props2.client,
          setItems = _this$props2.setItems;


      return client.query({
        query: gql('\n            query geocodeList($address: String!) {\n              geocodeList(address: $address, region: "DE", language: "DE") {\n                id\n                streetNumber\n                route\n                locality\n                administrativeAreaLevel1\n                administrativeAreaLevel2\n                country\n                postalCode\n                formattedAddress\n                lat\n                lng\n                locationType\n                partialMatch\n                types\n              }\n            }\n          '),
        variables: {
          address: address
        }
      }).then(function (_ref4) {
        var data = _ref4.data;

        setItems(data.geocodeList);
      });
    }, _this.renderOption = function (_ref5) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9lZGl0cy9nZW9jb2RlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInRocm90dGxlSW5wdXQiLCJ3aXRoQXBvbGxvIiwiZ3JhcGhxbCIsImNvbXBvc2UiLCJ3aXRoU3RhdGUiLCJncWwiLCJlbmhhbmNlIiwib3B0aW9ucyIsImxhdCIsImxuZyIsInNraXAiLCJ1bmRlZmluZWQiLCJ2YXJpYWJsZXMiLCJhZGRyZXNzIiwicHJvcHMiLCJvd25Qcm9wcyIsImRhdGEiLCJ2YWx1ZSIsIkdlb2NvZGVFZGl0b3IiLCJvbkFkZCIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJ0ZXh0IiwiaXRlbSIsImZpbmQiLCJ4IiwiaWQiLCJjb2RlIiwidGhyb3R0bGUiLCJoYW5kbGVTZWFyY2giLCJ0ZXJtIiwicGVyZm9ybVNlYXJjaCIsImNsaWVudCIsInNldEl0ZW1zIiwicXVlcnkiLCJ0aGVuIiwiZ2VvY29kZUxpc3QiLCJyZW5kZXJPcHRpb24iLCJmb3JtYXR0ZWRBZGRyZXNzIiwid2hpdGVTcGFjZSIsImRpc3BsYXkiLCJzaXplIiwicGxhY2Vob2xkZXIiLCJzZXRMYXQiLCJzZXRMbmciLCJ3aWR0aCIsIm1hcCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDOztBQUVBLFNBQVNDLGFBQVQsUUFBOEIsYUFBOUI7OztBQUVBLFNBQVNDLFVBQVQsRUFBcUJDLE9BQXJCLFFBQW9DLGNBQXBDO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsUUFBbUMsV0FBbkM7O0FBRUEsT0FBT0MsR0FBUCxNQUFnQixhQUFoQjs7QUFFQSxJQUFNQyxVQUFVSCxRQUNkRixVQURjLEVBRWRH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eUIsR0FBZCxDQUFrQixLQUFLVCxZQUF2QixDQUhkO0FBSUUsb0JBQVUsS0FBS2xCLEtBSmpCO0FBS0Usb0JBQVUsS0FBS1UsWUFMakI7QUFNRSwyQkFBZ0I7QUFObEI7QUFRRTtBQUNFLHVCQUFhYSxlQUFlLFdBRDlCO0FBRUUsZ0JBQU1ELElBRlI7QUFHRSxrQkFDRSxvQkFBQyxRQUFEO0FBQ0Usa0JBQU0sRUFEUjtBQUVFLHFCQUFTLG1CQUFNO0FBQ2Isa0JBQUlNLFVBQVVDLFdBQWQsRUFBMkI7QUFDekJELDBCQUFVQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FBeUMsaUJBQWdCO0FBQUEsc0JBQWJDLE1BQWEsU0FBYkEsTUFBYTs7QUFDdkRQLHlCQUFPTyxPQUFPQyxRQUFkO0FBQ0FQLHlCQUFPTSxPQUFPRSxTQUFkO0FBQ0QsaUJBSEQ7QUFJRDtBQUNGO0FBVEg7QUFKSjtBQVJGLE9BREY7QUE0QkQ7Ozs7RUFqR3dDckQsUyxXQUNsQ3NELFksR0FBZTtBQUNwQnBDLFNBQU87QUFEYSxDOztTQURIQyxhIiwiZmlsZSI6InBhY2thZ2VzL2dvb2dsZS9lZGl0cy9nZW9jb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHRocm90dGxlSW5wdXQgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBGYU5ldXRlciB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IHdpdGhBcG9sbG8sIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhBcG9sbG8sXG4gIHdpdGhTdGF0ZSgnbGF0JywgJ3NldExhdCcpLFxuICB3aXRoU3RhdGUoJ2xuZycsICdzZXRMbmcnKSxcbiAgZ3JhcGhxbChcbiAgICBncWxgXG4gICAgICBxdWVyeSBnZW9jb2RlTGlzdCgkYWRkcmVzczogU3RyaW5nISkge1xuICAgICAgICBnZW9jb2RlTGlzdChhZGRyZXNzOiAkYWRkcmVzcywgcmVnaW9uOiBcIkRFXCIsIGxhbmd1YWdlOiBcIkRFXCIpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHN0cmVldE51bWJlclxuICAgICAgICAgIHJvdXRlXG4gICAgICAgICAgbG9jYWxpdHlcbiAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDFcbiAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDJcbiAgICAgICAgICBjb3VudHJ5XG4gICAgICAgICAgcG9zdGFsQ29kZVxuICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3NcbiAgICAgICAgICBsYXRcbiAgICAgICAgICBsbmdcbiAgICAgICAgICBsb2NhdGlvblR5cGVcbiAgICAgICAgICBwYXJ0aWFsTWF0Y2hcbiAgICAgICAgICB0eXBlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB7XG4gICAgICBvcHRpb25zOiAoeyBsYXQsIGxuZyB9KSA9PiAoe1xuICAgICAgICBza2lwOiBsYXQgPT09IHVuZGVmaW5lZCB8fCBsbmcgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgYWRkcmVzczogYCR7bGF0fSwgJHtsbmd9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAgIC4uLm93blByb3BzLFxuICAgICAgICB2YWx1ZTogZ2V0KGRhdGEsICdnZW9jb2RlTGlzdFswXScsIHt9KSxcbiAgICAgIH0pLFxuICAgIH0sXG4gICksXG4gIHdpdGhTdGF0ZSgnaXRlbXMnLCAnc2V0SXRlbXMnLCBbXSksXG4pO1xuXG5AZW5oYW5jZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvY29kZUVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6IG51bGwsXG4gIH07XG5cbiAgb25BZGQgPSBjb2RlID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMudGV4dCA9IG51bGw7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbmQoeCA9PiB4LmlkID09PSBjb2RlKTtcbiAgICBvbkNoYW5nZShpdGVtKTtcbiAgfTtcbiAgdGhyb3R0bGUgPSB0aHJvdHRsZUlucHV0KDUwMCk7XG5cbiAgaGFuZGxlU2VhcmNoID0gdGVybSA9PiB7XG4gICAgdGhpcy50ZXh0ID0gdGVybTtcblxuICAgIGlmICh0ZXJtKSB7XG4gICAgICB0aGlzLnRocm90dGxlKCgpID0+IHtcbiAgICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoKHRlcm0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHBlcmZvcm1TZWFyY2ggPSBhZGRyZXNzID0+IHtcbiAgICBjb25zdCB7IGNsaWVudCwgc2V0SXRlbXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2xpZW50XG4gICAgICAucXVlcnkoe1xuICAgICAgICBxdWVyeTogZ3FsKGBcbiAgICAgICAgICAgIHF1ZXJ5IGdlb2NvZGVMaXN0KCRhZGRyZXNzOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgIGdlb2NvZGVMaXN0KGFkZHJlc3M6ICRhZGRyZXNzLCByZWdpb246IFwiREVcIiwgbGFuZ3VhZ2U6IFwiREVcIikge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgc3RyZWV0TnVtYmVyXG4gICAgICAgICAgICAgICAgcm91dGVcbiAgICAgICAgICAgICAgICBsb2NhbGl0eVxuICAgICAgICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMVxuICAgICAgICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMlxuICAgICAgICAgICAgICAgIGNvdW50cnlcbiAgICAgICAgICAgICAgICBwb3N0YWxDb2RlXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkQWRkcmVzc1xuICAgICAgICAgICAgICAgIGxhdFxuICAgICAgICAgICAgICAgIGxuZ1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uVHlwZVxuICAgICAgICAgICAgICAgIHBhcnRpYWxNYXRjaFxuICAgICAgICAgICAgICAgIHR5cGVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgKSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgc2V0SXRlbXMoZGF0YS5nZW9jb2RlTGlzdCk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXJPcHRpb24gPSAoeyBpZCwgZm9ybWF0dGVkQWRkcmVzcyB9KSA9PiAoXG4gICAgPEF1dG9Db21wbGV0ZS5PcHRpb24ga2V5PXtpZH0gdGV4dD17Zm9ybWF0dGVkQWRkcmVzc30+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdpbml0aWFsJywgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICB7Zm9ybWF0dGVkQWRkcmVzc31cbiAgICAgIDwvZGl2PlxuICAgIDwvQXV0b0NvbXBsZXRlLk9wdGlvbj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2l6ZSwgcGxhY2Vob2xkZXIsIGl0ZW1zLCBzZXRMYXQsIHNldExuZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QXV0b0NvbXBsZXRlXG4gICAgICAgIHZhbHVlPXt0aGlzLnRleHQgfHwgKHZhbHVlID8gdmFsdWUuZm9ybWF0dGVkQWRkcmVzcyA6ICcnKX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICBkYXRhU291cmNlPXsoaXRlbXMgfHwgW10pLm1hcCh0aGlzLnJlbmRlck9wdGlvbil9XG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uQWRkfVxuICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgIG9wdGlvbkxhYmVsUHJvcD1cInRleHRcIlxuICAgICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgJ1N1Y2hlIC4uLid9XG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgPEZhTmV1dGVyXG4gICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXQoY29vcmRzLmxhdGl0dWRlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG5nKGNvb3Jkcy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L0F1dG9Db21wbGV0ZT5cbiAgICApO1xuICB9XG59XG4iXX0=
