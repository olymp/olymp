import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import {
  FaAlignCenter,
  FaCode,
  FaListUl,
  FaListOl,
  FaIndent,
  FaHeading,
  FaLink,
  FaBold,
  FaItalic,
  FaUnderline,
} from 'olymp-icons';
import EditList from 'slate-edit-list';
import { createComponent } from 'olymp-fela';
import { withSlateState, withAutoMarkdown, useBlocks } from './editor-decorators';
import { withBlockTypes } from './decorators';
import { getId } from './utils/get-text';
// import Paragrapher from './plugins/paragrapher';
import TrailingBlock from './plugins/trailing-block';
import LineToParagraph from './plugins/line-to-paragraph';
import InsertBlockOnEnter from './plugins/insert-block-on-enter';
import NoParagraph from './plugins/no-paragraph';
import './style.css';
// import ToolbarBlock from './toolbar-block';
import ToolbarText from './toolbar-text';
// import ToolbarVoid from './toolbar-void';
import addBlock from './utils/add-block';
import I from './icon';

const getIdByTag = (children) => {
  const id = getId(Children.map(children, x => x.props.node));
  return `${id}`;
};

const editList = EditList({
  types: ['numbered-list', 'bulleted-list'],
  typeItem: 'list-item',
});

const getOutlinedOnSelected = Wrapped =>
  createComponent(
    ({ isSelected, theme }) => ({
      outline: isSelected && `2px solid ${theme.color}`,
    }),
    p => <Wrapped {...p} />,
    p => Object.keys(p),
  );

const Center = createComponent(
  ({ isSelected, theme }) => ({
    textAlign: 'center',
  }),
  'div',
  p => Object.keys(p),
);

const emptyArray = [];
const options = {
  defaultNode: 'paragraph',
  toolbarMarks: [
    { type: 'bold', label: <I icon={FaBold} /> },
    { type: 'italic', label: <I icon={FaItalic} /> },
    { type: 'underlined', label: <I icon={FaUnderline} /> },
    // { type: 'center', label: <I icon={FaAlignCenter} /> },
    { type: 'code', label: <I icon={FaCode} /> },
  ],
  toolbarTypes: [
    {
      type: [
        'heading-one',
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
      ],
      label: <I icon={FaHeading} />,
      description: [
        'Überschrift 1',
        'Überschrift 2',
        'Überschrift 3',
        'Überschrift 4',
        'Überschrift 5',
        'Überschrift 6',
      ],
    },
    { type: 'block-quote', label: <I icon={FaIndent} /> },
    {
      type: 'numbered-list',
      label: <I icon={FaListOl} />,
      onClick: ({ state, onChange }) => {
        onChange(state.change().call(plugin.changes.wrapInList));
      },
    },
    {
      type: 'bulleted-list',
      label: <I icon={FaListUl} />,
      onClick: ({ state, onChange }) => {
        onChange(state.change().call(plugin.changes.wrapInList));
      },
    },
  ],
  toolbarActions: [
    {
      type: 'link', // ['link', 'link-page', 'link-media'],
      label: <I icon={FaLink} />,
      description: 'Link', // ['Extern', 'Intern', 'Datei'],
      onClick: ({ state, onChange }, isActive) => {
        if (isActive) {
          onChange(state.change().unwrapInline('link'));
        } else {
          let href = window.prompt('URL');
          if (href) {
            if (href.indexOf('http') !== 0 && href.indexOf('.') !== -1) {
              href = `http://${href}`;
            }
            onChange(
              state
                .change()
                .wrapInline({
                  type: 'link',
                  data: { href, target: '_blank' },
                })
                .collapseToEnd(),
            );
          }
        }
      },
      isActive: ({ state }) => state && state.inlines.some(inline => inline.type === 'link'),
    },
    {
      type: 'center',
      label: <I icon={FaAlignCenter} />,
      description: 'Center',
      onClick: ({ state, onChange }, isActive) => {
        if (isActive) {
          onChange(state.change().unwrapBlock('center'));
        } else {
          onChange(
            state
              .change()
              .wrapBlock({ type: 'center' })
              .collapseToEnd(),
          );
        }
      },
      isActive: ({ state }) => state && state.inlines.some(inline => inline.type === 'link'),
    },
  ],
  sidebarTypes: [],
  nodes: {
    center: getOutlinedOnSelected(({ children, attributes, className }) => (
      <center {...attributes} className={className}>
        {children}
      </center>
    )),
    paragraph: getOutlinedOnSelected(({ children, attributes, className }) => (
      <div {...attributes} className={className}>
        {children}
      </div>
    )),
    link: getOutlinedOnSelected(({ node, attributes, children, className }) => (
      <a
        {...attributes}
        href={node.data.get('href')}
        className={className}
        target={node.data.get('target')}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )),
    'block-quote': getOutlinedOnSelected(({ children, attributes, className }) => (
      <blockquote {...attributes} className={className}>
        {children}
      </blockquote>
    )),
    'bulleted-list': getOutlinedOnSelected(({ children, attributes, className }) => (
      <ul {...attributes} className={className}>
        {children}
      </ul>
    )),
    'numbered-list': getOutlinedOnSelected(({ children, attributes, className }) => (
      <ol {...attributes} className={className}>
        {children}
      </ol>
    )),
    'heading-one': getOutlinedOnSelected(({ children, attributes, className }) => (
      <h1 {...attributes} id={getIdByTag(children)} className={className}>
        {children}
      </h1>
    )),
    'heading-two': getOutlinedOnSelected(({ children, attributes, className }) => (
      <h2 {...attributes} id={getIdByTag(children)} className={className}>
        {children}
      </h2>
    )),
    'heading-three': getOutlinedOnSelected(({ children, attributes, className }) => (
      <h3 {...attributes} id={getIdByTag(children)} className={className}>
        {children}
      </h3>
    )),
    'heading-four': getOutlinedOnSelected(({ children, attributes, className }) => (
      <h4 {...attributes} id={getIdByTag(children)} className={className}>
        {children}
      </h4>
    )),
    'heading-five': getOutlinedOnSelected(({ children, attributes, className }) => (
      <h5 {...attributes} id={getIdByTag(children)} className={className}>
        {children}
      </h5>
    )),
    'heading-six': getOutlinedOnSelected(({ children, attributes, className }) => (
      <h6 {...attributes} id={getIdByTag(children)} className={className}>
        {children}
      </h6>
    )),
    'list-item': getOutlinedOnSelected(({ children, attributes, className }) => (
      <li {...attributes} className={className}>
        {children}
      </li>
    )),
    'bulleted-list-item': getOutlinedOnSelected(({ children, attributes, className }) => (
      <li {...attributes} className={className}>
        {children}
      </li>
    )),
    'numbered-list-item': getOutlinedOnSelected(({ children, attributes, className }) => (
      <li {...attributes} className={className}>
        {children}
      </li>
    )),
  },
  marks: {
    bold: ({ children, attributes }) => <strong {...attributes}>{children}</strong>,
    code: ({ children, attributes }) => <code {...attributes}>{children}</code>,
    italic: ({ children, attributes }) => <em {...attributes}>{children}</em>,
    underlined: ({ children, attributes }) => <u {...attributes}>{children}</u>,
    // center: ({ children, attributes }) => <center {...attributes}>{children}</center>,
  },
  getMarkdownType: (chars) => {
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
  },
};

const getTopMost = (blockTypes, change, prev) => {
  const next = prev ? change.state.document.getParent(prev.key) : change.state.startBlock;
  const nextType = next && next.type;
  const prevType = prev && prev.type;
  const isAtomic = nextType && blockTypes[nextType] && blockTypes[nextType].slate;
  if (!nextType || !isAtomic || (prevType && prevType.indexOf(nextType) !== 0)) {
    return prev;
  }
  return getTopMost(blockTypes, change, next);
};

class SlateEditor extends Component {
  plugins = [
    withAutoMarkdown(options),
    TrailingBlock({ type: 'paragraph' }),
    InsertBlockOnEnter({ type: 'paragraph' }),
    // Paragrapher({ type: 'paragraph' }),
    LineToParagraph({ type: 'paragraph' }),
    NoParagraph({ type: 'paragraph' }),
    editList,
  ];
  state = { focus: false };
  static propTypes = {
    readOnly: PropTypes.bool,
    showUndo: PropTypes.bool,
    children: PropTypes.node,
    value: PropTypes.object,
    onChange: PropTypes.func,
    marks: PropTypes.object,
    nodes: PropTypes.object,
    autoMarkDownKeyDown: PropTypes.func,
    plugins: PropTypes.array,
    className: PropTypes.string,
  };

  onKeyDown = (e, data, change) => {
    const blockType = getTopMost(this.props.blockTypes, change);
    if (e.shiftKey && data.key === 'enter') {
      return change.insertText('\n');
    } else if (data.key === 'backspace' && blockType) {
      // const prev = change.state.document.getPreviousBlock(blockType.key) || change.state.document;
      // return change.collapseToEndOf(prev).removeNodeByKey(blockType.key, { normalize: true });
    } else if (e.metaKey || e.ctrlKey) {
      // cmd/ctrl + ???
      switch (data.key) {
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

  onPaste = (ev, data, change, x) => {
    const { blockTypes } = this.props;
    if (data.text && blockTypes[data.text]) {
      return addBlock(
        change.state,
        blockTypes[data.text].slate,
        blockTypes,
        null,
        null,
        change.select(data.target),
      );
    }
  };

  onDrop = (ev, data, change, x) => {
    const { blockTypes } = this.props;
    const type = ev.dataTransfer.getData('x-slatemate');
    if (type) {
      return addBlock(
        change.state,
        blockTypes[type].slate,
        blockTypes,
        null,
        null,
        change.select(data.target),
      );
    }
  };

  onChange = change => this.props.onChange(change.state);

  render = () => {
    const {
      children,
      showUndo,
      readOnly,
      marks,
      nodes,
      plugins,
      className,
      spellcheck,
      style,
      blockTypes,
      ...rest
    } = this.props;
    const { focus } = this.state;
    const value = this.props.value || Plain.deserialize('');

    return (
      <div
        className={className}
        onDragEnter={() => this.setState({ focus: true })}
        style={{ position: 'relative', ...style }}
      >
        {children}
        {/* readOnly !== true && (
          <ToolbarBlock
            show={focus}
            state={value}
            blockTypes={blockTypes}
            onChange={this.onChange}
          />
        )}
        {readOnly !== true && (
          <ToolbarVoid
            show={focus}
            state={value}
            blockTypes={blockTypes}
            onChange={this.onChange}
          />
        ) */}
        {readOnly !== true && (
          <ToolbarText
            show={focus}
            state={value}
            onChange={this.onChange}
            blockTypes={blockTypes}
            {...options}
          />
        )}
        <Editor
          {...rest}
          state={value}
          spellcheck={spellcheck || false}
          readOnly={!!readOnly}
          onDrop={this.onDrop}
          onPaste={this.onPaste}
          plugins={readOnly ? emptyArray : this.plugins}
          schema={{ marks, nodes }}
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

export const SlateMate = withBlockTypes(withSlateState()(useBlocks(options)(SlateEditor)));
export const StatelessSlateMate = withBlockTypes(useBlocks(options)(SlateEditor));
