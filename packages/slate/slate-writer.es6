import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withState } from 'recompose';
import { Editor, getEventRange } from 'slate-react';
import Plain from 'slate-plain-serializer';
import EditList from 'slate-edit-list';
import SoftBreak from 'slate-soft-break';
import PasteLinkify from 'slate-paste-linkify';
import AutoReplace from 'slate-auto-replace';
import CollapseOnEscape from 'slate-collapse-on-escape';
import InsertImages from 'slate-drop-or-paste-images';

import getSchema from './get-schema';
import useJsonState from './use-json-state';
import TrailingBlock from './plugins/trailing-block';
import InsertBlockOnEnter from './plugins/insert-block-on-enter';
import ToolbarText from './toolbar-text';
import BlockBar from './block-bar';
import addBlock from './add-block';
import marks from './defaults/marks';
import nodes from './defaults/nodes-selected';
import toolbarActions from './defaults/toolbar-actions';
import toolbarMarks from './defaults/toolbar-marks';
import toolbarTypes from './defaults/toolbar-types';
import Portal from './components/portal';

/* import AutoMarkdown from './plugins/auto-markdown';
import getMarkdownType from './defaults/markdown';
import NoParagraph from './plugins/no-paragraph';
import LineToParagraph from './plugins/line-to-paragraph'; */

const emptyArray = [];

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
  EditList({
    types: ['numbered-list', 'bulleted-list'],
    typeItem: 'list-item',
  }),
  SoftBreak({
    shift: true,
    // onlyIn: ['paragraph']
  }),
  PasteLinkify({
    type: 'link',
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(>)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'block-quote' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(\*)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'list-item' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(-)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'list-item' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(\+)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'list-item' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(#)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'heading-one' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(##)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'heading-two' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(###)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'heading-three' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(####)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'heading-four' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(#####)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'heading-five' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(######)$/,
    transform: (transform, e, matches) =>
      transform.setBlock({ type: 'heading-six' }),
  }),
  CollapseOnEscape(),
  InsertImages({
    extensions: ['png'],
    insertImage: (transform, file) => {
      return console.log('DROP', file);
      return transform.insertBlock({
        type: 'image',
        isVoid: true,
        data: { file },
      });
    },
  }),
  /* AutoMarkdown({ getMarkdownType }),
  LineToParagraph({ type: 'paragraph' }),
  NoParagraph({ type: 'paragraph' }),
  , */
  {
    renderNode,
    renderMark,
  },
];

@withState('isFull', 'setIsFull')
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
      full,
      isFull,
      setFull,
      setIsFull,
      ...rest
    } = this.props;
    const value = this.props.value || Plain.deserialize('');

    const inner = (
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
        <BlockBar full={full || isFull} setFull={full ? setFull : setIsFull} />
      </div>
    );
    if (full || isFull) {
      return <Portal hide>{inner}</Portal>;
    }
    return inner;
  };
}

export default useJsonState(getSchema(Writer));
