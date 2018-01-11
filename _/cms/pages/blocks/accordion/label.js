'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _olympRouter = require('olymp-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Label = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      readOnly = _ref.readOnly;
  return {
    width: '100%',
    display: 'inline-block',
    // color: `${theme.color} !important`,
    borderBottom: (0, _olympFela.border)(theme),
    onHover: {
      borderBottom: (0, _olympFela.border)(theme, theme.color)
    },
    '> h2': {
      '> span': {
        float: 'left',
        cursor: readOnly && 'pointer',
        marginRight: 5
      },
      '> i': {
        float: 'right',
        cursor: 'pointer'
      }
    },
    clearfix: true
  };
}, function (_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    _olympRouter.Link,
    props,
    _react2.default.createElement(
      'h2',
      null,
      children
    )
  );
}, function (p) {
  return Object.keys(p);
});

exports.default = {
  type: 'accordionLabel',
  isVoid: false,
  kind: 'block',
  label: 'Überschrift',
  defaultText: 'Titel',
  component: (0, _olympRouter.withQueryParam)('accordion')(function (_ref3) {
    var attributes = _ref3.attributes,
        className = _ref3.className,
        children = _ref3.children,
        accordion = _ref3.accordion,
        editor = _ref3.editor,
        parent = _ref3.parent;
    return _react2.default.createElement(
      Label,
      _extends({
        className: className,
        readOnly: editor.props.readOnly,
        updateQuery: {
          accordion: accordion !== parent.data.get('id') ? parent.data.get('id') : undefined
        }
      }, attributes),
      _react2.default.createElement(
        'span',
        {
          onClick: !editor.props.readOnly ? function (x) {
            return x.stopPropagation();
          } : undefined
        },
        children
      ),
      _react2.default.createElement(_icon2.default, {
        contentEditable: false,
        type: accordion === parent.data.get('id') ? 'down-square-o' : 'left-square-o'
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvYWNjb3JkaW9uL2xhYmVsLmVzNiJdLCJuYW1lcyI6WyJMYWJlbCIsInRoZW1lIiwicmVhZE9ubHkiLCJ3aWR0aCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJvbkhvdmVyIiwiY29sb3IiLCJmbG9hdCIsImN1cnNvciIsIm1hcmdpblJpZ2h0IiwiY2xlYXJmaXgiLCJjaGlsZHJlbiIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiZGVmYXVsdFRleHQiLCJjb21wb25lbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiYWNjb3JkaW9uIiwiZWRpdG9yIiwicGFyZW50IiwiZGF0YSIsImdldCIsInVuZGVmaW5lZCIsIngiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBR0EsSUFBTUEsUUFBUSxnQ0FDWjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLFFBQVYsUUFBVUEsUUFBVjtBQUFBLFNBQTBCO0FBQ3hCQyxXQUFPLE1BRGlCO0FBRXhCQyxhQUFTLGNBRmU7QUFHeEI7QUFDQUMsa0JBQWMsdUJBQU9KLEtBQVAsQ0FKVTtBQUt4QkssYUFBUztBQUNQRCxvQkFBYyx1QkFBT0osS0FBUCxFQUFjQSxNQUFNTSxLQUFwQjtBQURQLEtBTGU7QUFReEIsWUFBUTtBQUNOLGdCQUFVO0FBQ1JDLGVBQU8sTUFEQztBQUVSQyxnQkFBUVAsWUFBWSxTQUZaO0FBR1JRLHFCQUFhO0FBSEwsT0FESjtBQU1OLGFBQU87QUFDTEYsZUFBTyxPQURGO0FBRUxDLGdCQUFRO0FBRkg7QUFORCxLQVJnQjtBQW1CeEJFLGNBQVU7QUFuQmMsR0FBMUI7QUFBQSxDQURZLEVBc0JaO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBZ0JDLEtBQWhCOztBQUFBLFNBQ0U7QUFBQTtBQUFVQSxTQUFWO0FBQ0U7QUFBQTtBQUFBO0FBQUtEO0FBQUw7QUFERixHQURGO0FBQUEsQ0F0QlksRUEyQlo7QUFBQSxTQUFLRSxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBM0JZLENBQWQ7O2tCQThCZTtBQUNiQyxRQUFNLGdCQURPO0FBRWJDLFVBQVEsS0FGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxhQUpNO0FBS2JDLGVBQWEsT0FMQTtBQU1iQyxhQUFXLGlDQUNULFdBRFMsRUFFVDtBQUFBLFFBQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFFBQWVDLFNBQWYsU0FBZUEsU0FBZjtBQUFBLFFBQTBCWixRQUExQixTQUEwQkEsUUFBMUI7QUFBQSxRQUFvQ2EsU0FBcEMsU0FBb0NBLFNBQXBDO0FBQUEsUUFBK0NDLE1BQS9DLFNBQStDQSxNQUEvQztBQUFBLFFBQXVEQyxNQUF2RCxTQUF1REEsTUFBdkQ7QUFBQSxXQUNBO0FBQUMsV0FBRDtBQUFBO0FBQ0UsbUJBQVdILFNBRGI7QUFFRSxrQkFBVUUsT0FBT2IsS0FBUCxDQUFhWCxRQUZ6QjtBQUdFLHFCQUFhO0FBQ1h1QixxQkFDRUEsY0FBY0UsT0FBT0MsSUFBUCxDQUFZQyxHQUFaLENBQWdCLElBQWhCLENBQWQsR0FDSUYsT0FBT0MsSUFBUCxDQUFZQyxHQUFaLENBQWdCLElBQWhCLENBREosR0FFSUM7QUFKSztBQUhmLFNBU01QLFVBVE47QUFXRTtBQUFBO0FBQUE7QUFDRSxtQkFBUyxDQUFDRyxPQUFPYixLQUFQLENBQWFYLFFBQWQsR0FBeUI7QUFBQSxtQkFBSzZCLEVBQUVDLGVBQUYsRUFBTDtBQUFBLFdBQXpCLEdBQW9ERjtBQUQvRDtBQUdHbEI7QUFISCxPQVhGO0FBZ0JFO0FBQ0UseUJBQWlCLEtBRG5CO0FBRUUsY0FDRWEsY0FBY0UsT0FBT0MsSUFBUCxDQUFZQyxHQUFaLENBQWdCLElBQWhCLENBQWQsR0FDSSxlQURKLEdBRUk7QUFMUjtBQWhCRixLQURBO0FBQUEsR0FGUztBQU5FLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9hY2NvcmRpb24vbGFiZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBib3JkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IHdpdGhRdWVyeVBhcmFtLCBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcblxuY29uc3QgTGFiZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCByZWFkT25seSB9KSA9PiAoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgLy8gY29sb3I6IGAke3RoZW1lLmNvbG9yfSAhaW1wb3J0YW50YCxcbiAgICBib3JkZXJCb3R0b206IGJvcmRlcih0aGVtZSksXG4gICAgb25Ib3Zlcjoge1xuICAgICAgYm9yZGVyQm90dG9tOiBib3JkZXIodGhlbWUsIHRoZW1lLmNvbG9yKSxcbiAgICB9LFxuICAgICc+IGgyJzoge1xuICAgICAgJz4gc3Bhbic6IHtcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgY3Vyc29yOiByZWFkT25seSAmJiAncG9pbnRlcicsXG4gICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgICc+IGknOiB7XG4gICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjbGVhcmZpeDogdHJ1ZSxcbiAgfSksXG4gICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPExpbmsgey4uLnByb3BzfT5cbiAgICAgIDxoMj57Y2hpbGRyZW59PC9oMj5cbiAgICA8L0xpbms+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdhY2NvcmRpb25MYWJlbCcsXG4gIGlzVm9pZDogZmFsc2UsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnw5xiZXJzY2hyaWZ0JyxcbiAgZGVmYXVsdFRleHQ6ICdUaXRlbCcsXG4gIGNvbXBvbmVudDogd2l0aFF1ZXJ5UGFyYW0oXG4gICAgJ2FjY29yZGlvbicsXG4gICkoKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBjaGlsZHJlbiwgYWNjb3JkaW9uLCBlZGl0b3IsIHBhcmVudCB9KSA9PiAoXG4gICAgPExhYmVsXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJlYWRPbmx5PXtlZGl0b3IucHJvcHMucmVhZE9ubHl9XG4gICAgICB1cGRhdGVRdWVyeT17e1xuICAgICAgICBhY2NvcmRpb246XG4gICAgICAgICAgYWNjb3JkaW9uICE9PSBwYXJlbnQuZGF0YS5nZXQoJ2lkJylcbiAgICAgICAgICAgID8gcGFyZW50LmRhdGEuZ2V0KCdpZCcpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH19XG4gICAgICB7Li4uYXR0cmlidXRlc31cbiAgICA+XG4gICAgICA8c3BhblxuICAgICAgICBvbkNsaWNrPXshZWRpdG9yLnByb3BzLnJlYWRPbmx5ID8geCA9PiB4LnN0b3BQcm9wYWdhdGlvbigpIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3NwYW4+XG4gICAgICA8SWNvblxuICAgICAgICBjb250ZW50RWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICB0eXBlPXtcbiAgICAgICAgICBhY2NvcmRpb24gPT09IHBhcmVudC5kYXRhLmdldCgnaWQnKVxuICAgICAgICAgICAgPyAnZG93bi1zcXVhcmUtbydcbiAgICAgICAgICAgIDogJ2xlZnQtc3F1YXJlLW8nXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9MYWJlbD5cbiAgKSksXG59O1xuIl19
