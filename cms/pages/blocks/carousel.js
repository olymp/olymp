'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympCloudinary = require('olymp-cloudinary');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CarouselBlock = function CarouselBlock(_ref) {
  var getData = _ref.getData,
      className = _ref.className,
      children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    _olympCloudinary.Carousel,
    {
      attributes: attributes,
      className: className,
      height: 400,
      value: getData('value', [{
        width: 960,
        height: 400
      }])
    },
    children
  );
};

exports.default = {
  type: 'carousel',
  isVoid: true,
  kind: 'block',
  label: 'Bildershow',
  category: 'Bilder',
  component: CarouselBlock,
  actions: [{
    component: function component(_ref2) {
      var setData = _ref2.setData,
          getData = _ref2.getData,
          p = _objectWithoutProperties(_ref2, ['setData', 'getData']);

      return _react2.default.createElement(_olympCloudinary.EditText, _extends({}, p, {
        onChange: function onChange(value) {
          return setData({ value: value });
        },
        value: getData('value', []),
        multi: true
      }));
    },
    toggle: function toggle() {}
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvY2Fyb3VzZWwuZXM2Il0sIm5hbWVzIjpbIkNhcm91c2VsQmxvY2siLCJnZXREYXRhIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhdHRyaWJ1dGVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJhY3Rpb25zIiwic2V0RGF0YSIsInAiLCJ2YWx1ZSIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsU0FBWixRQUFZQSxTQUFaO0FBQUEsTUFBdUJDLFFBQXZCLFFBQXVCQSxRQUF2QjtBQUFBLE1BQWlDQyxVQUFqQyxRQUFpQ0EsVUFBakM7QUFBQSxTQUNwQjtBQUFBO0FBQUE7QUFDRSxrQkFBWUEsVUFEZDtBQUVFLGlCQUFXRixTQUZiO0FBR0UsY0FBUSxHQUhWO0FBSUUsYUFBT0QsUUFBUSxPQUFSLEVBQWlCLENBQ3RCO0FBQ0VJLGVBQU8sR0FEVDtBQUVFQyxnQkFBUTtBQUZWLE9BRHNCLENBQWpCO0FBSlQ7QUFXR0g7QUFYSCxHQURvQjtBQUFBLENBQXRCOztrQkFnQmU7QUFDYkksUUFBTSxVQURPO0FBRWJDLFVBQVEsSUFGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxZQUpNO0FBS2JDLFlBQVUsUUFMRztBQU1iQyxhQUFXWixhQU5FO0FBT2JhLFdBQVMsQ0FDUDtBQUNFRCxlQUFXO0FBQUEsVUFBR0UsT0FBSCxTQUFHQSxPQUFIO0FBQUEsVUFBWWIsT0FBWixTQUFZQSxPQUFaO0FBQUEsVUFBd0JjLENBQXhCOztBQUFBLGFBQ1Qsc0VBQ01BLENBRE47QUFFRSxrQkFBVTtBQUFBLGlCQUFTRCxRQUFRLEVBQUVFLFlBQUYsRUFBUixDQUFUO0FBQUEsU0FGWjtBQUdFLGVBQU9mLFFBQVEsT0FBUixFQUFpQixFQUFqQixDQUhUO0FBSUU7QUFKRixTQURTO0FBQUEsS0FEYjtBQVNFZ0IsWUFBUSxrQkFBTSxDQUFFO0FBVGxCLEdBRE87QUFQSSxDIiwiZmlsZSI6ImNtcy9wYWdlcy9ibG9ja3MvY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRWRpdFRleHQsIENhcm91c2VsIH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5cbmNvbnN0IENhcm91c2VsQmxvY2sgPSAoeyBnZXREYXRhLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBhdHRyaWJ1dGVzIH0pID0+IChcbiAgPENhcm91c2VsXG4gICAgYXR0cmlidXRlcz17YXR0cmlidXRlc31cbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICBoZWlnaHQ9ezQwMH1cbiAgICB2YWx1ZT17Z2V0RGF0YSgndmFsdWUnLCBbXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiA5NjAsXG4gICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgfSxcbiAgICBdKX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9DYXJvdXNlbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2Nhcm91c2VsJyxcbiAgaXNWb2lkOiB0cnVlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ0JpbGRlcnNob3cnLFxuICBjYXRlZ29yeTogJ0JpbGRlcicsXG4gIGNvbXBvbmVudDogQ2Fyb3VzZWxCbG9jayxcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIGNvbXBvbmVudDogKHsgc2V0RGF0YSwgZ2V0RGF0YSwgLi4ucCB9KSA9PiAoXG4gICAgICAgIDxFZGl0VGV4dFxuICAgICAgICAgIHsuLi5wfVxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXREYXRhKHsgdmFsdWUgfSl9XG4gICAgICAgICAgdmFsdWU9e2dldERhdGEoJ3ZhbHVlJywgW10pfVxuICAgICAgICAgIG11bHRpXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgdG9nZ2xlOiAoKSA9PiB7fSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==
