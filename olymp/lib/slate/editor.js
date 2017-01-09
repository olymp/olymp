'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.rawSerializer = exports.htmlSerializer = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGateway = require('react-gateway');

var _slate = require('slate');

var _editorDecorators = require('./editor-decorators');

var _decorators = require('./decorators');

var _decorators2 = _interopRequireDefault(_decorators);

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = {
  defaultNode: 'paragraph',
  toolbarMarks: [{ type: 'bold', icon: 'bold' }, { type: 'italic', icon: 'italic' }, { type: 'underlined', icon: 'underline' }, { type: 'code', icon: 'code' }],
  toolbarTypes: [{ type: ['heading-one', 'heading-two', 'heading-three', 'heading-four', 'heading-five', 'heading-six'], icon: 'header', description: ['Überschrift 1', 'Überschrift 2', 'Überschrift 3', 'Überschrift 4', 'Überschrift 5', 'Überschrift 6'] }, { type: 'block-quote', icon: 'quote-left' }, { type: 'numbered-list', icon: 'list-ol' }, { type: 'bulleted-list', icon: 'list-ul' }],
  toolbarActions: [{
    type: ['link', 'link-page', 'link-media'],
    icon: 'link',
    description: ['Extern', 'Intern', 'Datei'],
    onClick: function onClick(_ref, isActive) {
      var value = _ref.value,
          onChange = _ref.onChange;

      if (isActive) {
        value = value.transform().unwrapInline('link').apply();
      } else {
        var href = window.prompt('URL');
        if (href.indexOf('http') !== 0 && href.indexOf('.') !== -1) href = 'http://' + href;
        value = value.transform().wrapInline({
          type: 'link',
          data: { href: href, target: '_blank' }
        }).collapseToEnd().apply();
      }
      onChange(value);
    },
    isActive: function isActive(_ref2) {
      var value = _ref2.value;

      return value.inlines.some(function (inline) {
        return inline.type === 'link';
      });
    }
  }],
  sidebarTypes: [],
  nodes: {
    paragraph: function paragraph(_ref3) {
      var children = _ref3.children,
          attributes = _ref3.attributes;
      return _react2.default.createElement(
        'p',
        attributes,
        children
      );
    },
    link: function link(_ref4) {
      var node = _ref4.node,
          attributes = _ref4.attributes,
          children = _ref4.children;
      return _react2.default.createElement(
        'a',
        _extends({}, attributes, { href: node.data.get('href'), target: node.data.get('target'), rel: 'noopener noreferrer' }),
        children
      );
    },
    'block-quote': function blockQuote(_ref5) {
      var children = _ref5.children,
          attributes = _ref5.attributes;
      return _react2.default.createElement(
        'blockquote',
        attributes,
        children
      );
    },
    'bulleted-list': function bulletedList(_ref6) {
      var children = _ref6.children,
          attributes = _ref6.attributes;
      return _react2.default.createElement(
        'ul',
        attributes,
        children
      );
    },
    'numbered-list': function numberedList(_ref7) {
      var children = _ref7.children,
          attributes = _ref7.attributes;
      return _react2.default.createElement(
        'ol',
        attributes,
        children
      );
    },
    'heading-one': function headingOne(_ref8) {
      var children = _ref8.children,
          attributes = _ref8.attributes;
      return _react2.default.createElement(
        'h1',
        attributes,
        children
      );
    },
    'heading-two': function headingTwo(_ref9) {
      var children = _ref9.children,
          attributes = _ref9.attributes;
      return _react2.default.createElement(
        'h2',
        attributes,
        children
      );
    },
    'heading-three': function headingThree(_ref10) {
      var children = _ref10.children,
          attributes = _ref10.attributes;
      return _react2.default.createElement(
        'h3',
        attributes,
        children
      );
    },
    'heading-four': function headingFour(_ref11) {
      var children = _ref11.children,
          attributes = _ref11.attributes;
      return _react2.default.createElement(
        'h4',
        attributes,
        children
      );
    },
    'heading-five': function headingFive(_ref12) {
      var children = _ref12.children,
          attributes = _ref12.attributes;
      return _react2.default.createElement(
        'h5',
        attributes,
        children
      );
    },
    'heading-six': function headingSix(_ref13) {
      var children = _ref13.children,
          attributes = _ref13.attributes;
      return _react2.default.createElement(
        'h6',
        attributes,
        children
      );
    },
    'bulleted-list-item': function bulletedListItem(_ref14) {
      var children = _ref14.children,
          attributes = _ref14.attributes;
      return _react2.default.createElement(
        'li',
        attributes,
        children
      );
    },
    'numbered-list-item': function numberedListItem(_ref15) {
      var children = _ref15.children,
          attributes = _ref15.attributes;
      return _react2.default.createElement(
        'li',
        attributes,
        children
      );
    }
  },
  marks: {
    bold: function bold(_ref16) {
      var children = _ref16.children,
          attributes = _ref16.attributes;
      return _react2.default.createElement(
        'strong',
        attributes,
        children
      );
    },
    code: function code(_ref17) {
      var children = _ref17.children,
          attributes = _ref17.attributes;
      return _react2.default.createElement(
        'code',
        attributes,
        children
      );
    },
    italic: function italic(_ref18) {
      var children = _ref18.children,
          attributes = _ref18.attributes;
      return _react2.default.createElement(
        'em',
        attributes,
        children
      );
    },
    underlined: function underlined(_ref19) {
      var children = _ref19.children,
          attributes = _ref19.attributes;
      return _react2.default.createElement(
        'u',
        attributes,
        children
      );
    }
  },
  getMarkdownType: function getMarkdownType(chars) {
    switch (chars) {
      case '*':
      case '-':
      case '+':
        return 'bulleted-list-item';
      case '>':
        return 'block-quote';
      case '#':
        return 'heading-one';
      case '##':
        return 'heading-two';
      case '###':
        return 'heading-three';
      case '####':
        return 'heading-four';
      case '#####':
        return 'heading-five';
      case '######':
        return 'heading-six';
      case '1.':
        return 'numbered-list-item';
      default:
        return null;
    }
  }
};

var serializer = new _slate.Html({
  rules: [{
    deserialize: function deserialize(el, next) {
      var types = {
        p: 'paragraph',
        li: 'list-item',
        ul: 'bulleted-list',
        ol: 'numbered-list',
        blockquote: 'quote',
        pre: 'code',
        h1: 'heading-one',
        h2: 'heading-two',
        h3: 'heading-three',
        h4: 'heading-four',
        h5: 'heading-five',
        h6: 'heading-six'
      };
      var block = types[el.tagName];
      if (!block) return undefined;
      return {
        kind: 'block',
        type: block,
        nodes: next(el.children)
      };
    }
  }, {
    deserialize: function deserialize(el, next) {
      var marks = {
        strong: 'bold',
        em: 'italic',
        u: 'underline',
        s: 'strikethrough',
        code: 'code'
      };
      var mark = marks[el.tagName];
      if (!mark) return undefined;
      return {
        kind: 'mark',
        type: mark,
        nodes: next(el.children)
      };
    }
  }, {
    // Special case for code blocks, which need to grab the nested children.
    deserialize: function deserialize(el, next) {
      if (el.tagName !== 'pre') return undefined;
      var code = el.children[0];
      var children = code && code.tagName === 'code' ? code.children : el.children;

      return {
        kind: 'block',
        type: 'code',
        nodes: next(children)
      };
    }
  }, {
    // Special case for links, to grab their href.
    deserialize: function deserialize(el, next) {
      if (el.tagName !== 'a') return undefined;
      return {
        kind: 'inline',
        type: 'link',
        nodes: next(el.children),
        data: {
          href: el.attribs.href
        }
      };
    }
  }]
});

var htmlSerializer = exports.htmlSerializer = serializer;
var rawSerializer = exports.rawSerializer = _slate.Raw;

var SlateEditor = (_dec = (0, _editorDecorators.withUniqueId)(), _dec2 = (0, _editorDecorators.withState)({ terse: true }), _dec3 = (0, _editorDecorators.useBlocks)(options), _dec4 = (0, _editorDecorators.withAutoMarkdown)(options), _dec5 = (0, _editorDecorators.withToolbar)(options), _dec6 = (0, _editorDecorators.withSidebar)(options), (0, _decorators2.default)(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(SlateEditor, _Component);

  function SlateEditor() {
    var _ref20;

    var _temp, _this, _ret;

    _classCallCheck(this, SlateEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref20 = SlateEditor.__proto__ || Object.getPrototypeOf(SlateEditor)).call.apply(_ref20, [this].concat(args))), _this), _this.state = {}, _this.onPaste = function (e, data, state) {
      if (data.type !== 'html') return undefined;

      var _serializer$deseriali = serializer.deserialize(data.html),
          document = _serializer$deseriali.document;

      return state.transform().insertFragment(document).apply();
    }, _this.onKeyDown = function (e, data, state) {
      if (e.shiftKey && data.key === 'enter') {
        // shift + enter
        return state.transform().insertText('\n').apply();
      } else if (e.metaKey || e.ctrlKey) {
        // cmd/ctrl + ???
        switch (data.key) {
          case 'b':
            return state.transform().toggleMark('bold').apply();
          case 'u':
            return state.transform().toggleMark('underlined').apply();
          case 'i':
            return state.transform().toggleMark('italic').apply();
          default:
            return undefined;
        }
      }
      return undefined;
    }, _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          showUndo = _this$props.showUndo,
          value = _this$props.value,
          onChange = _this$props.onChange,
          readOnly = _this$props.readOnly,
          marks = _this$props.marks,
          nodes = _this$props.nodes,
          plugins = _this$props.plugins,
          className = _this$props.className,
          spellcheck = _this$props.spellcheck,
          rest = _objectWithoutProperties(_this$props, ['children', 'showUndo', 'value', 'onChange', 'readOnly', 'marks', 'nodes', 'plugins', 'className', 'spellcheck']);

      return _react2.default.createElement(
        'div',
        { className: className, style: { position: 'relative' } },
        value && showUndo && value.hasUndos && _react2.default.createElement(
          _reactGateway.Gateway,
          { into: 'button_undo' },
          _react2.default.createElement(
            'a',
            { href: 'javascript:;', onClick: function onClick() {
                return onChange(value.transform().undo().apply());
              } },
            'R\xFCckg\xE4ngig'
          )
        ),
        children,
        _this.state.mode ? _react2.default.createElement(_slate.Editor, _extends({}, rest, {
          spellcheck: spellcheck || false,
          readOnly: !!readOnly,
          state: _this.state.mode,
          onChange: function onChange(mode) {
            return _this.setState({ mode: mode });
          },
          onPaste: _this.onPaste,
          onKeyDown: _this.onKeyDown
        })) : _react2.default.createElement(_slate.Editor, _extends({}, rest, {
          spellcheck: spellcheck || false,
          readOnly: !!readOnly,
          plugins: plugins,
          schema: { marks: marks, nodes: nodes },
          state: value,
          onChange: onChange,
          onPaste: _this.onPaste,
          onKeyDown: _this.onKeyDown
        }))
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SlateEditor;
}(_react.Component), _class2.propTypes = {
  readOnly: _react.PropTypes.bool,
  showUndo: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  value: _react.PropTypes.object,
  onChange: _react.PropTypes.func,
  marks: _react.PropTypes.object,
  nodes: _react.PropTypes.object,
  autoMarkDownKeyDown: _react.PropTypes.func,
  plugins: _react.PropTypes.array,
  className: _react.PropTypes.string
}, _class2.defaultProps = {
  readOnly: false
}, _temp2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.default = SlateEditor;