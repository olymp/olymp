import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';

import Maps from 'olymp-google/maps';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

var MapContainer = createComponent(function (_ref) {
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
  return React.createElement(
    'div',
    _extends({ className: className }, attributes),
    children,
    React.createElement(
      Maps,
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
      React.createElement(Maps.Marker, {
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
        query: gql('\n        query geocode($address: String!) {\n          geocode(address: $address, region: "DE", language: "DE") {\n            id\n            streetNumber\n            route\n            locality\n            administrativeAreaLevel1\n            administrativeAreaLevel2\n            country\n            postalCode\n            formattedAddress\n            lat\n            lng\n            locationType\n            partialMatch\n            types\n          }\n        }\n      '),
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

var _ref5 = React.createElement(_Icon, { type: 'flag' });

export default {
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
    component: withApollo(function (_ref4) {
      var setData = _ref4.setData,
          getData = _ref4.getData,
          client = _ref4.client,
          p = _objectWithoutProperties(_ref4, ['setData', 'getData', 'client']);

      return React.createElement(
        'span',
        { onClick: onClick(setData, getData, client) },
        _ref5
      );
    }),
    toggle: function toggle() {}
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9tYXBzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIk1hcHMiLCJncWwiLCJ3aXRoQXBvbGxvIiwiTWFwQ29udGFpbmVyIiwidGhlbWUiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJnZXREYXRhIiwiY2hpbGRyZW4iLCJsYXQiLCJsbmciLCJwYW5Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJ6b29tQ29udHJvbCIsInNjcm9sbHdoZWVsIiwiZ2VzdHVyZUhhbmRsaW5nIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJvbkNsaWNrIiwic2V0RGF0YSIsImNsaWVudCIsInZhbHVlIiwicHJvbXB0IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJhZGRyZXNzIiwidGhlbiIsImRhdGEiLCJnZW9jb2RlIiwiY29uZmlybSIsImZvcm1hdHRlZEFkZHJlc3MiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJhY3Rpb25zIiwidG9vbHRpcCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOztBQUVBLE9BQU9DLElBQVAsTUFBaUIsbUJBQWpCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixhQUFoQjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsY0FBM0I7O0FBRUEsSUFBTUMsZUFBZUosZ0JBQ25CO0FBQUEsTUFBR0ssS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDZEMsV0FBTyxNQURPO0FBRWRDLFlBQVEsR0FGTTtBQUdkQyxjQUFVLFVBSEk7QUFJZEMsYUFBUztBQUpLLEdBQWhCO0FBQUEsQ0FEbUIsRUFPbkI7QUFBQSxNQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQSxNQUFlQyxTQUFmLFNBQWVBLFNBQWY7QUFBQSxNQUEwQkMsT0FBMUIsU0FBMEJBLE9BQTFCO0FBQUEsTUFBbUNDLFFBQW5DLFNBQW1DQSxRQUFuQztBQUFBLFNBQ0U7QUFBQTtBQUFBLGVBQUssV0FBV0YsU0FBaEIsSUFBK0JELFVBQS9CO0FBQ0dHLFlBREg7QUFFRTtBQUFDLFVBQUQ7QUFBQTtBQUNFLGdCQUFRO0FBQ05DLGVBQUtGLFFBQVEsS0FBUixFQUFlLFNBQWYsQ0FEQztBQUVORyxlQUFLSCxRQUFRLEtBQVIsRUFBZSxTQUFmO0FBRkMsU0FEVjtBQUtFLGNBQU0sRUFMUjtBQU1FLGlCQUFTO0FBQUEsaUJBQU87QUFDZEksd0JBQVksS0FERTtBQUVkQyw0QkFBZ0IsS0FGRjtBQUdkQyx5QkFBYSxLQUhDO0FBSWRDLHlCQUFhLEtBSkM7QUFLZEMsNkJBQWlCO0FBTEgsV0FBUDtBQUFBO0FBTlg7QUFjRSwwQkFBQyxJQUFELENBQU0sTUFBTjtBQUNFLGFBQUtSLFFBQVEsS0FBUixFQUFlLFNBQWYsQ0FEUDtBQUVFLGFBQUtBLFFBQVEsS0FBUixFQUFlLFNBQWY7QUFGUDtBQWRGO0FBRkYsR0FERjtBQUFBLENBUG1CLEVBK0JuQjtBQUFBLFNBQUtTLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0EvQm1CLENBQXJCOztBQWtDQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsT0FBRCxFQUFVYixPQUFWLEVBQW1CYyxNQUFuQjtBQUFBLFNBQThCLFlBQU07QUFDbEQsUUFBTUMsUUFBUUMsT0FBTyxTQUFQLEVBQWtCLEVBQWxCLENBQWQ7QUFDQSxRQUFJRCxLQUFKLEVBQVc7QUFDVEQsYUFDR0csS0FESCxDQUNTO0FBQ0xBLGVBQU8zQiw0ZUFERjtBQXFCTDRCLG1CQUFXO0FBQ1RDLG1CQUFTSjtBQURBO0FBckJOLE9BRFQsRUEwQkdLLElBMUJILENBMEJRLGlCQUFjO0FBQUEsWUFBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNsQixZQUFJQSxLQUFLQyxPQUFULEVBQWtCO0FBQ2hCLGNBQUlDLHNCQUFvQkYsS0FBS0MsT0FBTCxDQUFhRSxnQkFBakMsQ0FBSixFQUEwRDtBQUN4RFgsb0JBQVEsRUFBRVgsS0FBS21CLEtBQUtDLE9BQUwsQ0FBYXBCLEdBQXBCLEVBQXlCQyxLQUFLa0IsS0FBS0MsT0FBTCxDQUFhbkIsR0FBM0MsRUFBUjtBQUNEO0FBQ0Y7QUFDRixPQWhDSDtBQWlDRDtBQUNGLEdBckNlO0FBQUEsQ0FBaEI7O1lBa0RVLDZCQUFNLE1BQUssTUFBWCxHOztBQVpWLGVBQWU7QUFDYnNCLFFBQU0sdUJBRE87QUFFYkMsVUFBUSxJQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLGNBSk07QUFLYkMsWUFBVSxXQUxHO0FBTWJDLGFBQVd0QyxZQU5FO0FBT2J1QyxXQUFTLENBQ1A7QUFDRUMsYUFBUztBQUFBLHdCQUFtQmhDLFFBQVEsT0FBUixJQUFtQixVQUFuQixHQUFnQyxRQUFuRDtBQUFBLEtBRFg7QUFFRThCLGVBQVd2QyxXQUFXO0FBQUEsVUFBR3NCLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFVBQVliLE9BQVosU0FBWUEsT0FBWjtBQUFBLFVBQXFCYyxNQUFyQixTQUFxQkEsTUFBckI7QUFBQSxVQUFnQ0gsQ0FBaEM7O0FBQUEsYUFDcEI7QUFBQTtBQUFBLFVBQU0sU0FBU0MsUUFBUUMsT0FBUixFQUFpQmIsT0FBakIsRUFBMEJjLE1BQTFCLENBQWY7QUFBQTtBQUFBLE9BRG9CO0FBQUEsS0FBWCxDQUZiO0FBT0VtQixZQUFRLGtCQUFNLENBQUU7QUFQbEIsR0FETztBQVBJLENBQWYiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvYmxvY2tzL21hcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTWFwcyBmcm9tICdvbHltcC1nb29nbGUvbWFwcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5jb25zdCBNYXBDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6IDMwMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9KSxcbiAgKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBnZXREYXRhLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLmF0dHJpYnV0ZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPE1hcHNcbiAgICAgICAgY2VudGVyPXt7XG4gICAgICAgICAgbGF0OiBnZXREYXRhKCdsYXQnLCA1OS43MjQ0NjUpLFxuICAgICAgICAgIGxuZzogZ2V0RGF0YSgnbG5nJywgMzAuMDgwMTIxKSxcbiAgICAgICAgfX1cbiAgICAgICAgem9vbT17MTV9XG4gICAgICAgIG9wdGlvbnM9eygpID0+ICh7XG4gICAgICAgICAgcGFuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgIHpvb21Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgZ2VzdHVyZUhhbmRsaW5nOiAnbm9uZScsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8TWFwcy5NYXJrZXJcbiAgICAgICAgICBsYXQ9e2dldERhdGEoJ2xhdCcsIDU5LjcyNDQ2NSl9XG4gICAgICAgICAgbG5nPXtnZXREYXRhKCdsbmcnLCAzMC4wODAxMjEpfVxuICAgICAgICAvPlxuICAgICAgPC9NYXBzPlxuICAgIDwvZGl2PlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3Qgb25DbGljayA9IChzZXREYXRhLCBnZXREYXRhLCBjbGllbnQpID0+ICgpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBwcm9tcHQoJ0FkcmVzc2UnLCAnJyk7XG4gIGlmICh2YWx1ZSkge1xuICAgIGNsaWVudFxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGdxbChgXG4gICAgICAgIHF1ZXJ5IGdlb2NvZGUoJGFkZHJlc3M6IFN0cmluZyEpIHtcbiAgICAgICAgICBnZW9jb2RlKGFkZHJlc3M6ICRhZGRyZXNzLCByZWdpb246IFwiREVcIiwgbGFuZ3VhZ2U6IFwiREVcIikge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHN0cmVldE51bWJlclxuICAgICAgICAgICAgcm91dGVcbiAgICAgICAgICAgIGxvY2FsaXR5XG4gICAgICAgICAgICBhZG1pbmlzdHJhdGl2ZUFyZWFMZXZlbDFcbiAgICAgICAgICAgIGFkbWluaXN0cmF0aXZlQXJlYUxldmVsMlxuICAgICAgICAgICAgY291bnRyeVxuICAgICAgICAgICAgcG9zdGFsQ29kZVxuICAgICAgICAgICAgZm9ybWF0dGVkQWRkcmVzc1xuICAgICAgICAgICAgbGF0XG4gICAgICAgICAgICBsbmdcbiAgICAgICAgICAgIGxvY2F0aW9uVHlwZVxuICAgICAgICAgICAgcGFydGlhbE1hdGNoXG4gICAgICAgICAgICB0eXBlc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCksXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGFkZHJlc3M6IHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5nZW9jb2RlKSB7XG4gICAgICAgICAgaWYgKGNvbmZpcm0oYEFkcmVzc2U6ICR7ZGF0YS5nZW9jb2RlLmZvcm1hdHRlZEFkZHJlc3N9YCkpIHtcbiAgICAgICAgICAgIHNldERhdGEoeyBsYXQ6IGRhdGEuZ2VvY29kZS5sYXQsIGxuZzogZGF0YS5nZW9jb2RlLmxuZyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnUGFnZXMuTWVkaWEuTWFwc0Jsb2NrJyxcbiAgaXNWb2lkOiB0cnVlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ0dvb2dsZS1LYXJ0ZScsXG4gIGNhdGVnb3J5OiAnU29uc3RpZ2VzJyxcbiAgY29tcG9uZW50OiBNYXBDb250YWluZXIsXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICB0b29sdGlwOiBnZXREYXRhID0+IGBCaWxkICR7Z2V0RGF0YSgndmFsdWUnKSA/ICd3ZWNoc2VsbicgOiAnd8OkaGxlbid9YCxcbiAgICAgIGNvbXBvbmVudDogd2l0aEFwb2xsbygoeyBzZXREYXRhLCBnZXREYXRhLCBjbGllbnQsIC4uLnAgfSkgPT4gKFxuICAgICAgICA8c3BhbiBvbkNsaWNrPXtvbkNsaWNrKHNldERhdGEsIGdldERhdGEsIGNsaWVudCl9PlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJmbGFnXCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSksXG4gICAgICB0b2dnbGU6ICgpID0+IHt9LFxuICAgIH0sXG4gIF0sXG59O1xuIl19
