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
    }, _this.handleSearch = function (term) {
      _this.text = term;

      if (term) {
        _this.performSearch(term);
      }
    }, _this.performSearch = _debounce(function (input) {
      var _this$props2 = _this.props,
          client = _this$props2.client,
          setItems = _this$props2.setItems;


      return client.query({
        query: gql('\n            query places($input: String!) {\n              places(input: $input, lat: 50.103053, lng: 8.677393) {\n                id\n                placeId\n                description\n              }\n            }\n          '),
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvZWRpdHMvcGxhY2UuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aEFwb2xsbyIsImdyYXBocWwiLCJjb21wb3NlIiwid2l0aFN0YXRlIiwiZ3FsIiwiZW5oYW5jZSIsImxhdCIsImxuZyIsIm9wdGlvbnMiLCJza2lwIiwidW5kZWZpbmVkIiwidmFyaWFibGVzIiwiYWRkcmVzcyIsInByb3BzIiwib3duUHJvcHMiLCJkYXRhIiwidmFsdWUiLCJHZW9jb2RlRWRpdG9yIiwib25BZGQiLCJpdGVtcyIsImNsaWVudCIsIm9uQ2hhbmdlIiwidGV4dCIsImZpbmQiLCJ4IiwiaWQiLCJjb2RlIiwicGxhY2VJZCIsInF1ZXJ5IiwidGhlbiIsInBsYWNlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiaGFuZGxlU2VhcmNoIiwidGVybSIsInBlcmZvcm1TZWFyY2giLCJzZXRJdGVtcyIsImlucHV0IiwicGxhY2VzIiwidHJhaWxpbmciLCJsZWFkaW5nIiwicmVuZGVyT3B0aW9uIiwiZGVzY3JpcHRpb24iLCJ3aGl0ZVNwYWNlIiwiZGlzcGxheSIsInNpemUiLCJwbGFjZWhvbGRlciIsInNldExhdCIsInNldExuZyIsImZvcm1hdHRlZEFkZHJlc3MiLCJ3aWR0aCIsIm1hcCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQzs7O0FBSUEsU0FBU0MsVUFBVCxFQUFxQkMsT0FBckIsUUFBb0MsY0FBcEM7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxTQUFsQixRQUFtQyxXQUFuQztBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsYUFBaEI7O0FBRUEsSUFBTUMsVUFBVUgs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c0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldCwgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRmFOZXV0ZXIgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyB3aXRoQXBvbGxvLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhBcG9sbG8sXG4gIHdpdGhTdGF0ZSgnaXRlbXMnLCAnc2V0SXRlbXMnLCBbXSksXG4gIHdpdGhTdGF0ZSgnbGF0JywgJ3NldExhdCcsICh7IGxhdCB9KSA9PiBsYXQpLFxuICB3aXRoU3RhdGUoJ2xuZycsICdzZXRMbmcnLCAoeyBsbmcgfSkgPT4gbG5nKSxcbiAgZ3JhcGhxbChcbiAgICBncWxgXG4gICAgICBxdWVyeSBnZW9jb2RlTGlzdCgkYWRkcmVzczogU3RyaW5nISkge1xuICAgICAgICBnZW9jb2RlTGlzdChhZGRyZXNzOiAkYWRkcmVzcywgcmVnaW9uOiBcIkRFXCIsIGxhbmd1YWdlOiBcIkRFXCIpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHN0cmVldE51bWJlclxuICAgICAgICAgIHJvdXRlXG4gICAgICAgICAgbG9jYWxpdHlcbiAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDFcbiAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDJcbiAgICAgICAgICBjb3VudHJ5XG4gICAgICAgICAgcG9zdGFsQ29kZVxuICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3NcbiAgICAgICAgICBsYXRcbiAgICAgICAgICBsbmdcbiAgICAgICAgICBsb2NhdGlvblR5cGVcbiAgICAgICAgICBwYXJ0aWFsTWF0Y2hcbiAgICAgICAgICB0eXBlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB7XG4gICAgICBvcHRpb25zOiAoeyBsYXQsIGxuZyB9KSA9PiAoe1xuICAgICAgICBza2lwOiBsYXQgPT09IHVuZGVmaW5lZCB8fCBsbmcgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgYWRkcmVzczogYCR7bGF0fSwgJHtsbmd9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAgIC4uLm93blByb3BzLFxuICAgICAgICB2YWx1ZTogZ2V0KGRhdGEsICdnZW9jb2RlTGlzdFswXScsIHt9KSxcbiAgICAgIH0pLFxuICAgIH0sXG4gICksXG4pO1xuXG5AZW5oYW5jZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvY29kZUVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6IG51bGwsXG4gIH07XG5cbiAgb25BZGQgPSBjb2RlID0+IHtcbiAgICBjb25zdCB7IGl0ZW1zLCBjbGllbnQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy50ZXh0ID0gbnVsbDtcbiAgICBjb25zdCB7IHBsYWNlSWQgfSA9IGl0ZW1zLmZpbmQoeCA9PiB4LmlkID09PSBjb2RlKTtcblxuICAgIGNsaWVudFxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGdxbChgXG4gICAgICAgIHF1ZXJ5IHBsYWNlKCRwbGFjZUlkOiBTdHJpbmchKSB7XG4gICAgICAgICAgcGxhY2UocGxhY2VJZDogJHBsYWNlSWQpIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBzdHJlZXROdW1iZXJcbiAgICAgICAgICAgIHJvdXRlXG4gICAgICAgICAgICBsb2NhbGl0eVxuICAgICAgICAgICAgYWRtaW5pc3RyYXRpdmVBcmVhTGV2ZWwxXG4gICAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDJcbiAgICAgICAgICAgIGNvdW50cnlcbiAgICAgICAgICAgIHBvc3RhbENvZGVcbiAgICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3NcbiAgICAgICAgICAgIGxhdFxuICAgICAgICAgICAgbG5nXG4gICAgICAgICAgICBsb2NhdGlvblR5cGVcbiAgICAgICAgICAgIHBhcnRpYWxNYXRjaFxuICAgICAgICAgICAgdHlwZXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGApLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBwbGFjZUlkLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gb25DaGFuZ2UoZGF0YS5wbGFjZSkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIGhhbmRsZVNlYXJjaCA9IHRlcm0gPT4ge1xuICAgIHRoaXMudGV4dCA9IHRlcm07XG5cbiAgICBpZiAodGVybSkge1xuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoKHRlcm0pO1xuICAgIH1cbiAgfTtcblxuXG4gIHBlcmZvcm1TZWFyY2ggPSBkZWJvdW5jZShcbiAgICBpbnB1dCA9PiB7XG4gICAgICBjb25zdCB7IGNsaWVudCwgc2V0SXRlbXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiBjbGllbnRcbiAgICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgICBxdWVyeTogZ3FsKGBcbiAgICAgICAgICAgIHF1ZXJ5IHBsYWNlcygkaW5wdXQ6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgcGxhY2VzKGlucHV0OiAkaW5wdXQsIGxhdDogNTAuMTAzMDUzLCBsbmc6IDguNjc3MzkzKSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBwbGFjZUlkXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGApLFxuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgc2V0SXRlbXMoZGF0YS5wbGFjZXMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIDUwMCxcbiAgICB7IHRyYWlsaW5nOiB0cnVlLCBsZWFkaW5nOiBmYWxzZSB9LFxuICApO1xuXG4gIHJlbmRlck9wdGlvbiA9ICh7IGlkLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgPEF1dG9Db21wbGV0ZS5PcHRpb24ga2V5PXtpZH0gdGV4dD17ZGVzY3JpcHRpb259PlxuICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnaW5pdGlhbCcsIGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgPC9BdXRvQ29tcGxldGUuT3B0aW9uPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBzaXplLCBwbGFjZWhvbGRlciwgaXRlbXMsIHNldExhdCwgc2V0TG5nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBdXRvQ29tcGxldGVcbiAgICAgICAgdmFsdWU9e3RoaXMudGV4dCB8fCAodmFsdWUgPyB2YWx1ZS5mb3JtYXR0ZWRBZGRyZXNzIDogJycpfVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIGRhdGFTb3VyY2U9eyhpdGVtcyB8fCBbXSkubWFwKHRoaXMucmVuZGVyT3B0aW9uKX1cbiAgICAgICAgb25TZWxlY3Q9e3RoaXMub25BZGR9XG4gICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgb3B0aW9uTGFiZWxQcm9wPVwidGV4dFwiXG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCAnU3VjaGUgLi4uJ31cbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHN1ZmZpeD17XG4gICAgICAgICAgICA8RmFOZXV0ZXJcbiAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKCh7IGNvb3JkcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldExhdChjb29yZHMubGF0aXR1ZGUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRMbmcoY29vcmRzLmxvbmdpdHVkZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvQXV0b0NvbXBsZXRlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
