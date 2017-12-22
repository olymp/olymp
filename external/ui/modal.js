import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/modal/style';
import _Modal from 'antd/lib/modal';
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

export { Modal };
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL21vZGFsLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoaWxkcmVuIiwiUG9ydGFsIiwiY24iLCJSZWFjdE1vZGFsMiIsIndpdGhUaGVtZSIsImdldEFudFN0eWxlIiwiY3JlYXRlQ29tcG9uZW50IiwidGlueWNvbG9yIiwiZ2V0QXBwbGljYXRpb25FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0TW9kYWwiLCJjbGFzc05hbWUiLCJwcm9wcyIsImdldExvZ28iLCJ4IiwiTW9kYWwiLCJpc09wZW4iLCJzaG93TG9nbyIsImxlZnRCdXR0b25zIiwicmlnaHRCdXR0b25zIiwic3VidGl0bGUiLCJvbkNsb3NlIiwib25DYW5jZWwiLCJva1RleHQiLCJjYW5jZWxUZXh0Iiwib25PayIsInRpdGxlIiwibG9hZGluZyIsInRoZW1lIiwibm9Qb3J0YWwiLCJjb3B5cmlnaHQiLCJmb290ZXIiLCJjaGlsZHJlbiIsInRvQXJyYXkiLCJmaWx0ZXIiLCJjaGlsZCIsInR5cGUiLCJjb21wb25lbnQiLCJDb3B5cmlnaHQiLCJGb290ZXIiLCJsb2dvV2hpdGUiLCJsb2dvVGl0bGUiLCJsZW5ndGgiLCJwYWRkaW5nIiwid2lkdGgiLCJib3R0b21UcmFuc3BhcmVuY3kiLCJ0b3BUcmFuc3BhcmVuY3kiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJhY2tncm91bmQiLCJjb2xvckVuZCIsImRhcmtlbiIsInNwaW4iLCJzZXRBbHBoYSIsInRvUmdiU3RyaW5nIiwiY29sb3JTdGFydCIsImxpZ2h0ZW4iLCJoYXNGbGV4IiwiZGlzcGxheSIsImhlaWdodCIsInRvcCIsIm91dGxpbmUiLCJtYXJnaW4iLCJwYWRkaW5nWSIsInNwYWNlNCIsInBvaW50ZXJFdmVudHMiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJsaWdodDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJ1bmRlZmluZWQiLCJzcGFjZTIiLCJtYXJnaW5ZIiwic3BhY2UzIiwibGluZUhlaWdodCIsInBhZGRpbmdUb3AiLCJzcGFjZTEiLCJmbGV4IiwiT2JqZWN0Iiwia2V5cyIsInAiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwibGVmdCIsIm9wYWNpdHkiLCJvbkhvdmVyIiwiQnV0dG9uIiwiVGl0bGVCdXR0b25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLFFBQWdDLE9BQWhDOztBQUVBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGNBQXhCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixZQUExQjtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLGVBQXRCLFFBQTZDLFlBQTdDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQUosWUFBWUsscUJBQVosR0FBb0M7QUFBQSxTQUFNQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQU47QUFBQSxDQUFwQzs7QUFFQTtBQUNBLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLE1BQWlCQyxLQUFqQjs7QUFBQSxTQUNqQixvQkFBQyxXQUFELGFBQWEsbUJBQW1CRCxTQUFoQyxJQUErQ0MsS0FBL0MsRUFEaUI7QUFBQSxDQUFuQjs7QUFJQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsSUFBSztBQUNuQixNQUFJLE9BQU9DLENBQVAsS0FBYSxVQUFqQixFQUE2QjtBQUMzQixXQUFPQSxHQUFQO0FBQ0Q7QUFDRCxTQUFPLDZCQUFLLEtBQUtBLENBQVYsRUFBYSxLQUFJLE1BQWpCLEdBQVA7QUFDRCxDQUxEOztZQWdEVSw4QkFBVSxTQUFTLEtBQW5CLEc7O0FBekNILElBQU1DLFFBQVFaLFVBQ25CLGlCQWlCTTtBQUFBLE1BaEJKYSxNQWdCSSxTQWhCSkEsTUFnQkk7QUFBQSxNQWZKQyxR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QUFBQSxNQUFLLFdBQVdWLEdBQUcsa0JBQUgsRUFBdUJVLFNBQXZCLENBQWhCO0FBQW9EcUI7QUFBcEQsR0FEaUI7QUFBQSxDQUFuQjtBQUdBSyxVQUFVcUQsTUFBVixHQUFtQjtBQUFBLFNBQVMsNkJBQWU5RSxLQUFmLENBQVQ7QUFBQSxDQUFuQjs7QUFFQSxJQUFNK0UsZUFBZXRGLGdCQUNuQjtBQUFBLE1BQUd1QixLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVMkQsSUFBVixTQUFVQSxJQUFWO0FBQUEsTUFBZ0JELEtBQWhCLFNBQWdCQSxLQUFoQjtBQUFBLFNBQTZCO0FBQzNCeEIsWUFBUSxDQURtQjtBQUUzQmUsZ0JBQVksTUFGZTtBQUczQk8sY0FBVSxVQUhpQjtBQUkzQkcsVUFBTUEsUUFBUSxFQUphO0FBSzNCRCxXQUFPQSxTQUFTLEVBTFc7QUFNM0J0QyxXQUFPcEIsTUFBTW9CLEtBTmM7QUFPM0J1QixjQUFVO0FBUGlCLEdBQTdCO0FBQUEsQ0FEbUIsRUFVbkIsS0FWbUIsRUFXbkI7QUFBQSxNQUFHZ0IsSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBU0QsS0FBVCxTQUFTQSxLQUFUO0FBQUEsTUFBbUJILENBQW5COztBQUFBLFNBQTJCRixPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBM0I7QUFBQSxDQVhtQixDQUFyQjs7QUFjQSxlQUFlOUMsU0FBZiIsImZpbGUiOiJwYWNrYWdlcy91aS9tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiBhcyBBbnRCdXR0b24sIE1vZGFsIGFzIEFudE1vZGFsLCBTcGluIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJ29seW1wLWZlbGEvcG9ydGFsJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdE1vZGFsMiBmcm9tICdyZWFjdC1tb2RhbDInO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyBnZXRBbnRTdHlsZSwgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInO1xuXG5SZWFjdE1vZGFsMi5nZXRBcHBsaWNhdGlvbkVsZW1lbnQgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbi8vIGlzT3Blbj17aXNPcGVufSB0cmFuc2l0aW9uU3BlZWQ9ezEwMDB9IG9uPXtSZWFjdE1vZGFsfVxuY29uc3QgUmVhY3RNb2RhbCA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8UmVhY3RNb2RhbDIgYmFja2Ryb3BDbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfSAvPlxuKTtcblxuY29uc3QgZ2V0TG9nbyA9IHggPT4ge1xuICBpZiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4geCgpO1xuICB9XG4gIHJldHVybiA8aW1nIHNyYz17eH0gYWx0PVwibG9nb1wiIC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gd2l0aFRoZW1lKFxuICAoe1xuICAgIGlzT3BlbixcbiAgICBzaG93TG9nbyxcbiAgICBsZWZ0QnV0dG9ucyxcbiAgICByaWdodEJ1dHRvbnMsXG4gICAgY2xhc3NOYW1lLFxuICAgIHN1YnRpdGxlLFxuICAgIG9uQ2xvc2UsXG4gICAgb25DYW5jZWwsXG4gICAgb2tUZXh0LFxuICAgIGNhbmNlbFRleHQsXG4gICAgb25PayxcbiAgICB0aXRsZSxcbiAgICBsb2FkaW5nLFxuICAgIHRoZW1lLFxuICAgIG5vUG9ydGFsLFxuICAgIC4uLnByb3BzXG4gIH0pID0+IHtcbiAgICBsZXQgY29weXJpZ2h0ID0gbnVsbDtcbiAgICBsZXQgZm9vdGVyID0gbnVsbDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IENoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlID09PSBjb21wb25lbnQuQ29weXJpZ2h0KSB7XG4gICAgICAgIGNvcHlyaWdodCA9IGNoaWxkO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZSA9PT0gY29tcG9uZW50LkZvb3Rlcikge1xuICAgICAgICBmb290ZXIgPSBjaGlsZDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gIWlzT3BlbiA/IG51bGwgOiAoXG4gICAgICA8UG9ydGFsIG5vUG9ydGFsPXtub1BvcnRhbH0+XG4gICAgICAgIDxSZWFjdE1vZGFsXG4gICAgICAgICAgb25DbG9zZT17b25DYW5jZWwgfHwgb25DbG9zZX1cbiAgICAgICAgICBjbG9zZU9uRXNjXG4gICAgICAgICAgY2xvc2VPbkJhY2tkcm9wQ2xpY2tcbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCdhbnQtbW9kYWwtd3JhcCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgbW9kYWxDbGFzc05hbWU9XCJhbnQtbW9kYWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPEFudE1vZGFsIHZpc2libGU9e2ZhbHNlfSAvPlxuICAgICAgICAgIHt0aGVtZS5sb2dvV2hpdGUgJiZcbiAgICAgICAgICAgIHNob3dMb2dvICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAge2dldExvZ28odGhlbWUubG9nb1doaXRlKX1cbiAgICAgICAgICAgICAgICB7dGhlbWUubG9nb1RpdGxlICYmIDxoMz57dGhlbWUubG9nb1RpdGxlfTwvaDM+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPFNwaW5cbiAgICAgICAgICAgIHNwaW5uaW5nPXshIWxvYWRpbmd9XG4gICAgICAgICAgICB0aXA9e3R5cGVvZiBsb2FkaW5nID09PSAnc3RyaW5nJyA/IGxvYWRpbmcgOiAnTMOkZHQgLi4uJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtsZWZ0QnV0dG9ucyAmJiA8VGl0bGVCdXR0b25zIGxlZnQ+e2xlZnRCdXR0b25zfTwvVGl0bGVCdXR0b25zPn1cbiAgICAgICAgICAgICAgICB7cmlnaHRCdXR0b25zICYmIChcbiAgICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbnMgcmlnaHQ+e3JpZ2h0QnV0dG9uc308L1RpdGxlQnV0dG9ucz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge0NoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWJvZHlcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtmb290ZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NwaW4+XG4gICAgICAgICAge2NvcHlyaWdodCAmJiA8Y29tcG9uZW50LkNvcHlyaWdodD57Y29weXJpZ2h0fTwvY29tcG9uZW50LkNvcHlyaWdodD59XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH0sXG4pO1xuXG5jb25zdCBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBwYWRkaW5nLCB3aWR0aCwgYm90dG9tVHJhbnNwYXJlbmN5LCB0b3BUcmFuc3BhcmVuY3kgfSkgPT4gKHtcbiAgICAuLi5nZXRBbnRTdHlsZSh7IHRoZW1lIH0pLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgwZGVnLCAke3RoZW1lLmNvbG9yRW5kIHx8XG4gICAgICB0aW55Y29sb3IodGhlbWUuY29sb3IpXG4gICAgICAgIC5kYXJrZW4oNilcbiAgICAgICAgLnNwaW4oLTYpXG4gICAgICAgIC5zZXRBbHBoYShib3R0b21UcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9LCAke3RoZW1lLmNvbG9yU3RhcnQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oNilcbiAgICAgICAgLnNwaW4oMTIpXG4gICAgICAgIC5zZXRBbHBoYSh0b3BUcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9KWAsXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgJz4gLmFudC1tb2RhbCc6IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICB3aWR0aDogd2lkdGggfHwgNDgwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2U0LFxuICAgICAgJz4gLmxvZ28nOiB7XG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgIG1hcmdpblRvcDogLTE0MCxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgJz4gaW1nJzoge1xuICAgICAgICAgIGhlaWdodDogNzUsXG4gICAgICAgIH0sXG4gICAgICAgICc+IGgzJzoge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5saWdodDEsXG4gICAgICAgICAgZm9udFdlaWdodDogMjAwLFxuICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnPiBkaXYgPiBkaXYnOiB7XG4gICAgICAgICc+IC5hbnQtbW9kYWwtY29udGVudCc6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAnPiAuYW50LW1vZGFsLWNsb3NlJzoge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1ib2R5Jzoge1xuICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZyA9PT0gdW5kZWZpbmVkID8gdGhlbWUuc3BhY2UyIDogcGFkZGluZyxcbiAgICAgICAgICAgICc+IConOiB7XG4gICAgICAgICAgICAgIG1hcmdpblk6IHRoZW1lLnNwYWNlMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJiAuYW50LWlucHV0LWdyb3VwLXdyYXBwZXInOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1oZWFkZXIgPiAuYW50LW1vZGFsLXRpdGxlJzoge1xuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgLy8gZm9udFdlaWdodDogMjAwLFxuICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1oZWFkZXInOiB7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLmFudC1tb2RhbC1mb290ZXInOiB7XG4gICAgICAgICAgICBoYXNGbGV4OiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTEsXG4gICAgICAgICAgICAnPiAuYW50LWJ0bic6IHtcbiAgICAgICAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjZTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBNb2RhbCxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbi8vIENvcHlyaWdodFxuY29tcG9uZW50LkNvcHlyaWdodCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IDEwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcmlnaHQ6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnPiBhJzoge1xuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLjMsXG4gICAgICBvbkhvdmVyOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAnZGl2Jyxcbik7XG5cbmNvbXBvbmVudC5Gb290ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NuKCdhbnQtbW9kYWwtZm9vdGVyJywgY2xhc3NOYW1lKX0+e2NoaWxkcmVufTwvZGl2PlxuKTtcbmNvbXBvbmVudC5CdXR0b24gPSBwcm9wcyA9PiA8QW50QnV0dG9uIHsuLi5wcm9wc30gLz47XG5cbmNvbnN0IFRpdGxlQnV0dG9ucyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGxlZnQsIHJpZ2h0IH0pID0+ICh7XG4gICAgbWFyZ2luOiAwLFxuICAgIGxpbmVIZWlnaHQ6ICcyMXB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiBsZWZ0ICYmIDE2LFxuICAgIHJpZ2h0OiByaWdodCAmJiAxNixcbiAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgZm9udFNpemU6IDQwLFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGxlZnQsIHJpZ2h0LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xuIl19
