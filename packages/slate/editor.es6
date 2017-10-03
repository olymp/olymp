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
import { withSlateState, withAutoMarkdown, useBlocks } from './editor-decorators';
import { withBlockTypes } from './decorators';
import { getId } from './utils/get-text';
import Paragrapher from './plugins/paragrapher';
import TrailingBlock from './plugins/trailing-block';
import LineToParagraph from './plugins/line-to-paragraph';
import InsertBlockOnEnter from './plugins/insert-block-on-enter';
import NoParagraph from './plugins/no-paragraph';
import './style.css';
import ToolbarBlock from './toolbar-block';
import ToolbarText from './toolbar-text';
import ToolbarVoid from './toolbar-void';
import I from './icon';

const getIdByTag = (children) => {
  const id = getId(Children.map(children, x => x.props.node));
  return `${id}`;
};

const emptyArray = [];
const options = {
  defaultNode: 'paragraph',
  toolbarMarks: [
    { type: 'bold', label: <I icon={FaBold} /> },
    { type: 'italic', label: <I icon={FaItalic} /> },
    { type: 'underlined', label: <I icon={FaUnderline} /> },
    { type: 'center', label: <I icon={FaAlignCenter} /> },
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
    { type: 'numbered-list', label: <I icon={FaListOl} /> },
    { type: 'bulleted-list', label: <I icon={FaListUl} /> },
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
  ],
  sidebarTypes: [],
  nodes: {
    paragraph: ({ children, attributes }) => <div {...attributes}>{children}</div>,
    link: ({ node, attributes, children }) => (
      <a
        {...attributes}
        href={node.data.get('href')}
        target={node.data.get('target')}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    'block-quote': ({ children, attributes }) => (
      <blockquote {...attributes}>{children}</blockquote>
    ),
    'bulleted-list': ({ children, attributes }) => <ul {...attributes}>{children}</ul>,
    'numbered-list': ({ children, attributes }) => <ol {...attributes}>{children}</ol>,
    'heading-one': ({ children, attributes }) => (
      <h1 {...attributes} id={getIdByTag(children)}>
        {children}
      </h1>
    ),
    'heading-two': ({ children, attributes }) => (
      <h2 {...attributes} id={getIdByTag(children)}>
        {children}
      </h2>
    ),
    'heading-three': ({ children, attributes }) => (
      <h3 {...attributes} id={getIdByTag(children)}>
        {children}
      </h3>
    ),
    'heading-four': ({ children, attributes }) => (
      <h4 {...attributes} id={getIdByTag(children)}>
        {children}
      </h4>
    ),
    'heading-five': ({ children, attributes }) => (
      <h5 {...attributes} id={getIdByTag(children)}>
        {children}
      </h5>
    ),
    'heading-six': ({ children, attributes }) => (
      <h6 {...attributes} id={getIdByTag(children)}>
        {children}
      </h6>
    ),
    'bulleted-list-item': ({ children, attributes }) => <li {...attributes}>{children}</li>,
    'numbered-list-item': ({ children, attributes }) => <li {...attributes}>{children}</li>,
  },
  marks: {
    bold: ({ children, attributes }) => <strong {...attributes}>{children}</strong>,
    code: ({ children, attributes }) => <code {...attributes}>{children}</code>,
    italic: ({ children, attributes }) => <em {...attributes}>{children}</em>,
    underlined: ({ children, attributes }) => <u {...attributes}>{children}</u>,
    center: ({ children, attributes }) => <center {...attributes}>{children}</center>,
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
      <div className={className} style={{ position: 'relative', ...style }}>
        {children}
        {readOnly !== true && (
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
        )}
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
