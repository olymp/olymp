import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/button/style';
import _Button2 from 'antd/lib/button';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children } from 'react';
import { createComponent, border } from 'olymp-fela';


var StyledInner = createComponent(function (_ref) {
  var theme = _ref.theme,
      padding = _ref.padding,
      paddingX = _ref.paddingX,
      paddingY = _ref.paddingY,
      width = _ref.width,
      right = _ref.right,
      darkened = _ref.darkened,
      borderLess = _ref.borderLess;
  return {
    width: width === '100%' ? undefined : width,
    minWidth: width === '100%' ? undefined : width,
    maxWidth: width,
    height: '100%',
    transition: 'width .25s ease,min-width .25s ease,max-width .25s ease',
    // boxShadow: theme.boxShadow,
    zIndex: 2,
    paddingBottom: 0,
    paddingTop: 0,
    '& .expander': {
      opacity: 0,
      pointerEvents: 'none',
      position: 'absolute',
      left: -45,
      fontSize: 30,
      top: '50%',
      color: 'white',
      transform: 'rotate(270deg)',
      // transition: 'opacity .4s ease',
      zIndex: 2,
      '> svg': {
        float: 'right',
        position: 'absolute',
        top: 12,
        right: -35
      }
    },
    onAfter: {
      content: '""',
      opacity: darkened ? 1 : 0,
      // transition: 'opacity .4s ease',
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: theme.dark2,
      boxShadow: 'inset -6px 0 5px -5px #444',
      zIndex: 1,
      display: 'block'
    },
    '> .ant-modal-content': {
      borderRight: !borderLess && !right && '1px solid rgb(233, 233, 233)',
      borderLeft: !borderLess && right && '1px solid rgb(233, 233, 233)',
      hasFlex: {
        display: 'flex',
        flexDirection: 'column'
      },
      height: '100%',
      borderRadius: 0,
      // backgroundColor: 'rgba(0, 0, 0, 0.01)',
      boxShadow: 'none',
      '> .ant-modal-close': {
        display: 'none'
      },
      '> .ant-modal-header': {
        textAlign: 'center',
        position: 'relative',
        backgroundColor: '#FFF',
        padding: 0,
        border: 0,
        '> *:first-child': {
          borderBottom: border(theme)
        },
        '& .ant-modal-title': {
          overflowY: 'visible',
          paddingX: '2.5rem',
          paddingBottom: theme.space3,
          ellipsis: true
        }
      },
      '> .ant-modal-body': {
        '& .ant-collapse': {
          border: 0,
          borderRadius: 0,
          '> .ant-collapse-item': {
            borderRadius: 0,
            '> .ant-collapse-content': {
              padding: 0,
              '> .ant-collapse-content-box': {
                padding: 0
              }
            }
          }
        },
        '& .ant-tabs > .ant-tabs-bar': {
          marginBottom: 0,
          hasFlex: {
            '& .ant-tabs-nav': {
              display: 'flex',
              '>  .ant-tabs-tab': {
                flex: '1 1 0%',
                textAlign: 'center'
              }
            }
          }
        },
        flex: '1 1 0%',
        overflowY: 'auto',
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        padding: padding,
        position: 'relative'
        // boxShadow: 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.05)',
      },
      '> .ant-modal-footer': {
        backgroundColor: 'rgba(0, 0, 0, 0.015)',
        // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
        border: 0,
        borderTop: !borderLess && border(theme),
        '> div > .ant-btn': {
          width: 'calc(50% - 4px)',
          maxWidth: 200
        }
      }
    }
  };
}, 'aside', function (_ref2) {
  var right = _ref2.right,
      padding = _ref2.padding,
      paddingX = _ref2.paddingX,
      paddingY = _ref2.paddingY,
      width = _ref2.width,
      minWidth = _ref2.minWidth,
      maxWidth = _ref2.maxWidth,
      darkened = _ref2.darkened,
      borderLess = _ref2.borderLess,
      p = _objectWithoutProperties(_ref2, ['right', 'padding', 'paddingX', 'paddingY', 'width', 'minWidth', 'maxWidth', 'darkened', 'borderLess']);

  return Object.keys(p);
});

var Title = createComponent(function (_ref3) {
  var theme = _ref3.theme;
  return {
    position: 'relative',
    padding: '1rem',
    '> .ant-modal-title': {
      color: theme.dark2,
      fontSize: 40,
      padding: 10
    }
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var TitleButtons = createComponent(function (_ref4) {
  var left = _ref4.left,
      right = _ref4.right;
  return {
    margin: 0,
    lineHeight: '21px',
    position: 'absolute',
    left: left && 0,
    right: right && 0,
    fontSize: 40,
    padding: '0 1rem',
    top: '50%',
    transform: 'translateY(-50%)'
  };
}, 'div', function (_ref5) {
  var left = _ref5.left,
      right = _ref5.right,
      p = _objectWithoutProperties(_ref5, ['left', 'right']);

  return Object.keys(p);
});

var _ref7 = React.createElement(_Icon, { type: 'double-right' });

var Sidebar = function Sidebar(_ref6) {
  var children = _ref6.children,
      isOpen = _ref6.isOpen,
      showLogo = _ref6.showLogo,
      leftButtons = _ref6.leftButtons,
      rightButtons = _ref6.rightButtons,
      className = _ref6.className,
      subtitle = _ref6.subtitle,
      onClose = _ref6.onClose,
      onCancel = _ref6.onCancel,
      okText = _ref6.okText,
      cancelText = _ref6.cancelText,
      onOk = _ref6.onOk,
      title = _ref6.title,
      header = _ref6.header,
      footer = _ref6.footer,
      props = _objectWithoutProperties(_ref6, ['children', 'isOpen', 'showLogo', 'leftButtons', 'rightButtons', 'className', 'subtitle', 'onClose', 'onCancel', 'okText', 'cancelText', 'onOk', 'title', 'header', 'footer']);

  return isOpen ? React.createElement(
    StyledInner,
    props,
    React.createElement(
      'div',
      { className: 'ant-modal-content' },
      leftButtons || rightButtons || title || subtitle || header ? React.createElement(
        'div',
        { className: 'ant-modal-header' },
        leftButtons || rightButtons || title || subtitle ? React.createElement(
          Title,
          null,
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
          ),
          subtitle && React.createElement(
            'div',
            { className: 'ant-modal-subtitle' },
            subtitle
          )
        ) : null,
        header
      ) : null,
      Children.toArray(children).length > 0 && React.createElement(
        'div',
        { className: 'ant-modal-body' },
        children
      ),
      footer ? React.createElement(
        'div',
        { className: 'ant-modal-footer' },
        footer
      ) : null
    )
  ) : React.createElement(
    StyledInner,
    _extends({}, props, { minWidth: 64 }),
    React.createElement(
      'div',
      { className: 'ant-modal-content' },
      React.createElement(
        'div',
        { className: 'ant-modal-header' },
        React.createElement(
          _Button2.Group,
          null,
          React.createElement(
            _Button,
            { onClick: function onClick() {} },
            _ref7
          )
        )
      )
    )
  );
};
Sidebar.defaultProps = { width: 350, padding: 0, isOpen: true };

export default Sidebar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL3NpZGViYXIvc2lkZWJhci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNyZWF0ZUNvbXBvbmVudCIsImJvcmRlciIsIlN0eWxlZElubmVyIiwidGhlbWUiLCJwYWRkaW5nIiwicGFkZGluZ1giLCJwYWRkaW5nWSIsIndpZHRoIiwicmlnaHQiLCJkYXJrZW5lZCIsImJvcmRlckxlc3MiLCJ1bmRlZmluZWQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsInpJbmRleCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJwb3NpdGlvbiIsImxlZnQiLCJmb250U2l6ZSIsInRvcCIsImNvbG9yIiwidHJhbnNmb3JtIiwiZmxvYXQiLCJvbkFmdGVyIiwiY29udGVudCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImRhcmsyIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImJvcmRlclJpZ2h0IiwiYm9yZGVyTGVmdCIsImhhc0ZsZXgiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwiYm9yZGVyQm90dG9tIiwib3ZlcmZsb3dZIiwic3BhY2UzIiwiZWxsaXBzaXMiLCJtYXJnaW5Cb3R0b20iLCJmbGV4IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJUb3AiLCJwIiwiT2JqZWN0Iiwia2V5cyIsIlRpdGxlIiwiVGl0bGVCdXR0b25zIiwibWFyZ2luIiwibGluZUhlaWdodCIsIlNpZGViYXIiLCJjaGlsZHJlbiIsImlzT3BlbiIsInNob3dMb2dvIiwibGVmdEJ1dHRvbnMiLCJyaWdodEJ1dHRvbnMiLCJjbGFzc05hbWUiLCJzdWJ0aXRsZSIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIm9rVGV4dCIsImNhbmNlbFRleHQiLCJvbk9rIiwidGl0bGUiLCJoZWFkZXIiLCJmb290ZXIiLCJwcm9wcyIs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QTZCRTtBQUFDLGVBQUQ7QUFBQSxpQkFBaUJDLEtBQWpCLElBQXdCLFVBQVUsRUFBbEM7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUEsbUJBQVEsS0FBUjtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUyxtQkFBTSxDQUFFLENBQXpCO0FBQUE7QUFBQTtBQURGO0FBREY7QUFERjtBQURGLEdBL0NZO0FBQUEsQ0FBaEI7QUEyREFoQixRQUFRbUIsWUFBUixHQUF1QixFQUFFckUsT0FBTyxHQUFULEVBQWNILFNBQVMsQ0FBdkIsRUFBMEJ1RCxRQUFRLElBQWxDLEVBQXZCOztBQUVBLGVBQWVGLE9BQWYiLCJmaWxlIjoicGFja2FnZXMvdWkvc2lkZWJhci9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBib3JkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEljb24sIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBTdHlsZWRJbm5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHtcbiAgICB0aGVtZSxcbiAgICBwYWRkaW5nLFxuICAgIHBhZGRpbmdYLFxuICAgIHBhZGRpbmdZLFxuICAgIHdpZHRoLFxuICAgIHJpZ2h0LFxuICAgIGRhcmtlbmVkLFxuICAgIGJvcmRlckxlc3MsXG4gIH0pID0+ICh7XG4gICAgd2lkdGg6IHdpZHRoID09PSAnMTAwJScgPyB1bmRlZmluZWQgOiB3aWR0aCxcbiAgICBtaW5XaWR0aDogd2lkdGggPT09ICcxMDAlJyA/IHVuZGVmaW5lZCA6IHdpZHRoLFxuICAgIG1heFdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggLjI1cyBlYXNlLG1pbi13aWR0aCAuMjVzIGVhc2UsbWF4LXdpZHRoIC4yNXMgZWFzZScsXG4gICAgLy8gYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3csXG4gICAgekluZGV4OiAyLFxuICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgcGFkZGluZ1RvcDogMCxcbiAgICAnJiAuZXhwYW5kZXInOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAtNDUsXG4gICAgICBmb250U2l6ZTogMzAsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKScsXG4gICAgICAvLyB0cmFuc2l0aW9uOiAnb3BhY2l0eSAuNHMgZWFzZScsXG4gICAgICB6SW5kZXg6IDIsXG4gICAgICAnPiBzdmcnOiB7XG4gICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAxMixcbiAgICAgICAgcmlnaHQ6IC0zNSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvbkFmdGVyOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBvcGFjaXR5OiBkYXJrZW5lZCA/IDEgOiAwLFxuICAgICAgLy8gdHJhbnNpdGlvbjogJ29wYWNpdHkgLjRzIGVhc2UnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGFyazIsXG4gICAgICBib3hTaGFkb3c6IGBpbnNldCAtNnB4IDAgNXB4IC01cHggIzQ0NGAsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gICAgJz4gLmFudC1tb2RhbC1jb250ZW50Jzoge1xuICAgICAgYm9yZGVyUmlnaHQ6ICFib3JkZXJMZXNzICYmICFyaWdodCAmJiAnMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKScsXG4gICAgICBib3JkZXJMZWZ0OiAhYm9yZGVyTGVzcyAmJiByaWdodCAmJiAnMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKScsXG4gICAgICBoYXNGbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDEpJyxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgJz4gLmFudC1tb2RhbC1jbG9zZSc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSxcbiAgICAgICc+IC5hbnQtbW9kYWwtaGVhZGVyJzoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgJz4gKjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IGJvcmRlcih0aGVtZSksXG4gICAgICAgIH0sXG4gICAgICAgICcmIC5hbnQtbW9kYWwtdGl0bGUnOiB7XG4gICAgICAgICAgb3ZlcmZsb3dZOiAndmlzaWJsZScsXG4gICAgICAgICAgcGFkZGluZ1g6ICcyLjVyZW0nLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNlMyxcbiAgICAgICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LW1vZGFsLWJvZHknOiB7XG4gICAgICAgICcmIC5hbnQtY29sbGFwc2UnOiB7XG4gICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgICAgICAnPiAuYW50LWNvbGxhcHNlLWl0ZW0nOiB7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgICAgICAnPiAuYW50LWNvbGxhcHNlLWNvbnRlbnQnOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICc+IC5hbnQtY29sbGFwc2UtY29udGVudC1ib3gnOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgLmFudC10YWJzID4gLmFudC10YWJzLWJhcic6IHtcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICAgICAgaGFzRmxleDoge1xuICAgICAgICAgICAgJyYgLmFudC10YWJzLW5hdic6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAnPiAgLmFudC10YWJzLXRhYic6IHtcbiAgICAgICAgICAgICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nWCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nWCxcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ1ksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdZLFxuICAgICAgICBwYWRkaW5nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgLy8gYm94U2hhZG93OiAnaW5zZXQgMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LW1vZGFsLWZvb3Rlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjAxNSknLFxuICAgICAgICAvLyBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgYm9yZGVyVG9wOiAhYm9yZGVyTGVzcyAmJiBib3JkZXIodGhlbWUpLFxuICAgICAgICAnPiBkaXYgPiAuYW50LWJ0bic6IHtcbiAgICAgICAgICB3aWR0aDogJ2NhbGMoNTAlIC0gNHB4KScsXG4gICAgICAgICAgbWF4V2lkdGg6IDIwMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdhc2lkZScsXG4gICh7XG4gICAgcmlnaHQsXG4gICAgcGFkZGluZyxcbiAgICBwYWRkaW5nWCxcbiAgICBwYWRkaW5nWSxcbiAgICB3aWR0aCxcbiAgICBtaW5XaWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBkYXJrZW5lZCxcbiAgICBib3JkZXJMZXNzLFxuICAgIC4uLnBcbiAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBUaXRsZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nOiAnMXJlbScsXG4gICAgJz4gLmFudC1tb2RhbC10aXRsZSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrMixcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IFRpdGxlQnV0dG9ucyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgbGVmdCwgcmlnaHQgfSkgPT4gKHtcbiAgICBtYXJnaW46IDAsXG4gICAgbGluZUhlaWdodDogJzIxcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IGxlZnQgJiYgMCxcbiAgICByaWdodDogcmlnaHQgJiYgMCxcbiAgICBmb250U2l6ZTogNDAsXG4gICAgcGFkZGluZzogJzAgMXJlbScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBsZWZ0LCByaWdodCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IFNpZGViYXIgPSAoe1xuICBjaGlsZHJlbixcbiAgaXNPcGVuLFxuICBzaG93TG9nbyxcbiAgbGVmdEJ1dHRvbnMsXG4gIHJpZ2h0QnV0dG9ucyxcbiAgY2xhc3NOYW1lLFxuICBzdWJ0aXRsZSxcbiAgb25DbG9zZSxcbiAgb25DYW5jZWwsXG4gIG9rVGV4dCxcbiAgY2FuY2VsVGV4dCxcbiAgb25PayxcbiAgdGl0bGUsXG4gIGhlYWRlcixcbiAgZm9vdGVyLFxuICAuLi5wcm9wc1xufSkgPT5cbiAgaXNPcGVuID8gKFxuICAgIDxTdHlsZWRJbm5lciB7Li4ucHJvcHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtY29udGVudFwiPlxuICAgICAgICB7bGVmdEJ1dHRvbnMgfHwgcmlnaHRCdXR0b25zIHx8IHRpdGxlIHx8IHN1YnRpdGxlIHx8IGhlYWRlciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIHtsZWZ0QnV0dG9ucyB8fCByaWdodEJ1dHRvbnMgfHwgdGl0bGUgfHwgc3VidGl0bGUgPyAoXG4gICAgICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgICAgICB7bGVmdEJ1dHRvbnMgJiYgPFRpdGxlQnV0dG9ucyBsZWZ0PntsZWZ0QnV0dG9uc308L1RpdGxlQnV0dG9ucz59XG4gICAgICAgICAgICAgICAge3JpZ2h0QnV0dG9ucyAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGl0bGVCdXR0b25zIHJpZ2h0PntyaWdodEJ1dHRvbnN9PC9UaXRsZUJ1dHRvbnM+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC10aXRsZVwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtc3VidGl0bGVcIj57c3VidGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAge0NoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWJvZHlcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2Zvb3RlciA/IDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWZvb3RlclwiPntmb290ZXJ9PC9kaXY+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkSW5uZXI+XG4gICkgOiAoXG4gICAgPFN0eWxlZElubmVyIHsuLi5wcm9wc30gbWluV2lkdGg9ezY0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge319PlxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZG91YmxlLXJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkSW5uZXI+XG4gICk7XG5TaWRlYmFyLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDM1MCwgcGFkZGluZzogMCwgaXNPcGVuOiB0cnVlIH07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXX0=
