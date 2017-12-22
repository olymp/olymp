var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children } from 'react';
import { createComponent } from 'react-fela';
import ContentLoader from './content';
import Container from '../container';
import Grid from '../grid';

// const loaderSchema2 = `450,[c[m5[100,200,400]]g]`
var Panel = createComponent(function (_ref) {
  var height = _ref.height,
      width = _ref.width,
      pad = _ref.pad,
      theme = _ref.theme;
  return {
    height: height,
    width: width,
    paddingRight: pad ? theme.space3 : 0,
    marginBottom: theme.space3
  };
}, 'div', []);

var _ref4 = React.createElement(ContentLoader, { isLoading: true });

var _ref5 = React.createElement(ContentLoader, { isLoading: true });

var SchemaLoaderItem = function SchemaLoaderItem(_ref2) {
  var height = _ref2.height,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? '100%' : _ref2$width,
      grid = _ref2.grid,
      children = _ref2.children,
      size = _ref2.size;

  var inner = void 0;
  if (grid) {
    inner = React.createElement(
      Grid,
      { height: '100%' },
      grid.map(function (_ref3, i) {
        var children = _ref3.children,
            item = _objectWithoutProperties(_ref3, ['children']);

        return React.createElement(
          Grid.Item,
          _extends({ key: i, height: '100%' }, item),
          React.createElement(
            Panel,
            { height: '100%', width: '100%', pad: true },
            children ? children.map(function (child, i) {
              return React.createElement(
                Panel,
                { key: i },
                React.createElement(ContentLoader, _extends({ isLoading: true }, child))
              );
            }) : _ref4
          )
        );
      })
    );
  } else if (children) {
    inner = children.map(function (child, i) {
      return React.createElement(
        Panel,
        { key: i },
        React.createElement(ContentLoader, _extends({ isLoading: true }, child))
      );
    });
  } else {
    inner = _ref5;
  }

  if (width === 'container') {
    return React.createElement(
      Container,
      { height: height, size: size },
      React.createElement(
        Panel,
        { height: '100%', width: '100%' },
        inner
      )
    );
  }
  return React.createElement(
    Panel,
    { height: height, width: width },
    inner
  );
};

var cache = {};
export default (function (_ref6) {
  var schema = _ref6.schema,
      isLoading = _ref6.isLoading,
      children = _ref6.children;

  if (isLoading) {
    var components = schema.map(function (item, i) {
      return React.createElement(SchemaLoaderItem, _extends({ key: i }, item));
    });
    return React.createElement(
      'div',
      null,
      components
    );
  }
  if (children) {
    return Children.only(children);
  }
  return null;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbG9hZGVyL3NjaGVtYS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNyZWF0ZUNvbXBvbmVudCIsIkNvbnRlbnRMb2FkZXIiLCJDb250YWluZXIiLCJHcmlkIiwiUGFuZWwiLCJoZWlnaHQiLCJ3aWR0aCIsInBhZCIsInRoZW1lIiwicGFkZGluZ1JpZ2h0Iiwic3BhY2UzIiwibWFyZ2luQm90dG9tIiwiU2NoZW1hTG9hZGVySXRlbSIsImdyaWQiLCJjaGlsZHJlbiIsInNpemUiLCJpbm5lciIsIm1hcCIsImkiLCJpdGVtIiwiY2hpbGQiLCJjYWNoZSIsInNjaGVtYSIsImlzTG9hZGluZyIsImNvbXBvbmVudHMiLCJvbmx5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsUUFBZ0MsT0FBaEM7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixXQUExQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFNBQWpCOztBQUdBO0FBQ0EsSUFBTUMsUUFBUUosZ0JBQ1o7QUFBQSxNQUFHSyxNQUFILFFBQUdBLE1BQUg7QUFBQSxNQUFXQyxLQUFYLFFBQVdBLEtBQVg7QUFBQSxNQUFrQkMsR0FBbEIsUUFBa0JBLEdBQWxCO0FBQUEsTUFBdUJDLEtBQXZCLFFBQXVCQSxLQUF2QjtBQUFBLFNBQW9DO0FBQ2xDSCxrQkFEa0M7QUFFbENDLGdCQUZrQztBQUdsQ0csa0JBQWNGLE1BQU1DLE1BQU1FLE1BQVosR0FBcUIsQ0FIRDtBQUlsQ0Msa0JBQWNILE1BQU1FO0FBSmMsR0FBcEM7QUFBQSxDQURZLEVBT1osS0FQWSxFQVFaLEVBUlksQ0FBZDs7WUF5QmtCLG9CQUFDLGFBQUQsSUFBZSxlQUFmLEc7O1lBYU4sb0JBQUMsYUFBRCxJQUFlLGVBQWYsRzs7QUEzQlosSUFBTUUsbUJBQW1CLFNBQW5CQSxnQkFBbUIsUUFBc0Q7QUFBQSxNQUFuRFAsTUFBbUQsU0FBbkRBLE1BQW1EO0FBQUEsMEJBQTNDQyxLQUEyQztBQUFBLE1BQTNDQSxLQUEyQywrQkFBbkMsTUFBbUM7QUFBQSxNQUEzQk8sSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsTUFBckJDLFFBQXFCLFNBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFDN0UsTUFBSUMsY0FBSjtBQUNBLE1BQUlILElBQUosRUFBVTtBQUNSRyxZQUNFO0FBQUMsVUFBRDtBQUFBLFFBQU0sUUFBTyxNQUFiO0FBQ0dILFdBQUtJLEdBQUwsQ0FBUyxpQkFBd0JDLENBQXhCO0FBQUEsWUFBR0osUUFBSCxTQUFHQSxRQUFIO0FBQUEsWUFBZ0JLLElBQWhCOztBQUFBLGVBQ1A7QUFBQyxjQUFELENBQU0sSUFBTjtBQUFBLHFCQUFXLEtBQUtELENBQWhCLEVBQW1CLFFBQU8sTUFBMUIsSUFBcUNDLElBQXJDO0FBQ0M7QUFBQyxpQkFBRDtBQUFBLGNBQU8sUUFBTyxNQUFkLEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsU0FBbEM7QUFDR0wsdUJBQ0dBLFNBQVNHLEdBQVQsQ0FBYSxVQUFDRyxLQUFELEVBQVFGLENBQVI7QUFBQSxxQkFDWjtBQUFDLHFCQUFEO0FBQUEsa0JBQU8sS0FBS0EsQ0FBWjtBQUNDLG9DQUFDLGFBQUQsYUFBZSxlQUFmLElBQTZCRSxLQUE3QjtBQURELGVBRFk7QUFBQSxhQUFiLENBREg7QUFESDtBQURELFNBRE87QUFBQSxPQUFUO0FBREgsS0FERjtBQWlCRCxHQWxCRCxNQWtCTyxJQUFJTixRQUFKLEVBQWM7QUFDbkJFLFlBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFDRyxLQUFELEVBQVFGLENBQVI7QUFBQSxhQUNsQjtBQUFDLGFBQUQ7QUFBQSxVQUFPLEtBQUtBLENBQVo7QUFDQyw0QkFBQyxhQUFELGFBQWUsZUFBZixJQUE2QkUsS0FBN0I7QUFERCxPQURrQjtBQUFBLEtBQWIsQ0FBUjtBQUtELEdBTk0sTUFNQTtBQUNMSjtBQUNEOztBQUVELE1BQUlWLFVBQVUsV0FBZCxFQUEyQjtBQUN6QixXQUNFO0FBQUMsZUFBRDtBQUFBLFFBQVcsUUFBUUQsTUFBbkIsRUFBMkIsTUFBTVUsSUFBakM7QUFDRTtBQUFDLGFBQUQ7QUFBQSxVQUFPLFFBQU8sTUFBZCxFQUFxQixPQUFNLE1BQTNCO0FBQ0dDO0FBREg7QUFERixLQURGO0FBT0Q7QUFDRCxTQUNFO0FBQUMsU0FBRDtBQUFBLE1BQU8sUUFBUVgsTUFBZixFQUF1QixPQUFPQyxLQUE5QjtBQUNHVTtBQURILEdBREY7QUFLRCxDQTVDRDs7QUE4Q0EsSUFBTUssUUFBUSxFQUFkO0FBQ0EsZ0JBQWUsaUJBQXFDO0FBQUEsTUFBbENDLE1BQWtDLFNBQWxDQSxNQUFrQztBQUFBLE1BQTFCQyxTQUEwQixTQUExQkEsU0FBMEI7QUFBQSxNQUFmVCxRQUFlLFNBQWZBLFFBQWU7O0FBQ2xELE1BQUlTLFNBQUosRUFBZTtBQUNiLFFBQU1DLGFBQWFGLE9BQU9MLEdBQVAsQ0FBVyxVQUFDRSxJQUFELEVBQU9ELENBQVA7QUFBQSxhQUM1QixvQkFBQyxnQkFBRCxhQUFrQixLQUFLQSxDQUF2QixJQUE4QkMsSUFBOUIsRUFENEI7QUFBQSxLQUFYLENBQW5CO0FBR0EsV0FBTztBQUFBO0FBQUE7QUFBTUs7QUFBTixLQUFQO0FBQ0Q7QUFDRCxNQUFJVixRQUFKLEVBQWM7QUFDWixXQUFPZixTQUFTMEIsSUFBVCxDQUFjWCxRQUFkLENBQVA7QUFDRDtBQUNELFNBQU8sSUFBUDtBQUNELENBWEQiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9sb2FkZXIvc2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgQ29udGVudExvYWRlciBmcm9tICcuL2NvbnRlbnQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi4vZ3JpZCc7XG5cblxuLy8gY29uc3QgbG9hZGVyU2NoZW1hMiA9IGA0NTAsW2NbbTVbMTAwLDIwMCw0MDBdXWddYFxuY29uc3QgUGFuZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGhlaWdodCwgd2lkdGgsIHBhZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBoZWlnaHQsXG4gICAgd2lkdGgsXG4gICAgcGFkZGluZ1JpZ2h0OiBwYWQgPyB0aGVtZS5zcGFjZTMgOiAwLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2UzLFxuICB9KSxcbiAgJ2RpdicsXG4gIFtdXG4pO1xuXG5jb25zdCBTY2hlbWFMb2FkZXJJdGVtID0gKHsgaGVpZ2h0LCB3aWR0aCA9ICcxMDAlJywgZ3JpZCwgY2hpbGRyZW4sIHNpemUgfSkgPT4ge1xuICBsZXQgaW5uZXI7XG4gIGlmIChncmlkKSB7XG4gICAgaW5uZXIgPSAoXG4gICAgICA8R3JpZCBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgIHtncmlkLm1hcCgoeyBjaGlsZHJlbiwgLi4uaXRlbSB9LCBpKSA9PlxuICAgICAgICAgICg8R3JpZC5JdGVtIGtleT17aX0gaGVpZ2h0PVwiMTAwJVwiIHsuLi5pdGVtfT5cbiAgICAgICAgICAgIDxQYW5lbCBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgcGFkPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW5cbiAgICAgICAgICAgICAgICA/IGNoaWxkcmVuLm1hcCgoY2hpbGQsIGkpID0+XG4gICAgICAgICAgICAgICAgICAoPFBhbmVsIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50TG9hZGVyIGlzTG9hZGluZyB7Li4uY2hpbGR9IC8+XG4gICAgICAgICAgICAgICAgICA8L1BhbmVsPilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiA8Q29udGVudExvYWRlciBpc0xvYWRpbmcgLz59XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgIDwvR3JpZC5JdGVtPilcbiAgICAgICAgKX1cbiAgICAgIDwvR3JpZD5cbiAgICApO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgaW5uZXIgPSBjaGlsZHJlbi5tYXAoKGNoaWxkLCBpKSA9PlxuICAgICAgKDxQYW5lbCBrZXk9e2l9PlxuICAgICAgICA8Q29udGVudExvYWRlciBpc0xvYWRpbmcgey4uLmNoaWxkfSAvPlxuICAgICAgPC9QYW5lbD4pXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpbm5lciA9IDxDb250ZW50TG9hZGVyIGlzTG9hZGluZyAvPjtcbiAgfVxuXG4gIGlmICh3aWR0aCA9PT0gJ2NvbnRhaW5lcicpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBoZWlnaHQ9e2hlaWdodH0gc2l6ZT17c2l6ZX0+XG4gICAgICAgIDxQYW5lbCBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAge2lubmVyfVxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxQYW5lbCBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgIHtpbm5lcn1cbiAgICA8L1BhbmVsPlxuICApO1xufTtcblxuY29uc3QgY2FjaGUgPSB7fTtcbmV4cG9ydCBkZWZhdWx0ICh7IHNjaGVtYSwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gc2NoZW1hLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgIDxTY2hlbWFMb2FkZXJJdGVtIGtleT17aX0gey4uLml0ZW19IC8+XG4gICAgKTtcbiAgICByZXR1cm4gPGRpdj57Y29tcG9uZW50c308L2Rpdj47XG4gIH1cbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbiJdfQ==
