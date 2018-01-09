'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = undefined;

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/button/style');

require('antd/lib/modal/style');

require('antd/lib/spin/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _portal = require('olymp-fela/portal');

var _portal2 = _interopRequireDefault(_portal);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactModal = require('react-modal2');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactFela = require('react-fela');

var _olympFela = require('olymp-fela');

var _antd = require('olymp-fela/antd');

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

_reactModal2.default.getApplicationElement = function () {
  return document.getElementById('app');
};

// isOpen={isOpen} transitionSpeed={1000} on={ReactModal}
var ReactModal = function ReactModal(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(_reactModal2.default, _extends({ backdropClassName: className }, props));
};

var getLogo = function getLogo(x) {
  if (typeof x === 'function') {
    return x();
  }
  return _react2.default.createElement('img', { src: x, alt: 'logo' });
};

var _ref3 = _react2.default.createElement(_modal2.default, { visible: false });

var Modal = (0, _reactFela.withTheme)(function (_ref2) {
  var isOpen = _ref2.isOpen,
      showLogo = _ref2.showLogo,
      leftButtons = _ref2.leftButtons,
      rightButtons = _ref2.rightButtons,
      className = _ref2.className,
      subtitle = _ref2.subtitle,
      onClose = _ref2.onClose,
      onCancel = _ref2.onCancel,
      okText = _ref2.okText,
      cancelText = _ref2.cancelText,
      onOk = _ref2.onOk,
      title = _ref2.title,
      loading = _ref2.loading,
      theme = _ref2.theme,
      noPortal = _ref2.noPortal,
      props = _objectWithoutProperties(_ref2, ['isOpen', 'showLogo', 'leftButtons', 'rightButtons', 'className', 'subtitle', 'onClose', 'onCancel', 'okText', 'cancelText', 'onOk', 'title', 'loading', 'theme', 'noPortal']);

  var copyright = null;
  var footer = null;
  var children = _react.Children.toArray(props.children).filter(function (child) {
    if (child.type && child.type === component.Copyright) {
      copyright = child;
      return false;
    } else if (child.type && child.type === component.Footer) {
      footer = child;
      return false;
    }
    return true;
  });

  return !isOpen ? null : _react2.default.createElement(
    _portal2.default,
    { noPortal: noPortal },
    _react2.default.createElement(
      ReactModal,
      {
        onClose: onCancel || onClose,
        closeOnEsc: true,
        closeOnBackdropClick: true,
        className: (0, _classnames2.default)('ant-modal-wrap', className),
        modalClassName: 'ant-modal'
      },
      _ref3,
      theme.logoWhite && showLogo && _react2.default.createElement(
        'div',
        { className: 'logo' },
        getLogo(theme.logoWhite),
        theme.logoTitle && _react2.default.createElement(
          'h3',
          null,
          theme.logoTitle
        )
      ),
      _react2.default.createElement(
        _spin2.default,
        {
          spinning: !!loading,
          tip: typeof loading === 'string' ? loading : 'Lädt ...'
        },
        _react2.default.createElement(
          'div',
          { className: 'ant-modal-content' },
          _react2.default.createElement(
            'div',
            { className: 'ant-modal-header' },
            leftButtons && _react2.default.createElement(
              TitleButtons,
              { left: true },
              leftButtons
            ),
            rightButtons && _react2.default.createElement(
              TitleButtons,
              { right: true },
              rightButtons
            ),
            _react2.default.createElement(
              'div',
              { className: 'ant-modal-title' },
              title
            )
          ),
          _react.Children.toArray(children).length > 0 && _react2.default.createElement(
            'div',
            { className: 'ant-modal-body' },
            children
          ),
          footer
        )
      ),
      copyright && _react2.default.createElement(
        component.Copyright,
        null,
        copyright
      )
    )
  );
});

exports.Modal = Modal;
var component = (0, _olympFela.createComponent)(function (_ref4) {
  var theme = _ref4.theme,
      padding = _ref4.padding,
      width = _ref4.width,
      bottomTransparency = _ref4.bottomTransparency,
      topTransparency = _ref4.topTransparency;
  return _extends({}, (0, _antd.getAntStyle)({ theme: theme }), {
    backgroundColor: theme.color,
    background: 'linear-gradient(0deg, ' + (theme.colorEnd || (0, _tinycolor2.default)(theme.color).darken(6).spin(-6).setAlpha(bottomTransparency || 1).toRgbString()) + ', ' + (theme.colorStart || (0, _tinycolor2.default)(theme.color).lighten(6).spin(12).setAlpha(topTransparency || 1).toRgbString()) + ')',
    hasFlex: {
      display: 'flex'
    },
    height: '100%',
    '> .ant-modal': {
      top: 0,
      outline: 0,
      width: width || 480,
      margin: 'auto',
      paddingY: theme.space4,
      '> .logo': {
        pointerEvents: 'none',
        margin: 'auto',
        marginBottom: 20,
        marginTop: -140,
        textAlign: 'center',
        '> img': {
          height: 75
        },
        '> h3': {
          color: theme.light1,
          fontWeight: 200,
          fontSize: 40
        }
      },
      '> div > div': {
        '> .ant-modal-content': {
          borderRadius: theme.borderRadius,
          '> .ant-modal-close': {
            display: 'none'
          },
          '> .ant-modal-body': {
            padding: padding === undefined ? theme.space2 : padding,
            '> *': {
              marginY: theme.space3
            },
            '& .ant-input-group-wrapper': {
              width: '100%'
            }
          },
          '> .ant-modal-header > .ant-modal-title': {
            color: theme.color,
            fontSize: 40,
            // fontWeight: 200,
            padding: 10,
            lineHeight: '30px',
            paddingTop: 0
          },
          '> .ant-modal-header': {
            textAlign: 'center'
          },
          '> .ant-modal-footer': {
            hasFlex: {
              display: 'flex'
            },
            padding: theme.space1,
            '> .ant-btn': {
              flex: '1 1 auto',
              margin: theme.space1
            }
          }
        }
      }
    }
  });
}, Modal, function (p) {
  return Object.keys(p);
});

// Copyright
component.Copyright = (0, _olympFela.createComponent)(function (_ref5) {
  var theme = _ref5.theme;
  return {
    position: 'fixed',
    bottom: 10,
    textAlign: 'center',
    right: 0,
    left: 0,
    '> a': {
      color: 'white',
      opacity: 0.3,
      onHover: {
        opacity: 1
      }
    }
  };
}, 'div');

component.Footer = function (_ref6) {
  var children = _ref6.children,
      className = _ref6.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('ant-modal-footer', className) },
    children
  );
};
component.Button = function (props) {
  return _react2.default.createElement(_button2.default, props);
};

var TitleButtons = (0, _olympFela.createComponent)(function (_ref7) {
  var theme = _ref7.theme,
      left = _ref7.left,
      right = _ref7.right;
  return {
    margin: 0,
    lineHeight: '21px',
    position: 'absolute',
    left: left && 16,
    right: right && 16,
    color: theme.color,
    fontSize: 40
  };
}, 'div', function (_ref8) {
  var left = _ref8.left,
      right = _ref8.right,
      p = _objectWithoutProperties(_ref8, ['left', 'right']);

  return Object.keys(p);
});

exports.default = component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL21vZGFsLmVzNiJdLCJuYW1lcyI6WyJnZXRBcHBsaWNhdGlvbkVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RNb2RhbCIsImNsYXNzTmFtZSIsInByb3BzIiwiZ2V0TG9nbyIsIngiLCJNb2RhbCIsImlzT3BlbiIsInNob3dMb2dvIiwibGVmdEJ1dHRvbnMiLCJyaWdodEJ1dHRvbnMiLCJzdWJ0aXRsZSIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIm9rVGV4dCIsImNhbmNlbFRleHQiLCJvbk9rIiwidGl0bGUiLCJsb2FkaW5nIiwidGhlbWUiLCJub1BvcnRhbCIsImNvcHlyaWdodCIsImZvb3RlciIsImNoaWxkcmVuIiwidG9BcnJheSIsImZpbHRlciIsImNoaWxkIiwidHlwZSIsImNvbXBvbmVudCIsIkNvcHlyaWdodCIsIkZvb3RlciIsImxvZ29XaGl0ZSIsImxvZ29UaXRsZSIsImxlbmd0aCIsInBhZGRpbmciLCJ3aWR0aCIsImJvdHRvbVRyYW5zcGFyZW5jeSIsInRvcFRyYW5zcGFyZW5jeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNvbG9yRW5kIiwiZGFya2VuIiwic3BpbiIsInNldEFscGhhIiwidG9SZ2JTdHJpbmciLCJjb2xvclN0YXJ0IiwibGlnaHRlbiIsImhhc0ZsZXgiLCJkaXNwbGF5IiwiaGVpZ2h0IiwidG9wIiwib3V0bGluZSIsIm1hcmdpbiIsInBhZGRpbmdZIiwic3BhY2U0IiwicG9pbnRlckV2ZW50cyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsImxpZ2h0MSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsInVuZGVmaW5lZCIsInNwYWNlMiIsIm1hcmdpblkiLCJzcGFjZTMiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ1RvcCIsInNwYWNlMSIsImZsZXgiLCJPYmplY3QiLCJrZXlzIiwicCIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0Iiwib3BhY2l0eSIsIm9uSG92ZXIiLCJCdXR0b24iLCJUaXRsZUJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEscUJBQVlBLHFCQUFaLEdBQW9DO0FBQUEsU0FBTUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFOO0FBQUEsQ0FBcEM7O0FBRUE7QUFDQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxNQUFpQkMsS0FBakI7O0FBQUEsU0FDakIsK0RBQWEsbUJBQW1CRCxTQUFoQyxJQUErQ0MsS0FBL0MsRUFEaUI7QUFBQSxDQUFuQjs7QUFJQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsSUFBSztBQUNuQixNQUFJLE9BQU9DLENBQVAsS0FBYSxVQUFqQixFQUE2QjtBQUMzQixXQUFPQSxHQUFQO0FBQ0Q7QUFDRCxTQUFPLHVDQUFLLEtBQUtBLENBQVYsRUFBYSxLQUFJLE1BQWpCLEdBQVA7QUFDRCxDQUxEOztZQWdEVSxpREFBVSxTQUFTLEtBQW5CLEc7O0FBekNILElBQU1DLFFBQVEsMEJBQ25CLGlCQWlCTTtBQUFBLE1BaEJKQyxNQWdCSSxTQWhCSkEsTUFnQkk7QUFBQSxNQWZKQyxRQWVJLFNBZkpBLFFBZUk7QUFBQSxNQWRKQyxXQWNJLFNBZEpBLFdBY0k7QUFBQSxNQWJKQyxZQWFJLFNBYkpBLFlBYUk7QUFBQSxNQVpKUixTQVlJLFNBWkpBLFNBWUk7QUFBQSxNQVhKUyxRQVdJLFNBWEpBLFFBV0k7QUFBQSxNQVZKQyxPQVVJLFNBVkpBLE9BVUk7QUFBQSxNQVRKQyxRQVNJLFNBVEpBLFFBU0k7QUFBQSxNQVJKQyxNQVFJLFNBUkpBLE1BUUk7QUFBQSxNQVBKQyxVQU9JLFNBUEpBLFVBT0k7QUFBQSxNQU5KQyxJQU1JLFNBTkpBLElBTUk7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RG1CO0FBRTNCZSxnQkFBWSxNQUZlO0FBRzNCTyxjQUFVLFVBSGlCO0FBSTNCRyxVQUFNQSxRQUFRLEVBSmE7QUFLM0JELFdBQU9BLFNBQVMsRUFMVztBQU0zQnRDLFdBQU9wQixNQUFNb0IsS0FOYztBQU8zQnVCLGNBQVU7QUFQaUIsR0FBN0I7QUFBQSxDQURtQixFQVVuQixLQVZtQixFQVduQjtBQUFBLE1BQUdnQixJQUFILFNBQUdBLElBQUg7QUFBQSxNQUFTRCxLQUFULFNBQVNBLEtBQVQ7QUFBQSxNQUFtQkgsQ0FBbkI7O0FBQUEsU0FBMkJGLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUEzQjtBQUFBLENBWG1CLENBQXJCOztrQkFjZTlDLFMiLCJmaWxlIjoiZXh0ZXJuYWwvdWkvbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gYXMgQW50QnV0dG9uLCBNb2RhbCBhcyBBbnRNb2RhbCwgU3BpbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdvbHltcC1mZWxhL3BvcnRhbCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3RNb2RhbDIgZnJvbSAncmVhY3QtbW9kYWwyJztcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBnZXRBbnRTdHlsZSB9IGZyb20gJ29seW1wLWZlbGEvYW50ZCc7XG5pbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInO1xuXG5SZWFjdE1vZGFsMi5nZXRBcHBsaWNhdGlvbkVsZW1lbnQgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbi8vIGlzT3Blbj17aXNPcGVufSB0cmFuc2l0aW9uU3BlZWQ9ezEwMDB9IG9uPXtSZWFjdE1vZGFsfVxuY29uc3QgUmVhY3RNb2RhbCA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8UmVhY3RNb2RhbDIgYmFja2Ryb3BDbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfSAvPlxuKTtcblxuY29uc3QgZ2V0TG9nbyA9IHggPT4ge1xuICBpZiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4geCgpO1xuICB9XG4gIHJldHVybiA8aW1nIHNyYz17eH0gYWx0PVwibG9nb1wiIC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gd2l0aFRoZW1lKFxuICAoe1xuICAgIGlzT3BlbixcbiAgICBzaG93TG9nbyxcbiAgICBsZWZ0QnV0dG9ucyxcbiAgICByaWdodEJ1dHRvbnMsXG4gICAgY2xhc3NOYW1lLFxuICAgIHN1YnRpdGxlLFxuICAgIG9uQ2xvc2UsXG4gICAgb25DYW5jZWwsXG4gICAgb2tUZXh0LFxuICAgIGNhbmNlbFRleHQsXG4gICAgb25PayxcbiAgICB0aXRsZSxcbiAgICBsb2FkaW5nLFxuICAgIHRoZW1lLFxuICAgIG5vUG9ydGFsLFxuICAgIC4uLnByb3BzXG4gIH0pID0+IHtcbiAgICBsZXQgY29weXJpZ2h0ID0gbnVsbDtcbiAgICBsZXQgZm9vdGVyID0gbnVsbDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IENoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlID09PSBjb21wb25lbnQuQ29weXJpZ2h0KSB7XG4gICAgICAgIGNvcHlyaWdodCA9IGNoaWxkO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZSA9PT0gY29tcG9uZW50LkZvb3Rlcikge1xuICAgICAgICBmb290ZXIgPSBjaGlsZDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gIWlzT3BlbiA/IG51bGwgOiAoXG4gICAgICA8UG9ydGFsIG5vUG9ydGFsPXtub1BvcnRhbH0+XG4gICAgICAgIDxSZWFjdE1vZGFsXG4gICAgICAgICAgb25DbG9zZT17b25DYW5jZWwgfHwgb25DbG9zZX1cbiAgICAgICAgICBjbG9zZU9uRXNjXG4gICAgICAgICAgY2xvc2VPbkJhY2tkcm9wQ2xpY2tcbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCdhbnQtbW9kYWwtd3JhcCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgbW9kYWxDbGFzc05hbWU9XCJhbnQtbW9kYWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPEFudE1vZGFsIHZpc2libGU9e2ZhbHNlfSAvPlxuICAgICAgICAgIHt0aGVtZS5sb2dvV2hpdGUgJiZcbiAgICAgICAgICAgIHNob3dMb2dvICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAge2dldExvZ28odGhlbWUubG9nb1doaXRlKX1cbiAgICAgICAgICAgICAgICB7dGhlbWUubG9nb1RpdGxlICYmIDxoMz57dGhlbWUubG9nb1RpdGxlfTwvaDM+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPFNwaW5cbiAgICAgICAgICAgIHNwaW5uaW5nPXshIWxvYWRpbmd9XG4gICAgICAgICAgICB0aXA9e3R5cGVvZiBsb2FkaW5nID09PSAnc3RyaW5nJyA/IGxvYWRpbmcgOiAnTMOkZHQgLi4uJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtsZWZ0QnV0dG9ucyAmJiA8VGl0bGVCdXR0b25zIGxlZnQ+e2xlZnRCdXR0b25zfTwvVGl0bGVCdXR0b25zPn1cbiAgICAgICAgICAgICAgICB7cmlnaHRCdXR0b25zICYmIChcbiAgICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbnMgcmlnaHQ+e3JpZ2h0QnV0dG9uc308L1RpdGxlQnV0dG9ucz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge0NoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWJvZHlcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtmb290ZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NwaW4+XG4gICAgICAgICAge2NvcHlyaWdodCAmJiA8Y29tcG9uZW50LkNvcHlyaWdodD57Y29weXJpZ2h0fTwvY29tcG9uZW50LkNvcHlyaWdodD59XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbik7XG5cbmNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIHBhZGRpbmcsIHdpZHRoLCBib3R0b21UcmFuc3BhcmVuY3ksIHRvcFRyYW5zcGFyZW5jeSB9KSA9PiAoe1xuICAgIC4uLmdldEFudFN0eWxlKHsgdGhlbWUgfSksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsICR7dGhlbWUuY29sb3JFbmQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmRhcmtlbig2KVxuICAgICAgICAuc3BpbigtNilcbiAgICAgICAgLnNldEFscGhhKGJvdHRvbVRyYW5zcGFyZW5jeSB8fCAxKVxuICAgICAgICAudG9SZ2JTdHJpbmcoKX0sICR7dGhlbWUuY29sb3JTdGFydCB8fFxuICAgICAgdGlueWNvbG9yKHRoZW1lLmNvbG9yKVxuICAgICAgICAubGlnaHRlbig2KVxuICAgICAgICAuc3BpbigxMilcbiAgICAgICAgLnNldEFscGhhKHRvcFRyYW5zcGFyZW5jeSB8fCAxKVxuICAgICAgICAudG9SZ2JTdHJpbmcoKX0pYCxcbiAgICBoYXNGbGV4OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgICc+IC5hbnQtbW9kYWwnOiB7XG4gICAgICB0b3A6IDAsXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgd2lkdGg6IHdpZHRoIHx8IDQ4MCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlNCxcbiAgICAgICc+IC5sb2dvJzoge1xuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgICAgICBtYXJnaW5Ub3A6IC0xNDAsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICc+IGltZyc6IHtcbiAgICAgICAgICBoZWlnaHQ6IDc1XG4gICAgICAgIH0sXG4gICAgICAgICc+IGgzJzoge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5saWdodDEsXG4gICAgICAgICAgZm9udFdlaWdodDogMjAwLFxuICAgICAgICAgIGZvbnRTaXplOiA0MFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJz4gZGl2ID4gZGl2Jzoge1xuICAgICAgICAnPiAuYW50LW1vZGFsLWNvbnRlbnQnOiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1jbG9zZSc6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1ib2R5Jzoge1xuICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZyA9PT0gdW5kZWZpbmVkID8gdGhlbWUuc3BhY2UyIDogcGFkZGluZyxcbiAgICAgICAgICAgICc+IConOiB7XG4gICAgICAgICAgICAgIG1hcmdpblk6IHRoZW1lLnNwYWNlM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmIC5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlcic6IHtcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1oZWFkZXIgPiAuYW50LW1vZGFsLXRpdGxlJzoge1xuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgLy8gZm9udFdlaWdodDogMjAwLFxuICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWhlYWRlcic6IHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IC5hbnQtbW9kYWwtZm9vdGVyJzoge1xuICAgICAgICAgICAgaGFzRmxleDoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTEsXG4gICAgICAgICAgICAnPiAuYW50LWJ0bic6IHtcbiAgICAgICAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjZTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLFxuICBNb2RhbCxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuLy8gQ29weXJpZ2h0XG5jb21wb25lbnQuQ29weXJpZ2h0ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogMTAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICByaWdodDogMCxcbiAgICBsZWZ0OiAwLFxuICAgICc+IGEnOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfVxuICAgIH1cbiAgfSksXG4gICdkaXYnXG4pO1xuXG5jb21wb25lbnQuRm9vdGVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbignYW50LW1vZGFsLWZvb3RlcicsIGNsYXNzTmFtZSl9PntjaGlsZHJlbn08L2Rpdj5cbik7XG5jb21wb25lbnQuQnV0dG9uID0gcHJvcHMgPT4gPEFudEJ1dHRvbiB7Li4ucHJvcHN9IC8+O1xuXG5jb25zdCBUaXRsZUJ1dHRvbnMgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBsZWZ0LCByaWdodCB9KSA9PiAoe1xuICAgIG1hcmdpbjogMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjFweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogbGVmdCAmJiAxNixcbiAgICByaWdodDogcmlnaHQgJiYgMTYsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIGZvbnRTaXplOiA0MFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGxlZnQsIHJpZ2h0LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iXX0=
