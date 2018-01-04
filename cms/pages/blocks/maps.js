'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _maps = require('olymp-google/maps');

var _maps2 = _interopRequireDefault(_maps);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MapContainer = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    width: '100%',
    height: 300,
    position: 'relative',
    display: 'block'
  };
}, function (_ref2) {
  var attributes = _ref2.attributes,
      className = _ref2.className,
      getData = _ref2.getData,
      children = _ref2.children;
  return _react2.default.createElement(
    'div',
    _extends({ className: className }, attributes),
    children,
    _react2.default.createElement(
      _maps2.default,
      {
        center: {
          lat: getData('lat', 59.724465),
          lng: getData('lng', 30.080121)
        },
        zoom: 15,
        options: function options() {
          return {
            panControl: false,
            mapTypeControl: false,
            zoomControl: false,
            scrollwheel: false,
            gestureHandling: 'none'
          };
        }
      },
      _react2.default.createElement(_maps2.default.Marker, {
        lat: getData('lat', 59.724465),
        lng: getData('lng', 30.080121)
      })
    )
  );
}, function (p) {
  return Object.keys(p);
});

var onClick = function onClick(setData, getData, client) {
  return function () {
    var value = prompt('Adresse', '');
    if (value) {
      client.query({
        query: (0, _graphqlTag2.default)('\n        query geocode($address: String!) {\n          geocode(address: $address, region: "DE", language: "DE") {\n            id\n            streetNumber\n            route\n            locality\n            administrativeAreaLevel1\n            administrativeAreaLevel2\n            country\n            postalCode\n            formattedAddress\n            lat\n            lng\n            locationType\n            partialMatch\n            types\n          }\n        }\n      '),
        variables: {
          address: value
        }
      }).then(function (_ref3) {
        var data = _ref3.data;

        if (data.geocode) {
          if (confirm('Adresse: ' + data.geocode.formattedAddress)) {
            setData({ lat: data.geocode.lat, lng: data.geocode.lng });
          }
        }
      });
    }
  };
};

var _ref5 = _react2.default.createElement(_icon2.default, { type: 'flag' });

exports.default = {
  type: 'Pages.Media.MapsBlock',
  isVoid: true,
  kind: 'block',
  label: 'Google-Karte',
  category: 'Sonstiges',
  component: MapContainer,
  actions: [{
    tooltip: function tooltip(getData) {
      return 'Bild ' + (getData('value') ? 'wechseln' : 'wählen');
    },
    component: (0, _reactApollo.withApollo)(function (_ref4) {
      var setData = _ref4.setData,
          getData = _ref4.getData,
          client = _ref4.client,
          p = _objectWithoutProperties(_ref4, ['setData', 'getData', 'client']);

      return _react2.default.createElement(
        'span',
        { onClick: onClick(setData, getData, client) },
        _ref5
      );
    }),
    toggle: function toggle() {}
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvbWFwcy5lczYiXSwibmFtZXMiOlsiTWFwQ29udGFpbmVyIiwidGhlbWUiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJnZXREYXRhIiwiY2hpbGRyZW4iLCJsYXQiLCJsbmciLCJwYW5Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJ6b29tQ29udHJvbCIsInNjcm9sbHdoZWVsIiwiZ2VzdHVyZUhhbmRsaW5nIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJvbkNsaWNrIiwic2V0RGF0YSIsImNsaWVudCIsInZhbHVlIiwicHJvbXB0IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJhZGRyZXNzIiwidGhlbiIsImRhdGEiLCJnZW9jb2RlIiwiY29uZmlybSIsImZvcm1hdHRlZEFkZHJlc3MiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJhY3Rpb25zIiwidG9vbHRpcCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxnQ0FDbkI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxXQUFPLE1BRE87QUFFZEMsWUFBUSxHQUZNO0FBR2RDLGNBQVUsVUFISTtBQUlkQyxhQUFTO0FBSkssR0FBaEI7QUFBQSxDQURtQixFQU9uQjtBQUFBLE1BQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLE1BQWVDLFNBQWYsU0FBZUEsU0FBZjtBQUFBLE1BQTBCQyxPQUExQixTQUEwQkEsT0FBMUI7QUFBQSxNQUFtQ0MsUUFBbkMsU0FBbUNBLFFBQW5DO0FBQUEsU0FDRTtBQUFBO0FBQUEsZUFBSyxXQUFXRixTQUFoQixJQUErQkQsVUFBL0I7QUFDR0csWUFESDtBQUVFO0FBQUE7QUFBQTtBQUNFLGdCQUFRO0FBQ05DLGVBQUtGLFFBQVEsS0FBUixFQUFlLFNBQWYsQ0FEQztBQUVORyxlQUFLSCxRQUFRLEtBQVIsRUFBZSxTQUFmO0FBRkMsU0FEVjtBQUtFLGNBQU0sRUFMUjtBQU1FLGlCQUFTO0FBQUEsaUJBQU87QUFDZEksd0JBQVksS0FERTtBQUVkQyw0QkFBZ0IsS0FGRjtBQUdkQyx5QkFBYSxLQUhDO0FBSWRDLHlCQUFhLEtBSkM7QUFLZEMsNkJBQWlCO0FBTEgsV0FBUDtBQUFBO0FBTlg7QUFjRSxtREFBTSxNQUFOO0FBQ0UsYUFBS1IsUUFBUSxLQUFSLEVBQWUsU0FBZixDQURQO0FBRUUsYUFBS0EsUUFBUSxLQUFSLEVBQWUsU0FBZjtBQUZQO0FBZEY7QUFGRixHQURGO0FBQUEsQ0FQbUIsRUErQm5CO0FBQUEsU0FBS1MsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQS9CbUIsQ0FBckI7O0FBa0NBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxPQUFELEVBQVViLE9BQVYsRUFBbUJjLE1BQW5CO0FBQUEsU0FBOEIsWUFBTTtBQUNsRCxRQUFNQyxRQUFRQyxPQUFPLFNBQVAsRUFBa0IsRUFBbEIsQ0FBZDtBQUNBLFFBQUlELEtBQUosRUFBVztBQUNURCxhQUNHRyxLQURILENBQ1M7QUFDTEEsZUFBTyxrZ0JBREY7QUFxQkxDLG1CQUFXO0FBQ1RDLG1CQUFTSjtBQURBO0FBckJOLE9BRFQsRUEwQkdLLElBMUJILENBMEJRLGlCQUFjO0FBQUEsWUFBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNsQixZQUFJQSxLQUFLQyxPQUFULEVBQWtCO0FBQ2hCLGNBQUlDLHNCQUFvQkYsS0FBS0MsT0FBTCxDQUFhRSxnQkFBakMsQ0FBSixFQUEwRDtBQUN4RFgsb0JBQVEsRUFBRVgsS0FBS21CLEtBQUtDLE9BQUwsQ0FBYXBCLEdBQXBCLEVBQXlCQyxLQUFLa0IsS0FBS0MsT0FBTCxDQUFhbkIsR0FBM0MsRUFBUjtBQUNEO0FBQ0Y7QUFDRixPQWhDSDtBQWlDRDtBQUNGLEdBckNlO0FBQUEsQ0FBaEI7O1lBa0RVLGdEQUFNLE1BQUssTUFBWCxHOztrQkFaSztBQUNic0IsUUFBTSx1QkFETztBQUViQyxVQUFRLElBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sY0FKTTtBQUtiQyxZQUFVLFdBTEc7QUFNYkMsYUFBV3RDLFlBTkU7QUFPYnVDLFdBQVMsQ0FDUDtBQUNFQyxhQUFTO0FBQUEsd0JBQW1CaEMsUUFBUSxPQUFSLElBQW1CLFVBQW5CLEdBQWdDLFFBQW5EO0FBQUEsS0FEWDtBQUVFOEIsZUFBVyw2QkFBVztBQUFBLFVBQUdqQixPQUFILFNBQUdBLE9BQUg7QUFBQSxVQUFZYixPQUFaLFNBQVlBLE9BQVo7QUFBQSxVQUFxQmMsTUFBckIsU0FBcUJBLE1BQXJCO0FBQUEsVUFBZ0NILENBQWhDOztBQUFBLGFBQ3BCO0FBQUE7QUFBQSxVQUFNLFNBQVNDLFFBQVFDLE9BQVIsRUFBaUJiLE9BQWpCLEVBQTBCYyxNQUExQixDQUFmO0FBQUE7QUFBQSxPQURvQjtBQUFBLEtBQVgsQ0FGYjtBQU9FbUIsWUFBUSxrQkFBTSxDQUFFO0FBUGxCLEdBRE87QUFQSSxDIiwiZmlsZSI6ImNtcy9wYWdlcy9ibG9ja3MvbWFwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBNYXBzIGZyb20gJ29seW1wLWdvb2dsZS9tYXBzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmNvbnN0IE1hcENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogMzAwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0pLFxuICAoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGdldERhdGEsIGNoaWxkcmVuIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4uYXR0cmlidXRlc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8TWFwc1xuICAgICAgICBjZW50ZXI9e3tcbiAgICAgICAgICBsYXQ6IGdldERhdGEoJ2xhdCcsIDU5LjcyNDQ2NSksXG4gICAgICAgICAgbG5nOiBnZXREYXRhKCdsbmcnLCAzMC4wODAxMjEpLFxuICAgICAgICB9fVxuICAgICAgICB6b29tPXsxNX1cbiAgICAgICAgb3B0aW9ucz17KCkgPT4gKHtcbiAgICAgICAgICBwYW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICBnZXN0dXJlSGFuZGxpbmc6ICdub25lJyxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxNYXBzLk1hcmtlclxuICAgICAgICAgIGxhdD17Z2V0RGF0YSgnbGF0JywgNTkuNzI0NDY1KX1cbiAgICAgICAgICBsbmc9e2dldERhdGEoJ2xuZycsIDMwLjA4MDEyMSl9XG4gICAgICAgIC8+XG4gICAgICA8L01hcHM+XG4gICAgPC9kaXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBvbkNsaWNrID0gKHNldERhdGEsIGdldERhdGEsIGNsaWVudCkgPT4gKCkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHByb21wdCgnQWRyZXNzZScsICcnKTtcbiAgaWYgKHZhbHVlKSB7XG4gICAgY2xpZW50XG4gICAgICAucXVlcnkoe1xuICAgICAgICBxdWVyeTogZ3FsKGBcbiAgICAgICAgcXVlcnkgZ2VvY29kZSgkYWRkcmVzczogU3RyaW5nISkge1xuICAgICAgICAgIGdlb2NvZGUoYWRkcmVzczogJGFkZHJlc3MsIHJlZ2lvbjogXCJERVwiLCBsYW5ndWFnZTogXCJERVwiKSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgc3RyZWV0TnVtYmVyXG4gICAgICAgICAgICByb3V0ZVxuICAgICAgICAgICAgbG9jYWxpdHlcbiAgICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMVxuICAgICAgICAgICAgYWRtaW5pc3RyYXRpdmVBcmVhTGV2ZWwyXG4gICAgICAgICAgICBjb3VudHJ5XG4gICAgICAgICAgICBwb3N0YWxDb2RlXG4gICAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzXG4gICAgICAgICAgICBsYXRcbiAgICAgICAgICAgIGxuZ1xuICAgICAgICAgICAgbG9jYXRpb25UeXBlXG4gICAgICAgICAgICBwYXJ0aWFsTWF0Y2hcbiAgICAgICAgICAgIHR5cGVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgKSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgYWRkcmVzczogdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmdlb2NvZGUpIHtcbiAgICAgICAgICBpZiAoY29uZmlybShgQWRyZXNzZTogJHtkYXRhLmdlb2NvZGUuZm9ybWF0dGVkQWRkcmVzc31gKSkge1xuICAgICAgICAgICAgc2V0RGF0YSh7IGxhdDogZGF0YS5nZW9jb2RlLmxhdCwgbG5nOiBkYXRhLmdlb2NvZGUubG5nIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdQYWdlcy5NZWRpYS5NYXBzQmxvY2snLFxuICBpc1ZvaWQ6IHRydWUsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnR29vZ2xlLUthcnRlJyxcbiAgY2F0ZWdvcnk6ICdTb25zdGlnZXMnLFxuICBjb21wb25lbnQ6IE1hcENvbnRhaW5lcixcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIHRvb2x0aXA6IGdldERhdGEgPT4gYEJpbGQgJHtnZXREYXRhKCd2YWx1ZScpID8gJ3dlY2hzZWxuJyA6ICd3w6RobGVuJ31gLFxuICAgICAgY29tcG9uZW50OiB3aXRoQXBvbGxvKCh7IHNldERhdGEsIGdldERhdGEsIGNsaWVudCwgLi4ucCB9KSA9PiAoXG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e29uQ2xpY2soc2V0RGF0YSwgZ2V0RGF0YSwgY2xpZW50KX0+XG4gICAgICAgICAgPEljb24gdHlwZT1cImZsYWdcIiAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApKSxcbiAgICAgIHRvZ2dsZTogKCkgPT4ge30sXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=
