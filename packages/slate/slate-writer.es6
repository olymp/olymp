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

const plugins = [
  AutoMarkdown({ getMarkdownType }),
  TrailingBlock({ type: 'paragraph' }),
  InsertBlockOnEnter({ type: 'paragraph' }),
  LineToParagraph({ type: 'paragraph' }),
  NoParagraph({ type: 'paragraph' }),
  editList,
  { schema: { nodes, marks } },
];
class Writer extends Component {
  state = { focus: false };
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
    } else if (daeta.key === 'backspace') {
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
      const range = getEventRange(ev, change.state);
      return addBlock(
        change.state,
        schema.nodes[ev.text].slate,
        schema,
        null,
        null,
        change.select(ev)
      );
    }
  };

  onDrop = (ev, change) => {
    const { schema } = this.props;
    const type = ev.dataTransfer.getData('x-slatemate');
    if (type) {
      const range = getEventRange(ev, change.state);
      return addBlock(
        change.state,
        schema.nodes[type].slate,
        schema,
        null,
        null,
        change.select(range)
      );
    }
  };

  onChange = change => this.props.onChange(change.state);

  render = () => {
    const {
      children,
      readOnly,
      className,
      spellcheck,
      schema,
      ...rest
    } = this.props;
    const { focus } = this.state;
    const value = this.props.value || Plain.deserialize('');

    return (
      <div
        className={className}
        onDragEnter={() => this.setState({ focus: true })}
      >
        {children}
        {readOnly !== true && (
          <ToolbarText
            show={focus}
            state={value}
            onChange={this.onChange}
            blockTypes={schema.nodes}
            toolbarActions={toolbarActions}
            toolbarMarks={toolbarMarks}
            toolbarTypes={toolbarTypes}
          />
        )}
        <Editor
          {...rest}
          state={value}
          spellcheck={spellcheck || false}
          readOnly={!!readOnly}
          onDrop={this.onDrop}
          onPaste={this.onPaste}
          plugins={readOnly ? emptyArray : plugins}
          schema={schema}
          onChange={this.onChange}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          onKeyDown={this.onKeyDown}
          placeholder={!readOnly && 'Hier Text eingeben...'}
          placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
        />
      </div>
    );
  };
}

export default useJsonState(getSchema(Writer));
