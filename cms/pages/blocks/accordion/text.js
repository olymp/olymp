'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _olympRouter = require('olymp-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Text = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      isOpen = _ref.isOpen;
  return {
    /* marginY: theme.space3,
    paddingRight: theme.space3, */
    display: !isOpen && 'none'
  };
}, 'div', function (_ref2) {
  var isOpen = _ref2.isOpen,
      p = _objectWithoutProperties(_ref2, ['isOpen']);

  return Object.keys(p);
});

exports.default = {
  type: 'accordionText',
  isVoid: false,
  kind: 'block',
  label: 'Text',
  defaultNodes: ['paragraph'],
  component: (0, _olympRouter.withQueryParam)('accordion')(function (_ref3) {
    var className = _ref3.className,
        attributes = _ref3.attributes,
        children = _ref3.children,
        accordion = _ref3.accordion,
        parent = _ref3.parent;
    return _react2.default.createElement(
      Text,
      _extends({ className: className, isOpen: accordion === parent.data.get('id') }, attributes),
      children
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvYWNjb3JkaW9uL3RleHQuZXM2Il0sIm5hbWVzIjpbIlRleHQiLCJ0aGVtZSIsImlzT3BlbiIsImRpc3BsYXkiLCJwIiwiT2JqZWN0Iiwia2V5cyIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJkZWZhdWx0Tm9kZXMiLCJjb21wb25lbnQiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJhY2NvcmRpb24iLCJwYXJlbnQiLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE9BQU8sZ0NBQ1g7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxNQUFWLFFBQVVBLE1BQVY7QUFBQSxTQUF3QjtBQUN0Qjs7QUFFQUMsYUFBUyxDQUFDRCxNQUFELElBQVc7QUFIRSxHQUF4QjtBQUFBLENBRFcsRUFNWCxLQU5XLEVBT1g7QUFBQSxNQUFHQSxNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFjRSxDQUFkOztBQUFBLFNBQXNCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBdEI7QUFBQSxDQVBXLENBQWI7O2tCQVVlO0FBQ2JHLFFBQU0sZUFETztBQUViQyxVQUFRLEtBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sTUFKTTtBQUtiQyxnQkFBYyxDQUFDLFdBQUQsQ0FMRDtBQU1iQyxhQUFXLGlDQUNULFdBRFMsRUFFVDtBQUFBLFFBQUdDLFNBQUgsU0FBR0EsU0FBSDtBQUFBLFFBQWNDLFVBQWQsU0FBY0EsVUFBZDtBQUFBLFFBQTBCQyxRQUExQixTQUEwQkEsUUFBMUI7QUFBQSxRQUFvQ0MsU0FBcEMsU0FBb0NBLFNBQXBDO0FBQUEsUUFBK0NDLE1BQS9DLFNBQStDQSxNQUEvQztBQUFBLFdBQ0E7QUFBQyxVQUFEO0FBQUEsaUJBQU0sV0FBV0osU0FBakIsRUFBNEIsUUFBUUcsY0FBY0MsT0FBT0MsSUFBUCxDQUFZQyxHQUFaLENBQWdCLElBQWhCLENBQWxELElBQTZFTCxVQUE3RTtBQUNHQztBQURILEtBREE7QUFBQSxHQUZTO0FBTkUsQyIsImZpbGUiOiJjbXMvcGFnZXMvYmxvY2tzL2FjY29yZGlvbi90ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgd2l0aFF1ZXJ5UGFyYW0gfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuXG5jb25zdCBUZXh0ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XG4gICAgLyogbWFyZ2luWTogdGhlbWUuc3BhY2UzLFxuICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2UzLCAqL1xuICAgIGRpc3BsYXk6ICFpc09wZW4gJiYgJ25vbmUnLFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGlzT3BlbiwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2FjY29yZGlvblRleHQnLFxuICBpc1ZvaWQ6IGZhbHNlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ1RleHQnLFxuICBkZWZhdWx0Tm9kZXM6IFsncGFyYWdyYXBoJ10sXG4gIGNvbXBvbmVudDogd2l0aFF1ZXJ5UGFyYW0oXG4gICAgJ2FjY29yZGlvbicsXG4gICkoKHsgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgYWNjb3JkaW9uLCBwYXJlbnQgfSkgPT4gKFxuICAgIDxUZXh0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpc09wZW49e2FjY29yZGlvbiA9PT0gcGFyZW50LmRhdGEuZ2V0KCdpZCcpfSB7Li4uYXR0cmlidXRlc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UZXh0PlxuICApKSxcbn07XG4iXX0=
