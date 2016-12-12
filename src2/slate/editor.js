import React, { Component, PropTypes } from 'react';
import { withState, withSidebar, withToolbar, withAutoMarkdown, withUniqueId, useBlocks } from './editor-decorators';
import { Button } from 'antd';
import { Editor, Html } from 'slate';
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
    { type: ['heading-one', 'heading-two', 'heading-three', 'heading-four', 'heading-five', 'heading-six'], icon: 'header', description: ['Überschrift 1', 'Überschrift 2', 'Überschrift 3', 'Überschrift 4', 'Überschrift 5', 'Überschrift 6'] },
    { type: 'block-quote', icon: 'quote-left' },
    { type: 'numbered-list', icon: 'list-ol' },
    { type: 'bulleted-list', icon: 'list-ul' },
  ],
  toolbarActions: [
    {
      type: ['link', 'link-page', 'link-media'],
      icon: 'link',
      description: ['Extern', 'Intern', 'Datei'],
      onClick: ({ value, onChange }, isActive) => {
        if (isActive) {
          value = value
            .transform()
            .unwrapInline('link')
            .apply();
        } else {
          let href = window.prompt('URL');
          if (href.indexOf('http') !== 0 && href.indexOf('.') !== -1) href = `http://${href}`;
          value = value
            .transform()
            .wrapInline({
              type: 'link',
              data: { href, target: '_blank' },
            })
            .collapseToEnd()
            .apply();
        }
        onChange(value);
      },
      isActive: ({ value }) => {
        return value.inlines.some(inline => inline.type === 'link');
      },
    },
  ],
  sidebarTypes: [],
  nodes: {
    paragraph: ({ children, attributes }) => <p {...attributes}>{children}</p>,
    link: ({ node, attributes, children }) => <a {...attributes} href={node.data.get('href')} target={node.data.get('target')} rel="noopener noreferrer">{children}</a>,
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
  rules: [],
};

const serializer = new Html({
  rules: [{
    deserialize: (el, next) => ({
      kind: 'block',
      type: 'paragraph',
      nodes: next(el.children),
    }),
  }],
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
    showUndo: PropTypes.bool,
    children: PropTypes.node,
    value: PropTypes.object,
    onChange: PropTypes.func,
    marks: PropTypes.object,
    nodes: PropTypes.object,
    autoMarkDownKeyDown: PropTypes.func,
    plugins: PropTypes.array,
    className: PropTypes.string,
  }

  onPaste = (e, data, state) => {
    return;
    /* if (data.type !== 'html') return;
    if (data.isShift) return;

    const { document } = serializer.deserialize(data.html);

    return state
      .transform()
      .insertFragment(document)
      .apply(); */
  }

  onKeyDown = (e, data, state) => {
    if (e.shiftKey && data.key === 'enter') {
      // shift + enter
      return state
        .transform()
        .insertText('\n')
        .apply();
    } else if (e.metaKey || e.ctrlKey) {
      // cmd/ctrl + ???
      switch (data.key) {
        case 'b':
          return state
            .transform()
            .toggleMark('bold')
            .apply();

        case 'u':
          return state
            .transform()
            .toggleMark('underlined')
            .apply();

        case 'i':
          return state
            .transform()
            .toggleMark('italic')
            .apply();

        default:
          return;
      }
    }

    return;
  }

  render = () => {
    const { children, showUndo, value, onChange, readOnly, marks, nodes, plugins, className, spellcheck, ...rest } = this.props;

    return (
      <div className={className} style={{ position: 'relative' }}>
        {value && showUndo && value.hasUndos && (
          <Button type="default" shape="circle" onClick={() => onChange(value.transform().undo().apply())} style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 1 }}>
            <i className="fa fa-undo" />
          </Button>
        )}
        {children}
        {this.state.mode ? <Editor
          {...rest}
          spellcheck={spellcheck || false}
          readOnly={readOnly}
          state={this.state.mode}
          onChange={mode => this.setState({ mode })}
          onPaste={this.onPaste}
          onKeyDown={this.onKeyDown}
        /> : <Editor
          {...rest}
          spellcheck={spellcheck || false}
          readOnly={readOnly}
          plugins={plugins}
          schema={{ marks, nodes }}
          state={value}
          onChange={onChange}
          onPaste={this.onPaste}
          onKeyDown={this.onKeyDown}
        />}
      </div>
    );
  }
}
