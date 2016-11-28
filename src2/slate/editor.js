import React, { Component, PropTypes } from 'react';
import { withState, withSidebar, withToolbar, withAutoMarkdown, withUniqueId, useBlocks } from './editor-decorators';
import { Editor, Html, Plain } from 'slate';
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
    paragraph: ({ children, attributes }) => <p {...attributes}>{children}</p>,
    'block-quote': ({ children, attributes }) => <blockquote {...attributes}>{children}</blockquote>,
    'bulleted-list': ({ children, attributes }) => <ul {...attributes}>{children}</ul>,
    'numbered-list': ({ children, attributes }) => <ol {...attributes}>{children}</ol>,
    'heading-one': ({ children, attributes }) => <h1 {...attributes}>{children}</h1>,
    'heading-two': ({ children, attributes }) => <h2 {...attributes}>{children}</h2>,
    'heading-three': ({ children, attributes }) => <h3 {...attributes}>{children}</h3>,
    'heading-four': ({ children, attributes }) => <h4 {...attributes}>{children}</h4>,
    'heading-five': ({ children, attributes }) => <h5 {...attributes}>{children}</h5>,
    'heading-six': ({ children, attributes }) => <h6 {...attributes}>{children}</h6>,
    'bulleted-list-item': ({ children, attributes }) => <li {...attributes}>{children}</li>,
    'numbered-list-item': ({ children, attributes }) => <li {...attributes}>{children}</li>,
  },
  marks: {
    bold: ({ children, attributes }) => <strong {...attributes}>{children}</strong>,
    code: ({ children, attributes }) => <code {...attributes}>{children}</code>,
    italic: ({ children, attributes }) => <em {...attributes}>{children}</em>,
    underlined: ({ children, attributes }) => <u {...attributes}>{children}</u>,
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

const rules = [
  {
    serialize(obj, children) {
      if (obj.kind == 'block' && options.nodes[obj.type]) {
        return options.nodes[obj.type]({ children, attributes: {} });
      }
      if (obj.kind == 'block') {
        return <div data-type={obj.type}>{children}</div>;
      }
      if (obj.kind == 'inline' && obj.type == 'link') {
        return <a>{children}</a>;
      }
    },
  },
  {
    deserialize(el, next) {
      const block = options.nodes[el.tagName]
      if (!block) return
      return {
        kind: 'block',
        type: block,
        nodes: next(el.children)
      }
    }
  },
  {
    deserialize(el, next) {
      const mark = options.marks[el.tagName]
      if (!mark) return
      return {
        kind: 'mark',
        type: mark,
        nodes: next(el.children)
      }
    }
  },
  {
    // Special case for code blocks, which need to grab the nested children.
    deserialize(el, next) {
      if (el.tagName != 'pre') return
      const code = el.children[0]
      const children = code && code.tagName == 'code'
        ? code.children
        : el.children

      return {
        kind: 'block',
        type: 'code',
        nodes: next(children)
      }
    }
  },
  {
    // Special case for links, to grab their href.
    deserialize(el, next) {
      if (el.tagName != 'a') return
      return {
        kind: 'inline',
        type: 'link',
        nodes: next(el.children),
        data: {
          href: el.attribs.href
        }
      }
    }
  }
]

const html = new Html({
  rules,
});

@withUniqueId()
@withState({ terse: true })
@useBlocks(options)
@withAutoMarkdown(options)
@withToolbar(options)
@withSidebar(options)
export default class SlateEditor extends Component {
  state = {};
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
  keyup = event => {
    return;
    if (event.keyCode === 65 && event.ctrlKey) {
      this.setState({
        mode: Plain.deserialize(html.serialize(this.props.value, { terse: true }), { terse: true }),
      });
        // ctrl+a was typed.
    }
  }
  render = () => {
    const { children, value, onChange, readOnly, marks, nodes, plugins, className, spellcheck } = this.props;
    return (
      <div className={className} style={{ position: 'relative' }} onKeyUp={this.keyup}>
        {children}
        {this.state.mode ? <Editor
          spellcheck={spellcheck || false}
          readOnly={readOnly}
          state={this.state.mode}
          onChange={mode => this.setState({ mode })}
        /> : <Editor
          spellcheck={spellcheck || false}
          readOnly={readOnly}
          plugins={plugins}
          schema={{ marks, nodes }}
          state={value}
          onChange={onChange}
        />}
      </div>
    );
  }
}
