'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympCloudinary = require('olymp-cloudinary');

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

var _faPlus = require('olymp-icons/lib/fa-plus');

var _faPlus2 = _interopRequireDefault(_faPlus);

var _faMinus = require('olymp-icons/lib/fa-minus');

var _faMinus2 = _interopRequireDefault(_faMinus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getSrcSet = function getSrcSet(value, w) {
  return (0, _olympCloudinary.cloudinaryUrl)(value, {
    w: Math.floor(w)
  }) + ' ' + Math.floor(w) + 'w';
};

var Container = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingY: theme.space1,
    hasFlex: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    clearfix: true
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var ImageContainer = (0, _olympFela.createComponent)(function (_ref2) {
  var theme = _ref2.theme,
      size = _ref2.size;

  var style = {
    paddingRight: theme.space3,
    paddingBottom: theme.space1,
    float: 'left',
    width: 100 / size + '%',
    minWidth: 100 / size + '%',
    '> span': {
      width: '100%',
      fontSize: 12,
      fontStyle: 'italic',
      display: 'block',
      textAlign: 'center',
      padding: 0
    }
  };
  style[':nth-child(' + size + 'n)'] = { paddingRight: 0 };

  return style;
}, 'div', function (_ref3) {
  var size = _ref3.size,
      p = _objectWithoutProperties(_ref3, ['size']);

  return Object.keys(p);
});

var enhance = (0, _recompose.compose)((0, _recompose.withProps)(function (_ref4) {
  var getData = _ref4.getData;
  return {
    items: getData('value', [{
      width: 400,
      height: 300
    }, {
      width: 400,
      height: 300
    }, {
      width: 400,
      height: 300
    }])
  };
}), (0, _recompose.withPropsOnChange)(['xyz'], function (_ref5) {
  _objectDestructuringEmpty(_ref5);

  return {
    id: Math.random().toString(36).substr(2, 9)
  };
}));

var _ref7 = _react2.default.createElement(_olympCloudinary.Lightbox, null);

exports.default = {
  type: 'Pages.Media.Gallery',
  isVoid: true,
  kind: 'block',
  label: 'Galerie',
  category: 'Bilder',
  component: enhance(function (_ref6) {
    var getData = _ref6.getData,
        setActive = _ref6.setActive,
        className = _ref6.className,
        attributes = _ref6.attributes,
        children = _ref6.children,
        items = _ref6.items,
        id = _ref6.id;
    return _react2.default.createElement(
      _olympCloudinary.LightboxGallery,
      { gallery: id },
      _react2.default.createElement(
        Container,
        _extends({}, attributes, { className: 'gallery-block' }),
        children,
        _ref7,
        items.map(function (image, i) {
          return _react2.default.createElement(
            ImageContainer,
            { size: getData('size', 3), key: image.id || i },
            _react2.default.createElement(_olympCloudinary.LightboxImage, {
              className: className,
              onClick: setActive,
              width: '100%',
              value: image
            }),
            image.caption && _react2.default.createElement(
              'span',
              null,
              image.caption
            )
          );
        })
      )
    );
  }),
  styles: function styles(_ref8) {
    var getData = _ref8.getData;
    return {
      float: getData('float', 'none')
    };
  },
  actions: [{
    tooltip: function tooltip(getData) {
      return 'Bilder ' + (getData('value') ? 'wechseln' : 'wählen');
    },
    component: function component(_ref9) {
      var setData = _ref9.setData,
          getData = _ref9.getData,
          p = _objectWithoutProperties(_ref9, ['setData', 'getData']);

      return _react2.default.createElement(_olympCloudinary.EditText, _extends({}, p, {
        onChange: function onChange(value) {
          return console.log(value) || setData({ value: value });
        },
        value: getData('value', []),
        multi: true
      }));
    },
    toggle: function toggle() {}
  }, {
    label: _react2.default.createElement(_faPlus2.default, null),
    tooltip: 'Spalte hinzufügen',
    toggle: function toggle(_ref10) {
      var setData = _ref10.setData,
          getData = _ref10.getData;

      var size = getData('size', 3);
      setData({
        size: size < 8 ? size + 1 : 8
      });
    }
  }, {
    label: _react2.default.createElement(_faMinus2.default, null),
    tooltip: 'Spalte entfernen',
    toggle: function toggle(_ref11) {
      var setData = _ref11.setData,
          getData = _ref11.getData;

      var size = getData('size', 3);
      setData({
        size: size > 1 ? size - 1 : 1
      });
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvZ2FsbGVyeS5lczYiXSwibmFtZXMiOlsiZ2V0U3JjU2V0IiwidmFsdWUiLCJ3IiwiTWF0aCIsImZsb29yIiwiQ29udGFpbmVyIiwidGhlbWUiLCJwYWRkaW5nWSIsInNwYWNlMSIsImhhc0ZsZXgiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJjbGVhcmZpeCIsIk9iamVjdCIsImtleXMiLCJwIiwiSW1hZ2VDb250YWluZXIiLCJzaXplIiwic3R5bGUiLCJwYWRkaW5nUmlnaHQiLCJzcGFjZTMiLCJwYWRkaW5nQm90dG9tIiwiZmxvYXQiLCJ3aWR0aCIsIm1pbldpZHRoIiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiZW5oYW5jZSIsImdldERhdGEiLCJpdGVtcyIsImhlaWdodCIsImlkIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJzZXRBY3RpdmUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJtYXAiLCJpbWFnZSIsImkiLCJjYXB0aW9uIiwic3R5bGVzIiwiYWN0aW9ucyIsInRvb2x0aXAiLCJzZXREYXRhIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQU9BOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLFNBQ2Isb0NBQWNELEtBQWQsRUFBcUI7QUFDdEJDLE9BQUdDLEtBQUtDLEtBQUwsQ0FBV0YsQ0FBWDtBQURtQixHQUFyQixDQURhLFNBR1ZDLEtBQUtDLEtBQUwsQ0FBV0YsQ0FBWCxDQUhVO0FBQUEsQ0FBbEI7O0FBS0EsSUFBTUcsWUFBWSxnQ0FDaEI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7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a0JBRlg7QUFHRUksWUFBUSx3QkFBMEI7QUFBQSxVQUF2QkgsT0FBdUIsVUFBdkJBLE9BQXVCO0FBQUEsVUFBZHhCLE9BQWMsVUFBZEEsT0FBYzs7QUFDaEMsVUFBTWIsT0FBT2EsUUFBUSxNQUFSLEVBQWdCLENBQWhCLENBQWI7QUFDQXdCLGNBQVE7QUFDTnJDLGNBQU1BLE9BQU8sQ0FBUCxHQUFXQSxPQUFPLENBQWxCLEdBQXNCO0FBRHRCLE9BQVI7QUFHRDtBQVJILEdBdkJPO0FBOUJJLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIExpZ2h0Ym94LFxuICBMaWdodGJveEltYWdlLFxuICBFZGl0VGV4dCxcbiAgTGlnaHRib3hHYWxsZXJ5LFxuICBjbG91ZGluYXJ5VXJsLFxufSBmcm9tICdvbHltcC1jbG91ZGluYXJ5JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgd2l0aFByb3BzLCB3aXRoUHJvcHNPbkNoYW5nZSwgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBGYVBsdXMsIEZhTWludXMgfSBmcm9tICdvbHltcC1pY29ucyc7XG5cbmNvbnN0IGdldFNyY1NldCA9ICh2YWx1ZSwgdykgPT5cbiAgYCR7Y2xvdWRpbmFyeVVybCh2YWx1ZSwge1xuICAgIHc6IE1hdGguZmxvb3IodyksXG4gIH0pfSAke01hdGguZmxvb3Iodyl9d2A7XG5cbmNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UxLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgfSxcbiAgICBjbGVhcmZpeDogdHJ1ZSxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBzaXplIH0pID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2UzLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2UxLFxuICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgIHdpZHRoOiBgJHsxMDAgLyBzaXplfSVgLFxuICAgICAgbWluV2lkdGg6IGAkezEwMCAvIHNpemV9JWAsXG4gICAgICAnPiBzcGFuJzoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICB9LFxuICAgIH07XG4gICAgc3R5bGVbYDpudGgtY2hpbGQoJHtzaXplfW4pYF0gPSB7IHBhZGRpbmdSaWdodDogMCB9O1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9LFxuICAnZGl2JyxcbiAgKHsgc2l6ZSwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoKHsgZ2V0RGF0YSB9KSA9PiAoe1xuICAgIGl0ZW1zOiBnZXREYXRhKCd2YWx1ZScsIFtcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSkpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ3h5eiddLCAoe30pID0+ICh7XG4gICAgaWQ6IE1hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygzNilcbiAgICAgIC5zdWJzdHIoMiwgOSksXG4gIH0pKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ1BhZ2VzLk1lZGlhLkdhbGxlcnknLFxuICBpc1ZvaWQ6IHRydWUsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnR2FsZXJpZScsXG4gIGNhdGVnb3J5OiAnQmlsZGVyJyxcbiAgY29tcG9uZW50OiBlbmhhbmNlKFxuICAgICh7IGdldERhdGEsIHNldEFjdGl2ZSwgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgaXRlbXMsIGlkIH0pID0+IChcbiAgICAgIDxMaWdodGJveEdhbGxlcnkgZ2FsbGVyeT17aWR9PlxuICAgICAgICA8Q29udGFpbmVyIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9XCJnYWxsZXJ5LWJsb2NrXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxMaWdodGJveCAvPlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICA8SW1hZ2VDb250YWluZXIgc2l6ZT17Z2V0RGF0YSgnc2l6ZScsIDMpfSBrZXk9e2ltYWdlLmlkIHx8IGl9PlxuICAgICAgICAgICAgICA8TGlnaHRib3hJbWFnZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFjdGl2ZX1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2ltYWdlLmNhcHRpb24gJiYgPHNwYW4+e2ltYWdlLmNhcHRpb259PC9zcGFuPn1cbiAgICAgICAgICAgIDwvSW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MaWdodGJveEdhbGxlcnk+XG4gICAgKSxcbiAgKSxcbiAgc3R5bGVzOiAoeyBnZXREYXRhIH0pID0+ICh7XG4gICAgZmxvYXQ6IGdldERhdGEoJ2Zsb2F0JywgJ25vbmUnKSxcbiAgfSksXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICB0b29sdGlwOiBnZXREYXRhID0+IGBCaWxkZXIgJHtnZXREYXRhKCd2YWx1ZScpID8gJ3dlY2hzZWxuJyA6ICd3w6RobGVuJ31gLFxuICAgICAgY29tcG9uZW50OiAoeyBzZXREYXRhLCBnZXREYXRhLCAuLi5wIH0pID0+IChcbiAgICAgICAgPEVkaXRUZXh0XG4gICAgICAgICAgey4uLnB9XG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSB8fCBzZXREYXRhKHsgdmFsdWUgfSl9XG4gICAgICAgICAgdmFsdWU9e2dldERhdGEoJ3ZhbHVlJywgW10pfVxuICAgICAgICAgIG11bHRpXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgdG9nZ2xlOiAoKSA9PiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFQbHVzIC8+LFxuICAgICAgdG9vbHRpcDogJ1NwYWx0ZSBoaW56dWbDvGdlbicsXG4gICAgICB0b2dnbGU6ICh7IHNldERhdGEsIGdldERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBzaXplID0gZ2V0RGF0YSgnc2l6ZScsIDMpO1xuICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICBzaXplOiBzaXplIDwgOCA/IHNpemUgKyAxIDogOCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYU1pbnVzIC8+LFxuICAgICAgdG9vbHRpcDogJ1NwYWx0ZSBlbnRmZXJuZW4nLFxuICAgICAgdG9nZ2xlOiAoeyBzZXREYXRhLCBnZXREYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdldERhdGEoJ3NpemUnLCAzKTtcbiAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgc2l6ZTogc2l6ZSA+IDEgPyBzaXplIC0gMSA6IDEsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==
