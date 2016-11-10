import React, { Component, PropTypes } from 'react';
import { withState, withSidebar, withToolbar, withAutoMarkdown, withUniqueId, useBlocks } from './editor-decorators';
import { Editor } from 'slate';
import './style.less';

const options = {
  defaultNode: 'paragraph',
  toolbarMarks: [
    { type: 'bold', icon: 'bold' },
    { type: 'italic', icon: 'italic' },
    { type: 'underlined', icon: 'underline' },
    { type: 'code', icon: 'code' },
  ],
  toolbarTypes: [
    { type: 'heading-one', icon: 'header' },
    { type: 'heading-two', icon: 'header' },
    { type: 'block-quote', icon: 'quote-left' },
    { type: 'numbered-list', icon: 'list-ol' },
    { type: 'bulleted-list', icon: 'list-ul' },
  ],
  sidebarTypes: [],
  nodes: {
    paragraph: ({ children }) => <p>{children}</p>,
    'block-quote': ({ children }) => <blockquote>{children}</blockquote>,
    'bulleted-list': ({ children }) => <ul>{children}</ul>,
    'numbered-list': ({ children, attributes }) => <ol {...attributes}>{children}</ol>,
    'heading-one': ({ children }) => <h1>{children}</h1>,
    'heading-two': ({ children }) => <h2>{children}</h2>,
    'heading-three': ({ children }) => <h3>{children}</h3>,
    'heading-four': ({ children }) => <h4>{children}</h4>,
    'heading-five': ({ children }) => <h5>{children}</h5>,
    'heading-six': ({ children }) => <h6>{children}</h6>,
    'bulleted-list-item': ({ children }) => <li>{children}</li>,
    'numbered-list-item': ({ children }) => <li>{children}</li>,
  },
  marks: {
    bold: ({ children }) => <strong>{children}</strong>,
    code: ({ children }) => <code>{children}</code>,
    italic: ({ children }) => <em>{children}</em>,
    underlined: ({ children }) => <u>{children}</u>,
  },
  getMarkdownType: (chars) => {
    switch (chars) {
      case '*':
      case '-':
      case '+': return 'bulleted-list-item';
      case '>': return 'block-quote';
      case '#': return 'heading-one';
      case '##': return 'heading-two';
      case '###': return 'heading-three';
      case '####': return 'heading-four';
      case '#####': return 'heading-five';
      case '######': return 'heading-six';
      case '1.': return 'numbered-list-item';
      default: return null;
    }
  },
};

@withUniqueId()
@withState({ terse: false })
@useBlocks(options)
@withAutoMarkdown(options)
@withToolbar(options)
@withSidebar(options)
export default class SlateEditor extends Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    children: PropTypes.node,
    value: PropTypes.object,
    onChange: PropTypes.func,
    marks: PropTypes.object,
    nodes: PropTypes.object,
    autoMarkDownKeyDown: PropTypes.func,
    plugins: PropTypes.array,
    className: PropTypes.string,
  }
  render = () => {
    const { children, value, onChange, readOnly, marks, nodes, plugins, className, spellcheck } = this.props;
    return (
      <div className={className} style={{position: 'relative'}}>
        {children}
        <Editor
          spellcheck={spellcheck || false}
          readOnly={readOnly}
          plugins={plugins}
          schema={{ marks, nodes }}
          state={value}
          onChange={onChange}
        />
      </div>
    );
  }
}
