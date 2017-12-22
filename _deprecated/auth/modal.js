import 'antd/lib/modal/style';
import _Modal from 'antd/lib/modal';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/spin/style';
import _Spin from 'antd/lib/spin';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children } from 'react';

import Portal from 'olymp-fela/portal';
import cn from 'classnames';
import ReactModal2 from 'react-modal2';
import { withTheme } from 'react-fela';
import { getAntStyle, createComponent } from 'olymp-fela';
import tinycolor from 'tinycolor2';

ReactModal2.getApplicationElement = function () {
  return document.getElementById('app');
};

// isOpen={isOpen} transitionSpeed={1000} on={ReactModal}
var ReactModal = function ReactModal(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return React.createElement(ReactModal2, _extends({ backdropClassName: className }, props));
};

var getLogo = function getLogo(x) {
  if (typeof x === 'function') {
    return x();
  }
  return React.createElement('img', { src: x, alt: 'logo' });
};

var _ref3 = React.createElement(_Modal, { visible: false });

var Modal = withTheme(function (_ref2) {
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
  var children = Children.toArray(props.children).filter(function (child) {
    if (child.type && child.type === component.Copyright) {
      copyright = child;
      return false;
    } else if (child.type && child.type === component.Footer) {
      footer = child;
      return false;
    }
    return true;
  });

  return !isOpen ? null : React.createElement(
    Portal,
    { noPortal: noPortal },
    React.createElement(
      ReactModal,
      {
        onClose: onCancel || onClose,
        closeOnEsc: true,
        closeOnBackdropClick: true,
        className: cn('ant-modal-wrap', className),
        modalClassName: 'ant-modal'
      },
      _ref3,
      theme.logoWhite && showLogo && React.createElement(
        'div',
        { className: 'logo' },
        getLogo(theme.logoWhite),
        theme.logoTitle && React.createElement(
          'h3',
          null,
          theme.logoTitle
        )
      ),
      React.createElement(
        _Spin,
        {
          spinning: !!loading,
          tip: typeof loading === 'string' ? loading : 'Lädt ...'
        },
        React.createElement(
          'div',
          { className: 'ant-modal-content' },
          React.createElement(
            'div',
            { className: 'ant-modal-header' },
            leftButtons && React.createElement(
              TitleButtons,
              { left: true },
              leftButtons
            ),
            rightButtons && React.createElement(
              TitleButtons,
              { right: true },
              rightButtons
            ),
            React.createElement(
              'div',
              { className: 'ant-modal-title' },
              title
            )
          ),
          Children.toArray(children).length > 0 && React.createElement(
            'div',
            { className: 'ant-modal-body' },
            children
          ),
          footer
        )
      ),
      copyright && React.createElement(
        component.Copyright,
        null,
        copyright
      )
    )
  );
});

var component = createComponent(function (_ref4) {
  var theme = _ref4.theme,
      padding = _ref4.padding,
      width = _ref4.width,
      bottomTransparency = _ref4.bottomTransparency,
      topTransparency = _ref4.topTransparency;
  return _extends({}, getAntStyle({ theme: theme }), {
    backgroundColor: theme.color,
    background: 'linear-gradient(0deg, ' + (theme.colorEnd || tinycolor(theme.color).darken(6).spin(-6).setAlpha(bottomTransparency || 1).toRgbString()) + ', ' + (theme.colorStart || tinycolor(theme.color).lighten(6).spin(12).setAlpha(topTransparency || 1).toRgbString()) + ')',
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
component.Copyright = createComponent(function (_ref5) {
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
  return React.createElement(
    'div',
    { className: cn('ant-modal-footer', className) },
    children
  );
};
component.Button = function (props) {
  return React.createElement(_Button, props);
};

var TitleButtons = createComponent(function (_ref7) {
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

export default component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvbW9kYWwuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJQb3J0YWwiLCJjbiIsIlJlYWN0TW9kYWwyIiwid2l0aFRoZW1lIiwiZ2V0QW50U3R5bGUiLCJjcmVhdGVDb21wb25lbnQiLCJ0aW55Y29sb3IiLCJnZXRBcHBsaWNhdGlvbkVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RNb2RhbCIsImNsYXNzTmFtZSIsInByb3BzIiwiZ2V0TG9nbyIsIngiLCJNb2RhbCIsImlzT3BlbiIsInNob3dMb2dvIiwibGVmdEJ1dHRvbnMiLCJyaWdodEJ1dHRvbnMiLCJzdWJ0aXRsZSIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIm9rVGV4dCIsImNhbmNlbFRleHQiLCJvbk9rIiwidGl0bGUiLCJsb2FkaW5nIiwidGhlbWUiLCJub1BvcnRhbCIsImNvcHlyaWdodCIsImZvb3RlciIsImNoaWxkcmVuIiwidG9BcnJheSIsImZpbHRlciIsImNoaWxkIiwidHlwZSIsImNvbXBvbmVudCIsIkNvcHlyaWdodCIsIkZvb3RlciIsImxvZ29XaGl0ZSIsImxvZ29UaXRsZSIsImxlbmd0aCIsInBhZGRpbmciLCJ3aWR0aCIsImJvdHRvbVRyYW5zcGFyZW5jeSIsInRvcFRyYW5zcGFyZW5jeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNvbG9yRW5kIiwiZGFya2VuIiwic3BpbiIsInNldEFscGhhIiwidG9SZ2JTdHJpbmciLCJjb2xvclN0YXJ0IiwibGlnaHRlbiIsImhhc0ZsZXgiLCJkaXNwbGF5IiwiaGVpZ2h0IiwidG9wIiwib3V0bGluZSIsIm1hcmdpbiIsInBhZGRpbmdZIiwic3BhY2U0IiwicG9pbnRlckV2ZW50cyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsImxpZ2h0MSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsInVuZGVmaW5lZCIsInNwYWNlMiIsIm1hcmdpblkiLCJzcGFjZTMiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ1RvcCIsInNwYWNlMSIsImZsZXgiLCJPYmplY3QiLCJrZXlzIiwicCIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0Iiwib3BhY2l0eSIsIm9uSG92ZXIiLCJCdXR0b24iLCJUaXRsZUJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsUUFBZ0MsT0FBaEM7O0FBRUEsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsY0FBeEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLFlBQTFCO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsZUFBdEIsUUFBNkMsWUFBN0M7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBSixZQUFZSyxxQkFBWixHQUFvQztBQUFBLFNBQU1DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBTjtBQUFBLENBQXBDOztBQUVBO0FBQ0EsSUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBaUJDLEtBQWpCOztBQUFBLFNBQ2pCLG9CQUFDLFdBQUQsYUFBYSxtQkFBbUJELFNBQWhDLElBQStDQyxLQUEvQyxFQURpQjtBQUFBLENBQW5COztBQUlBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxJQUFLO0FBQ25CLE1BQUksT0FBT0MsQ0FBUCxLQUFhLFVBQWpCLEVBQTZCO0FBQzNCLFdBQU9BLEdBQVA7QUFDRDtBQUNELFNBQU8sNkJBQUssS0FBS0EsQ0FBVixFQUFhLEtBQUksTUFBakIsR0FBUDtBQUNELENBTEQ7O1lBZ0RVLDhCQUFVLFNBQVMsS0FBbkIsRzs7QUF6Q1YsSUFBTUMsUUFBUVosVUFDWixpQkFpQk07QUFBQSxNQWhCSmEsTUFnQkksU0FoQkpBLE1BZ0JJO0FBQUEsTUFmSkMs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QUFBLE1BQUssV0FBV1YsR0FBRyxrQkFBSCxFQUF1QlUsU0FBdkIsQ0FBaEI7QUFBb0RxQjtBQUFwRCxHQURpQjtBQUFBLENBQW5CO0FBR0FLLFVBQVVxRCxNQUFWLEdBQW1CO0FBQUEsU0FBUyw2QkFBZTlFLEtBQWYsQ0FBVDtBQUFBLENBQW5COztBQUVBLElBQU0rRSxlQUFldEYsZ0JBQ25CO0FBQUEsTUFBR3VCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVUyRCxJQUFWLFNBQVVBLElBQVY7QUFBQSxNQUFnQkQsS0FBaEIsU0FBZ0JBLEtBQWhCO0FBQUEsU0FBNkI7QUFDM0J4QixZQUFRLENBRG1CO0FBRTNCZSxnQkFBWSxNQUZlO0FBRzNCTyxjQUFVLFVBSGlCO0FBSTNCRyxVQUFNQSxRQUFRLEVBSmE7QUFLM0JELFdBQU9BLFNBQVMsRUFMVztBQU0zQnRDLFdBQU9wQixNQUFNb0IsS0FOYztBQU8zQnVCLGNBQVU7QUFQaUIsR0FBN0I7QUFBQSxDQURtQixFQVVuQixLQVZtQixFQVduQjtBQUFBLE1BQUdnQixJQUFILFNBQUdBLElBQUg7QUFBQSxNQUFTRCxLQUFULFNBQVNBLEtBQVQ7QUFBQSxNQUFtQkgsQ0FBbkI7O0FBQUEsU0FBMkJGLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUEzQjtBQUFBLENBWG1CLENBQXJCOztBQWNBLGVBQWU5QyxTQUFmIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gYXMgQW50QnV0dG9uLCBNb2RhbCBhcyBBbnRNb2RhbCwgU3BpbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdvbHltcC1mZWxhL3BvcnRhbCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3RNb2RhbDIgZnJvbSAncmVhY3QtbW9kYWwyJztcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgZ2V0QW50U3R5bGUsIGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcblxuUmVhY3RNb2RhbDIuZ2V0QXBwbGljYXRpb25FbGVtZW50ID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4vLyBpc09wZW49e2lzT3Blbn0gdHJhbnNpdGlvblNwZWVkPXsxMDAwfSBvbj17UmVhY3RNb2RhbH1cbmNvbnN0IFJlYWN0TW9kYWwgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcbiAgPFJlYWN0TW9kYWwyIGJhY2tkcm9wQ2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30gLz5cbik7XG5cbmNvbnN0IGdldExvZ28gPSB4ID0+IHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHgoKTtcbiAgfVxuICByZXR1cm4gPGltZyBzcmM9e3h9IGFsdD1cImxvZ29cIiAvPjtcbn07XG5cbmNvbnN0IE1vZGFsID0gd2l0aFRoZW1lKFxuICAoe1xuICAgIGlzT3BlbixcbiAgICBzaG93TG9nbyxcbiAgICBsZWZ0QnV0dG9ucyxcbiAgICByaWdodEJ1dHRvbnMsXG4gICAgY2xhc3NOYW1lLFxuICAgIHN1YnRpdGxlLFxuICAgIG9uQ2xvc2UsXG4gICAgb25DYW5jZWwsXG4gICAgb2tUZXh0LFxuICAgIGNhbmNlbFRleHQsXG4gICAgb25PayxcbiAgICB0aXRsZSxcbiAgICBsb2FkaW5nLFxuICAgIHRoZW1lLFxuICAgIG5vUG9ydGFsLFxuICAgIC4uLnByb3BzXG4gIH0pID0+IHtcbiAgICBsZXQgY29weXJpZ2h0ID0gbnVsbDtcbiAgICBsZXQgZm9vdGVyID0gbnVsbDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IENoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlID09PSBjb21wb25lbnQuQ29weXJpZ2h0KSB7XG4gICAgICAgIGNvcHlyaWdodCA9IGNoaWxkO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZSA9PT0gY29tcG9uZW50LkZvb3Rlcikge1xuICAgICAgICBmb290ZXIgPSBjaGlsZDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gIWlzT3BlbiA/IG51bGwgOiAoXG4gICAgICA8UG9ydGFsIG5vUG9ydGFsPXtub1BvcnRhbH0+XG4gICAgICAgIDxSZWFjdE1vZGFsXG4gICAgICAgICAgb25DbG9zZT17b25DYW5jZWwgfHwgb25DbG9zZX1cbiAgICAgICAgICBjbG9zZU9uRXNjXG4gICAgICAgICAgY2xvc2VPbkJhY2tkcm9wQ2xpY2tcbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCdhbnQtbW9kYWwtd3JhcCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgbW9kYWxDbGFzc05hbWU9XCJhbnQtbW9kYWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPEFudE1vZGFsIHZpc2libGU9e2ZhbHNlfSAvPlxuICAgICAgICAgIHt0aGVtZS5sb2dvV2hpdGUgJiZcbiAgICAgICAgICAgIHNob3dMb2dvICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAge2dldExvZ28odGhlbWUubG9nb1doaXRlKX1cbiAgICAgICAgICAgICAgICB7dGhlbWUubG9nb1RpdGxlICYmIDxoMz57dGhlbWUubG9nb1RpdGxlfTwvaDM+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPFNwaW5cbiAgICAgICAgICAgIHNwaW5uaW5nPXshIWxvYWRpbmd9XG4gICAgICAgICAgICB0aXA9e3R5cGVvZiBsb2FkaW5nID09PSAnc3RyaW5nJyA/IGxvYWRpbmcgOiAnTMOkZHQgLi4uJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtsZWZ0QnV0dG9ucyAmJiA8VGl0bGVCdXR0b25zIGxlZnQ+e2xlZnRCdXR0b25zfTwvVGl0bGVCdXR0b25zPn1cbiAgICAgICAgICAgICAgICB7cmlnaHRCdXR0b25zICYmIChcbiAgICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbnMgcmlnaHQ+e3JpZ2h0QnV0dG9uc308L1RpdGxlQnV0dG9ucz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge0NoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWJvZHlcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtmb290ZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NwaW4+XG4gICAgICAgICAge2NvcHlyaWdodCAmJiA8Y29tcG9uZW50LkNvcHlyaWdodD57Y29weXJpZ2h0fTwvY29tcG9uZW50LkNvcHlyaWdodD59XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH0sXG4pO1xuXG5jb25zdCBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBwYWRkaW5nLCB3aWR0aCwgYm90dG9tVHJhbnNwYXJlbmN5LCB0b3BUcmFuc3BhcmVuY3kgfSkgPT4gKHtcbiAgICAuLi5nZXRBbnRTdHlsZSh7IHRoZW1lIH0pLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgwZGVnLCAke3RoZW1lLmNvbG9yRW5kIHx8XG4gICAgICB0aW55Y29sb3IodGhlbWUuY29sb3IpXG4gICAgICAgIC5kYXJrZW4oNilcbiAgICAgICAgLnNwaW4oLTYpXG4gICAgICAgIC5zZXRBbHBoYShib3R0b21UcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9LCAke3RoZW1lLmNvbG9yU3RhcnQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oNilcbiAgICAgICAgLnNwaW4oMTIpXG4gICAgICAgIC5zZXRBbHBoYSh0b3BUcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9KWAsXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgJz4gLmFudC1tb2RhbCc6IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICB3aWR0aDogd2lkdGggfHwgNDgwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2U0LFxuICAgICAgJz4gLmxvZ28nOiB7XG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgIG1hcmdpblRvcDogLTE0MCxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgJz4gaW1nJzoge1xuICAgICAgICAgIGhlaWdodDogNzUsXG4gICAgICAgIH0sXG4gICAgICAgICc+IGgzJzoge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5saWdodDEsXG4gICAgICAgICAgZm9udFdlaWdodDogMjAwLFxuICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnPiBkaXYgPiBkaXYnOiB7XG4gICAgICAgICc+IC5hbnQtbW9kYWwtY29udGVudCc6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWNsb3NlJzoge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1ib2R5Jzoge1xuICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZyA9PT0gdW5kZWZpbmVkID8gdGhlbWUuc3BhY2UyIDogcGFkZGluZyxcbiAgICAgICAgICAgICc+IConOiB7XG4gICAgICAgICAgICAgIG1hcmdpblk6IHRoZW1lLnNwYWNlMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJiAuYW50LWlucHV0LWdyb3VwLXdyYXBwZXInOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1oZWFkZXIgPiAuYW50LW1vZGFsLXRpdGxlJzoge1xuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgLy8gZm9udFdlaWdodDogMjAwLFxuICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1oZWFkZXInOiB7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1mb290ZXInOiB7XG4gICAgICAgICAgICBoYXNGbGV4OiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTEsXG4gICAgICAgICAgICAnPiAuYW50LWJ0bic6IHtcbiAgICAgICAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjZTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBNb2RhbCxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbi8vIENvcHlyaWdodFxuY29tcG9uZW50LkNvcHlyaWdodCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IDEwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcmlnaHQ6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnPiBhJzoge1xuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLjMsXG4gICAgICBvbkhvdmVyOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAnZGl2Jyxcbik7XG5cbmNvbXBvbmVudC5Gb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NuKCdhbnQtbW9kYWwtZm9vdGVyJywgY2xhc3NOYW1lKX0+e2NoaWxkcmVufTwvZGl2PlxuKTtcbmNvbXBvbmVudC5CdXR0b24gPSBwcm9wcyA9PiA8QW50QnV0dG9uIHsuLi5wcm9wc30gLz47XG5cbmNvbnN0IFRpdGxlQnV0dG9ucyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGxlZnQsIHJpZ2h0IH0pID0+ICh7XG4gICAgbWFyZ2luOiAwLFxuICAgIGxpbmVIZWlnaHQ6ICcyMXB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiBsZWZ0ICYmIDE2LFxuICAgIHJpZ2h0OiByaWdodCAmJiAxNixcbiAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgZm9udFNpemU6IDQwLFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGxlZnQsIHJpZ2h0LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xuIl19
