'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultLayout = undefined;

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Form = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    '& .ant-form-item-label': {
      textAlign: 'left',
      '> label': {
        fontWeight: 400,
        color: theme.dark2
      }
    }
  };
}, function (props) {
  return _react2.default.createElement(_form2.default, props);
}, []);
Form.create = _form2.default.create;
Form.Item = _form2.default.Item;
Form.Panel = (0, _reactFela.createComponent)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    borderTop: '1px solid ' + theme.dark4,
    paddingTop: theme.space3,
    marginTop: theme.space4,
    position: 'relative',
    '> label': {
      fontWeight: 'bold',
      position: 'absolute',
      top: -14,
      padding: '1px 8px',
      marginLeft: -8,
      color: '#777',
      borderRadius: '4px 4px 0 0',
      background: '#fff',
      transition: 'background-color .4s'
    }
  };
}, function (_ref3) {
  var title = _ref3.title,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ['title', 'children']);

  return _react2.default.createElement(
    'div',
    props,
    title && _react2.default.createElement(
      'label',
      null,
      title
    ),
    children
  );
}, ['title', 'onPaste']);

exports.default = Form;
var defaultLayout = exports.defaultLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
  colon: false
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2Zvcm0uZXM2Il0sIm5hbWVzIjpbIkZvcm0iLCJ0aGVtZSIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJjb2xvciIsImRhcmsyIiwicHJvcHMiLCJjcmVhdGUiLCJJdGVtIiwiUGFuZWwiLCJib3JkZXJUb3AiLCJkYXJrNCIsInBhZGRpbmdUb3AiLCJzcGFjZTMiLCJtYXJnaW5Ub3AiLCJzcGFjZTQiLCJwb3NpdGlvbiIsInRvcCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsInRyYW5zaXRpb24iLCJ0aXRsZSIsImNoaWxkcmVuIiwiZGVmYXVsdExheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJjb2xvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLE9BQU8sZ0NBQ1g7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkLDhCQUEwQjtBQUN4QkMsaUJBQVcsTUFEYTtBQUV4QixpQkFBVztBQUNUQyxvQkFBWSxHQURIO0FBRVRDLGVBQU9ILE1BQU1JO0FBRko7QUFGYTtBQURaLEdBQWhCO0FBQUEsQ0FEVyxFQVVYO0FBQUEsU0FBUyw4Q0FBYUMsS0FBYixDQUFUO0FBQUEsQ0FWVyxFQVdYLEVBWFcsQ0FBYjtBQWFBTixLQUFLTyxNQUFMLEdBQWMsZUFBUUEsTUFBdEI7QUFDQVAsS0FBS1EsSUFBTCxHQUFZLGVBQVFBLElBQXBCO0FBQ0FSLEtBQUtTLEtBQUwsR0FBYSxnQ0FDWDtBQUFBLE1BQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RTLDhCQUF3QlQsTUFBTVUsS0FEaEI7QUFFZEMsZ0JBQVlYLE1BQU1ZLE1BRko7QUFHZEMsZUFBV2IsTUFBTWMsTUFISDtBQUlkQyxjQUFVLFVBSkk7QUFLZCxlQUFXO0FBQ1RiLGtCQUFZLE1BREg7QUFFVGEsZ0JBQVUsVUFGRDtBQUdUQyxXQUFLLENBQUMsRUFIRztBQUlUQyxlQUFTLFNBSkE7QUFLVEMsa0JBQVksQ0FBQyxDQUxKO0FBTVRmLGFBQU8sTUFORTtBQU9UZ0Isb0JBQWMsYUFQTDtBQVFUQyxrQkFBWSxNQVJIO0FBU1RDLGtCQUFZO0FBVEg7QUFMRyxHQUFoQjtBQUFBLENBRFcsRUFrQlg7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFNBQVVBLFFBQVY7QUFBQSxNQUF1QmxCLEtBQXZCOztBQUFBLFNBQ0U7QUFBQTtBQUFTQSxTQUFUO0FBQ0dpQixhQUFTO0FBQUE7QUFBQTtBQUFRQTtBQUFSLEtBRFo7QUFFR0M7QUFGSCxHQURGO0FBQUEsQ0FsQlcsRUF3QlgsQ0FBQyxPQUFELEVBQVUsU0FBVixDQXhCVyxDQUFiOztrQkEyQmV4QixJO0FBRVIsSUFBTXlCLHdDQUFnQjtBQUMzQkMsWUFBVSxFQUFFQyxNQUFNLENBQVIsRUFEaUI7QUFFM0JDLGNBQVksRUFBRUQsTUFBTSxFQUFSLEVBRmU7QUFHM0JFLFNBQU87QUFIb0IsQ0FBdEIiLCJmaWxlIjoiZXh0ZXJuYWwvdWkvZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtIGFzIEFudEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBGb3JtID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgICcmIC5hbnQtZm9ybS1pdGVtLWxhYmVsJzoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAnPiBsYWJlbCc6IHtcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBjb2xvcjogdGhlbWUuZGFyazIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBwcm9wcyA9PiA8QW50Rm9ybSB7Li4ucHJvcHN9IC8+LFxuICBbXVxuKTtcbkZvcm0uY3JlYXRlID0gQW50Rm9ybS5jcmVhdGU7XG5Gb3JtLkl0ZW0gPSBBbnRGb3JtLkl0ZW07XG5Gb3JtLlBhbmVsID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLmRhcms0fWAsXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2UzLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2U0LFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICc+IGxhYmVsJzoge1xuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IC0xNCxcbiAgICAgIHBhZGRpbmc6ICcxcHggOHB4JyxcbiAgICAgIG1hcmdpbkxlZnQ6IC04LFxuICAgICAgY29sb3I6ICcjNzc3JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzRweCA0cHggMCAwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIC40cycsXG4gICAgfSxcbiAgfSksXG4gICh7IHRpdGxlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXYgey4uLnByb3BzfT5cbiAgICAgIHt0aXRsZSAmJiA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+fVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApLFxuICBbJ3RpdGxlJywgJ29uUGFzdGUnXVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMYXlvdXQgPSB7XG4gIGxhYmVsQ29sOiB7IHNwYW46IDYgfSxcbiAgd3JhcHBlckNvbDogeyBzcGFuOiAxOCB9LFxuICBjb2xvbjogZmFsc2UsXG59O1xuIl19
