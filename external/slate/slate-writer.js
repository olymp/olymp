var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, withPropsOnChange, withState } from 'recompose';
import { Editor, getEventRange } from 'slate-react';
import Plain from 'slate-plain-serializer';
import EditList from 'slate-edit-list';
import SoftBreak from 'slate-soft-break';
import PasteLinkify from 'slate-paste-linkify';
import AutoReplace from 'slate-auto-replace';
import CollapseOnEscape from 'slate-collapse-on-escape';
import TrailingBlock from 'slate-trailing-block';
import EditTable from 'slate-edit-table';
import EditBlockquote from 'slate-edit-blockquote';
import { Block } from 'slate';
import Portal from 'olymp-fela/portal';

import Pug from './pug/editor';
import getSchema from './get-schema';
import useJsonState from './use-json-state';
import InsertBlockOnEnter from './plugins/insert-block-on-enter';
import HeadingId from './plugins/heading-id';
import ToolbarText from './toolbar-text';
import BlockBar from './block-bar';
import addBlock from './add-block';
import marks from './defaults/marks';
import nodes from './defaults/nodes-selected';
import toolbarActions from './defaults/toolbar-actions';
import toolbarMarks from './defaults/toolbar-marks';
import toolbarTypes from './defaults/toolbar-types';

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
  var X = nodes[props.node.type];
  if (X) {
    return React.createElement(X, props);
  }
  return React.createElement(
    'div',
    props.attributes,
    React.createElement(
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
  var X = marks[props.mark.type];
  if (X) {
    return React.createElement(X, props);
  }
  return null;
};

var enhance = compose(withState('isFull', 'setIsFull'), withState('isCode', 'setIsCode'), useJsonState, getSchema, withPropsOnChange('plugins', function (_ref) {
  var _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === undefined ? [] : _ref$plugins;
  return {
    plugins: [].concat(_toConsumableArray(plugins), [HeadingId({}),
    /* EditTable({
      typeTable: 'table',
      typeRow: 'tableRow',
      typeCell: 'tableCell',
      exitBlockType: 'paragraph',
    }), */
    TrailingBlock({ type: 'paragraph' }), InsertBlockOnEnter({ type: 'paragraph' }), EditList({
      types: ['numbered-list', 'bulleted-list'],
      typeItem: 'list-item'
    }), SoftBreak({
      shift: true
      // onlyIn: ['paragraph']
    }), PasteLinkify({
      type: 'link'
    }), AutoReplace({
      trigger: 'space',
      before: /^(>)$/,
      transform: function transform(_transform, e, matches) {
        return _transform.setBlock({ type: 'block-quote' });
      }
    }), AutoReplace({
      trigger: 'space',
      before: /^(\*)$/,
      transform: function transform(_transform2, e, matches) {
        return _transform2.setBlock({ type: 'list-item' });
      }
    }), AutoReplace({
      trigger: 'space',
      before: /^(-)$/,
      transform: function transform(_transform3, e, matches) {
        return _transform3.setBlock({ type: 'list-item' });
      }
    }), AutoReplace({
      trigger: 'space',
      before: /^(\+)$/,
      transform: function transform(_transform4, e, matches) {
        return _transform4.setBlock({ type: 'list-item' });
      }
    }), AutoReplace({
      trigger: 'space',
      before: /^(#)$/,
      transform: function transform(_transform5, e, matches) {
        return _transform5.setBlock({ type: 'heading-one' });
      }
    }), AutoReplace({
      trigger: 'space',
      before: /^(##)$/,
      transform: function transform(_transform6, e, matches) {
        return _transform6.setBlock({ type: 'heading-two' });
      }
    }), AutoReplace({
      trigger: 'space',
      before: /^(###)$/,
      transform: function transform(_transform7, e, matches) {
        return _transform7.setBlock({ type: 'heading-three' });
      }
    }), AutoReplace({
      trigger: 'space',
      before: /^(####)$/,
      transform: function transform(_transform8, e, matches) {
        return _transform8.setBlock({ type: 'heading-four' });
      }
    }), AutoReplace({
      trigger: 'space',
      before: /^(#####)$/,
      transform: function transform(_transform9, e, matches) {
        return _transform9.setBlock({ type: 'heading-five' });
      }
    }), AutoReplace({
      trigger: 'space',
      before: /^(######)$/,
      transform: function transform(_transform10, e, matches) {
        return _transform10.setBlock({ type: 'heading-six' });
      }
    }), CollapseOnEscape(), EditBlockquote(),
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
          return change.collapseToEndOf(startBlock).insertBlock(Block.create({ type: 'paragraph' })).collapseToEnd();
        } else if (startBlock && startBlock.isVoid) {
          var nextBlock = document.getNextBlock(startKey);
          var prevBlock = document.getPreviousBlock(startKey);
          var isFocusedStart = value.selection.hasEdgeAtStartOf(startBlock);
          var isFocusedEnd = value.selection.hasEdgeAtEndOf(startBlock);
          var blockToInsert = Block.create({ type: 'paragraph' });

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
        return addBlock(change.value, schema.nodes[ev.text].slate, schema, null, null, change.select(ev));
      }
    }, _this.onDrop = function (ev, change) {
      var schema = _this.props.schema;

      console.log(ev, ev.dataTransfer.files);
      var type = ev.dataTransfer.getData('text');
      if (type && type.indexOf('x-slate:') === 0) {
        var range = getEventRange(ev, change.value);
        return addBlock(change.value, schema.nodes[type.substr('x-slate:'.length)].slate, schema, null, null, change.select(range));
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

      var value = _this.props.value || Plain.deserialize('');

      var editor = isCode ? React.createElement(Pug, _extends({}, rest, {
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
      })) : React.createElement(Editor, _extends({}, rest, {
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
      var inner = React.createElement(
        'div',
        { className: className },
        children,
        readOnly !== true && React.createElement(ToolbarText, {
          show: true,
          value: value,
          onChange: _this.onChange,
          blockTypes: schema.nodes,
          toolbarActions: toolbarActions,
          toolbarMarks: toolbarMarks,
          toolbarTypes: toolbarTypes
        }),
        editor,
        React.createElement(
          BlockBar,
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
        return React.createElement(
          Portal,
          { noScroll: true },
          React.createElement(
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
}(Component), _class.propTypes = {
  readOnly: PropTypes.bool,
  showUndo: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.object,
  onChange: PropTypes.func,
  nodes: PropTypes.object,
  autoMarkDownKeyDown: PropTypes.func,
  plugins: PropTypes.array,
  className: PropTypes.string
}, _temp2);


export default enhance(Writer);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3NsYXRlLXdyaXRlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjb21wb3NlIiwid2l0aFByb3BzT25DaGFuZ2UiLCJ3aXRoU3RhdGUiLCJFZGl0b3IiLCJnZXRFdmVudFJhbmdlIiwiUGxhaW4iLCJFZGl0TGlzdCIsIlNvZnRCcmVhayIsIlBhc3RlTGlua2lmeSIsIkF1dG9SZXBsYWNlIiwiQ29sbGFwc2VPbkVzY2FwZSIsIlRyYWlsaW5nQmxvY2siLCJFZGl0VGFibGUiLCJFZGl0QmxvY2txdW90ZSIsIkJsb2NrIiwiUG9ydGFsIiwiUHVnIiwiZ2V0U2NoZW1hIiwidXNlSnNvblN0YXRlIiwiSW5zZXJ0QmxvY2tPbkVudGVyIiwiSGVhZGluZ0lkIiwiVG9vbGJhclRleHQiLCJCbG9ja0JhciIsImFkZEJsb2NrIiwibWFya3MiLCJub2RlcyIsInRvb2xiYXJBY3Rpb25zIiwidG9vbGJhck1hcmtzIiwidG9vbGJhclR5cGVzIiwiZW1wdHlBcnJheSIsImdldFR5cGUiLCJ0eXBlIiwicmVuZGVyTm9kZSIsIlgiLCJwcm9wcyIsIm5vZGUiLCJhdHRyaWJ1dGVzIiwiY29uc29sZSIsImxvZyIsImVkaXRvciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJjaGFuZ2UiLCJzZXROb2RlQnlLZXkiLCJrZXkiLCJjaGlsZHJlbiIsInJlbmRlck1hcmsiLCJtYXJrIiwiZW5oYW5jZSIsInBsdWdpbnMiLCJ0eXBlcyIsInR5cGVJdGVtIiwic2hpZnQiLCJ0cmlnZ2VyIiwiYmVmb3JlIiwidHJhbnNmb3JtIiwiZSIsIm1hdGNoZXMiLCJzZXRCbG9jayIsIldyaXRlciIsIm9uS2V5RG93biIsImRvY3VtZW50Iiwic3RhcnRLZXkiLCJzdGFydEJsb2NrIiwidW5kZWZpbmVkIiwiaXNWb2lkIiwiY29sbGFwc2VUb0VuZE9mIiwiaW5zZXJ0QmxvY2siLCJjcmVhdGUiLCJjb2xsYXBzZVRvRW5kIiwibmV4dEJsb2NrIiwiZ2V0TmV4dEJsb2NrIiwicHJldkJsb2NrIiwiZ2V0UHJldmlvdXNCbG9jayIsImlzRm9jdXNlZFN0YXJ0Iiwic2VsZWN0aW9uIiwiaGFzRWRnZUF0U3RhcnRPZiIsImlzRm9jdXNlZEVuZCIsImhhc0VkZ2VBdEVuZE9mIiwiYmxvY2tUb0luc2VydCIsImluZGV4IiwiaW5kZXhPZiIsImluc2VydE5vZGVCeUtleSIsImNvbGxhcHNlVG9TdGFydE9mIiwibWV0YUtleSIsImN0cmxLZXkiLCJ0b2dnbGVNYXJrIiwib25QYXN0ZSIsImV2Iiwic2NoZW1hIiwidGV4dCIsInNsYXRlIiwic2VsZWN0Iiwib25Ecm9wIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJnZXREYXRhIiwicmFuZ2UiLCJzdWJzdHIiLCJsZW5ndGgiLCJyZW5kZXIiLCJyZWFkT25seSIsImNsYXNzTmFtZSIsInNwZWxsY2hlY2siLCJtZW51Iiwic3R5bGUiLCJmdWxsIiwiaXNDb2RlIiwic2V0SXNDb2RlIiwic2V0RnVsbCIsImlzRnVsbCIsInNldElzRnVsbCIsInJlc3QiLCJkZXNlcmlhbGl6ZSIsInJlZiIsImZvY3VzIiwiciIsInBhZGRpbmciLCJvcGFjaXR5IiwiaGVpZ2h0IiwiaW5uZXIiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJtaW5IZWlnaHQiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsInByb3BUeXBlcyIsImJvb2wiLCJzaG93VW5kbyIsIm9iamVjdCIsImZ1bmMiLCJhdXRvTWFya0Rvd25LZXlEb3duIiwiYXJyYXkiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsaUJBQWxCLEVBQXFDQyxTQUFyQyxRQUFzRCxXQUF0RDtBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLGFBQWpCLFFBQXNDLGFBQXRDO0FBQ0EsT0FB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TGxCO0FBTUUsd0JBQWNDLFlBTmhCO0FBT0Usd0JBQWNDO0FBUGhCLFVBSEo7QUFhR1csY0FiSDtBQWNFO0FBQUMsa0JBQUQ7QUFBQTtBQUNFLGtCQUFNbUUsUUFBUUksTUFEaEI7QUFFRSxxQkFBU0osT0FBT0csT0FBUCxHQUFpQkUsU0FGNUI7QUFHRSxrQkFBTUosTUFIUjtBQUlFLHFCQUFTQztBQUpYO0FBTUdKO0FBTkg7QUFkRixPQURGO0FBeUJBLFVBQUlFLFFBQVFJLE1BQVosRUFBb0I7QUFDbEIsZUFDRTtBQUFDLGdCQUFEO0FBQUEsWUFBUSxjQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQ0UscUJBQU87QUFDTFcsMEJBQVUsVUFETDtBQUVMQyxxQkFBSyxDQUZBO0FBR0xDLHNCQUFNLENBSEQ7QUFJTEMsMkJBQVcsTUFKTjtBQUtMQyx3QkFBUSxHQUxIO0FBTUxDLGlDQUFpQixPQU5aO0FBT0xDLHVCQUFPO0FBUEY7QUFEVDtBQVdHUDtBQVhIO0FBREYsU0FERjtBQWlCRDtBQUNELGFBQU9BLEtBQVA7QUFDRCxLOzs7O0VBcE9rQjFILFMsVUFDWmtJLFMsR0FBWTtBQUNqQjNCLFlBQVV0RyxVQUFVa0ksSUFESDtBQUVqQkMsWUFBVW5JLFVBQVVrSSxJQUZIO0FBR2pCcEYsWUFBVTlDLFVBQVVvQyxJQUhIO0FBSWpCTSxTQUFPMUMsVUFBVW9JLE1BSkE7QUFLakIzRixZQUFVekMsVUFBVXFJLElBTEg7QUFNakIzRyxTQUFPMUIsVUFBVW9JLE1BTkE7QUFPakJFLHVCQUFxQnRJLFVBQVVxSSxJQVBkO0FBUWpCbkYsV0FBU2xELFVBQVV1SSxLQVJGO0FBU2pCaEMsYUFBV3ZHLFVBQVV3STtBQVRKLEM7OztBQXNPckIsZUFBZXZGLFFBQVFXLE1BQVIsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS9zbGF0ZS13cml0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgRWRpdG9yLCBnZXRFdmVudFJhbmdlIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IFBsYWluIGZyb20gJ3NsYXRlLXBsYWluLXNlcmlhbGl6ZXInO1xuaW1wb3J0IEVkaXRMaXN0IGZyb20gJ3NsYXRlLWVkaXQtbGlzdCc7XG5pbXBvcnQgU29mdEJyZWFrIGZyb20gJ3NsYXRlLXNvZnQtYnJlYWsnO1xuaW1wb3J0IFBhc3RlTGlua2lmeSBmcm9tICdzbGF0ZS1wYXN0ZS1saW5raWZ5JztcbmltcG9ydCBBdXRvUmVwbGFjZSBmcm9tICdzbGF0ZS1hdXRvLXJlcGxhY2UnO1xuaW1wb3J0IENvbGxhcHNlT25Fc2NhcGUgZnJvbSAnc2xhdGUtY29sbGFwc2Utb24tZXNjYXBlJztcbmltcG9ydCBUcmFpbGluZ0Jsb2NrIGZyb20gJ3NsYXRlLXRyYWlsaW5nLWJsb2NrJztcbmltcG9ydCBFZGl0VGFibGUgZnJvbSAnc2xhdGUtZWRpdC10YWJsZSc7XG5pbXBvcnQgRWRpdEJsb2NrcXVvdGUgZnJvbSAnc2xhdGUtZWRpdC1ibG9ja3F1b3RlJztcbmltcG9ydCB7IEJsb2NrIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdvbHltcC1mZWxhL3BvcnRhbCc7XG5cbmltcG9ydCBQdWcgZnJvbSAnLi9wdWcvZWRpdG9yJztcbmltcG9ydCBnZXRTY2hlbWEgZnJvbSAnLi9nZXQtc2NoZW1hJztcbmltcG9ydCB1c2VKc29uU3RhdGUgZnJvbSAnLi91c2UtanNvbi1zdGF0ZSc7XG5pbXBvcnQgSW5zZXJ0QmxvY2tPbkVudGVyIGZyb20gJy4vcGx1Z2lucy9pbnNlcnQtYmxvY2stb24tZW50ZXInO1xuaW1wb3J0IEhlYWRpbmdJZCBmcm9tICcuL3BsdWdpbnMvaGVhZGluZy1pZCc7XG5pbXBvcnQgVG9vbGJhclRleHQgZnJvbSAnLi90b29sYmFyLXRleHQnO1xuaW1wb3J0IEJsb2NrQmFyIGZyb20gJy4vYmxvY2stYmFyJztcbmltcG9ydCBhZGRCbG9jayBmcm9tICcuL2FkZC1ibG9jayc7XG5pbXBvcnQgbWFya3MgZnJvbSAnLi9kZWZhdWx0cy9tYXJrcyc7XG5pbXBvcnQgbm9kZXMgZnJvbSAnLi9kZWZhdWx0cy9ub2Rlcy1zZWxlY3RlZCc7XG5pbXBvcnQgdG9vbGJhckFjdGlvbnMgZnJvbSAnLi9kZWZhdWx0cy90b29sYmFyLWFjdGlvbnMnO1xuaW1wb3J0IHRvb2xiYXJNYXJrcyBmcm9tICcuL2RlZmF1bHRzL3Rvb2xiYXItbWFya3MnO1xuaW1wb3J0IHRvb2xiYXJUeXBlcyBmcm9tICcuL2RlZmF1bHRzL3Rvb2xiYXItdHlwZXMnO1xuXG5jb25zdCBlbXB0eUFycmF5ID0gW107XG5jb25zdCBnZXRUeXBlID0gdHlwZSA9PiB7XG4gIGlmICh0eXBlID09PSAnR1pLLkhlYWRlci5IZWFkZXInKSB7XG4gICAgcmV0dXJuICdwYWdlSGVhZGVyJztcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnR1pLLlRlbXBsYXRlLkNvbnRhaW5lclRleHRCbG9jaycpIHtcbiAgICByZXR1cm4gJ2NvbnRhaW5lclRleHQnO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdHWksuVGVtcGxhdGUuQ29udGFpbmVyQmxvY2snKSB7XG4gICAgcmV0dXJuICdjb250YWluZXInO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXJlZC1saXN0LWl0ZW0nKSB7XG4gICAgcmV0dXJuICdsaXN0LWl0ZW0nO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQYWdlcy5NZWRpYS5JbWFnZUJsb2NrLkltYWdlJykge1xuICAgIHJldHVybiAnaW1hZ2UnO1xuICB9XG4gIHJldHVybiAncGFyYWdyYXBoJztcbn07XG5cbmNvbnN0IHJlbmRlck5vZGUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFggPSBub2Rlc1twcm9wcy5ub2RlLnR5cGVdO1xuICBpZiAoWCkge1xuICAgIHJldHVybiA8WCB7Li4ucHJvcHN9IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHMuYXR0cmlidXRlc30+XG4gICAgICA8YlxuICAgICAgICBjb250ZW50RWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAnMjEzJyxcbiAgICAgICAgICAgIHByb3BzLm5vZGUsXG4gICAgICAgICAgICBwcm9wcy5ub2RlLnR5cGUsXG4gICAgICAgICAgICBnZXRUeXBlKHByb3BzLm5vZGUudHlwZSksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwcm9wcy5lZGl0b3Iub25DaGFuZ2UoXG4gICAgICAgICAgICBwcm9wcy5lZGl0b3IudmFsdWVcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIC5zZXROb2RlQnlLZXkocHJvcHMubm9kZS5rZXksIGdldFR5cGUocHJvcHMubm9kZS50eXBlKSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgTm90IGZvdW5kOiB7cHJvcHMubm9kZS50eXBlfVxuICAgICAgPC9iPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcmVuZGVyTWFyayA9IHByb3BzID0+IHtcbiAgY29uc3QgWCA9IG1hcmtzW3Byb3BzLm1hcmsudHlwZV07XG4gIGlmIChYKSB7XG4gICAgcmV0dXJuIDxYIHsuLi5wcm9wc30gLz47XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFN0YXRlKCdpc0Z1bGwnLCAnc2V0SXNGdWxsJyksXG4gIHdpdGhTdGF0ZSgnaXNDb2RlJywgJ3NldElzQ29kZScpLFxuICB1c2VKc29uU3RhdGUsXG4gIGdldFNjaGVtYSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoJ3BsdWdpbnMnLCAoeyBwbHVnaW5zID0gW10gfSkgPT4gKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAuLi5wbHVnaW5zLFxuICAgICAgSGVhZGluZ0lkKHt9KSxcbiAgICAgIC8qIEVkaXRUYWJsZSh7XG4gICAgICAgIHR5cGVUYWJsZTogJ3RhYmxlJyxcbiAgICAgICAgdHlwZVJvdzogJ3RhYmxlUm93JyxcbiAgICAgICAgdHlwZUNlbGw6ICd0YWJsZUNlbGwnLFxuICAgICAgICBleGl0QmxvY2tUeXBlOiAncGFyYWdyYXBoJyxcbiAgICAgIH0pLCAqL1xuICAgICAgVHJhaWxpbmdCbG9jayh7IHR5cGU6ICdwYXJhZ3JhcGgnIH0pLFxuICAgICAgSW5zZXJ0QmxvY2tPbkVudGVyKHsgdHlwZTogJ3BhcmFncmFwaCcgfSksXG4gICAgICBFZGl0TGlzdCh7XG4gICAgICAgIHR5cGVzOiBbJ251bWJlcmVkLWxpc3QnLCAnYnVsbGV0ZWQtbGlzdCddLFxuICAgICAgICB0eXBlSXRlbTogJ2xpc3QtaXRlbScsXG4gICAgICB9KSxcbiAgICAgIFNvZnRCcmVhayh7XG4gICAgICAgIHNoaWZ0OiB0cnVlLFxuICAgICAgICAvLyBvbmx5SW46IFsncGFyYWdyYXBoJ11cbiAgICAgIH0pLFxuICAgICAgUGFzdGVMaW5raWZ5KHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgfSksXG4gICAgICBBdXRvUmVwbGFjZSh7XG4gICAgICAgIHRyaWdnZXI6ICdzcGFjZScsXG4gICAgICAgIGJlZm9yZTogL14oPikkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdibG9jay1xdW90ZScgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXihcXCopJC8sXG4gICAgICAgIHRyYW5zZm9ybTogKHRyYW5zZm9ybSwgZSwgbWF0Y2hlcykgPT5cbiAgICAgICAgICB0cmFuc2Zvcm0uc2V0QmxvY2soeyB0eXBlOiAnbGlzdC1pdGVtJyB9KSxcbiAgICAgIH0pLFxuICAgICAgQXV0b1JlcGxhY2Uoe1xuICAgICAgICB0cmlnZ2VyOiAnc3BhY2UnLFxuICAgICAgICBiZWZvcmU6IC9eKC0pJC8sXG4gICAgICAgIHRyYW5zZm9ybTogKHRyYW5zZm9ybSwgZSwgbWF0Y2hlcykgPT5cbiAgICAgICAgICB0cmFuc2Zvcm0uc2V0QmxvY2soeyB0eXBlOiAnbGlzdC1pdGVtJyB9KSxcbiAgICAgIH0pLFxuICAgICAgQXV0b1JlcGxhY2Uoe1xuICAgICAgICB0cmlnZ2VyOiAnc3BhY2UnLFxuICAgICAgICBiZWZvcmU6IC9eKFxcKykkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdsaXN0LWl0ZW0nIH0pLFxuICAgICAgfSksXG4gICAgICBBdXRvUmVwbGFjZSh7XG4gICAgICAgIHRyaWdnZXI6ICdzcGFjZScsXG4gICAgICAgIGJlZm9yZTogL14oIykkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdoZWFkaW5nLW9uZScgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXigjIykkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdoZWFkaW5nLXR3bycgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXigjIyMpJC8sXG4gICAgICAgIHRyYW5zZm9ybTogKHRyYW5zZm9ybSwgZSwgbWF0Y2hlcykgPT5cbiAgICAgICAgICB0cmFuc2Zvcm0uc2V0QmxvY2soeyB0eXBlOiAnaGVhZGluZy10aHJlZScgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXigjIyMjKSQvLFxuICAgICAgICB0cmFuc2Zvcm06ICh0cmFuc2Zvcm0sIGUsIG1hdGNoZXMpID0+XG4gICAgICAgICAgdHJhbnNmb3JtLnNldEJsb2NrKHsgdHlwZTogJ2hlYWRpbmctZm91cicgfSksXG4gICAgICB9KSxcbiAgICAgIEF1dG9SZXBsYWNlKHtcbiAgICAgICAgdHJpZ2dlcjogJ3NwYWNlJyxcbiAgICAgICAgYmVmb3JlOiAvXigjIyMjIykkLyxcbiAgICAgICAgdHJhbnNmb3JtOiAodHJhbnNmb3JtLCBlLCBtYXRjaGVzKSA9PlxuICAgICAgICAgIHRyYW5zZm9ybS5zZXRCbG9jayh7IHR5cGU6ICdoZWFkaW5nLWZpdmUnIH0pLFxuICAgICAgfSksXG4gICAgICBBdXRvUmVwbGFjZSh7XG4gICAgICAgIHRyaWdnZXI6ICdzcGFjZScsXG4gICAgICAgIGJlZm9yZTogL14oIyMjIyMjKSQvLFxuICAgICAgICB0cmFuc2Zvcm06ICh0cmFuc2Zvcm0sIGUsIG1hdGNoZXMpID0+XG4gICAgICAgICAgdHJhbnNmb3JtLnNldEJsb2NrKHsgdHlwZTogJ2hlYWRpbmctc2l4JyB9KSxcbiAgICAgIH0pLFxuICAgICAgQ29sbGFwc2VPbkVzY2FwZSgpLFxuICAgICAgRWRpdEJsb2NrcXVvdGUoKSxcbiAgICAgIC8qXG4gICAgICBMaW5lVG9QYXJhZ3JhcGgoeyB0eXBlOiAncGFyYWdyYXBoJyB9KSxcbiAgICAgIE5vUGFyYWdyYXBoKHsgdHlwZTogJ3BhcmFncmFwaCcgfSksXG4gICAgICAqL1xuICAgICAge1xuICAgICAgICByZW5kZXJOb2RlLFxuICAgICAgICByZW5kZXJNYXJrLFxuICAgICAgfSxcbiAgICBdLFxuICB9KSksXG4pO1xuXG5jbGFzcyBXcml0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93VW5kbzogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBub2RlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhdXRvTWFya0Rvd25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwbHVnaW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIG9uS2V5RG93biA9IChlLCBjaGFuZ2UpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGNoYW5nZTtcbiAgICAgIGNvbnN0IHsgZG9jdW1lbnQsIHN0YXJ0S2V5LCBzdGFydEJsb2NrIH0gPSB2YWx1ZTtcbiAgICAgIGlmIChcbiAgICAgICAgIXN0YXJ0QmxvY2sgfHxcbiAgICAgICAgc3RhcnRCbG9jay50eXBlID09PSAnbGlzdC1pdGVtJyB8fFxuICAgICAgICBzdGFydEJsb2NrLnR5cGUgPT09ICdjb2RlJyB8fFxuICAgICAgICBzdGFydEJsb2NrLnR5cGUgPT09ICdjb2RlLWxpbmUnIHx8XG4gICAgICAgIHN0YXJ0QmxvY2sudHlwZSA9PT0gJ3BhcmFncmFwaCdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEJsb2NrICYmICFzdGFydEJsb2NrLmlzVm9pZCkge1xuICAgICAgICByZXR1cm4gY2hhbmdlXG4gICAgICAgICAgLmNvbGxhcHNlVG9FbmRPZihzdGFydEJsb2NrKVxuICAgICAgICAgIC5pbnNlcnRCbG9jayhCbG9jay5jcmVhdGUoeyB0eXBlOiAncGFyYWdyYXBoJyB9KSlcbiAgICAgICAgICAuY29sbGFwc2VUb0VuZCgpO1xuICAgICAgfSBlbHNlIGlmIChzdGFydEJsb2NrICYmIHN0YXJ0QmxvY2suaXNWb2lkKSB7XG4gICAgICAgIGNvbnN0IG5leHRCbG9jayA9IGRvY3VtZW50LmdldE5leHRCbG9jayhzdGFydEtleSk7XG4gICAgICAgIGNvbnN0IHByZXZCbG9jayA9IGRvY3VtZW50LmdldFByZXZpb3VzQmxvY2soc3RhcnRLZXkpO1xuICAgICAgICBjb25zdCBpc0ZvY3VzZWRTdGFydCA9IHZhbHVlLnNlbGVjdGlvbi5oYXNFZGdlQXRTdGFydE9mKHN0YXJ0QmxvY2spO1xuICAgICAgICBjb25zdCBpc0ZvY3VzZWRFbmQgPSB2YWx1ZS5zZWxlY3Rpb24uaGFzRWRnZUF0RW5kT2Yoc3RhcnRCbG9jayk7XG4gICAgICAgIGNvbnN0IGJsb2NrVG9JbnNlcnQgPSBCbG9jay5jcmVhdGUoeyB0eXBlOiAncGFyYWdyYXBoJyB9KTtcblxuICAgICAgICAvLyBWb2lkIGJsb2NrIGF0IHRoZSBlbmQgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGlmICghbmV4dEJsb2NrKSB7XG4gICAgICAgICAgaWYgKGlzRm9jdXNlZEVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb0VuZE9mKHN0YXJ0QmxvY2spXG4gICAgICAgICAgICAgIC5pbnNlcnRCbG9jayhibG9ja1RvSW5zZXJ0KVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb0VuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocHJldkJsb2NrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRvY3VtZW50Lm5vZGVzLmluZGV4T2YocHJldkJsb2NrKTtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VcbiAgICAgICAgICAgICAgLmNvbGxhcHNlVG9FbmRPZihwcmV2QmxvY2spXG4gICAgICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkoZG9jdW1lbnQua2V5LCBpbmRleCArIDEsIGJsb2NrVG9JbnNlcnQpXG4gICAgICAgICAgICAgIC5jb2xsYXBzZVRvU3RhcnRPZihzdGFydEJsb2NrKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZVxuICAgICAgICAgICAgLmNvbGxhcHNlVG9TdGFydE9mKHN0YXJ0QmxvY2spXG4gICAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KGRvY3VtZW50LmtleSwgMCwgYmxvY2tUb0luc2VydCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVm9pZCBibG9jayBiZXR3ZWVuIHR3byBibG9ja3NcbiAgICAgICAgaWYgKG5leHRCbG9jayAmJiBwcmV2QmxvY2spIHtcbiAgICAgICAgICBpZiAoaXNGb2N1c2VkU3RhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQubm9kZXMuaW5kZXhPZihwcmV2QmxvY2spO1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb0VuZE9mKHByZXZCbG9jaylcbiAgICAgICAgICAgICAgLmluc2VydE5vZGVCeUtleShkb2N1bWVudC5rZXksIGluZGV4ICsgMSwgYmxvY2tUb0luc2VydClcbiAgICAgICAgICAgICAgLmNvbGxhcHNlVG9TdGFydE9mKHN0YXJ0QmxvY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBOT2UgcmFydCBza2plciBoZXJcbiAgICAgICAgICByZXR1cm4gY2hhbmdlLmNvbGxhcHNlVG9FbmRPZihzdGFydEJsb2NrKS5pbnNlcnRCbG9jayhibG9ja1RvSW5zZXJ0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBWb2lkIGJsb2NrIGluIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGlmIChuZXh0QmxvY2sgJiYgIXByZXZCbG9jaykge1xuICAgICAgICAgIGlmIChpc0ZvY3VzZWRTdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb1N0YXJ0T2Yoc3RhcnRCbG9jaylcbiAgICAgICAgICAgICAgLmluc2VydE5vZGVCeUtleShkb2N1bWVudC5rZXksIDAsIGJsb2NrVG9JbnNlcnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hhbmdlLmNvbGxhcHNlVG9FbmRPZihzdGFydEJsb2NrKS5pbnNlcnRCbG9jayhibG9ja1RvSW5zZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICByZXR1cm4gY2hhbmdlLnRvZ2dsZU1hcmsoJ2JvbGQnKTtcbiAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZS50b2dnbGVNYXJrKCd1bmRlcmxpbmVkJyk7XG4gICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgIHJldHVybiBjaGFuZ2UudG9nZ2xlTWFyaygnaXRhbGljJyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBvblBhc3RlID0gKGV2LCBjaGFuZ2UpID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZXYudGV4dCAmJiBzY2hlbWEubm9kZXNbZXYudGV4dF0pIHtcbiAgICAgIHJldHVybiBhZGRCbG9jayhcbiAgICAgICAgY2hhbmdlLnZhbHVlLFxuICAgICAgICBzY2hlbWEubm9kZXNbZXYudGV4dF0uc2xhdGUsXG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgY2hhbmdlLnNlbGVjdChldiksXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBvbkRyb3AgPSAoZXYsIGNoYW5nZSkgPT4ge1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKGV2LCBldi5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgIGNvbnN0IHR5cGUgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xuICAgIGlmICh0eXBlICYmIHR5cGUuaW5kZXhPZigneC1zbGF0ZTonKSA9PT0gMCkge1xuICAgICAgY29uc3QgcmFuZ2UgPSBnZXRFdmVudFJhbmdlKGV2LCBjaGFuZ2UudmFsdWUpO1xuICAgICAgcmV0dXJuIGFkZEJsb2NrKFxuICAgICAgICBjaGFuZ2UudmFsdWUsXG4gICAgICAgIHNjaGVtYS5ub2Rlc1t0eXBlLnN1YnN0cigneC1zbGF0ZTonLmxlbmd0aCldLnNsYXRlLFxuICAgICAgICBzY2hlbWEsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGNoYW5nZS5zZWxlY3QocmFuZ2UpLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2UgPSBjaGFuZ2UgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZShjaGFuZ2UudmFsdWUpO1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3BlbGxjaGVjayxcbiAgICAgIHNjaGVtYSA9IHt9LFxuICAgICAgbWVudSxcbiAgICAgIHBsdWdpbnMsXG4gICAgICBzdHlsZSA9IHt9LFxuICAgICAgZnVsbCxcbiAgICAgIGlzQ29kZSxcbiAgICAgIHNldElzQ29kZSxcbiAgICAgIHNldEZ1bGwsXG4gICAgICBpc0Z1bGwsXG4gICAgICBzZXRJc0Z1bGwsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IFBsYWluLmRlc2VyaWFsaXplKCcnKTtcblxuICAgIGNvbnN0IGVkaXRvciA9IGlzQ29kZSA/IChcbiAgICAgIDxQdWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwic2xhdGUtZWRpdG9yIHNsYXRlLXdyaXRlclwiXG4gICAgICAgIG9uRHJhZ0VudGVyPXtlID0+IHRoaXMucmVmLmZvY3VzKCl9XG4gICAgICAgIHJlZj17ciA9PiAodGhpcy5yZWYgPSByKX1cbiAgICAgICAgc3BlbGxjaGVjaz17c3BlbGxjaGVjayB8fCBmYWxzZX1cbiAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICBvbkRyb3A9e3RoaXMub25Ecm9wfVxuICAgICAgICBvblBhc3RlPXt0aGlzLm9uUGFzdGV9XG4gICAgICAgIHBsdWdpbnM9e3JlYWRPbmx5ID8gZW1wdHlBcnJheSA6IHBsdWdpbnN9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17IXJlYWRPbmx5ICYmICdIaWVyIFRleHQgZWluZ2ViZW4uLi4nfVxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlPXt7IHBhZGRpbmc6ICcwIDFyZW0nLCBvcGFjaXR5OiAwLjMzIH19XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCAuLi5zdHlsZSB9fVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPEVkaXRvclxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9XCJzbGF0ZS1lZGl0b3Igc2xhdGUtd3JpdGVyXCJcbiAgICAgICAgb25EcmFnRW50ZXI9e2UgPT4gdGhpcy5yZWYuZm9jdXMoKX1cbiAgICAgICAgcmVmPXtyID0+ICh0aGlzLnJlZiA9IHIpfVxuICAgICAgICBzcGVsbGNoZWNrPXtzcGVsbGNoZWNrIHx8IGZhbHNlfVxuICAgICAgICByZWFkT25seT17ZmFsc2V9XG4gICAgICAgIG9uRHJvcD17dGhpcy5vbkRyb3B9XG4gICAgICAgIG9uUGFzdGU9e3RoaXMub25QYXN0ZX1cbiAgICAgICAgcGx1Z2lucz17cmVhZE9ubHkgPyBlbXB0eUFycmF5IDogcGx1Z2luc31cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XG4gICAgICAgIHBsYWNlaG9sZGVyPXshcmVhZE9ubHkgJiYgJ0hpZXIgVGV4dCBlaW5nZWJlbi4uLid9XG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGU9e3sgcGFkZGluZzogJzAgMXJlbScsIG9wYWNpdHk6IDAuMzMgfX1cbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIC4uLnN0eWxlIH19XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgaW5uZXIgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7cmVhZE9ubHkgIT09IHRydWUgJiYgKFxuICAgICAgICAgIDxUb29sYmFyVGV4dFxuICAgICAgICAgICAgc2hvd1xuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBibG9ja1R5cGVzPXtzY2hlbWEubm9kZXN9XG4gICAgICAgICAgICB0b29sYmFyQWN0aW9ucz17dG9vbGJhckFjdGlvbnN9XG4gICAgICAgICAgICB0b29sYmFyTWFya3M9e3Rvb2xiYXJNYXJrc31cbiAgICAgICAgICAgIHRvb2xiYXJUeXBlcz17dG9vbGJhclR5cGVzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtlZGl0b3J9XG4gICAgICAgIDxCbG9ja0JhclxuICAgICAgICAgIGZ1bGw9e2Z1bGwgfHwgaXNGdWxsfVxuICAgICAgICAgIHNldEZ1bGw9e2Z1bGwgPyBzZXRGdWxsIDogc2V0SXNGdWxsfVxuICAgICAgICAgIGNvZGU9e2lzQ29kZX1cbiAgICAgICAgICBzZXRDb2RlPXtzZXRJc0NvZGV9XG4gICAgICAgID5cbiAgICAgICAgICB7bWVudX1cbiAgICAgICAgPC9CbG9ja0Jhcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgaWYgKGZ1bGwgfHwgaXNGdWxsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9ydGFsIG5vU2Nyb2xsPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICB6SW5kZXg6IDEwMCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5uZXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGlubmVyO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFdyaXRlcik7XG4iXX0=
