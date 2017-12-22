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

const emptyArray = [];
const getType = type => {
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

const renderNode = props => {
  const X = nodes[props.node.type];
  if (X) {
    return <X {...props} />;
  }
  return (
    <div {...props.attributes}>
      <b
        contentEditable={false}
        onClick={() => {
          console.log(
            '213',
            props.node,
            props.node.type,
            getType(props.node.type),
          );
          props.editor.onChange(
            props.editor.value
              .change()
              .setNodeByKey(props.node.key, getType(props.node.type)),
          );
        }}
      >
        Not found: {props.node.type}
      </b>
      {props.children}
    </div>
  );
};

const renderMark = props => {
  const X = marks[props.mark.type];
  if (X) {
    return <X {...props} />;
  }
  return null;
};

const enhance = compose(
  withState('isFull', 'setIsFull'),
  withState('isCode', 'setIsCode'),
  useJsonState,
  getSchema,
  withPropsOnChange('plugins', ({ plugins = [] }) => ({
    plugins: [
      ...plugins,
      HeadingId({}),
      /* EditTable({
        typeTable: 'table',
        typeRow: 'tableRow',
        typeCell: 'tableCell',
        exitBlockType: 'paragraph',
      }), */
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
      EditBlockquote(),
      /*
      LineToParagraph({ type: 'paragraph' }),
      NoParagraph({ type: 'paragraph' }),
      */
      {
        renderNode,
        renderMark,
      },
    ],
  })),
);

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
    if (e.key === 'Enter') {
      const { value } = change;
      const { document, startKey, startBlock } = value;
      if (
        !startBlock ||
        startBlock.type === 'list-item' ||
        startBlock.type === 'code' ||
        startBlock.type === 'code-line' ||
        startBlock.type === 'paragraph'
      ) {
        return undefined;
      } else if (startBlock && !startBlock.isVoid) {
        return change
          .collapseToEndOf(startBlock)
          .insertBlock(Block.create({ type: 'paragraph' }))
          .collapseToEnd();
      } else if (startBlock && startBlock.isVoid) {
        const nextBlock = document.getNextBlock(startKey);
        const prevBlock = document.getPreviousBlock(startKey);
        const isFocusedStart = value.selection.hasEdgeAtStartOf(startBlock);
        const isFocusedEnd = value.selection.hasEdgeAtEndOf(startBlock);
        const blockToInsert = Block.create({ type: 'paragraph' });

        // Void block at the end of the document
        if (!nextBlock) {
          if (isFocusedEnd) {
            return change
              .collapseToEndOf(startBlock)
              .insertBlock(blockToInsert)
              .collapseToEnd();
          }
          if (prevBlock) {
            const index = document.nodes.indexOf(prevBlock);
            return change
              .collapseToEndOf(prevBlock)
              .insertNodeByKey(document.key, index + 1, blockToInsert)
              .collapseToStartOf(startBlock);
          }
          return change
            .collapseToStartOf(startBlock)
            .insertNodeByKey(document.key, 0, blockToInsert);
        }
        // Void block between two blocks
        if (nextBlock && prevBlock) {
          if (isFocusedStart) {
            const index = document.nodes.indexOf(prevBlock);
            return change
              .collapseToEndOf(prevBlock)
              .insertNodeByKey(document.key, index + 1, blockToInsert)
              .collapseToStartOf(startBlock);
          }
          // NOe rart skjer her
          return change.collapseToEndOf(startBlock).insertBlock(blockToInsert);
        }
        // Void block in the beginning of the document
        if (nextBlock && !prevBlock) {
          if (isFocusedStart) {
            return change
              .collapseToStartOf(startBlock)
              .insertNodeByKey(document.key, 0, blockToInsert);
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
    console.log(ev, ev.dataTransfer.files);
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
      schema = {},
      menu,
      plugins,
      style = {},
      full,
      isCode,
      setIsCode,
      setFull,
      isFull,
      setIsFull,
      ...rest
    } = this.props;
    const value = this.props.value || Plain.deserialize('');

    const editor = isCode ? (
      <Pug
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
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        placeholder={!readOnly && 'Hier Text eingeben...'}
        placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
        style={{ height: '100%', ...style }}
      />
    ) : (
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
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        placeholder={!readOnly && 'Hier Text eingeben...'}
        placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
        style={{ height: '100%', ...style }}
      />
    );
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
        {editor}
        <BlockBar
          full={full || isFull}
          setFull={full ? setFull : setIsFull}
          code={isCode}
          setCode={setIsCode}
        >
          {menu}
        </BlockBar>
      </div>
    );
    if (full || isFull) {
      return (
        <Portal noScroll>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              minHeight: '100%',
              zIndex: 100,
              backgroundColor: 'white',
              width: '100%',
            }}
          >
            {inner}
          </div>
        </Portal>
      );
    }
    return inner;
  };
}

export default enhance(Writer);
