var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { EditText, Carousel } from 'olymp-cloudinary';

var CarouselBlock = function CarouselBlock(_ref) {
  var getData = _ref.getData,
      className = _ref.className,
      children = _ref.children,
      attributes = _ref.attributes;
  return React.createElement(
    Carousel,
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

export default {
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

      return React.createElement(EditText, _extends({}, p, {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9jYXJvdXNlbC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJFZGl0VGV4dCIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxCbG9jayIsImdldERhdGEiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImF0dHJpYnV0ZXMiLCJ3aWR0aCIsImhlaWdodCIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJjYXRlZ29yeSIsImNvbXBvbmVudCIsImFjdGlvbnMiLCJzZXREYXRhIiwicCIsInZhbHVlIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLFFBQVQsRUFBbUJDLFFBQW5CLFFBQW1DLGtCQUFuQzs7QUFFQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsU0FBWixRQUFZQSxTQUFaO0FBQUEsTUFBdUJDLFFBQXZCLFFBQXVCQSxRQUF2QjtBQUFBLE1BQWlDQyxVQUFqQyxRQUFpQ0EsVUFBakM7QUFBQSxTQUNwQjtBQUFDLFlBQUQ7QUFBQTtBQUNFLGtCQUFZQSxVQURkO0FBRUUsaUJBQVdGLFNBRmI7QUFHRSxjQUFRLEdBSFY7QUFJRSxhQUFPRCxRQUFRLE9BQVIsRUFBaUIsQ0FDdEI7QUFDRUksZUFBTyxHQURUO0FBRUVDLGdCQUFRO0FBRlYsT0FEc0IsQ0FBakI7QUFKVDtBQVdHSDtBQVhILEdBRG9CO0FBQUEsQ0FBdEI7O0FBZ0JBLGVBQWU7QUFDYkksUUFBTSxVQURPO0FBRWJDLFVBQVEsSUFGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxZQUpNO0FBS2JDLFlBQVUsUUFMRztBQU1iQyxhQUFXWixhQU5FO0FBT2JhLFdBQVMsQ0FDUDtBQUNFRCxlQUFXO0FBQUEsVUFBR0UsT0FBSCxTQUFHQSxPQUFIO0FBQUEsVUFBWWIsT0FBWixTQUFZQSxPQUFaO0FBQUEsVUFBd0JjLENBQXhCOztBQUFBLGFBQ1Qsb0JBQUMsUUFBRCxlQUNNQSxDQUROO0FBRUUsa0JBQVU7QUFBQSxpQkFBU0QsUUFBUSxFQUFFRSxZQUFGLEVBQVIsQ0FBVDtBQUFBLFNBRlo7QUFHRSxlQUFPZixRQUFRLE9BQVIsRUFBaUIsRUFBakIsQ0FIVDtBQUlFO0FBSkYsU0FEUztBQUFBLEtBRGI7QUFTRWdCLFlBQVEsa0JBQU0sQ0FBRTtBQVRsQixHQURPO0FBUEksQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9ibG9ja3MvY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRWRpdFRleHQsIENhcm91c2VsIH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5cbmNvbnN0IENhcm91c2VsQmxvY2sgPSAoeyBnZXREYXRhLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBhdHRyaWJ1dGVzIH0pID0+IChcbiAgPENhcm91c2VsXG4gICAgYXR0cmlidXRlcz17YXR0cmlidXRlc31cbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICBoZWlnaHQ9ezQwMH1cbiAgICB2YWx1ZT17Z2V0RGF0YSgndmFsdWUnLCBbXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiA5NjAsXG4gICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgfSxcbiAgICBdKX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9DYXJvdXNlbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2Nhcm91c2VsJyxcbiAgaXNWb2lkOiB0cnVlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ0JpbGRlcnNob3cnLFxuICBjYXRlZ29yeTogJ0JpbGRlcicsXG4gIGNvbXBvbmVudDogQ2Fyb3VzZWxCbG9jayxcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIGNvbXBvbmVudDogKHsgc2V0RGF0YSwgZ2V0RGF0YSwgLi4ucCB9KSA9PiAoXG4gICAgICAgIDxFZGl0VGV4dFxuICAgICAgICAgIHsuLi5wfVxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXREYXRhKHsgdmFsdWUgfSl9XG4gICAgICAgICAgdmFsdWU9e2dldERhdGEoJ3ZhbHVlJywgW10pfVxuICAgICAgICAgIG11bHRpXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgdG9nZ2xlOiAoKSA9PiB7fSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==
