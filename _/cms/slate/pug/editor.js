'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _slate = require('slate');

var _slateReact = require('slate-react');

var _slatePlainSerializer = require('slate-plain-serializer');

var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

var _slateEditCode = require('slate-edit-code');

var _slateEditCode2 = _interopRequireDefault(_slateEditCode);

var _slatePrism = require('slate-prism');

var _slatePrism2 = _interopRequireDefault(_slatePrism);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('prismjs');

require('prismjs/themes/prism.css');

require('prismjs/components/prism-graphql');

require('prismjs/components/prism-pug');

var _toPug = require('./to-pug');

var _toPug2 = _interopRequireDefault(_toPug);

var _toSlate = require('./to-slate');

var _toSlate2 = _interopRequireDefault(_toSlate);

var _useJsonState = require('../use-json-state');

var _useJsonState2 = _interopRequireDefault(_useJsonState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeLine = function CodeLine(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    'div',
    attributes,
    children
  );
};

var Code = function Code(_ref2) {
  var children = _ref2.children,
      attributes = _ref2.attributes,
      className = _ref2.className;
  return _react2.default.createElement(
    'pre',
    { className: (0, _classnames2.default)(className, 'language-pug') },
    _react2.default.createElement(
      'code',
      _extends({ className: 'language-pug' }, attributes),
      children
    )
  );
};

var renderNode = function renderNode(props) {
  if (props.node.type === 'code') {
    return _react2.default.createElement(Code, props);
  } else if (props.node.type === 'code-line') {
    return _react2.default.createElement(CodeLine, props);
  }
};

var enhance = (0, _recompose.compose)((0, _recompose.withState)('isFull', 'setIsFull'), (0, _recompose.withState)('isCode', 'setIsCode'), (0, _recompose.withPropsOnChange)(['value'], function (_ref3) {
  var value = _ref3.value,
      onChange = _ref3.onChange;
  return {
    value: {
      kind: 'document',
      nodes: [{
        kind: 'block',
        type: 'code',
        nodes: (0, _toPug2.default)(value).split('\n').map(function (line) {
          return {
            kind: 'block',
            type: 'code-line',
            nodes: [{
              kind: 'text',
              leaves: [{
                kind: 'leaf',
                text: line
              }]
            }]
          };
        })
      }]
    },
    onChange: function onChange(change) {
      return console.log((0, _toSlate2.default)(_slatePlainSerializer2.default.serialize(_slate.Value.fromJSON({
        document: change,
        kind: 'value'
      }))));
    }
  };
}), _useJsonState2.default, (0, _recompose.withPropsOnChange)('plugins', function (_ref4) {
  var _ref4$plugins = _ref4.plugins,
      plugins = _ref4$plugins === undefined ? [] : _ref4$plugins;
  return {
    plugins: [(0, _slateEditCode2.default)({
      containerType: 'code',
      lineType: 'code-line',
      exitBlockType: 'paragraph',
      onlyIn: function onlyIn(node) {
        return node.type === 'code';
      }
    }), (0, _slatePrism2.default)({
      onlyIn: function onlyIn(node) {
        return node.type === 'code';
      },
      getSyntax: function getSyntax() {
        return 'pug';
      }
    }), {
      renderNode: renderNode
    }]
  };
}));

var Writer = (_temp2 = _class = function (_Component) {
  _inherits(Writer, _Component);

  function Writer() {
    var _ref5;

    var _temp, _this, _ret;

    _classCallCheck(this, Writer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = Writer.__proto__ || Object.getPrototypeOf(Writer)).call.apply(_ref5, [this].concat(args))), _this), _this.onChange = function (change) {
      return _this.props.onChange(change.value);
    }, _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          readOnly = _this$props.readOnly,
          className = _this$props.className,
          spellcheck = _this$props.spellcheck,
          _this$props$schema = _this$props.schema,
          schema = _this$props$schema === undefined ? {} : _this$props$schema,
          renderNode = _this$props.renderNode,
          _this$props$style = _this$props.style,
          style = _this$props$style === undefined ? {} : _this$props$style,
          full = _this$props.full,
          isCode = _this$props.isCode,
          setIsCode = _this$props.setIsCode,
          setFull = _this$props.setFull,
          isFull = _this$props.isFull,
          setIsFull = _this$props.setIsFull,
          rest = _objectWithoutProperties(_this$props, ['children', 'readOnly', 'className', 'spellcheck', 'schema', 'renderNode', 'style', 'full', 'isCode', 'setIsCode', 'setFull', 'isFull', 'setIsFull']);

      return _react2.default.createElement(_slateReact.Editor, _extends({}, rest, {
        className: 'slate-editor slate-writer',
        spellcheck: spellcheck || false,
        readOnly: false,
        onDrop: _this.onDrop,
        onPaste: _this.onPaste,
        renderNode: renderNode,
        onChange: _this.onChange,
        onKeyDown: _this.onKeyDown,
        placeholder: !readOnly && 'Hier Text eingeben...',
        placeholderStyle: { padding: '0 1rem', opacity: 0.33 },
        style: _extends({ height: '100%' }, style)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Writer;
}(_react.Component), _class.propTypes = {
  readOnly: _propTypes2.default.bool,
  showUndo: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  value: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  nodes: _propTypes2.default.object,
  autoMarkDownKeyDown: _propTypes2.default.func,
  plugins: _propTypes2.default.array,
  className: _propTypes2.default.string
}, _temp2);
exports.default = enhance(Writer);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3B1Zy9lZGl0b3IuZXM2Il0sIm5hbWVzIjpbIkNvZGVMaW5lIiwiY2hpbGRyZW4iLCJhdHRyaWJ1dGVzIiwiQ29kZSIsImNsYXNzTmFtZSIsInJlbmRlck5vZGUiLCJwcm9wcyIsIm5vZGUiLCJ0eXBlIiwiZW5oYW5jZSIsInZhbHVlIiwib25DaGFuZ2UiLCJraW5kIiwibm9kZXMiLCJzcGxpdCIsIm1hcCIsImxlYXZlcyIsInRleHQiLCJsaW5lIiwiY29uc29sZSIsImxvZyIsInNlcmlhbGl6ZSIsImZyb21KU09OIiwiZG9jdW1lbnQiLCJjaGFuZ2UiLCJwbHVnaW5zIiwiY29udGFpbmVyVHlwZSIsImxpbmVUeXBlIiwiZXhpdEJsb2NrVHlwZSIsIm9ubHlJbiIsImdldFN5bnRheCIsIldyaXRlciIsInJlbmRlciIsInJlYWRPbmx5Iiwic3BlbGxjaGVjayIsInNjaGVtYSIsInN0eWxlIiwiZnVsbCIsImlzQ29kZSIsInNldElzQ29kZSIsInNldEZ1bGwiLCJpc0Z1bGwiLCJzZXRJc0Z1bGwiLCJyZXN0Iiwib25Ecm9wIiwib25QYXN0ZSIsIm9uS2V5RG93biIsInBhZGRpbmciLCJvcGFjaXR5IiwiaGVpZ2h0IiwicHJvcFR5cGVzIiwiYm9vbCIsInNob3dVbmRvIiwib2JqZWN0IiwiZnVuYyIsImF1dG9NYXJrRG93bktleURvd24iLCJhcnJheSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxVQUFiLFFBQWFBLFVBQWI7QUFBQSxTQUNmO0FBQUE7QUFBU0EsY0FBVDtBQUFzQkQ7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QkFrRE5oRCxRQUFRc0IsTUFBUixDIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL3B1Zy9lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgVmFsdWUgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgUGxhaW4gZnJvbSAnc2xhdGUtcGxhaW4tc2VyaWFsaXplcic7XG5pbXBvcnQgUGx1Z2luRWRpdENvZGUgZnJvbSAnc2xhdGUtZWRpdC1jb2RlJztcbmltcG9ydCBQbHVnaW5QcmlzbSBmcm9tICdzbGF0ZS1wcmlzbSc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLmNzcyc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1ncmFwaHFsJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXB1Zyc7XG5cbmltcG9ydCB0b1B1ZyBmcm9tICcuL3RvLXB1Zyc7XG5pbXBvcnQgdG9TbGF0ZSBmcm9tICcuL3RvLXNsYXRlJztcbmltcG9ydCB1c2VKc29uU3RhdGUgZnJvbSAnLi4vdXNlLWpzb24tc3RhdGUnO1xuXG5jb25zdCBDb2RlTGluZSA9ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzIH0pID0+IChcbiAgPGRpdiB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvZGl2PlxuKTtcblxuY29uc3QgQ29kZSA9ICh7IGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSkgPT4gKFxuICA8cHJlIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCBgbGFuZ3VhZ2UtcHVnYCl9PlxuICAgIDxjb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLXB1Z1wiIHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2NvZGU+XG4gIDwvcHJlPlxuKTtcblxuY29uc3QgcmVuZGVyTm9kZSA9IHByb3BzID0+IHtcbiAgaWYgKHByb3BzLm5vZGUudHlwZSA9PT0gJ2NvZGUnKSB7XG4gICAgcmV0dXJuIDxDb2RlIHsuLi5wcm9wc30gLz47XG4gIH0gZWxzZSBpZiAocHJvcHMubm9kZS50eXBlID09PSAnY29kZS1saW5lJykge1xuICAgIHJldHVybiA8Q29kZUxpbmUgey4uLnByb3BzfSAvPjtcbiAgfVxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZSgnaXNGdWxsJywgJ3NldElzRnVsbCcpLFxuICB3aXRoU3RhdGUoJ2lzQ29kZScsICdzZXRJc0NvZGUnKSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWyd2YWx1ZSddLCAoeyB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4gKHtcbiAgICB2YWx1ZToge1xuICAgICAga2luZDogJ2RvY3VtZW50JyxcbiAgICAgIG5vZGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgICBub2RlczogdG9QdWcodmFsdWUpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAubWFwKGxpbmUgPT4gKHtcbiAgICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NvZGUtbGluZScsXG4gICAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2luZDogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgbGVhdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnbGVhZicsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogbGluZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBvbkNoYW5nZTogY2hhbmdlID0+XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgdG9TbGF0ZShcbiAgICAgICAgICBQbGFpbi5zZXJpYWxpemUoXG4gICAgICAgICAgICBWYWx1ZS5mcm9tSlNPTih7XG4gICAgICAgICAgICAgIGRvY3VtZW50OiBjaGFuZ2UsXG4gICAgICAgICAgICAgIGtpbmQ6ICd2YWx1ZScsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKSxcbiAgfSkpLFxuICB1c2VKc29uU3RhdGUsXG4gIHdpdGhQcm9wc09uQ2hhbmdlKCdwbHVnaW5zJywgKHsgcGx1Z2lucyA9IFtdIH0pID0+ICh7XG4gICAgcGx1Z2luczogW1xuICAgICAgUGx1Z2luRWRpdENvZGUoe1xuICAgICAgICBjb250YWluZXJUeXBlOiAnY29kZScsXG4gICAgICAgIGxpbmVUeXBlOiAnY29kZS1saW5lJyxcbiAgICAgICAgZXhpdEJsb2NrVHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIG9ubHlJbjogbm9kZSA9PiBub2RlLnR5cGUgPT09ICdjb2RlJyxcbiAgICAgIH0pLFxuICAgICAgUGx1Z2luUHJpc20oe1xuICAgICAgICBvbmx5SW46IG5vZGUgPT4gbm9kZS50eXBlID09PSAnY29kZScsXG4gICAgICAgIGdldFN5bnRheDogKCkgPT4gJ3B1ZycsXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgcmVuZGVyTm9kZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSkpLFxuKTtcblxuY2xhc3MgV3JpdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1VuZG86IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbm9kZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYXV0b01hcmtEb3duS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGx1Z2luczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBvbkNoYW5nZSA9IGNoYW5nZSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKGNoYW5nZS52YWx1ZSk7XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzcGVsbGNoZWNrLFxuICAgICAgc2NoZW1hID0ge30sXG4gICAgICByZW5kZXJOb2RlLFxuICAgICAgc3R5bGUgPSB7fSxcbiAgICAgIGZ1bGwsXG4gICAgICBpc0NvZGUsXG4gICAgICBzZXRJc0NvZGUsXG4gICAgICBzZXRGdWxsLFxuICAgICAgaXNGdWxsLFxuICAgICAgc2V0SXNGdWxsLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8RWRpdG9yXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBjbGFzc05hbWU9XCJzbGF0ZS1lZGl0b3Igc2xhdGUtd3JpdGVyXCJcbiAgICAgICAgc3BlbGxjaGVjaz17c3BlbGxjaGVjayB8fCBmYWxzZX1cbiAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICBvbkRyb3A9e3RoaXMub25Ecm9wfVxuICAgICAgICBvblBhc3RlPXt0aGlzLm9uUGFzdGV9XG4gICAgICAgIHJlbmRlck5vZGU9e3JlbmRlck5vZGV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17IXJlYWRPbmx5ICYmICdIaWVyIFRleHQgZWluZ2ViZW4uLi4nfVxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlPXt7IHBhZGRpbmc6ICcwIDFyZW0nLCBvcGFjaXR5OiAwLjMzIH19XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCAuLi5zdHlsZSB9fVxuICAgICAgLz5cbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFdyaXRlcik7XG4iXX0=
