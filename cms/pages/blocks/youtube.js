var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { createComponent } from 'olymp-fela';
import FaFilm from 'olymp-icons/lib/fa-film';
import FaPlus from 'olymp-icons/lib/fa-plus';
import FaMinus from 'olymp-icons/lib/fa-minus';

var _ref3 = React.createElement(
  'span',
  null,
  'URL angeben'
);

var YoutubeContainer = createComponent(function (_ref) {
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
  return React.createElement(
    'div',
    _extends({ onMouseEnter: setActive, className: className }, attributes),
    children,
    getData('href') ? React.createElement('iframe', {
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

export default {
  type: 'Pages.Media.YoutubeBlock',
  isVoid: true,
  kind: 'block',
  label: 'Youtube',
  category: 'Sonstiges',
  component: YoutubeContainer,
  actions: [{
    label: React.createElement(FaFilm, null),
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
    label: React.createElement(FaPlus, null),
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
    label: React.createElement(FaMinus, null),
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy95b3V0dWJlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIllvdXR1YmVDb250YWluZXIiLCJ0aGVtZSIsImdldERhdGEiLCJ3aWR0aCIsInBvc2l0aW9uIiwiZGlzcGxheSIsIm1hcmdpblgiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwic2V0QWN0aXZlIiwiY2hpbGRyZW4iLCJPYmplY3QiLCJrZXlzIiwicCIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJjYXRlZ29yeSIsImNvbXBvbmVudCIsImFjdGlvbnMiLCJ0b29sdGlwIiwidG9nZ2xlIiwic2V0RGF0YSIsImhyZWYiLCJ3aW5kb3ciLCJwcm9tcHQiLCJzaXplIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOzs7OztZQXVCUTtBQUFBO0FBQUE7QUFBQTtBQUFBLEM7O0FBcEJSLElBQU1DLG1CQUFtQkQsZ0JBQ3ZCO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsU0FBeUI7QUFDdkJDLFdBQVUsS0FBS0QsUUFBUSxNQUFSLEVBQWdCLEVBQWhCLENBQWYsTUFEdUI7QUFFdkJFLGNBQVUsVUFGYTtBQUd2QkMsYUFBUyxPQUhjO0FBSXZCQyxhQUFTO0FBSmMsR0FBekI7QUFBQSxDQUR1QixFQU92QjtBQUFBLE1BQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLE1BQWVDLFNBQWYsU0FBZUEsU0FBZjtBQUFBLE1BQTBCTixPQUExQixTQUEwQkEsT0FBMUI7QUFBQSxNQUFtQ08sU0FBbkMsU0FBbUNBLFNBQW5DO0FBQUEsTUFBOENDLFFBQTlDLFNBQThDQSxRQUE5QztBQUFBLFNBQ0U7QUFBQTtBQUFBLGVBQUssY0FBY0QsU0FBbkIsRUFBOEIsV0FBV0QsU0FBekMsSUFBd0RELFVBQXhEO0FBQ0dHLFlBREg7QUFFR1IsWUFBUSxNQUFSLElBQ0M7QUFDRSxhQUFNLGFBRFI7QUFFRSxhQUFNLE1BRlI7QUFHRSxjQUFRLE1BQU1BLFFBQVEsTUFBUixFQUFnQixFQUFoQixJQUFzQixFQUh0QztBQUlFLFdBQUtBLFFBQVEsTUFBUixDQUpQO0FBS0UsbUJBQVksR0FMZDtBQU1FO0FBTkYsTUFERDtBQUZILEdBREY7QUFBQSxDQVB1QixFQXdCdkI7QUFBQSxTQUFLUyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBeEJ1QixDQUF6Qjs7QUEyQkEsZUFBZTtBQUNiQyxRQUFNLDBCQURPO0FBRWJDLFVBQVEsSUFGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxTQUpNO0FBS2JDLFlBQVUsV0FMRztBQU1iQyxhQUFXbkIsZ0JBTkU7QUFPYm9CLFdBQVMsQ0FDUDtBQUNFSCxXQUFPLG9CQUFDLE1BQUQsT0FEVDtBQUVFSSxhQUFTLEtBRlg7QUFHRUMsWUFBUSx1QkFBMEI7QUFBQSxVQUF2QkMsT0FBdUIsU0FBdkJBLE9BQXVCO0FBQUEsVUFBZHJCLE9BQWMsU0FBZEEsT0FBYzs7QUFDaEMsVUFBTXNCLE9BQU9DLE9BQU9DLE1BQVAsQ0FBYyxNQUFkLEVBQXNCeEIsUUFBUSxNQUFSLENBQXRCLENBQWI7QUFDQSxVQUFJc0IsSUFBSixFQUFVO0FBQ1JELGdCQUFRLEVBQUVDLFVBQUYsRUFBUjtBQUNEO0FBQ0Y7QUFSSCxHQURPLEVBV1A7QUFDRVAsV0FBTyxvQkFBQyxNQUFELE9BRFQ7QUFFRUksYUFBUyxRQUZYO0FBR0VDLFlBQVEsdUJBQTBCO0FBQUEsVUFBdkJDLE9BQXVCLFNBQXZCQSxPQUF1QjtBQUFBLFVBQWRyQixPQUFjLFNBQWRBLE9BQWM7O0FBQ2hDLFVBQU15QixPQUFPekIsUUFBUSxNQUFSLEVBQWdCLEVBQWhCLENBQWI7QUFDQXFCLGNBQVE7QUFDTkksY0FBTUEsT0FBTyxFQUFQLEdBQVlBLE9BQU8sQ0FBbkIsR0FBdUI7QUFEdkIsT0FBUjtBQUdEO0FBUkgsR0FYTyxFQXFCUDtBQUNFVixXQUFPLG9CQUFDLE9BQUQsT0FEVDtBQUVFSSxhQUFTLFNBRlg7QUFHRUMsWUFBUSx1QkFBMEI7QUFBQSxVQUF2QkMsT0FBdUIsU0FBdkJBLE9BQXVCO0FBQUEsVUFBZHJCLE9BQWMsU0FBZEEsT0FBYzs7QUFDaEMsVUFBTXlCLE9BQU96QixRQUFRLE1BQVIsRUFBZ0IsRUFBaEIsQ0FBYjtBQUNBcUIsY0FBUTtBQUNOSSxjQUFNQSxPQUFPLENBQVAsR0FBV0EsT0FBTyxDQUFsQixHQUFzQjtBQUR0QixPQUFSO0FBR0Q7QUFSSCxHQXJCTztBQVBJLENBQWYiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvYmxvY2tzL3lvdXR1YmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBGYUZpbG0sIEZhUGx1cywgRmFNaW51cyB9IGZyb20gJ29seW1wLWljb25zJztcblxuY29uc3QgWW91dHViZUNvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGdldERhdGEgfSkgPT4gKHtcbiAgICB3aWR0aDogYCR7MTAgKiBnZXREYXRhKCdzaXplJywgMTApfSVgLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luWDogJ2F1dG8nLFxuICB9KSxcbiAgKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBnZXREYXRhLCBzZXRBY3RpdmUsIGNoaWxkcmVuIH0pID0+IChcbiAgICA8ZGl2IG9uTW91c2VFbnRlcj17c2V0QWN0aXZlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLmF0dHJpYnV0ZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAge2dldERhdGEoJ2hyZWYnKSA/IChcbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIHRpdGxlPVwiVW5zZXIgVmlkZW9cIlxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgaGVpZ2h0PXsxMDAgKyBnZXREYXRhKCdzaXplJywgMTApICogMjB9XG4gICAgICAgICAgc3JjPXtnZXREYXRhKCdocmVmJyl9XG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuPlVSTCBhbmdlYmVuPC9zcGFuPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ1BhZ2VzLk1lZGlhLllvdXR1YmVCbG9jaycsXG4gIGlzVm9pZDogdHJ1ZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdZb3V0dWJlJyxcbiAgY2F0ZWdvcnk6ICdTb25zdGlnZXMnLFxuICBjb21wb25lbnQ6IFlvdXR1YmVDb250YWluZXIsXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogPEZhRmlsbSAvPixcbiAgICAgIHRvb2x0aXA6ICdVUkwnLFxuICAgICAgdG9nZ2xlOiAoeyBzZXREYXRhLCBnZXREYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IHdpbmRvdy5wcm9tcHQoJ0xpbmsnLCBnZXREYXRhKCdocmVmJykpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIHNldERhdGEoeyBocmVmIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYVBsdXMgLz4sXG4gICAgICB0b29sdGlwOiAnR3LDtsOfZXInLFxuICAgICAgdG9nZ2xlOiAoeyBzZXREYXRhLCBnZXREYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdldERhdGEoJ3NpemUnLCAxMCk7XG4gICAgICAgIHNldERhdGEoe1xuICAgICAgICAgIHNpemU6IHNpemUgPCAxMCA/IHNpemUgKyAxIDogMTAsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFNaW51cyAvPixcbiAgICAgIHRvb2x0aXA6ICdLbGVpbmVyJyxcbiAgICAgIHRvZ2dsZTogKHsgc2V0RGF0YSwgZ2V0RGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnZXREYXRhKCdzaXplJywgMTApO1xuICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICBzaXplOiBzaXplID4gMSA/IHNpemUgLSAxIDogMSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuIl19
