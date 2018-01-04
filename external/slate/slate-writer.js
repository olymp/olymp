'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _slateReact = require('slate-react');

var _slatePlainSerializer = require('slate-plain-serializer');

var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

var _slateEditList = require('slate-edit-list');

var _slateEditList2 = _interopRequireDefault(_slateEditList);

var _slateSoftBreak = require('slate-soft-break');

var _slateSoftBreak2 = _interopRequireDefault(_slateSoftBreak);

var _slatePasteLinkify = require('slate-paste-linkify');

var _slatePasteLinkify2 = _interopRequireDefault(_slatePasteLinkify);

var _slateAutoReplace = require('slate-auto-replace');

var _slateAutoReplace2 = _interopRequireDefault(_slateAutoReplace);

var _slateCollapseOnEscape = require('slate-collapse-on-escape');

var _slateCollapseOnEscape2 = _interopRequireDefault(_slateCollapseOnEscape);

var _slateTrailingBlock = require('slate-trailing-block');

var _slateTrailingBlock2 = _interopRequireDefault(_slateTrailingBlock);

var _slateEditTable = require('slate-edit-table');

var _slateEditTable2 = _interopRequireDefault(_slateEditTable);

var _slateEditBlockquote = require('slate-edit-blockquote');

var _slateEditBlockquote2 = _interopRequireDefault(_slateEditBlockquote);

var _slate = require('slate');

var _portal = require('olymp-fela/portal');

var _portal2 = _interopRequireDefault(_portal);

var _editor = require('./pug/editor');

var _editor2 = _interopRequireDefault(_editor);

var _getSchema = require('./get-schema');

var _getSchema2 = _interopRequireDefault(_getSchema);

var _useJsonState = require('./use-json-state');

var _useJsonState2 = _interopRequireDefault(_useJsonState);

var _insertBlockOnEnter = require('./plugins/insert-block-on-enter');

var _insertBlockOnEnter2 = _interopRequireDefault(_insertBlockOnEnter);

var _headingId = require('./plugins/heading-id');

var _headingId2 = _interopRequireDefault(_headingId);

var _toolbarText = require('./toolbar-text');

var _toolbarText2 = _interopRequireDefault(_toolbarText);

var _blockBar = require('./block-bar');

var _blockBar2 = _interopRequireDefault(_blockBar);

var _addBlock = require('./add-block');

var _addBlock2 = _interopRequireDefault(_addBlock);

var _marks = require('./defaults/marks');

var _marks2 = _interopRequireDefault(_marks);

var _nodesSelected = require('./defaults/nodes-selected');

var _nodesSelected2 = _interopRequireDefault(_nodesSelected);

var _toolbarActions = require('./defaults/toolbar-actions');

var _toolbarActions2 = _interopRequireDefault(_toolbarActions);

var _toolbarMarks = require('./defaults/toolbar-marks');

var _toolbarMarks2 = _interopRequireDefault(_toolbarMarks);

var _toolbarTypes = require('./defaults/toolbar-types');

var _toolbarTypes2 = _interopRequireDefault(_toolbarTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var emptyArray = [];
var getType = function getType(type) {
  if (type === 'GZK.Header.Header') {
    return 'pageHeader';
  } else if (type === 'GZK.Template.ContainerTextBlock') {
    return 'containerText';
  } else if (type === 'GZK.Template.ContainerBlock') {
    return 'container';
  } else if (type === 'numbered-list-item') {
    return 'list-item';
  } else if (type === 'Pages.Media.ImageBlock.Image') {
    return 'image';
  }
  return 'paragraph';
};

var renderNode = function renderNode(props) {
  var X = _nodesSelected2.default[props.node.type];
  if (X) {
    return _react2.default.createElement(X, props);
  }
  return _react2.default.createElement(
    'div',
    props.attributes,
    _react2.default.createElement(
      'b',
      {
        contentEditable: false,
        onClick: function onClick() {
          console.log('213', props.node, props.node.type, getType(props.node.type));
          props.editor.onChange(props.editor.value.change().setNodeByKey(props.node.key, getType(props.node.type)));
        }
      },
      'Not found: ',
      props.node.type
    ),
    props.children
  );
};

var renderMark = function renderMark(props) {
  var X = _marks2.default[props.mark.type];
  if (X) {
    return _react2.default.createElement(X, props);
  }
  return null;
};

var enhance = (0, _recompose.compose)((0, _recompose.withState)('isFull', 'setIsFull'), (0, _recompose.withState)('isCode', 'setIsCode'), _useJsonState2.default, _getSchema2.default, (0, _recompose.withPropsOnChange)('plugins', function (_ref) {
  var _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === undefined ? [] : _ref$plugins;
  return {
    plugins: [].concat(_toConsumableArray(plugins), [(0, _headingId2.default)({}),
    /* EditTable({
      typeTable: 'table',
      typeRow: 'tableRow',
      typeCell: 'tableCell',
      exitBlockType: 'paragraph',
    }), */
    (0, _slateTrailingBlock2.default)({ type: 'paragraph' }), (0, _insertBlockOnEnter2.default)({ type: 'paragraph' }), (0, _slateEditList2.default)({
      types: ['numbered-list', 'bulleted-list'],
      typeItem: 'list-item'
    }), (0, _slateSoftBreak2.default)({
      shift: true
      // onlyIn: ['paragraph']
    }), (0, _slatePasteLinkify2.default)({
      type: 'link'
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(>)$/,
      transform: function transform(_transform, e, matches) {
        return _transform.setBlock({ type: 'block-quote' });
      }
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(\*)$/,
      transform: function transform(_transform2, e, matches) {
        return _transform2.setBlock({ type: 'list-item' });
      }
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(-)$/,
      transform: function transform(_transform3, e, matches) {
        return _transform3.setBlock({ type: 'list-item' });
      }
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(\+)$/,
      transform: function transform(_transform4, e, matches) {
        return _transform4.setBlock({ type: 'list-item' });
      }
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(#)$/,
      transform: function transform(_transform5, e, matches) {
        return _transform5.setBlock({ type: 'heading-one' });
      }
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(##)$/,
      transform: function transform(_transform6, e, matches) {
        return _transform6.setBlock({ type: 'heading-two' });
      }
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(###)$/,
      transform: function transform(_transform7, e, matches) {
        return _transform7.setBlock({ type: 'heading-three' });
      }
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(####)$/,
      transform: function transform(_transform8, e, matches) {
        return _transform8.setBlock({ type: 'heading-four' });
      }
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(#####)$/,
      transform: function transform(_transform9, e, matches) {
        return _transform9.setBlock({ type: 'heading-five' });
      }
    }), (0, _slateAutoReplace2.default)({
      trigger: 'space',
      before: /^(######)$/,
      transform: function transform(_transform10, e, matches) {
        return _transform10.setBlock({ type: 'heading-six' });
      }
    }), (0, _slateCollapseOnEscape2.default)(), (0, _slateEditBlockquote2.default)(),
    /*
    LineToParagraph({ type: 'paragraph' }),
    NoParagraph({ type: 'paragraph' }),
    */
    {
      renderNode: renderNode,
      renderMark: renderMark
    }])
  };
}));

var Writer = (_temp2 = _class = function (_Component) {
  _inherits(Writer, _Component);

  function Writer() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Writer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Writer.__proto__ || Object.getPrototypeOf(Writer)).call.apply(_ref2, [this].concat(args))), _this), _this.onKeyDown = function (e, change) {
      if (e.key === 'Enter') {
        var value = change.value;
        var document = value.document,
            startKey = value.startKey,
            startBlock = value.startBlock;

        if (!startBlock || startBlock.type === 'list-item' || startBlock.type === 'code' || startBlock.type === 'code-line' || startBlock.type === 'paragraph') {
          return undefined;
        } else if (startBlock && !startBlock.isVoid) {
          return change.collapseToEndOf(startBlock).insertBlock(_slate.Block.create({ type: 'paragraph' })).collapseToEnd();
        } else if (startBlock && startBlock.isVoid) {
          var nextBlock = document.getNextBlock(startKey);
          var prevBlock = document.getPreviousBlock(startKey);
          var isFocusedStart = value.selection.hasEdgeAtStartOf(startBlock);
          var isFocusedEnd = value.selection.hasEdgeAtEndOf(startBlock);
          var blockToInsert = _slate.Block.create({ type: 'paragraph' });

          // Void block at the end of the document
          if (!nextBlock) {
            if (isFocusedEnd) {
              return change.collapseToEndOf(startBlock).insertBlock(blockToInsert).collapseToEnd();
            }
            if (prevBlock) {
              var index = document.nodes.indexOf(prevBlock);
              return change.collapseToEndOf(prevBlock).insertNodeByKey(document.key, index + 1, blockToInsert).collapseToStartOf(startBlock);
            }
            return change.collapseToStartOf(startBlock).insertNodeByKey(document.key, 0, blockToInsert);
          }
          // Void block between two blocks
          if (nextBlock && prevBlock) {
            if (isFocusedStart) {
              var _index = document.nodes.indexOf(prevBlock);
              return change.collapseToEndOf(prevBlock).insertNodeByKey(document.key, _index + 1, blockToInsert).collapseToStartOf(startBlock);
            }
            // NOe rart skjer her
            return change.collapseToEndOf(startBlock).insertBlock(blockToInsert);
          }
          // Void block in the beginning of the document
          if (nextBlock && !prevBlock) {
            if (isFocusedStart) {
              return change.collapseToStartOf(startBlock).insertNodeByKey(document.key, 0, blockToInsert);
            }
            return change.collapseToEndOf(startBlock).insertBlock(blockToInsert);
          }
        }
      } else if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case 'b':
            return change.toggleMark('bold');
          case 'u':
            return change.toggleMark('underlined');
          case 'i':
            return change.toggleMark('italic');
          default:
            return undefined;
        }
      }
      return undefined;
    }, _this.onPaste = function (ev, change) {
      var schema = _this.props.schema;

      if (ev.text && schema.nodes[ev.text]) {
        return (0, _addBlock2.default)(change.value, schema.nodes[ev.text].slate, schema, null, null, change.select(ev));
      }
    }, _this.onDrop = function (ev, change) {
      var schema = _this.props.schema;

      console.log(ev, ev.dataTransfer.files);
      var type = ev.dataTransfer.getData('text');
      if (type && type.indexOf('x-slate:') === 0) {
        var range = (0, _slateReact.getEventRange)(ev, change.value);
        return (0, _addBlock2.default)(change.value, schema.nodes[type.substr('x-slate:'.length)].slate, schema, null, null, change.select(range));
      }
    }, _this.onChange = function (change) {
      return _this.props.onChange(change.value);
    }, _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          readOnly = _this$props.readOnly,
          className = _this$props.className,
          spellcheck = _this$props.spellcheck,
          _this$props$schema = _this$props.schema,
          schema = _this$props$schema === undefined ? {} : _this$props$schema,
          menu = _this$props.menu,
          plugins = _this$props.plugins,
          _this$props$style = _this$props.style,
          style = _this$props$style === undefined ? {} : _this$props$style,
          full = _this$props.full,
          isCode = _this$props.isCode,
          setIsCode = _this$props.setIsCode,
          setFull = _this$props.setFull,
          isFull = _this$props.isFull,
          setIsFull = _this$props.setIsFull,
          rest = _objectWithoutProperties(_this$props, ['children', 'readOnly', 'className', 'spellcheck', 'schema', 'menu', 'plugins', 'style', 'full', 'isCode', 'setIsCode', 'setFull', 'isFull', 'setIsFull']);

      var value = _this.props.value || _slatePlainSerializer2.default.deserialize('');

      var editor = isCode ? _react2.default.createElement(_editor2.default, _extends({}, rest, {
        value: value,
        className: 'slate-editor slate-writer',
        onDragEnter: function onDragEnter(e) {
          return _this.ref.focus();
        },
        ref: function ref(r) {
          return _this.ref = r;
        },
        spellcheck: spellcheck || false,
        readOnly: false,
        onDrop: _this.onDrop,
        onPaste: _this.onPaste,
        plugins: readOnly ? emptyArray : plugins,
        onChange: _this.onChange,
        onKeyDown: _this.onKeyDown,
        placeholder: !readOnly && 'Hier Text eingeben...',
        placeholderStyle: { padding: '0 1rem', opacity: 0.33 },
        style: _extends({ height: '100%' }, style)
      })) : _react2.default.createElement(_slateReact.Editor, _extends({}, rest, {
        value: value,
        className: 'slate-editor slate-writer',
        onDragEnter: function onDragEnter(e) {
          return _this.ref.focus();
        },
        ref: function ref(r) {
          return _this.ref = r;
        },
        spellcheck: spellcheck || false,
        readOnly: false,
        onDrop: _this.onDrop,
        onPaste: _this.onPaste,
        plugins: readOnly ? emptyArray : plugins,
        onChange: _this.onChange,
        onKeyDown: _this.onKeyDown,
        placeholder: !readOnly && 'Hier Text eingeben...',
        placeholderStyle: { padding: '0 1rem', opacity: 0.33 },
        style: _extends({ height: '100%' }, style)
      }));
      var inner = _react2.default.createElement(
        'div',
        { className: className },
        children,
        readOnly !== true && _react2.default.createElement(_toolbarText2.default, {
          show: true,
          value: value,
          onChange: _this.onChange,
          blockTypes: schema.nodes,
          toolbarActions: _toolbarActions2.default,
          toolbarMarks: _toolbarMarks2.default,
          toolbarTypes: _toolbarTypes2.default
        }),
        editor,
        _react2.default.createElement(
          _blockBar2.default,
          {
            full: full || isFull,
            setFull: full ? setFull : setIsFull,
            code: isCode,
            setCode: setIsCode
          },
          menu
        )
      );
      if (full || isFull) {
        return _react2.default.createElement(
          _portal2.default,
          { noScroll: true },
          _react2.default.createElement(
            'div',
            {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                minHeight: '100%',
                zIndex: 100,
                backgroundColor: 'white',
                width: '100%'
              }
            },
            inner
          )
        );
      }
      return inner;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3NsYXRlLXdyaXRlci5lczYiXSwibmFtZXMiOlsiZW1wdHlBcnJheSIsImdldFR5cGUiLCJ0eXBlIiwicmVuZGVyTm9kZSIsIlgiLCJwcm9wcyIsIm5vZGUiLCJhdHRyaWJ1dGVzIiwiY29uc29sZSIsImxvZyIsImVkaXRvciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJjaGFuZ2UiLCJzZXROb2RlQnlLZXkiLCJrZXkiLCJjaGlsZHJlbiIsInJlbmRlck1hcmsiLCJtYXJrIiwiZW5oYW5jZSIsInBsdWdpbnMiLCJ0eXBlcyIsInR5cGVJdGVtIiwic2hpZnQiLCJ0cmlnZ2VyIiwiYmVmb3JlIiwidHJhbnNmb3JtIiwiZSIsIm1hdGNoZXMiLCJzZXRCbG9jayIsIldyaXRlciIsIm9uS2V5RG93biIsImRvY3VtZW50Iiwic3RhcnRLZXkiLCJzdGFydEJsb2NrIiwidW5kZWZpbmVkIiwiaXNWb2lkIiwiY29sbGFwc2VUb0VuZE9mIiwiaW5zZXJ0QmxvY2siLCJjcmVhdGUiLCJjb2xsYXBzZVRvRW5kIiwibmV4dEJsb2NrIiwiZ2V0TmV4dEJsb2NrIiwicHJldkJsb2NrIiwiZ2V0UHJldmlvdXNCbG9jayIsImlzRm9jdXNlZFN0YXJ0Iiwic2VsZWN0aW9uIiwiaGFzRWRnZUF0U3RhcnRPZiIsImlzRm9jdXNlZEVuZCIsImhhc0VkZ2VBdEVuZE9mIiwiYmxvY2tUb0luc2VydCIsImluZGV4Iiwibm9kZXMiLCJpbmRleE9mIiwiaW5zZXJ0Tm9kZUJ5S2V5IiwiY29sbGFwc2VUb1N0YXJ0T2YiLCJtZXRhS2V5IiwiY3RybEtleSIsInRvZ2dsZU1hcmsiLCJvblBhc3RlIiwiZXYiLCJzY2hlbWEiLCJ0ZXh0Iiwic2xhdGUiLCJzZWxlY3QiLCJvbkRyb3AiLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsImdldERhdGEiLCJyYW5nZSIsInN1YnN0ciIsImxlbmd0aCIsInJlbmRlciIsInJlYWRPbmx5IiwiY2xhc3NOYW1lIiwic3BlbGxjaGVjayIsIm1lbnUiLCJzdHlsZSIsImZ1bGwiLCJpc0NvZGUiLCJzZXRJc0NvZGUiLCJzZXRGdWxsIiwiaXNGdWxsIiwic2V0SXNGdWxsIiwicmVzdCIsImRlc2VyaWFsaXplIiwicmVmIiwiZm9jdXMiLCJyIiwicGFkZGluZyIsIm9wYWNpdHkiLCJoZWlnaHQiLCJpbm5lciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm1pbkhlaWdodCIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwicHJvcFR5cGVzIiwiYm9vbCIsInNob3dVbmRvIiwib2JqZWN0IiwiZnVuYyIsImF1dG9NYXJrRG93bktleURvd24iLCJhcnJheSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxFQUFuQjtBQUNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxPQUFRO0FBQ3RCLE1BQUlDLFNBQVMsbUJBQWIsRUFBa0M7QUFDaEMsV0FBTyxZQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLFNBQVMsaUNBQWIsRUFBZ0Q7QUFDckQsV0FBTyxlQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFNBQVMsNkJBQWIsRUFBNEM7QUFDakQsV0FBTyxXQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFNBQVMsb0JBQWIsRUFBbUM7QUFDeEMsV0FBTyxXQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFNBQVMsOEJBQWIsRUFBNkM7QUFDbEQsV0FBTyxPQUFQO0FBQ0Q7QUFDRCxTQUFPLFdBQVA7QUFDRCxDQWJE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RTtBQUFBO0FBQUE7QUFDRSxxQkFBTztBQUNMVywwQkFBVSxVQURMO0FBRUxDLHFCQUFLLENBRkE7QUFHTEMsc0JBQU0sQ0FIRDtBQUlMQywyQkFBVyxNQUpOO0FBS0xDLHdCQUFRLEdBTEg7QUFNTEMsaUNBQWlCLE9BTlo7QUFPTEMsdUJBQU87QUFQRjtBQURUO0FBV0dQO0FBWEg7QUFERixTQURGO0FBaUJEO0FBQ0QsYUFBT0EsS0FBUDtBQUNELEs7Ozs7NEJBbk9NUSxTLEdBQVk7QUFDakIzQixZQUFVLG9CQUFVNEIsSUFESDtBQUVqQkMsWUFBVSxvQkFBVUQsSUFGSDtBQUdqQnJGLFlBQVUsb0JBQVVWLElBSEg7QUFJakJNLFNBQU8sb0JBQVUyRixNQUpBO0FBS2pCNUYsWUFBVSxvQkFBVTZGLElBTEg7QUFNakJwRCxTQUFPLG9CQUFVbUQsTUFOQTtBQU9qQkUsdUJBQXFCLG9CQUFVRCxJQVBkO0FBUWpCcEYsV0FBUyxvQkFBVXNGLEtBUkY7QUFTakJoQyxhQUFXLG9CQUFVaUM7QUFUSixDO2tCQXNPTnhGLFFBQVFXLE1BQVIsQyIsImZpbGUiOiJleHRlcm5hbC9zbGF0ZS9zbGF0ZS13cml0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgRWRpdG9yLCBnZXRFdmVudFJhbmdlIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IFBsYWluIGZyb20gJ3NsYXRlLXBsYWluLXNlcmlhbGl6ZXInO1xuaW1wb3J0IEVkaXRMaXN0IGZyb20gJ3NsYXRlLWVkaXQtbGlzdCc7XG5pbXBvcnQgU29mdEJyZWFrIGZyb20gJ3NsYXRlLXNvZnQtYnJlYWsnO1xuaW1wb3J0IFBhc3RlTGlua2lmeSBmcm9tICdzbGF0ZS1wYXN0ZS1saW5raWZ5JztcbmltcG9ydCBBdXRvUmVwbGFjZSBmcm9tICdzbGF0ZS1hdXRvLXJlcGxhY2UnO1xuaW1wb3J0IENvbGxhcHNlT25Fc2NhcGUgZnJvbSAnc2xhdGUtY29sbGFwc2Utb24tZXNjYXBlJztcbmltcG9ydCBUcmFpbGluZ0Jsb2NrIGZyb20gJ3NsYXRlLXRyYWlsaW5nLWJsb2NrJztcbmltcG9ydCBFZGl0VGFibGUgZnJvbSAnc2xhdGUtZWRpdC10YWJsZSc7XG5pbXBvcnQgRWRpdEJsb2NrcXVvdGUgZnJvbSAnc2xhdGUtZWRpdC1ibG9ja3F1b3RlJztcbmltcG9ydCB7IEJsb2NrIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdvbHltcC1mZWxhL3BvcnRhbCc7XG5cbmltcG9ydCBQdWcgZnJvbSAnLi9wdWcvZWRpdG9yJztcbmltcG9ydCBnZXRTY2hlbWEgZnJvbSAnLi9nZXQtc2NoZW1hJztcbmltcG9ydCB1c2VKc29uU3RhdGUgZnJvbSAnLi91c2UtanNvbi1zdGF0ZSc7XG5pbXBvcnQgSW5zZXJ0QmxvY2tPbkVudGVyIGZyb20gJy4vcGx1Z2lucy9pbnNlcnQtYmxvY2stb24tZW50ZXInO1xuaW1wb3J0IEhlYWRpbmdJZCBmcm9tICcuL3BsdWdpbnMvaGVhZGluZy1pZCc7XG5pbXBvcnQgVG9vbGJhclRleHQgZnJvbSAnLi90b29sYmFyLXRleHQnO1xuaW1wb3J0IEJsb2NrQmFyIGZyb20gJy4vYmxvY2stYmFyJztcbmltcG9ydCBhZGRCbG9jayBmcm9tICcuL2FkZC1ibG9jayc7XG5pbXBvcnQgbWFya3MgZnJvbSAnLi9kZWZhdWx0cy9tYXJrcyc7XG5pbXBvcnQgbm9kZXMgZnJvbSAnLi9kZWZhdWx0cy9ub2Rlcy1zZWxlY3RlZCc7XG5pbXBvcnQgdG9vbGJhckFjdGlvbnMgZnJvbSAnLi9kZWZhdWx0cy90b29sYmFyLWFjdGlvbnMnO1xuaW1wb3J0IHRvb2xiYXJNYXJrcyBmcm9tICcuL2RlZmF1bHRzL3Rvb2xiYXItbWFya3MnO1xuaW1wb3J0IHRvb2xiYXJUeXBlcyBmcm9tICcuL2RlZmF1bHRzL3Rvb2xiYXItdHlwZXMnO1xuXG5jb25zdCBlbXB0eUFycmF5ID0gW107XG5jb25zdCBnZXRUeXBlID0gdHlwZSA9PiB7XG4gIGlmICh0eXBlID09PSAnR1pLLkhlYWRlci5IZWFkZXInKSB7XG4gICAgcmV0dXJuICdwYWdlSGVhZGVyJztcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnR1pLLlRlbXBsYXRlLkNvbnRhaW5lclRleHRCbG9jaycpIHtcbiAgICByZXR1cm4gJ2NvbnRhaW5lclRleHQnO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdHWksuVGVtcGxhdGUuQ29udGFpbmVyQmxvY2snKSB7XG4gICAgcmV0dXJuICdjb250YWluZXInO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXJlZC1saXN0LWl0ZW0nKSB7XG4gICAgcmV0dXJuICdsaXN0LWl0ZW0nO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQYWdlcy5NZWRpYS5JbWFnZUJsb2NrLkltYWdlJykge1xuICAgIHJldHVybiAnaW1hZ2UnO1xuICB9XG4gIHJldHVybiAncGFyYWdyYXBoJztcbn07XG5cbmNvbnN0IHJlbmRlck5vZGUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFggPSBub2Rlc1twcm9wcy5ub2RlLnR5cGVdO1xuICBpZiAoWCkge1xuICAgIHJldHVybiA8WCB7Li4ucHJvcHN9IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHMuYXR0cmlidXRlc30+XG4gICAgICA8YlxuICAgICAgICBjb250ZW50RWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAnMjEzJyxcbiAgICAgICAgICAgIHByb3BzLm5vZGUsXG4gICAgICAgICAgICBwcm9wcy5ub2RlLnR5cGUsXG4gICAgICAgICAgICBnZXRUeXBlKHByb3BzLm5vZGUudHlwZSksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwcm9wcy5lZGl0b3Iub25DaGFuZ2UoXG4gICAgICAgICAgICBwcm9wcy5lZGl0b3IudmFsdWVcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIC5zZXROb2RlQnlLZXkocHJvcHMubm9kZS5rZXksIGdldFR5cGUocHJvcHMubm9kZS50eXBlKSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgTm90IGZvdW5kOiB7cHJvcHMubm9kZS50eXBlfVxuICAgICAgPC9iPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcmVuZGVyTWFyayA9IHByb3BzID0+IHtcbiAgY29uc3QgWCA9IG1hcmtzW3Byb3BzLm1hcmsudHlwZV07XG4gIGlmIChYKSB7XG4gICAgcmV0dXJuIDxYIHsuLi5wcm9wc30gLz47XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFN0YXRlKCdpc0Z1bGwnLCAnc2V0SXNGdWxsJyksXG4gIHdpdGhTdGF0ZSgnaXNDb2RlJywgJ3NldElzQ29kZScpLFxuICB1c2VKc29uU3RhdGUsXG4gIGdldFNjaGVtYSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoJ3BsdWdpbnMnLCAoeyBwbHVnaW5zID0gW10gfSkgPT4gKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAuLi5wbHVnaW5zLFxuICAgICAgSGVhZGluZ0lkKHt9KSxcbiAgICAgIC8qIEVkaXRUYWJsZSh7XG4gICAgICAgIHR5cGVUYWJsZTogJ3RhYmxlJyxcbiAgICAgICAgdHlwZVJvdzogJ3RhYmxlUm93JyxcbiAgICAgICAgdHlwZUNlbGw6ICd0YWJsZUNlbGwnLFxuICAgICAgICBleGl0QmxvY2tUeXBlOiAncGFyYWdyYXBoJyxcbiAgICAgIH0pLCAqL1xuICAgICAgVHJhaWxpbmdCbG9jayh7IHR5cGU6ICdwYXJhZ3JhcGgnIH0pLFxuICAgICAgSW5zZXJ0QmxvY2tPbkVudGVyKHsgdHlwZTogJ3BhcmFncmFwaCcgfSksXG4gICAgICBFZGl0TGlzdCh7XG4gICAgICAgIHR5cGVzOiBbJ251bWJlcmVkLWxpc3QnLCAnYnVsbGV0ZWQtbGlzdCddLFxuICAgICAgICB0eXBlSXRlbTogJ2xpc3QtaXRlbScsXG4gICAgICB9KSxcbiAgICAgIFNvZnRCcmVhayh7XG4gICAgICAgIHNoaWZ0OiB0cnVlLFxuICAgICAgICAvLyBvbmx5SW46IFsncGFyYWdyYXBoJ11cbiAgICAgIH0pLFxuICAgICAgUGFzdGVMaW5raWZ5KHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgfSksXG4gICAgICBBdXRvUmVwbGFjZSh7XG4gICAgICAgIHRyaWdnZXI6ICdzcGFjZScsXG4gICAgICAgIGJlZm9yZTogL14oPikkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdibG9jay1xdW90ZScgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXihcXCopJC8sXG4gICAgICAgIHRyYW5zZm9ybTogKHRyYW5zZm9ybSwgZSwgbWF0Y2hlcykgPT5cbiAgICAgICAgICB0cmFuc2Zvcm0uc2V0QmxvY2soeyB0eXBlOiAnbGlzdC1pdGVtJyB9KSxcbiAgICAgIH0pLFxuICAgICAgQXV0b1JlcGxhY2Uoe1xuICAgICAgICB0cmlnZ2VyOiAnc3BhY2UnLFxuICAgICAgICBiZWZvcmU6IC9eKC0pJC8sXG4gICAgICAgIHRyYW5zZm9ybTogKHRyYW5zZm9ybSwgZSwgbWF0Y2hlcykgPT5cbiAgICAgICAgICB0cmFuc2Zvcm0uc2V0QmxvY2soeyB0eXBlOiAnbGlzdC1pdGVtJyB9KSxcbiAgICAgIH0pLFxuICAgICAgQXV0b1JlcGxhY2Uoe1xuICAgICAgICB0cmlnZ2VyOiAnc3BhY2UnLFxuICAgICAgICBiZWZvcmU6IC9eKFxcKykkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdsaXN0LWl0ZW0nIH0pLFxuICAgICAgfSksXG4gICAgICBBdXRvUmVwbGFjZSh7XG4gICAgICAgIHRyaWdnZXI6ICdzcGFjZScsXG4gICAgICAgIGJlZm9yZTogL14oIykkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdoZWFkaW5nLW9uZScgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXigjIykkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdoZWFkaW5nLXR3bycgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXigjIyMpJC8sXG4gICAgICAgIHRyYW5zZm9ybTogKHRyYW5zZm9ybSwgZSwgbWF0Y2hlcykgPT5cbiAgICAgICAgICB0cmFuc2Zvcm0uc2V0QmxvY2soeyB0eXBlOiAnaGVhZGluZy10aHJlZScgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXigjIyMjKSQvLFxuICAgICAgICB0cmFuc2Zvcm06ICh0cmFuc2Zvcm0sIGUsIG1hdGNoZXMpID0+XG4gICAgICAgICAgdHJhbnNmb3JtLnNldEJsb2NrKHsgdHlwZTogJ2hlYWRpbmctZm91cicgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXigjIyMjIykkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdoZWFkaW5nLWZpdmUnIH0pLFxuICAgICAgfSksXG4gICAgICBBdXRvUmVwbGFjZSh7XG4gICAgICAgIHRyaWdnZXI6ICdzcGFjZScsXG4gICAgICAgIGJlZm9yZTogL14oIyMjIyMjKSQvLFxuICAgICAgICB0cmFuc2Zvcm06ICh0cmFuc2Zvcm0sIGUsIG1hdGNoZXMpID0+XG4gICAgICAgICAgdHJhbnNmb3JtLnNldEJsb2NrKHsgdHlwZTogJ2hlYWRpbmctc2l4JyB9KSxcbiAgICAgIH0pLFxuICAgICAgQ29sbGFwc2VPbkVzY2FwZSgpLFxuICAgICAgRWRpdEJsb2NrcXVvdGUoKSxcbiAgICAgIC8qXG4gICAgICBMaW5lVG9QYXJhZ3JhcGgoeyB0eXBlOiAncGFyYWdyYXBoJyB9KSxcbiAgICAgIE5vUGFyYWdyYXBoKHsgdHlwZTogJ3BhcmFncmFwaCcgfSksXG4gICAgICAqL1xuICAgICAge1xuICAgICAgICByZW5kZXJOb2RlLFxuICAgICAgICByZW5kZXJNYXJrLFxuICAgICAgfSxcbiAgICBdLFxuICB9KSksXG4pO1xuXG5jbGFzcyBXcml0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93VW5kbzogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBub2RlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhdXRvTWFya0Rvd25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwbHVnaW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIG9uS2V5RG93biA9IChlLCBjaGFuZ2UpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGNoYW5nZTtcbiAgICAgIGNvbnN0IHsgZG9jdW1lbnQsIHN0YXJ0S2V5LCBzdGFydEJsb2NrIH0gPSB2YWx1ZTtcbiAgICAgIGlmIChcbiAgICAgICAgIXN0YXJ0QmxvY2sgfHxcbiAgICAgICAgc3RhcnRCbG9jay50eXBlID09PSAnbGlzdC1pdGVtJyB8fFxuICAgICAgICBzdGFydEJsb2NrLnR5cGUgPT09ICdjb2RlJyB8fFxuICAgICAgICBzdGFydEJsb2NrLnR5cGUgPT09ICdjb2RlLWxpbmUnIHx8XG4gICAgICAgIHN0YXJ0QmxvY2sudHlwZSA9PT0gJ3BhcmFncmFwaCdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEJsb2NrICYmICFzdGFydEJsb2NrLmlzVm9pZCkge1xuICAgICAgICByZXR1cm4gY2hhbmdlXG4gICAgICAgICAgLmNvbGxhcHNlVG9FbmRPZihzdGFydEJsb2NrKVxuICAgICAgICAgIC5pbnNlcnRCbG9jayhCbG9jay5jcmVhdGUoeyB0eXBlOiAncGFyYWdyYXBoJyB9KSlcbiAgICAgICAgICAuY29sbGFwc2VUb0VuZCgpO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEJsb2NrICYmIHN0YXJ0QmxvY2suaXNWb2lkKSB7XG4gICAgICAgIGNvbnN0IG5leHRCbG9jayA9IGRvY3VtZW50LmdldE5leHRCbG9jayhzdGFydEtleSk7XG4gICAgICAgIGNvbnN0IHByZXZCbG9jayA9IGRvY3VtZW50LmdldFByZXZpb3VzQmxvY2soc3RhcnRLZXkpO1xuICAgICAgICBjb25zdCBpc0ZvY3VzZWRTdGFydCA9IHZhbHVlLnNlbGVjdGlvbi5oYXNFZGdlQXRTdGFydE9mKHN0YXJ0QmxvY2spO1xuICAgICAgICBjb25zdCBpc0ZvY3VzZWRFbmQgPSB2YWx1ZS5zZWxlY3Rpb24uaGFzRWRnZUF0RW5kT2Yoc3RhcnRCbG9jayk7XG4gICAgICAgIGNvbnN0IGJsb2NrVG9JbnNlcnQgPSBCbG9jay5jcmVhdGUoeyB0eXBlOiAncGFyYWdyYXBoJyB9KTtcblxuICAgICAgICAvLyBWb2lkIGJsb2NrIGF0IHRoZSBlbmQgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGlmICghbmV4dEJsb2NrKSB7XG4gICAgICAgICAgaWYgKGlzRm9jdXNlZEVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb0VuZE9mKHN0YXJ0QmxvY2spXG4gICAgICAgICAgICAgIC5pbnNlcnRCbG9jayhibG9ja1RvSW5zZXJ0KVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb0VuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocHJldkJsb2NrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRvY3VtZW50Lm5vZGVzLmluZGV4T2YocHJldkJsb2NrKTtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VcbiAgICAgICAgICAgICAgLmNvbGxhcHNlVG9FbmRPZihwcmV2QmxvY2spXG4gICAgICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkoZG9jdW1lbnQua2V5LCBpbmRleCArIDEsIGJsb2NrVG9JbnNlcnQpXG4gICAgICAgICAgICAgIC5jb2xsYXBzZVRvU3RhcnRPZihzdGFydEJsb2NrKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZVxuICAgICAgICAgICAgLmNvbGxhcHNlVG9TdGFydE9mKHN0YXJ0QmxvY2spXG4gICAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KGRvY3VtZW50LmtleSwgMCwgYmxvY2tUb0luc2VydCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVm9pZCBibG9jayBiZXR3ZWVuIHR3byBibG9ja3NcbiAgICAgICAgaWYgKG5leHRCbG9jayAmJiBwcmV2QmxvY2spIHtcbiAgICAgICAgICBpZiAoaXNGb2N1c2VkU3RhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQubm9kZXMuaW5kZXhPZihwcmV2QmxvY2spO1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb0VuZE9mKHByZXZCbG9jaylcbiAgICAgICAgICAgICAgLmluc2VydE5vZGVCeUtleShkb2N1bWVudC5rZXksIGluZGV4ICsgMSwgYmxvY2tUb0luc2VydClcbiAgICAgICAgICAgICAgLmNvbGxhcHNlVG9TdGFydE9mKHN0YXJ0QmxvY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBOT2UgcmFydCBza2plciBoZXJcbiAgICAgICAgICByZXR1cm4gY2hhbmdlLmNvbGxhcHNlVG9FbmRPZihzdGFydEJsb2NrKS5pbnNlcnRCbG9jayhibG9ja1RvSW5zZXJ0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBWb2lkIGJsb2NrIGluIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGlmIChuZXh0QmxvY2sgJiYgIXByZXZCbG9jaykge1xuICAgICAgICAgIGlmIChpc0ZvY3VzZWRTdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb1N0YXJ0T2Yoc3RhcnRCbG9jaylcbiAgICAgICAgICAgICAgLmluc2VydE5vZGVCeUtleShkb2N1bWVudC5rZXksIDAsIGJsb2NrVG9JbnNlcnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hhbmdlLmNvbGxhcHNlVG9FbmRPZihzdGFydEJsb2NrKS5pbnNlcnRCbG9jayhibG9ja1RvSW5zZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlLnRvZ2dsZU1hcmsoJ2JvbGQnKTtcbiAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZS50b2dnbGVNYXJrKCd1bmRlcmxpbmVkJyk7XG4gICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgIHJldHVybiBjaGFuZ2UudG9nZ2xlTWFyaygnaXRhbGljJyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBvblBhc3RlID0gKGV2LCBjaGFuZ2UpID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZXYudGV4dCAmJiBzY2hlbWEubm9kZXNbZXYudGV4dF0pIHtcbiAgICAgIHJldHVybiBhZGRCbG9jayhcbiAgICAgICAgY2hhbmdlLnZhbHVlLFxuICAgICAgICBzY2hlbWEubm9kZXNbZXYudGV4dF0uc2xhdGUsXG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgY2hhbmdlLnNlbGVjdChldiksXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBvbkRyb3AgPSAoZXYsIGNoYW5nZSkgPT4ge1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKGV2LCBldi5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgIGNvbnN0IHR5cGUgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xuICAgIGlmICh0eXBlICYmIHR5cGUuaW5kZXhPZigneC1zbGF0ZTonKSA9PT0gMCkge1xuICAgICAgY29uc3QgcmFuZ2UgPSBnZXRFdmVudFJhbmdlKGV2LCBjaGFuZ2UudmFsdWUpO1xuICAgICAgcmV0dXJuIGFkZEJsb2NrKFxuICAgICAgICBjaGFuZ2UudmFsdWUsXG4gICAgICAgIHNjaGVtYS5ub2Rlc1t0eXBlLnN1YnN0cigneC1zbGF0ZTonLmxlbmd0aCldLnNsYXRlLFxuICAgICAgICBzY2hlbWEsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGNoYW5nZS5zZWxlY3QocmFuZ2UpLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2UgPSBjaGFuZ2UgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZShjaGFuZ2UudmFsdWUpO1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3BlbGxjaGVjayxcbiAgICAgIHNjaGVtYSA9IHt9LFxuICAgICAgbWVudSxcbiAgICAgIHBsdWdpbnMsXG4gICAgICBzdHlsZSA9IHt9LFxuICAgICAgZnVsbCxcbiAgICAgIGlzQ29kZSxcbiAgICAgIHNldElzQ29kZSxcbiAgICAgIHNldEZ1bGwsXG4gICAgICBpc0Z1bGwsXG4gICAgICBzZXRJc0Z1bGwsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IFBsYWluLmRlc2VyaWFsaXplKCcnKTtcblxuICAgIGNvbnN0IGVkaXRvciA9IGlzQ29kZSA/IChcbiAgICAgIDxQdWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwic2xhdGUtZWRpdG9yIHNsYXRlLXdyaXRlclwiXG4gICAgICAgIG9uRHJhZ0VudGVyPXtlID0+IHRoaXMucmVmLmZvY3VzKCl9XG4gICAgICAgIHJlZj17ciA9PiAodGhpcy5yZWYgPSByKX1cbiAgICAgICAgc3BlbGxjaGVjaz17c3BlbGxjaGVjayB8fCBmYWxzZX1cbiAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICBvbkRyb3A9e3RoaXMub25Ecm9wfVxuICAgICAgICBvblBhc3RlPXt0aGlzLm9uUGFzdGV9XG4gICAgICAgIHBsdWdpbnM9e3JlYWRPbmx5ID8gZW1wdHlBcnJheSA6IHBsdWdpbnN9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17IXJlYWRPbmx5ICYmICdIaWVyIFRleHQgZWluZ2ViZW4uLi4nfVxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlPXt7IHBhZGRpbmc6ICcwIDFyZW0nLCBvcGFjaXR5OiAwLjMzIH19XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCAuLi5zdHlsZSB9fVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPEVkaXRvclxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9XCJzbGF0ZS1lZGl0b3Igc2xhdGUtd3JpdGVyXCJcbiAgICAgICAgb25EcmFnRW50ZXI9e2UgPT4gdGhpcy5yZWYuZm9jdXMoKX1cbiAgICAgICAgcmVmPXtyID0+ICh0aGlzLnJlZiA9IHIpfVxuICAgICAgICBzcGVsbGNoZWNrPXtzcGVsbGNoZWNrIHx8IGZhbHNlfVxuICAgICAgICByZWFkT25seT17ZmFsc2V9XG4gICAgICAgIG9uRHJvcD17dGhpcy5vbkRyb3B9XG4gICAgICAgIG9uUGFzdGU9e3RoaXMub25QYXN0ZX1cbiAgICAgICAgcGx1Z2lucz17cmVhZE9ubHkgPyBlbXB0eUFycmF5IDogcGx1Z2luc31cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XG4gICAgICAgIHBsYWNlaG9sZGVyPXshcmVhZE9ubHkgJiYgJ0hpZXIgVGV4dCBlaW5nZWJlbi4uLid9XG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGU9e3sgcGFkZGluZzogJzAgMXJlbScsIG9wYWNpdHk6IDAuMzMgfX1cbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIC4uLnN0eWxlIH19XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgaW5uZXIgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7cmVhZE9ubHkgIT09IHRydWUgJiYgKFxuICAgICAgICAgIDxUb29sYmFyVGV4dFxuICAgICAgICAgICAgc2hvd1xuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBibG9ja1R5cGVzPXtzY2hlbWEubm9kZXN9XG4gICAgICAgICAgICB0b29sYmFyQWN0aW9ucz17dG9vbGJhckFjdGlvbnN9XG4gICAgICAgICAgICB0b29sYmFyTWFya3M9e3Rvb2xiYXJNYXJrc31cbiAgICAgICAgICAgIHRvb2xiYXJUeXBlcz17dG9vbGJhclR5cGVzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtlZGl0b3J9XG4gICAgICAgIDxCbG9ja0JhclxuICAgICAgICAgIGZ1bGw9e2Z1bGwgfHwgaXNGdWxsfVxuICAgICAgICAgIHNldEZ1bGw9e2Z1bGwgPyBzZXRGdWxsIDogc2V0SXNGdWxsfVxuICAgICAgICAgIGNvZGU9e2lzQ29kZX1cbiAgICAgICAgICBzZXRDb2RlPXtzZXRJc0NvZGV9XG4gICAgICAgID5cbiAgICAgICAgICB7bWVudX1cbiAgICAgICAgPC9CbG9ja0Jhcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgaWYgKGZ1bGwgfHwgaXNGdWxsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9ydGFsIG5vU2Nyb2xsPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICB6SW5kZXg6IDEwMCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5uZXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGlubmVyO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFdyaXRlcik7XG4iXX0=
