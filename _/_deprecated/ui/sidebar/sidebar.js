'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/icon/style');

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StyledInner = (0, _olympFela.createComponent)(function (_ref) {
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
          borderBottom: (0, _olympFela.border)(theme)
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
        borderTop: !borderLess && (0, _olympFela.border)(theme),
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

var Title = (0, _olympFela.createComponent)(function (_ref3) {
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

var TitleButtons = (0, _olympFela.createComponent)(function (_ref4) {
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

var _ref7 = _react2.default.createElement(_icon2.default, { type: 'double-right' });

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

  return isOpen ? _react2.default.createElement(
    StyledInner,
    props,
    _react2.default.createElement(
      'div',
      { className: 'ant-modal-content' },
      leftButtons || rightButtons || title || subtitle || header ? _react2.default.createElement(
        'div',
        { className: 'ant-modal-header' },
        leftButtons || rightButtons || title || subtitle ? _react2.default.createElement(
          Title,
          null,
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
          ),
          subtitle && _react2.default.createElement(
            'div',
            { className: 'ant-modal-subtitle' },
            subtitle
          )
        ) : null,
        header
      ) : null,
      _react.Children.toArray(children).length > 0 && _react2.default.createElement(
        'div',
        { className: 'ant-modal-body' },
        children
      ),
      footer ? _react2.default.createElement(
        'div',
        { className: 'ant-modal-footer' },
        footer
      ) : null
    )
  ) : _react2.default.createElement(
    StyledInner,
    _extends({}, props, { minWidth: 64 }),
    _react2.default.createElement(
      'div',
      { className: 'ant-modal-content' },
      _react2.default.createElement(
        'div',
        { className: 'ant-modal-header' },
        _react2.default.createElement(
          _button2.default.Group,
          null,
          _react2.default.createElement(
            _button2.default,
            { onClick: function onClick() {} },
            _ref7
          )
        )
      )
    )
  );
};
Sidebar.defaultProps = { width: 350, padding: 0, isOpen: true };

exports.default = Sidebar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL3NpZGViYXIvc2lkZWJhci5lczYiXSwibmFtZXMiOlsiU3R5bGVkSW5uZXIiLCJ0aGVtZSIsInBhZGRpbmciLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwid2lkdGgiLCJyaWdodCIsImRhcmtlbmVkIiwiYm9yZGVyTGVzcyIsInVuZGVmaW5lZCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiekluZGV4IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsInBvc2l0aW9uIiwibGVmdCIsImZvbnRTaXplIiwidG9wIiwiY29sb3IiLCJ0cmFuc2Zvcm0iLCJmbG9hdCIsIm9uQWZ0ZXIiLCJjb250ZW50IiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiZGFyazIiLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwiYm9yZGVyUmlnaHQiLCJib3JkZXJMZWZ0IiwiaGFzRmxleCIsImZsZXhEaXJlY3Rpb24iLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJvdmVyZmxvd1kiLCJzcGFjZTMiLCJlbGxpcHNpcyIsIm1hcmdpbkJvdHRvbSIsImZsZXgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJvcmRlclRvcCIsInAiLCJPYmplY3QiLCJrZXlzIiwiVGl0bGUiLCJUaXRsZUJ1dHRvbnMiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiU2lkZWJhciIsImNoaWxkcmVuIiwiaXNPcGVuIiwic2hvd0xvZ28iLCJsZWZ0QnV0dG9ucyIsInJpZ2h0QnV0dG9ucyIsImNsYXNzTmFtZSIsInN1YnRpdGxlIiwib25DbG9zZSIsIm9uQ2FuY2VsIiwib2tUZXh0IiwiY2FuY2VsVGV4dCIsIm9uT2siLCJ0aXRsZSIsImhlYWRlciIsImZvb3RlciIsInByb3BzIiwidG9BcnJheSIsImxlbmd0aCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxjQUFjLGdDQUNsQjtBQUFBLE1BQ0VDLEtBREYsUUFDRUEsS0FERjtBQUFBLE1BRUVDLE9BRkYsUUFFRUEsT0FGRjtBQUFBLE1BR0VDLFFBSEYsUUFHRUEsUUFIRjtBQUFBLE1BSUVDLFFBSkYsUUFJRUEsUUFKRjtBQUFBLE1BS0VDLEtBTEYsUUFLRUEsS0FMRjtBQUFBLE1BTUVDLEtBTkYsUUFNRUEsS0FORjtBQUFBLE1BT0VDLFFBUEYsUUFPRUEsUUFQRjtBQUFBLE1BUUVDLFVBUkYsUUFRRUEsVUFSRjtBQUFBLFNBU087QUFDTEgsV0FBT0EsVUFBVSxNQUFWLEdBQW1CSSxTQUFuQixHQUErQkosS0FEakM7QUFFTEssY0FBVUwsVUFBVSxNQUFWLEdBQW1CSSxTQUFuQixHQUErQkosS0FGcEM7QUFHTE0sY0FBVU4sS0FITDtBQUlMTyxZQUFRLE1BSkg7QUFLTEMsZ0JBQVkseURBTFA7QUFNTDtBQUNBQyxZQUFRLENBUEg7QUFRTEMsbUJBQWUsQ0FSVjtBQVNMQyxnQkFBWSxDQVRQO0FBVUwsbUJBQWU7QUFDYkMsZUFBUyxDQURJO0FBRWJDLHFCQUFlLE1BRkY7QUFHYkMsZ0JBQVUsVUFIRztBQUliQyxZQUFNLENBQUMsRUFKTTtBQUtiQyxnQkFBVSxFQUxHO0FBTWJDLFdBQUssS0FOUTtBQU9iQyxhQUFPLE9BUE07QUFRYkMsaUJBQVcsZ0JBUkU7QUFTYjtBQUNBVixjQUFRLENBVks7QUFXYixlQUFTO0FBQ1BXLGVBQU8sT0FEQTtBQUVQTixrQkFBVSxVQUZIO0FBR1BHLGFBQUssRUFIRTtBQUlQaEIsZUFBTyxDQUFDO0FBSkQ7QUFYSSxLQVZWO0FBNEJMb0IsYUFBUztBQUNQQyxlQUFTLElBREY7QUFFUFYsZUFBU1YsV0FBVyxDQUFYLEdBQWUsQ0FGakI7QUFHUDtBQUNBVyxxQkFBZSxNQUpSO0FBS1BDLGdCQUFVLFVBTEg7QUFNUEcsV0FBSyxDQU5FO0FBT1BNLGNBQVEsQ0FQRDtBQVFQUixZQUFNLENBUkM7QUFTUGYsYUFBTyxNQVRBO0FBVVB3Qix1QkFBaUI1QixNQUFNNkIsS0FWaEI7QUFXUEMsNkNBWE87QUFZUGpCLGNBQVEsQ0FaRDtBQWFQa0IsZUFBUztBQWJGLEtBNUJKO0FBMkNMLDRCQUF3QjtBQUN0QkMsbUJBQWEsQ0FBQ3pCLFVBQUQsSUFBZSxDQUFDRixLQUFoQixJQUF5Qiw4QkFEaEI7QUFFdEI0QixrQkFBWSxDQUFDMUIsVUFBRCxJQUFlRixLQUFmLElBQXdCLDhCQUZkO0FBR3RCNkIsZUFBUztBQUNQSCxpQkFBUyxNQURGO0FBRVBJLHVCQUFlO0FBRlIsT0FIYTtBQU90QnhCLGNBQVEsTUFQYztBQVF0QnlCLG9CQUFjLENBUlE7QUFTdEI7QUFDQU4saUJBQVcsTUFWVztBQVd0Qiw0QkFBc0I7QUFDcEJDLGlCQUFTO0FBRFcsT0FYQTtBQWN0Qiw2QkFBdUI7QUFDckJNLG1CQUFXLFFBRFU7QUFFckJuQixrQkFBVSxVQUZXO0FBR3JCVSx5QkFBaUIsTUFISTtBQUlyQjNCLGlCQUFTLENBSlk7QUFLckJxQyxnQkFBUSxDQUxhO0FBTXJCLDJCQUFtQjtBQUNqQkMsd0JBQWMsdUJBQU92QyxLQUFQO0FBREcsU0FORTtBQVNyQiw4QkFBc0I7QUFDcEJ3QyxxQkFBVyxTQURTO0FBRXBCdEMsb0JBQVUsUUFGVTtBQUdwQlkseUJBQWVkLE1BQU15QyxNQUhEO0FBSXBCQyxvQkFBVTtBQUpVO0FBVEQsT0FkRDtBQThCdEIsMkJBQXFCO0FBQ25CLDJCQUFtQjtBQUNqQkosa0JBQVEsQ0FEUztBQUVqQkYsd0JBQWMsQ0FGRztBQUdqQixrQ0FBd0I7QUFDdEJBLDBCQUFjLENBRFE7QUFFdEIsdUNBQTJCO0FBQ3pCbkMsdUJBQVMsQ0FEZ0I7QUFFekIsNkNBQStCO0FBQzdCQSx5QkFBUztBQURvQjtBQUZOO0FBRkw7QUFIUCxTQURBO0FBY25CLHVDQUErQjtBQUM3QjBDLHdCQUFjLENBRGU7QUFFN0JULG1CQUFTO0FBQ1AsK0JBQW1CO0FBQ2pCSCx1QkFBUyxNQURRO0FBRWpCLGtDQUFvQjtBQUNsQmEsc0JBQU0sUUFEWTtBQUVsQlAsMkJBQVc7QUFGTztBQUZIO0FBRFo7QUFGb0IsU0FkWjtBQTBCbkJPLGNBQU0sUUExQmE7QUEyQm5CSixtQkFBVyxNQTNCUTtBQTRCbkJLLHFCQUFhM0MsUUE1Qk07QUE2Qm5CNEMsc0JBQWM1QyxRQTdCSztBQThCbkJhLG9CQUFZWixRQTlCTztBQStCbkJXLHVCQUFlWCxRQS9CSTtBQWdDbkJGLHdCQWhDbUI7QUFpQ25CaUIsa0JBQVU7QUFDVjtBQWxDbUIsT0E5QkM7QUFrRXRCLDZCQUF1QjtBQUNyQlUseUJBQWlCLHNCQURJO0FBRXJCO0FBQ0FVLGdCQUFRLENBSGE7QUFJckJTLG1CQUFXLENBQUN4QyxVQUFELElBQWUsdUJBQU9QLEtBQVAsQ0FKTDtBQUtyQiw0QkFBb0I7QUFDbEJJLGlCQUFPLGlCQURXO0FBRWxCTSxvQkFBVTtBQUZRO0FBTEM7QUFsRUQ7QUEzQ25CLEdBVFA7QUFBQSxDQURrQixFQW1JbEIsT0FuSWtCLEVBb0lsQjtBQUFBLE1BQ0VMLEtBREYsU0FDRUEsS0FERjtBQUFBLE1BRUVKLE9BRkYsU0FFRUEsT0FGRjtBQUFBLE1BR0VDLFFBSEYsU0FHRUEsUUFIRjtBQUFBLE1BSUVDLFFBSkYsU0FJRUEsUUFKRjtBQUFBLE1BS0VDLEtBTEYsU0FLRUEsS0FMRjtBQUFBLE1BTUVLLFFBTkYsU0FNRUEsUUFORjtBQUFBLE1BT0VDLFFBUEYsU0FPRUEsUUFQRjtBQUFBLE1BUUVKLFFBUkYsU0FRRUEsUUFSRjtBQUFBLE1BU0VDLFVBVEYsU0FTRUEsVUFURjtBQUFBLE1BVUt5QyxDQVZMOztBQUFBLFNBV01DLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQVhOO0FBQUEsQ0FwSWtCLENBQXBCOztBQWtKQSxJQUFNRyxRQUFRLGdDQUNaO0FBQUEsTUFBR25ELEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RrQixjQUFVLFVBREk7QUFFZGpCLGFBQVMsTUFGSztBQUdkLDBCQUFzQjtBQUNwQnFCLGFBQU90QixNQUFNNkIsS0FETztBQUVwQlQsZ0JBQVUsRUFGVTtBQUdwQm5CLGVBQVM7QUFIVztBQUhSLEdBQWhCO0FBQUEsQ0FEWSxFQVVaLEtBVlksRUFXWjtBQUFBLFNBQUtnRCxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBWFksQ0FBZDs7QUFjQSxJQUFNSSxlQUFlLGdDQUNuQjtBQUFBLE1BQUdqQyxJQUFILFNBQUdBLElBQUg7QUFBQSxNQUFTZCxLQUFULFNBQVNBLEtBQVQ7QUFBQSxTQUFzQjtBQUNwQmdELFlBQVEsQ0FEWTtBQUVwQkMsZ0JBQVksTUFGUTtBQUdwQnBDLGNBQVUsVUFIVTtBQUlwQkMsVUFBTUEsUUFBUSxDQUpNO0FBS3BCZCxXQUFPQSxTQUFTLENBTEk7QUFNcEJlLGNBQVUsRUFOVTtBQU9wQm5CLGFBQVMsUUFQVztBQVFwQm9CLFNBQUssS0FSZTtBQVNwQkUsZUFBVztBQVRTLEdBQXRCO0FBQUEsQ0FEbUIsRUFZbkIsS0FabUIsRUFhbkI7QUFBQSxNQUFHSixJQUFILFNBQUdBLElBQUg7QUFBQSxNQUFTZCxLQUFULFNBQVNBLEtBQVQ7QUFBQSxNQUFtQjJDLENBQW5COztBQUFBLFNBQTJCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBM0I7QUFBQSxDQWJtQixDQUFyQjs7WUFvRWMsZ0RBQU0sTUFBSyxjQUFYLEc7O0FBcERkLElBQU1PLFVBQVUsU0FBVkEsT0FBVTtBQUFBLE1BQ2RDLFFBRGMsU0FDZEEsUUFEYztBQUFBLE1BRWRDLE1BRmMsU0FFZEEsTUFGYztBQUFBLE1BR2RDLFFBSGMsU0FHZEEsUUFIYztBQUFBLE1BSWRDLFdBSmMsU0FJZEEsV0FKYztBQUFBLE1BS2RDLFlBTGMsU0FLZEEsWUFMYztBQUFBLE1BTWRDLFNBTmMsU0FNZEEsU0FOYztBQUFBLE1BT2RDLFFBUGMsU0FPZEEsUUFQYztBQUFBLE1BUWRDLE9BUmMsU0FRZEEsT0FSYztBQUFBLE1BU2RDLFFBVGMsU0FTZEEsUUFUYztBQUFBLE1BVWRDLE1BVmMsU0FVZEEsTUFWYztBQUFBLE1BV2RDLFVBWGMsU0FXZEEsVUFYYztBQUFBLE1BWWRDLElBWmMsU0FZZEEsSUFaYztBQUFBLE1BYWRDLEtBYmMsU0FhZEEsS0FiYztBQUFBLE1BY2RDLE1BZGMsU0FjZEEsTUFkYztBQUFBLE1BZWRDLE1BZmMsU0FlZEEsTUFmYztBQUFBLE1BZ0JYQyxLQWhCVzs7QUFBQSxTQWtCZGQsU0FDRTtBQUFDLGVBQUQ7QUFBaUJjLFNBQWpCO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxtQkFBZjtBQUNHWixxQkFBZUMsWUFBZixJQUErQlEsS0FBL0IsSUFBd0NOLFFBQXhDLElBQW9ETyxNQUFwRCxHQUNDO0FBQUE7QUFBQSxVQUFLLFdBQVUsa0JBQWY7QUFDR1YsdUJBQWVDLFlBQWYsSUFBK0JRLEtBQS9CLElBQXdDTixRQUF4QyxHQUNDO0FBQUMsZUFBRDtBQUFBO0FBQ0dILHlCQUFlO0FBQUMsd0JBQUQ7QUFBQSxjQUFjLFVBQWQ7QUFBb0JBO0FBQXBCLFdBRGxCO0FBRUdDLDBCQUNDO0FBQUMsd0JBQUQ7QUFBQSxjQUFjLFdBQWQ7QUFBcUJBO0FBQXJCLFdBSEo7QUFLRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGlCQUFmO0FBQWtDUTtBQUFsQyxXQUxGO0FBTUdOLHNCQUNDO0FBQUE7QUFBQSxjQUFLLFdBQVUsb0JBQWY7QUFBcUNBO0FBQXJDO0FBUEosU0FERCxHQVdHLElBWk47QUFhR087QUFiSCxPQURELEdBZ0JHLElBakJOO0FBbUJHLHNCQUFTRyxPQUFULENBQWlCaEIsUUFBakIsRUFBMkJpQixNQUEzQixHQUFvQyxDQUFwQyxJQUNDO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0JBQWY7QUFBaUNqQjtBQUFqQyxPQXBCSjtBQXVCR2MsZUFBUztBQUFBO0FBQUEsVUFBSyxXQUFVLGtCQUFmO0FBQW1DQTtBQUFuQyxPQUFULEdBQTREO0FBdkIvRDtBQURGLEdBREYsR0E2QkU7QUFBQyxlQUFEO0FBQUEsaUJBQWlCQyxLQUFqQixJQUF3QixVQUFVLEVBQWxDO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBLDJCQUFRLEtBQVI7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLFNBQVMsbUJBQU0sQ0FBRSxDQUF6QjtBQUFBO0FBQUE7QUFERjtBQURGO0FBREY7QUFERixHQS9DWTtBQUFBLENBQWhCO0FBMkRBaEIsUUFBUW1CLFlBQVIsR0FBdUIsRUFBRXRFLE9BQU8sR0FBVCxFQUFjSCxTQUFTLENBQXZCLEVBQTBCd0QsUUFBUSxJQUFsQyxFQUF2Qjs7a0JBRWVGLE8iLCJmaWxlIjoiZXh0ZXJuYWwvdWkvc2lkZWJhci9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBib3JkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEljb24sIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBTdHlsZWRJbm5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHtcbiAgICB0aGVtZSxcbiAgICBwYWRkaW5nLFxuICAgIHBhZGRpbmdYLFxuICAgIHBhZGRpbmdZLFxuICAgIHdpZHRoLFxuICAgIHJpZ2h0LFxuICAgIGRhcmtlbmVkLFxuICAgIGJvcmRlckxlc3MsXG4gIH0pID0+ICh7XG4gICAgd2lkdGg6IHdpZHRoID09PSAnMTAwJScgPyB1bmRlZmluZWQgOiB3aWR0aCxcbiAgICBtaW5XaWR0aDogd2lkdGggPT09ICcxMDAlJyA/IHVuZGVmaW5lZCA6IHdpZHRoLFxuICAgIG1heFdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggLjI1cyBlYXNlLG1pbi13aWR0aCAuMjVzIGVhc2UsbWF4LXdpZHRoIC4yNXMgZWFzZScsXG4gICAgLy8gYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3csXG4gICAgekluZGV4OiAyLFxuICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgcGFkZGluZ1RvcDogMCxcbiAgICAnJiAuZXhwYW5kZXInOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAtNDUsXG4gICAgICBmb250U2l6ZTogMzAsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKScsXG4gICAgICAvLyB0cmFuc2l0aW9uOiAnb3BhY2l0eSAuNHMgZWFzZScsXG4gICAgICB6SW5kZXg6IDIsXG4gICAgICAnPiBzdmcnOiB7XG4gICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAxMixcbiAgICAgICAgcmlnaHQ6IC0zNSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvbkFmdGVyOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBvcGFjaXR5OiBkYXJrZW5lZCA/IDEgOiAwLFxuICAgICAgLy8gdHJhbnNpdGlvbjogJ29wYWNpdHkgLjRzIGVhc2UnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGFyazIsXG4gICAgICBib3hTaGFkb3c6IGBpbnNldCAtNnB4IDAgNXB4IC01cHggIzQ0NGAsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gICAgJz4gLmFudC1tb2RhbC1jb250ZW50Jzoge1xuICAgICAgYm9yZGVyUmlnaHQ6ICFib3JkZXJMZXNzICYmICFyaWdodCAmJiAnMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKScsXG4gICAgICBib3JkZXJMZWZ0OiAhYm9yZGVyTGVzcyAmJiByaWdodCAmJiAnMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKScsXG4gICAgICBoYXNGbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDEpJyxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgJz4gLmFudC1tb2RhbC1jbG9zZSc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSxcbiAgICAgICc+IC5hbnQtbW9kYWwtaGVhZGVyJzoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgJz4gKjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IGJvcmRlcih0aGVtZSksXG4gICAgICAgIH0sXG4gICAgICAgICcmIC5hbnQtbW9kYWwtdGl0bGUnOiB7XG4gICAgICAgICAgb3ZlcmZsb3dZOiAndmlzaWJsZScsXG4gICAgICAgICAgcGFkZGluZ1g6ICcyLjVyZW0nLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNlMyxcbiAgICAgICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LW1vZGFsLWJvZHknOiB7XG4gICAgICAgICcmIC5hbnQtY29sbGFwc2UnOiB7XG4gICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgICAgICAnPiAuYW50LWNvbGxhcHNlLWl0ZW0nOiB7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgICAgICAnPiAuYW50LWNvbGxhcHNlLWNvbnRlbnQnOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICc+IC5hbnQtY29sbGFwc2UtY29udGVudC1ib3gnOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgLmFudC10YWJzID4gLmFudC10YWJzLWJhcic6IHtcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICAgICAgaGFzRmxleDoge1xuICAgICAgICAgICAgJyYgLmFudC10YWJzLW5hdic6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAnPiAgLmFudC10YWJzLXRhYic6IHtcbiAgICAgICAgICAgICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nWCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nWCxcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ1ksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdZLFxuICAgICAgICBwYWRkaW5nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgLy8gYm94U2hhZG93OiAnaW5zZXQgMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAgIH0sXG4gICAgICAnPiAuYW50LW1vZGFsLWZvb3Rlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjAxNSknLFxuICAgICAgICAvLyBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgYm9yZGVyVG9wOiAhYm9yZGVyTGVzcyAmJiBib3JkZXIodGhlbWUpLFxuICAgICAgICAnPiBkaXYgPiAuYW50LWJ0bic6IHtcbiAgICAgICAgICB3aWR0aDogJ2NhbGMoNTAlIC0gNHB4KScsXG4gICAgICAgICAgbWF4V2lkdGg6IDIwMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdhc2lkZScsXG4gICh7XG4gICAgcmlnaHQsXG4gICAgcGFkZGluZyxcbiAgICBwYWRkaW5nWCxcbiAgICBwYWRkaW5nWSxcbiAgICB3aWR0aCxcbiAgICBtaW5XaWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBkYXJrZW5lZCxcbiAgICBib3JkZXJMZXNzLFxuICAgIC4uLnBcbiAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBUaXRsZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nOiAnMXJlbScsXG4gICAgJz4gLmFudC1tb2RhbC10aXRsZSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrMixcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IFRpdGxlQnV0dG9ucyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgbGVmdCwgcmlnaHQgfSkgPT4gKHtcbiAgICBtYXJnaW46IDAsXG4gICAgbGluZUhlaWdodDogJzIxcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IGxlZnQgJiYgMCxcbiAgICByaWdodDogcmlnaHQgJiYgMCxcbiAgICBmb250U2l6ZTogNDAsXG4gICAgcGFkZGluZzogJzAgMXJlbScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBsZWZ0LCByaWdodCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IFNpZGViYXIgPSAoe1xuICBjaGlsZHJlbixcbiAgaXNPcGVuLFxuICBzaG93TG9nbyxcbiAgbGVmdEJ1dHRvbnMsXG4gIHJpZ2h0QnV0dG9ucyxcbiAgY2xhc3NOYW1lLFxuICBzdWJ0aXRsZSxcbiAgb25DbG9zZSxcbiAgb25DYW5jZWwsXG4gIG9rVGV4dCxcbiAgY2FuY2VsVGV4dCxcbiAgb25PayxcbiAgdGl0bGUsXG4gIGhlYWRlcixcbiAgZm9vdGVyLFxuICAuLi5wcm9wc1xufSkgPT5cbiAgaXNPcGVuID8gKFxuICAgIDxTdHlsZWRJbm5lciB7Li4ucHJvcHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtY29udGVudFwiPlxuICAgICAgICB7bGVmdEJ1dHRvbnMgfHwgcmlnaHRCdXR0b25zIHx8IHRpdGxlIHx8IHN1YnRpdGxlIHx8IGhlYWRlciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIHtsZWZ0QnV0dG9ucyB8fCByaWdodEJ1dHRvbnMgfHwgdGl0bGUgfHwgc3VidGl0bGUgPyAoXG4gICAgICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgICAgICB7bGVmdEJ1dHRvbnMgJiYgPFRpdGxlQnV0dG9ucyBsZWZ0PntsZWZ0QnV0dG9uc308L1RpdGxlQnV0dG9ucz59XG4gICAgICAgICAgICAgICAge3JpZ2h0QnV0dG9ucyAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGl0bGVCdXR0b25zIHJpZ2h0PntyaWdodEJ1dHRvbnN9PC9UaXRsZUJ1dHRvbnM+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1tb2RhbC10aXRsZVwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtc3VidGl0bGVcIj57c3VidGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAge0NoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWJvZHlcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2Zvb3RlciA/IDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWZvb3RlclwiPntmb290ZXJ9PC9kaXY+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkSW5uZXI+XG4gICkgOiAoXG4gICAgPFN0eWxlZElubmVyIHsuLi5wcm9wc30gbWluV2lkdGg9ezY0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge319PlxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZG91YmxlLXJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkSW5uZXI+XG4gICk7XG5TaWRlYmFyLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDM1MCwgcGFkZGluZzogMCwgaXNPcGVuOiB0cnVlIH07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXX0=
