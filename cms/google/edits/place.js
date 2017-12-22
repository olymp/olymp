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

var enhance = compose(withApollo, withState('items', 'setItems', []), withState('lat', 'setLat', function (_ref) {
  var lat = _ref.lat;
  return lat;
}), withState('lng', 'setLng', function (_ref2) {
  var lng = _ref2.lng;
  return lng;
}), graphql(gql(_templateObject), {
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
      value: _get(data, 'geocodeList[0]', {})
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
        query: gql('\n        query place($placeId: String!) {\n          place(placeId: $placeId) {\n            id\n            streetNumber\n            route\n            locality\n            administrativeAreaLevel1\n            administrativeAreaLevel2\n            country\n            postalCode\n            formattedAddress\n            lat\n            lng\n            locationType\n            partialMatch\n            types\n          }\n        }\n      '),
        variables: {
          placeId: placeId
        }
      }).then(function (_ref6) {
        var data = _ref6.data;
        return onChange(data.place);
      }).catch(function (err) {
        return console.log(err);
      });
    }, _this.throttle = throttleInput(500), _this.handleSearch = function (term) {
      _this.text = term;

      if (term) {
        _this.throttle(function () {
          _this.performSearch(term);
        });
      }
    }, _this.performSearch = function (input) {
      var _this$props2 = _this.props,
          client = _this$props2.client,
          setItems = _this$props2.setItems;


      return client.query({
        query: gql('\n          query places($input: String!) {\n            places(input: $input, lat: 50.103053, lng: 8.677393) {\n              id\n              placeId\n              description\n            }\n          }\n        '),
        variables: {
          input: input
        }
      }).then(function (_ref7) {
        var data = _ref7.data;

        setItems(data.places);
      });
    }, _this.renderOption = function (_ref8) {
      var id = _ref8.id,
          description = _ref8.description;
      return React.createElement(
        _AutoComplete.Option,
        { key: id, text: description },
        React.createElement(
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
}(Component), _class2.defaultProps = {
  value: null
}, _temp2)) || _class;

export { GeocodeEditor as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9lZGl0cy9wbGFjZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ0aHJvdHRsZUlucHV0Iiwid2l0aEFwb2xsbyIsImdyYXBocWwiLCJjb21wb3NlIiwid2l0aFN0YXRlIiwiZ3FsIiwiZW5oYW5jZSIsImxhdCIsImxuZyIsIm9wdGlvbnMiLCJza2lwIiwidW5kZWZpbmVkIiwidmFyaWFibGVzIiwiYWRkcmVzcyIsInByb3BzIiwib3duUHJvcHMiLCJkYXRhIiwidmFsdWUiLCJHZW9jb2RlRWRpdG9yIiwib25BZGQiLCJpdGVtcyIsImNsaWVudCIsIm9uQ2hhbmdlIiwidGV4dCIsImZpbmQiLCJ4IiwiaWQiLCJjb2RlIiwicGxhY2VJZCIsInF1ZXJ5IiwidGhlbiIsInBsYWNlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwidGhyb3R0bGUiLCJoYW5kbGVTZWFyY2giLCJ0ZXJtIiwicGVyZm9ybVNlYXJjaCIsInNldEl0ZW1zIiwiaW5wdXQiLCJwbGFjZXMiLCJyZW5kZXJPcHRpb24iLCJkZXNjcmlwdGlvbiIsIndoaXRlU3BhY2UiLCJkaXNwbGF5Iiwic2l6ZSIsInBsYWNlaG9sZGVyIiwic2V0TGF0Iiwic2V0TG5nIiwiZm9ybWF0dGVkQWRkcmVzcyIsIndpZHRoIiwibWFwIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7O0FBRUEsU0FBU0MsYUFBVCxRQUE4QixhQUE5Qjs7O0FBRUEsU0FBU0MsVUFBVCxFQUFxQkMsT0FBckIsUUFBb0MsY0FBcEM7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxTQUFsQixRQUFtQyxXQUFuQzs7QUFFQSxP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cGFja2FnZXMvZ29vZ2xlL2VkaXRzL3BsYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHRocm90dGxlSW5wdXQgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBGYU5ldXRlciB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IHdpdGhBcG9sbG8sIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhBcG9sbG8sXG4gIHdpdGhTdGF0ZSgnaXRlbXMnLCAnc2V0SXRlbXMnLCBbXSksXG4gIHdpdGhTdGF0ZSgnbGF0JywgJ3NldExhdCcsICh7IGxhdCB9KSA9PiBsYXQpLFxuICB3aXRoU3RhdGUoJ2xuZycsICdzZXRMbmcnLCAoeyBsbmcgfSkgPT4gbG5nKSxcbiAgZ3JhcGhxbChcbiAgICBncWxgXG4gICAgICBxdWVyeSBnZW9jb2RlTGlzdCgkYWRkcmVzczogU3RyaW5nISkge1xuICAgICAgICBnZW9jb2RlTGlzdChhZGRyZXNzOiAkYWRkcmVzcywgcmVnaW9uOiBcIkRFXCIsIGxhbmd1YWdlOiBcIkRFXCIpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHN0cmVldE51bWJlclxuICAgICAgICAgIHJvdXRlXG4gICAgICAgICAgbG9jYWxpdHlcbiAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDFcbiAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDJcbiAgICAgICAgICBjb3VudHJ5XG4gICAgICAgICAgcG9zdGFsQ29kZVxuICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3NcbiAgICAgICAgICBsYXRcbiAgICAgICAgICBsbmdcbiAgICAgICAgICBsb2NhdGlvblR5cGVcbiAgICAgICAgICBwYXJ0aWFsTWF0Y2hcbiAgICAgICAgICB0eXBlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB7XG4gICAgICBvcHRpb25zOiAoeyBsYXQsIGxuZyB9KSA9PiAoe1xuICAgICAgICBza2lwOiBsYXQgPT09IHVuZGVmaW5lZCB8fCBsbmcgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgYWRkcmVzczogYCR7bGF0fSwgJHtsbmd9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAgIC4uLm93blByb3BzLFxuICAgICAgICB2YWx1ZTogZ2V0KGRhdGEsICdnZW9jb2RlTGlzdFswXScsIHt9KSxcbiAgICAgIH0pLFxuICAgIH0sXG4gICksXG4pO1xuXG5AZW5oYW5jZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvY29kZUVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6IG51bGwsXG4gIH07XG5cbiAgb25BZGQgPSBjb2RlID0+IHtcbiAgICBjb25zdCB7IGl0ZW1zLCBjbGllbnQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy50ZXh0ID0gbnVsbDtcbiAgICBjb25zdCB7IHBsYWNlSWQgfSA9IGl0ZW1zLmZpbmQoeCA9PiB4LmlkID09PSBjb2RlKTtcblxuICAgIGNsaWVudFxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGdxbChgXG4gICAgICAgIHF1ZXJ5IHBsYWNlKCRwbGFjZUlkOiBTdHJpbmchKSB7XG4gICAgICAgICAgcGxhY2UocGxhY2VJZDogJHBsYWNlSWQpIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBzdHJlZXROdW1iZXJcbiAgICAgICAgICAgIHJvdXRlXG4gICAgICAgICAgICBsb2NhbGl0eVxuICAgICAgICAgICAgYWRtaW5pc3RyYXRpdmVBcmVhTGV2ZWwxXG4gICAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDJcbiAgICAgICAgICAgIGNvdW50cnlcbiAgICAgICAgICAgIHBvc3RhbENvZGVcbiAgICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3NcbiAgICAgICAgICAgIGxhdFxuICAgICAgICAgICAgbG5nXG4gICAgICAgICAgICBsb2NhdGlvblR5cGVcbiAgICAgICAgICAgIHBhcnRpYWxNYXRjaFxuICAgICAgICAgICAgdHlwZXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGApLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBwbGFjZUlkLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gb25DaGFuZ2UoZGF0YS5wbGFjZSkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuICB0aHJvdHRsZSA9IHRocm90dGxlSW5wdXQoNTAwKTtcblxuICBoYW5kbGVTZWFyY2ggPSB0ZXJtID0+IHtcbiAgICB0aGlzLnRleHQgPSB0ZXJtO1xuXG4gICAgaWYgKHRlcm0pIHtcbiAgICAgIHRoaXMudGhyb3R0bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnBlcmZvcm1TZWFyY2godGVybSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcGVyZm9ybVNlYXJjaCA9IGlucHV0ID0+IHtcbiAgICBjb25zdCB7IGNsaWVudCwgc2V0SXRlbXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2xpZW50XG4gICAgICAucXVlcnkoe1xuICAgICAgICBxdWVyeTogZ3FsKGBcbiAgICAgICAgICBxdWVyeSBwbGFjZXMoJGlucHV0OiBTdHJpbmchKSB7XG4gICAgICAgICAgICBwbGFjZXMoaW5wdXQ6ICRpbnB1dCwgbGF0OiA1MC4xMDMwNTMsIGxuZzogOC42NzczOTMpIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgcGxhY2VJZFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCksXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlucHV0LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBzZXRJdGVtcyhkYXRhLnBsYWNlcyk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXJPcHRpb24gPSAoeyBpZCwgZGVzY3JpcHRpb24gfSkgPT4gKFxuICAgIDxBdXRvQ29tcGxldGUuT3B0aW9uIGtleT17aWR9IHRleHQ9e2Rlc2NyaXB0aW9ufT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ2luaXRpYWwnLCBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvQXV0b0NvbXBsZXRlLk9wdGlvbj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2l6ZSwgcGxhY2Vob2xkZXIsIGl0ZW1zLCBzZXRMYXQsIHNldExuZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QXV0b0NvbXBsZXRlXG4gICAgICAgIHZhbHVlPXt0aGlzLnRleHQgfHwgKHZhbHVlID8gdmFsdWUuZm9ybWF0dGVkQWRkcmVzcyA6ICcnKX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICBkYXRhU291cmNlPXsoaXRlbXMgfHwgW10pLm1hcCh0aGlzLnJlbmRlck9wdGlvbil9XG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uQWRkfVxuICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgIG9wdGlvbkxhYmVsUHJvcD1cInRleHRcIlxuICAgICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgJ1N1Y2hlIC4uLid9XG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgPEZhTmV1dGVyXG4gICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXQoY29vcmRzLmxhdGl0dWRlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG5nKGNvb3Jkcy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L0F1dG9Db21wbGV0ZT5cbiAgICApO1xuICB9XG59XG4iXX0=
