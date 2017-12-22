var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { Lightbox, LightboxImage, EditText, LightboxGallery, cloudinaryUrl } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';
import { withProps, withPropsOnChange, compose } from 'recompose';
import FaPlus from 'olymp-icons/lib/fa-plus';
import FaMinus from 'olymp-icons/lib/fa-minus';


var getSrcSet = function getSrcSet(value, w) {
  return cloudinaryUrl(value, {
    w: Math.floor(w)
  }) + ' ' + Math.floor(w) + 'w';
};

var Container = createComponent(function (_ref) {
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

var ImageContainer = createComponent(function (_ref2) {
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

var enhance = compose(withProps(function (_ref4) {
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
}), withPropsOnChange(['xyz'], function (_ref5) {
  _objectDestructuringEmpty(_ref5);

  return {
    id: Math.random().toString(36).substr(2, 9)
  };
}));

var _ref7 = React.createElement(Lightbox, null);

export default {
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
    return React.createElement(
      LightboxGallery,
      { gallery: id },
      React.createElement(
        Container,
        _extends({}, attributes, { className: 'gallery-block' }),
        children,
        _ref7,
        items.map(function (image, i) {
          return React.createElement(
            ImageContainer,
            { size: getData('size', 3), key: image.id || i },
            React.createElement(LightboxImage, {
              className: className,
              onClick: setActive,
              width: '100%',
              value: image
            }),
            image.caption && React.createElement(
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

      return React.createElement(EditText, _extends({}, p, {
        onChange: function onChange(value) {
          return console.log(value) || setData({ value: value });
        },
        value: getData('value', []),
        multi: true
      }));
    },
    toggle: function toggle() {}
  }, {
    label: React.createElement(FaPlus, null),
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
    label: React.createElement(FaMinus, null),
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9nYWxsZXJ5LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpZ2h0Ym94IiwiTGlnaHRib3hJbWFnZSIsIkVkaXRUZXh0IiwiTGlnaHRib3hHYWxsZXJ5IiwiY2xvdWRpbmFyeVVybCIsImNyZWF0ZUNvbXBvbmVudCIsIndpdGhQcm9wcyIsIndpdGhQcm9wc09uQ2hhbmdlIiwiY29tcG9zZSIsImdldFNyY1NldCIsInZhbHVlIiwidyIsIk1hdGgiLCJmbG9vciIsIkNvbnRhaW5lciIsInRoZW1lIiwicGFkZGluZ1kiLCJzcGFjZTEiLCJoYXNGbGV4IiwiZGlzcGxheSIsImZsZXhXcmFwIiwiY2xlYXJmaXgiLCJPYmplY3QiLCJrZXlzIiwicCIsIkltYWdlQ29udGFpbmVyIiwic2l6ZSIsInN0eWxlIiwicGFkZGluZ1JpZ2h0Iiwic3BhY2UzIiwicGFkZGluZ0JvdHRvbSIsImZsb2F0Iiwid2lkdGgiLCJtaW5XaWR0aCIsImZvbnRTaXplIiwiZm9udFN0eWxlIiwidGV4dEFsaWduIiwicGFkZGluZyIsImVuaGFuY2UiLCJnZXREYXRhIiwiaXRlbXMiLCJoZWlnaHQiLCJpZCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiY29tcG9uZW50Iiwic2V0QWN0aXZlIiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwibWFwIiwiaW1hZ2UiLCJpIiwiY2FwdGlvbiIsInN0eWxlcyIsImFjdGlvbnMiLCJ0b29sdGlwIiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUNFQyxRQURGLEVBRUVDLGFBRkYsRUFHRUMsUUFIRixFQUlFQyxlQUpGLEVBS0VDLGFBTEYsUUFNTyxrQkFOUDtBQU9BLFNBQVNDLGVBQVQsUUFBZ0Ms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RTtBQUpGLFNBRFM7QUFBQSxLQUZiO0FBVUUyQixZQUFRLGtCQUFNLENBQUU7QUFWbEIsR0FETyxFQWFQO0FBQ0VqQixXQUFPLG9CQUFDLE1BQUQsT0FEVDtBQUVFYSxhQUFTLG1CQUZYO0FBR0VJLFlBQVEsd0JBQTBCO0FBQUEsVUFBdkJILE9BQXVCLFVBQXZCQSxPQUF1QjtBQUFBLFVBQWR4QixPQUFjLFVBQWRBLE9BQWM7O0FBQ2hDLFVBQU1iLE9BQU9hLFFBQVEsTUFBUixFQUFnQixDQUFoQixDQUFiO0FBQ0F3QixjQUFRO0FBQ05yQyxjQUFNQSxPQUFPLENBQVAsR0FBV0EsT0FBTyxDQUFsQixHQUFzQjtBQUR0QixPQUFSO0FBR0Q7QUFSSCxHQWJPLEVBdUJQO0FBQ0V1QixXQUFPLG9CQUFDLE9BQUQsT0FEVDtBQUVFYSxhQUFTLGtCQUZYO0FBR0VJLFlBQVEsd0JBQTBCO0FBQUEsVUFBdkJILE9BQXVCLFVBQXZCQSxPQUF1QjtBQUFBLFVBQWR4QixPQUFjLFVBQWRBLE9BQWM7O0FBQ2hDLFVBQU1iLE9BQU9hLFFBQVEsTUFBUixFQUFnQixDQUFoQixDQUFiO0FBQ0F3QixjQUFRO0FBQ05yQyxjQUFNQSxPQUFPLENBQVAsR0FBV0EsT0FBTyxDQUFsQixHQUFzQjtBQUR0QixPQUFSO0FBR0Q7QUFSSCxHQXZCTztBQTlCSSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIExpZ2h0Ym94LFxuICBMaWdodGJveEltYWdlLFxuICBFZGl0VGV4dCxcbiAgTGlnaHRib3hHYWxsZXJ5LFxuICBjbG91ZGluYXJ5VXJsLFxufSBmcm9tICdvbHltcC1jbG91ZGluYXJ5JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgd2l0aFByb3BzLCB3aXRoUHJvcHNPbkNoYW5nZSwgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBGYVBsdXMsIEZhTWludXMgfSBmcm9tICdvbHltcC1pY29ucyc7XG5cbmNvbnN0IGdldFNyY1NldCA9ICh2YWx1ZSwgdykgPT5cbiAgYCR7Y2xvdWRpbmFyeVVybCh2YWx1ZSwge1xuICAgIHc6IE1hdGguZmxvb3IodyksXG4gIH0pfSAke01hdGguZmxvb3Iodyl9d2A7XG5cbmNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UxLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgfSxcbiAgICBjbGVhcmZpeDogdHJ1ZSxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBzaXplIH0pID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2UzLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2UxLFxuICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgIHdpZHRoOiBgJHsxMDAgLyBzaXplfSVgLFxuICAgICAgbWluV2lkdGg6IGAkezEwMCAvIHNpemV9JWAsXG4gICAgICAnPiBzcGFuJzoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICB9LFxuICAgIH07XG4gICAgc3R5bGVbYDpudGgtY2hpbGQoJHtzaXplfW4pYF0gPSB7IHBhZGRpbmdSaWdodDogMCB9O1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9LFxuICAnZGl2JyxcbiAgKHsgc2l6ZSwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoKHsgZ2V0RGF0YSB9KSA9PiAoe1xuICAgIGl0ZW1zOiBnZXREYXRhKCd2YWx1ZScsIFtcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSkpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ3h5eiddLCAoe30pID0+ICh7XG4gICAgaWQ6IE1hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygzNilcbiAgICAgIC5zdWJzdHIoMiwgOSksXG4gIH0pKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ1BhZ2VzLk1lZGlhLkdhbGxlcnknLFxuICBpc1ZvaWQ6IHRydWUsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnR2FsZXJpZScsXG4gIGNhdGVnb3J5OiAnQmlsZGVyJyxcbiAgY29tcG9uZW50OiBlbmhhbmNlKFxuICAgICh7IGdldERhdGEsIHNldEFjdGl2ZSwgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgaXRlbXMsIGlkIH0pID0+IChcbiAgICAgIDxMaWdodGJveEdhbGxlcnkgZ2FsbGVyeT17aWR9PlxuICAgICAgICA8Q29udGFpbmVyIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9XCJnYWxsZXJ5LWJsb2NrXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxMaWdodGJveCAvPlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICA8SW1hZ2VDb250YWluZXIgc2l6ZT17Z2V0RGF0YSgnc2l6ZScsIDMpfSBrZXk9e2ltYWdlLmlkIHx8IGl9PlxuICAgICAgICAgICAgICA8TGlnaHRib3hJbWFnZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFjdGl2ZX1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2ltYWdlLmNhcHRpb24gJiYgPHNwYW4+e2ltYWdlLmNhcHRpb259PC9zcGFuPn1cbiAgICAgICAgICAgIDwvSW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MaWdodGJveEdhbGxlcnk+XG4gICAgKSxcbiAgKSxcbiAgc3R5bGVzOiAoeyBnZXREYXRhIH0pID0+ICh7XG4gICAgZmxvYXQ6IGdldERhdGEoJ2Zsb2F0JywgJ25vbmUnKSxcbiAgfSksXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICB0b29sdGlwOiBnZXREYXRhID0+IGBCaWxkZXIgJHtnZXREYXRhKCd2YWx1ZScpID8gJ3dlY2hzZWxuJyA6ICd3w6RobGVuJ31gLFxuICAgICAgY29tcG9uZW50OiAoeyBzZXREYXRhLCBnZXREYXRhLCAuLi5wIH0pID0+IChcbiAgICAgICAgPEVkaXRUZXh0XG4gICAgICAgICAgey4uLnB9XG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSB8fCBzZXREYXRhKHsgdmFsdWUgfSl9XG4gICAgICAgICAgdmFsdWU9e2dldERhdGEoJ3ZhbHVlJywgW10pfVxuICAgICAgICAgIG11bHRpXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgdG9nZ2xlOiAoKSA9PiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFQbHVzIC8+LFxuICAgICAgdG9vbHRpcDogJ1NwYWx0ZSBoaW56dWbDvGdlbicsXG4gICAgICB0b2dnbGU6ICh7IHNldERhdGEsIGdldERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBzaXplID0gZ2V0RGF0YSgnc2l6ZScsIDMpO1xuICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICBzaXplOiBzaXplIDwgOCA/IHNpemUgKyAxIDogOCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYU1pbnVzIC8+LFxuICAgICAgdG9vbHRpcDogJ1NwYWx0ZSBlbnRmZXJuZW4nLFxuICAgICAgdG9nZ2xlOiAoeyBzZXREYXRhLCBnZXREYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdldERhdGEoJ3NpemUnLCAzKTtcbiAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgc2l6ZTogc2l6ZSA+IDEgPyBzaXplIC0gMSA6IDEsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==
