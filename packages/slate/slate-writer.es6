import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor, getEventRange } from 'slate-react';
import Plain from 'slate-plain-serializer';
import EditList from 'slate-edit-list';
import getSchema from './get-schema';
import useJsonState from './use-json-state';
import AutoMarkdown from './plugins/auto-markdown';
import TrailingBlock from './plugins/trailing-block';
import LineToParagraph from './plugins/line-to-paragraph';
import InsertBlockOnEnter from './plugins/insert-block-on-enter';
import NoParagraph from './plugins/no-paragraph';
import ToolbarText from './toolbar-text';
import BlockBar from './block-bar';
import addBlock from './add-block';
import getMarkdownType from './defaults/markdown';
import marks from './defaults/marks';
import nodes from './defaults/nodes-selected';
import toolbarActions from './defaults/toolbar-actions';
import toolbarMarks from './defaults/toolbar-marks';
import toolbarTypes from './defaults/toolbar-types';

const emptyArray = [];
const editList = EditList({
  types: ['numbered-list', 'bulleted-list'],
  typeItem: 'list-item',
});

const renderNode = props => {
  const X = nodes[props.node.type];
  if (X) {
    return <X {...props} />;
  }
  return null;
};
const renderMark = props => {
  const X = marks[props.mark.type];
  if (X) {
    return <X {...props} />;
  }
  return null;
};

const plugins = [
  TrailingBlock({ type: 'paragraph' }),
  InsertBlockOnEnter({ type: 'paragraph' }),
  /* AutoMarkdown({ getMarkdownType }),
  LineToParagraph({ type: 'paragraph' }),
  NoParagraph({ type: 'paragraph' }),
  editList, */
  {
    renderNode,
    renderMark,
  },
];

class Writer extends Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    showUndo: PropTypes.bool,
    children: PropTypes.node,
    value: PropTypes.object,
    onChange: PropTypes.func,
    nodes: PropTypes.object,
    autoMarkDownKeyDown: PropTypes.func,
    plugins: PropTypes.array,
    className: PropTypes.string,
  };

  onKeyDown = (e, change) => {
    if (e.shiftKey && e.key === 'enter') {
      return change.insertText('\n');
    } else if (e.key === 'backspace') {
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
  };

  onPaste = (ev, change) => {
    const { schema } = this.props;
    if (ev.text && schema.nodes[ev.text]) {
      return addBlock(
        change.value,
        schema.nodes[ev.text].slate,
        schema,
        null,
        null,
        change.select(ev),
      );
    }
  };

  onDrop = (ev, change) => {
    const { schema } = this.props;
    const type = ev.dataTransfer.getData('text');
    if (type && type.indexOf('x-slate:') === 0) {
      const range = getEventRange(ev, change.value);
      return addBlock(
        change.value,
        schema.nodes[type.substr('x-slate:'.length)].slate,
        schema,
        null,
        null,
        change.select(range),
      );
    }
  };

  onChange = change => this.props.onChange(change.value);

  render = () => {
    const {
      children,
      readOnly,
      className,
      spellcheck,
      schema,
      renderNode,
      style = {},
      ...rest
    } = this.props;
    const value = this.props.value || Plain.deserialize('');

    return (
      <div className={className}>
        {children}
        {readOnly !== true && (
          <ToolbarText
            show
            value={value}
            onChange={this.onChange}
            blockTypes={schema.nodes}
            toolbarActions={toolbarActions}
            toolbarMarks={toolbarMarks}
            toolbarTypes={toolbarTypes}
          />
        )}
        <Editor
          {...rest}
          value={value}
          className="slate-editor slate-writer"
          onDragEnter={e => this.ref.focus()}
          ref={r => (this.ref = r)}
          spellcheck={spellcheck || false}
          readOnly={false}
          onDrop={this.onDrop}
          onPaste={this.onPaste}
          plugins={readOnly ? emptyArray : plugins}
          renderNode={renderNode}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          placeholder={!readOnly && 'Hier Text eingeben...'}
          placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
          style={{ marginRight: 64, height: '100%', ...style }}
        />
        <BlockBar />
      </div>
    );
  };
}

export default useJsonState(getSchema(Writer));
