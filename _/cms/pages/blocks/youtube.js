'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _faFilm = require('olymp-icons/lib/fa-film');

var _faFilm2 = _interopRequireDefault(_faFilm);

var _faPlus = require('olymp-icons/lib/fa-plus');

var _faPlus2 = _interopRequireDefault(_faPlus);

var _faMinus = require('olymp-icons/lib/fa-minus');

var _faMinus2 = _interopRequireDefault(_faMinus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref3 = _react2.default.createElement(
  'span',
  null,
  'URL angeben'
);

var YoutubeContainer = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      getData = _ref.getData;
  return {
    width: 10 * getData('size', 10) + '%',
    position: 'relative',
    display: 'block',
    marginX: 'auto'
  };
}, function (_ref2) {
  var attributes = _ref2.attributes,
      className = _ref2.className,
      getData = _ref2.getData,
      setActive = _ref2.setActive,
      children = _ref2.children;
  return _react2.default.createElement(
    'div',
    _extends({ onMouseEnter: setActive, className: className }, attributes),
    children,
    getData('href') ? _react2.default.createElement('iframe', {
      title: 'Unser Video',
      width: '100%',
      height: 100 + getData('size', 10) * 20,
      src: getData('href'),
      frameBorder: '0',
      allowFullScreen: true
    }) : _ref3
  );
}, function (p) {
  return Object.keys(p);
});

exports.default = {
  type: 'Pages.Media.YoutubeBlock',
  isVoid: true,
  kind: 'block',
  label: 'Youtube',
  category: 'Sonstiges',
  component: YoutubeContainer,
  actions: [{
    label: _react2.default.createElement(_faFilm2.default, null),
    tooltip: 'URL',
    toggle: function toggle(_ref4) {
      var setData = _ref4.setData,
          getData = _ref4.getData;

      var href = window.prompt('Link', getData('href'));
      if (href) {
        setData({ href: href });
      }
    }
  }, {
    label: _react2.default.createElement(_faPlus2.default, null),
    tooltip: 'Größer',
    toggle: function toggle(_ref5) {
      var setData = _ref5.setData,
          getData = _ref5.getData;

      var size = getData('size', 10);
      setData({
        size: size < 10 ? size + 1 : 10
      });
    }
  }, {
    label: _react2.default.createElement(_faMinus2.default, null),
    tooltip: 'Kleiner',
    toggle: function toggle(_ref6) {
      var setData = _ref6.setData,
          getData = _ref6.getData;

      var size = getData('size', 10);
      setData({
        size: size > 1 ? size - 1 : 1
      });
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MveW91dHViZS5lczYiXSwibmFtZXMiOlsiWW91dHViZUNvbnRhaW5lciIsInRoZW1lIiwiZ2V0RGF0YSIsIndpZHRoIiwicG9zaXRpb24iLCJkaXNwbGF5IiwibWFyZ2luWCIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJzZXRBY3RpdmUiLCJjaGlsZHJlbiIsIk9iamVjdCIsImtleXMiLCJwIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiY29tcG9uZW50IiwiYWN0aW9ucyIsInRvb2x0aXAiLCJ0b2dnbGUiLCJzZXREYXRhIiwiaHJlZiIsIndpbmRvdyIsInByb21wdCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztZQXVCUTtBQUFBO0FBQUE7QUFBQTtBQUFBLEM7O0FBcEJSLElBQU1BLG1CQUFtQixnQ0FDdkI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxTQUF5QjtBQUN2QkMsV0FBVSxLQUFLRCxRQUFRLE1BQVIsRUFBZ0IsRUFBaEIsQ0FBZixNQUR1QjtBQUV2QkUsY0FBVSxVQUZhO0FBR3ZCQyxhQUFTLE9BSGM7QUFJdkJDLGFBQVM7QUFKYyxHQUF6QjtBQUFBLENBRHVCLEVBT3ZCO0FBQUEsTUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsTUFBZUMsU0FBZixTQUFlQSxTQUFmO0FBQUEsTUFBMEJOLE9BQTFCLFNBQTBCQSxPQUExQjtBQUFBLE1BQW1DTyxTQUFuQyxTQUFtQ0EsU0FBbkM7QUFBQSxNQUE4Q0MsUUFBOUMsU0FBOENBLFFBQTlDO0FBQUEsU0FDRTtBQUFBO0FBQUEsZUFBSyxjQUFjRCxTQUFuQixFQUE4QixXQUFXRCxTQUF6QyxJQUF3REQsVUFBeEQ7QUFDR0csWUFESDtBQUVHUixZQUFRLE1BQVIsSUFDQztBQUNFLGFBQU0sYUFEUjtBQUVFLGFBQU0sTUFGUjtBQUdFLGNBQVEsTUFBTUEsUUFBUSxNQUFSLEVBQWdCLEVBQWhCLElBQXNCLEVBSHRDO0FBSUUsV0FBS0EsUUFBUSxNQUFSLENBSlA7QUFLRSxtQkFBWSxHQUxkO0FBTUU7QUFORixNQUREO0FBRkgsR0FERjtBQUFBLENBUHVCLEVBd0J2QjtBQUFBLFNBQUtTLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0F4QnVCLENBQXpCOztrQkEyQmU7QUFDYkMsUUFBTSwwQkFETztBQUViQyxVQUFRLElBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sU0FKTTtBQUtiQyxZQUFVLFdBTEc7QUFNYkMsYUFBV25CLGdCQU5FO0FBT2JvQixXQUFTLENBQ1A7QUFDRUgsV0FBTyxxREFEVDtBQUVFSSxhQUFTLEtBRlg7QUFHRUMsWUFBUSx1QkFBMEI7QUFBQSxVQUF2QkMsT0FBdUIsU0FBdkJBLE9BQXVCO0FBQUEsVUFBZHJCLE9BQWMsU0FBZEEsT0FBYzs7QUFDaEMsVUFBTXNCLE9BQU9DLE9BQU9DLE1BQVAsQ0FBYyxNQUFkLEVBQXNCeEIsUUFBUSxNQUFSLENBQXRCLENBQWI7QUFDQSxVQUFJc0IsSUFBSixFQUFVO0FBQ1JELGdCQUFRLEVBQUVDLFVBQUYsRUFBUjtBQUNEO0FBQ0Y7QUFSSCxHQURPLEVBV1A7QUFDRVAsV0FBTyxxREFEVDtBQUVFSSxhQUFTLFFBRlg7QUFHRUMsWUFBUSx1QkFBMEI7QUFBQSxVQUF2QkMsT0FBdUIsU0FBdkJBLE9BQXVCO0FBQUEsVUFBZHJCLE9BQWMsU0FBZEEsT0FBYzs7QUFDaEMsVUFBTXlCLE9BQU96QixRQUFRLE1BQVIsRUFBZ0IsRUFBaEIsQ0FBYjtBQUNBcUIsY0FBUTtBQUNOSSxjQUFNQSxPQUFPLEVBQVAsR0FBWUEsT0FBTyxDQUFuQixHQUF1QjtBQUR2QixPQUFSO0FBR0Q7QUFSSCxHQVhPLEVBcUJQO0FBQ0VWLFdBQU8sc0RBRFQ7QUFFRUksYUFBUyxTQUZYO0FBR0VDLFlBQVEsdUJBQTBCO0FBQUEsVUFBdkJDLE9BQXVCLFNBQXZCQSxPQUF1QjtBQUFBLFVBQWRyQixPQUFjLFNBQWRBLE9BQWM7O0FBQ2hDLFVBQU15QixPQUFPekIsUUFBUSxNQUFSLEVBQWdCLEVBQWhCLENBQWI7QUFDQXFCLGNBQVE7QUFDTkksY0FBTUEsT0FBTyxDQUFQLEdBQVdBLE9BQU8sQ0FBbEIsR0FBc0I7QUFEdEIsT0FBUjtBQUdEO0FBUkgsR0FyQk87QUFQSSxDIiwiZmlsZSI6ImNtcy9wYWdlcy9ibG9ja3MveW91dHViZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEZhRmlsbSwgRmFQbHVzLCBGYU1pbnVzIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuXG5jb25zdCBZb3V0dWJlQ29udGFpbmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgZ2V0RGF0YSB9KSA9PiAoe1xuICAgIHdpZHRoOiBgJHsxMCAqIGdldERhdGEoJ3NpemUnLCAxMCl9JWAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW5YOiAnYXV0bycsXG4gIH0pLFxuICAoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGdldERhdGEsIHNldEFjdGl2ZSwgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxkaXYgb25Nb3VzZUVudGVyPXtzZXRBY3RpdmV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4uYXR0cmlidXRlc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7Z2V0RGF0YSgnaHJlZicpID8gKFxuICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgdGl0bGU9XCJVbnNlciBWaWRlb1wiXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9ezEwMCArIGdldERhdGEoJ3NpemUnLCAxMCkgKiAyMH1cbiAgICAgICAgICBzcmM9e2dldERhdGEoJ2hyZWYnKX1cbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4+VVJMIGFuZ2ViZW48L3NwYW4+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnUGFnZXMuTWVkaWEuWW91dHViZUJsb2NrJyxcbiAgaXNWb2lkOiB0cnVlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ1lvdXR1YmUnLFxuICBjYXRlZ29yeTogJ1NvbnN0aWdlcycsXG4gIGNvbXBvbmVudDogWW91dHViZUNvbnRhaW5lcixcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFGaWxtIC8+LFxuICAgICAgdG9vbHRpcDogJ1VSTCcsXG4gICAgICB0b2dnbGU6ICh7IHNldERhdGEsIGdldERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gd2luZG93LnByb21wdCgnTGluaycsIGdldERhdGEoJ2hyZWYnKSk7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgc2V0RGF0YSh7IGhyZWYgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogPEZhUGx1cyAvPixcbiAgICAgIHRvb2x0aXA6ICdHcsO2w59lcicsXG4gICAgICB0b2dnbGU6ICh7IHNldERhdGEsIGdldERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBzaXplID0gZ2V0RGF0YSgnc2l6ZScsIDEwKTtcbiAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgc2l6ZTogc2l6ZSA8IDEwID8gc2l6ZSArIDEgOiAxMCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYU1pbnVzIC8+LFxuICAgICAgdG9vbHRpcDogJ0tsZWluZXInLFxuICAgICAgdG9nZ2xlOiAoeyBzZXREYXRhLCBnZXREYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdldERhdGEoJ3NpemUnLCAxMCk7XG4gICAgICAgIHNldERhdGEoe1xuICAgICAgICAgIHNpemU6IHNpemUgPiAxID8gc2l6ZSAtIDEgOiAxLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=
