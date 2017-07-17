import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Editor from 'slate/lib/components/editor';
import { withSlateState, useBlocks } from './editor-decorators';
import { withBlockTypes } from './decorators';
import { getId } from './utils/get-text';

const getIdByTag = (children) => {
  const id = getId(Children.map(children, x => x.props.node));
  return `${id}`;
};

const options = {
  defaultNode: 'paragraph',
  nodes: {
    paragraph: ({ children, attributes }) =>
      (<p {...attributes}>
        {children}
      </p>),
    link: ({ node, attributes, children }) =>
      (<a
        {...attributes}
        href={node.data.get('href')}
        target={node.data.get('target')}
        rel="noopener noreferrer"
      >
        {children}
      </a>),
    'block-quote': ({ children, attributes }) =>
      (<blockquote {...attributes}>
        {children}
      </blockquote>),
    'bulleted-list': ({ children, attributes }) =>
      (<ul {...attributes}>
        {children}
      </ul>),
    'numbered-list': ({ children, attributes }) =>
      (<ol {...attributes}>
        {children}
      </ol>),
    'heading-one': ({ children, attributes }) =>
      (<h1 {...attributes} id={getIdByTag(children)}>
        {children}
      </h1>),
    'heading-two': ({ children, attributes }) =>
      (<h2 {...attributes} id={getIdByTag(children)}>
        {children}
      </h2>),
    'heading-three': ({ children, attributes }) =>
      (<h3 {...attributes} id={getIdByTag(children)}>
        {children}
      </h3>),
    'heading-four': ({ children, attributes }) =>
      (<h4 {...attributes} id={getIdByTag(children)}>
        {children}
      </h4>),
    'heading-five': ({ children, attributes }) =>
      (<h5 {...attributes} id={getIdByTag(children)}>
        {children}
      </h5>),
    'heading-six': ({ children, attributes }) =>
      (<h6 {...attributes} id={getIdByTag(children)}>
        {children}
      </h6>),
    'bulleted-list-item': ({ children, attributes }) =>
      (<li {...attributes}>
        {children}
      </li>),
    'numbered-list-item': ({ children, attributes }) =>
      (<li {...attributes}>
        {children}
      </li>),
  },
  marks: {
    bold: ({ children, attributes }) =>
      (<strong {...attributes}>
        {children}
      </strong>),
    code: ({ children, attributes }) =>
      (<code {...attributes}>
        {children}
      </code>),
    italic: ({ children, attributes }) =>
      (<em {...attributes}>
        {children}
      </em>),
    underlined: ({ children, attributes }) =>
      (<u {...attributes}>
        {children}
      </u>),
    center: ({ children, attributes }) =>
      (<center {...attributes}>
        {children}
      </center>),
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

@withBlockTypes
@withSlateState({ terse: true })
@useBlocks(options)
export default // @withToolbar(options)
// @withSidebar(options)
class SlateEditor extends Component {
  plugins = [];
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

  render = () => {
    const {
      children,
      showUndo,
      onChange,
      readOnly,
      marks,
      nodes,
      plugins,
      className,
      value,
      spellcheck,
      style,
      blockTypes,
      ...rest
    } = this.props;

    if (!value) {
      return null;
    }
    return (
      <div className={className} style={{ position: 'relative', ...style }}>
        {children}
        <Editor
          {...rest}
          state={value}
          spellcheck={spellcheck || false}
          readOnly
          plugins={this.plugins}
          schema={{ marks, nodes }}
          onChange={onChange}
          onPaste={this.onPaste}
          onKeyDown={this.onKeyDown}
          placeholder={!readOnly && 'Hier Text eingeben...'}
          placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
        />
      </div>
    );
  };
}
