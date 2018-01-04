'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _olympFela = require('olymp-fela');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _olympFela.createComponent)(function (_ref) {
  var side = _ref.side,
      width = _ref.width;
  return {
    position: 'relative',
    overflow: 'hidden',
    width: width || 300,
    // borderRight: side === 'left' && '1px solid rgb(233, 233, 233)',
    // borderLeft: side === 'right' && '1px solid rgb(233, 233, 233)',
    backgroundColor: 'rgba(0, 0, 0, 0.015)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    onBefore: {
      content: "'>'",
      position: 'absolute',
      top: '45%',
      right: side === 'left' && -26,
      left: side === 'right' && -26,
      fontSize: 30,
      fontWeight: 'bold',
      opacity: 0.2
    }
  };
}, 'div', function (_ref2) {
  var side = _ref2.side,
      p = _objectWithoutProperties(_ref2, ['side']);

  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2xpc3QvbGlzdC5lczYiXSwibmFtZXMiOlsic2lkZSIsIndpZHRoIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0Iiwib25CZWZvcmUiLCJjb250ZW50IiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwib3BhY2l0eSIsInAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztrQkFFZSxnQ0FDYjtBQUFBLE1BQUdBLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFNBQXNCO0FBQ3BCQyxjQUFVLFVBRFU7QUFFcEJDLGNBQVUsUUFGVTtBQUdwQkYsV0FBT0EsU0FBUyxHQUhJO0FBSXBCO0FBQ0E7QUFDQUcscUJBQWlCLHNCQU5HO0FBT3BCQyxhQUFTLE1BUFc7QUFRcEJDLG1CQUFlLFFBUks7QUFTcEJDLFlBQVEsTUFUWTtBQVVwQkMsY0FBVTtBQUNSQyxlQUFTLEtBREQ7QUFFUlAsZ0JBQVUsVUFGRjtBQUdSUSxXQUFLLEtBSEc7QUFJUkMsYUFBT1gsU0FBUyxNQUFULElBQW1CLENBQUMsRUFKbkI7QUFLUlksWUFBTVosU0FBUyxPQUFULElBQW9CLENBQUMsRUFMbkI7QUFNUmEsZ0JBQVUsRUFORjtBQU9SQyxrQkFBWSxNQVBKO0FBUVJDLGVBQVM7QUFSRDtBQVZVLEdBQXRCO0FBQUEsQ0FEYSxFQXNCYixLQXRCYSxFQXVCYjtBQUFBLE1BQUdmLElBQUgsU0FBR0EsSUFBSDtBQUFBLE1BQVlnQixDQUFaOztBQUFBLFNBQW9CQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBcEI7QUFBQSxDQXZCYSxDIiwiZmlsZSI6ImV4dGVybmFsL3VpL2xpc3QvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHNpZGUsIHdpZHRoIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdpZHRoOiB3aWR0aCB8fCAzMDAsXG4gICAgLy8gYm9yZGVyUmlnaHQ6IHNpZGUgPT09ICdsZWZ0JyAmJiAnMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKScsXG4gICAgLy8gYm9yZGVyTGVmdDogc2lkZSA9PT0gJ3JpZ2h0JyAmJiAnMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjAxNSknLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBvbkJlZm9yZToge1xuICAgICAgY29udGVudDogXCInPidcIixcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnNDUlJyxcbiAgICAgIHJpZ2h0OiBzaWRlID09PSAnbGVmdCcgJiYgLTI2LFxuICAgICAgbGVmdDogc2lkZSA9PT0gJ3JpZ2h0JyAmJiAtMjYsXG4gICAgICBmb250U2l6ZTogMzAsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBvcGFjaXR5OiAwLjIsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBzaWRlLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbiJdfQ==
